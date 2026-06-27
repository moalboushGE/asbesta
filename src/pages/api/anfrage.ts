import type { APIRoute } from 'astro';
import { createLead, setMailStatus } from '../../lib/leads';
import type { NewLead } from '../../lib/leads';
import { hashIp } from '../../lib/admin-auth';

// Kontaktformular-Endpunkt (on-demand, laeuft im Node-Server / Railway).
// Persistiert jede Anfrage in Postgres (Dashboard) UND verschickt eine Brevo-Mail.
// ENV (Railway -> Variables): DATABASE_URL (Pflicht fuer Speicherung), BREVO_API_KEY, CONTACT_TO (optional).
export const prerender = false;

type Get = (key: string) => string;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

const SPAM_MIN_MS = 3000;
const CORE = ['name', 'telefon', 'email', 'ort', 'dienstleistung', 'wunschzeit', 'nachricht'];
const META = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'landingpage', 'referrer'];
const DEFAULT_TO = 'info@asbesta-schadstoffsanierung.de';
// Absenderadresse – muss in Brevo als Sender/Domain verifiziert sein (SPF/DKIM).
const FROM_EMAIL = 'anfrage@asbesta-schadstoffsanierung.de';
const FROM_NAME = 'Asbesta Website';
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

// Einfaches In-Memory-Rate-Limit pro IP-Hash (lang laufender Node-Server): bremst Abuse/DoS,
// grosszuegig genug fuer echte Mehrfach-Anfragen. Single-Instance-Scope (Railway).
const RATE_MAX = 12;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const rateHits = new Map<string, number[]>();
function rateLimited(ipHash: string): boolean {
  if (!ipHash) return false;
  const now = Date.now();
  const hits = (rateHits.get(ipHash) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  rateHits.set(ipHash, hits);
  if (rateHits.size > 5000) {
    for (const [k, v] of rateHits) if (!v.some((t) => now - t < RATE_WINDOW_MS)) rateHits.delete(k);
  }
  return hits.length > RATE_MAX;
}

/** 'honeypot' (still als ok behandeln), 'spam' (Zeitfalle) oder null. */
function spamCheck(get: Get): string | null {
  if (get('website')) return 'honeypot';
  const ts = Number(get('ts'));
  if (ts && Date.now() - ts < SPAM_MIN_MS) return 'spam';
  return null;
}

/** Pflichtfelder je Formulartyp; 'rueckruf' = nur Name + Telefon. */
function pflichtfelderFehlen(get: Get, typ: string): boolean {
  if (get('einwilligung') !== 'ja') return true;
  return typ === 'rueckruf'
    ? !get('name') || !get('telefon')
    : !get('name') || !get('email') || !get('nachricht');
}

// Einfache, robuste Format-Pruefung (zusaetzlich zur Pflichtfeld-Pruefung): verhindert kaputte
// Reply-To-Adressen und Datenmuell in der Lead-DB. Telefon nur grob (>= 6 Ziffern) – formattolerant.
function istGueltigeEmail(s: string): boolean {
  // Bewusst ohne backtracking-anfaellige Regex (ReDoS-sicher): Laenge, genau ein @, Domain mit Punkt.
  if (s.length > 254 || s.indexOf(' ') !== -1) return false;
  const at = s.indexOf('@');
  if (at < 1 || s.indexOf('@', at + 1) !== -1) return false;
  const domain = s.slice(at + 1);
  const dot = domain.lastIndexOf('.');
  return dot > 0 && dot < domain.length - 1;
}
function formatFehler(get: Get): string | null {
  const email = get('email');
  if (email && !istGueltigeEmail(email)) return 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  const telefon = get('telefon');
  if (telefon && telefon.replace(/\D/g, '').length < 6) return 'Bitte geben Sie eine gültige Telefonnummer an.';
  return null;
}

function buildBody(get: Get, typ: string, to: string): Record<string, unknown> {
  const coreLines = CORE.filter((f) => get(f)).map((f) => `${f}: ${get(f)}`);
  const metaLines = META.filter((f) => get(f)).map((f) => `${f}: ${get(f)}`);
  const text = [
    `Typ: ${typ}`,
    ...coreLines,
    ...(metaLines.length ? ['', '— Quelle —', ...metaLines] : []),
  ].join('\n');
  const betreff = typ === 'rueckruf' ? 'Rückruf-Wunsch' : 'Neue Anfrage';
  const body: Record<string, unknown> = {
    sender: { name: FROM_NAME, email: FROM_EMAIL },
    to: [{ email: to }],
    subject: `${betreff} von ${get('name')}${get('ort') ? ' aus ' + get('ort') : ''}`,
    textContent: text,
  };
  const email = get('email');
  if (email) body.replyTo = { email, name: get('name') };
  return body;
}

async function sendBrevo(apiKey: string, body: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(BREVO_URL, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function clientIp(request: Request): string {
  return (request.headers.get('x-forwarded-for') ?? '').split(',')[0]?.trim() ?? '';
}

const leer = (x: string): string | null => x || null;

function quelleKanal(get: Get): string {
  return get('utm_source') || get('referrer') || 'direkt';
}

function empfaenger(): string {
  return process.env.CONTACT_TO?.trim() || DEFAULT_TO;
}

/** FormData -> persistierbarer Lead. Leere Felder werden zu null. */
function buildLead(get: Get, typ: string, istSpam: boolean, request: Request): NewLead {
  return {
    typ,
    name: leer(get('name')),
    telefon: leer(get('telefon')),
    email: leer(get('email')),
    ort: leer(get('ort')),
    dienstleistung: leer(get('dienstleistung')),
    wunschzeit: leer(get('wunschzeit')),
    nachricht: leer(get('nachricht')),
    einwilligung: get('einwilligung') === 'ja',
    utm_source: leer(get('utm_source')),
    utm_medium: leer(get('utm_medium')),
    utm_campaign: leer(get('utm_campaign')),
    gclid: leer(get('gclid')),
    landingpage: leer(get('landingpage')),
    referrer: leer(get('referrer')),
    quelle_kanal: quelleKanal(get),
    ist_spam: istSpam,
    spam_grund: istSpam ? 'zeitfalle' : null,
    ip_hash: leer(hashIp(clientIp(request))),
    // User-Agent wird bewusst NICHT gespeichert (Datenminimierung – wird fachlich nicht gebraucht).
    user_agent: null,
  };
}

function mailFehler(mailOk: boolean, istSpam: boolean, hatKey: boolean): string | null {
  if (mailOk) return null;
  if (istSpam) return 'spam_kein_versand';
  return hatKey ? 'brevo_failed' : 'brevo_unkonfiguriert';
}

export const POST: APIRoute = async ({ request }) => {
  if (rateLimited(hashIp(clientIp(request)))) {
    return json(
      { ok: false, error: 'Zu viele Anfragen in kurzer Zeit. Bitte später erneut versuchen oder rufen Sie uns an: +49 2365 2960630.' },
      429,
    );
  }
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Ungueltige Anfrage.' }, 400);
  }
  const get: Get = (key) => String(form.get(key) ?? '').trim();

  const spam = spamCheck(get);
  if (spam === 'honeypot') return json({ ok: true }); // klares Bot-Signal: still verwerfen

  const typ = get('typ') || 'anfrage';
  if (pflichtfelderFehlen(get, typ)) {
    return json({ ok: false, error: 'Bitte Pflichtfelder ausfuellen und Einwilligung erteilen.' }, 400);
  }
  const formatErr = formatFehler(get);
  if (formatErr) {
    return json({ ok: false, error: formatErr }, 400);
  }

  // Zeitfalle: speichern (echte Kunden nicht verlieren), als Spam markieren, NICHT mailen.
  const istSpam = spam === 'spam';

  // 1) Lead zuerst sichern – darf nicht an einem DB-/Mail-Fehler sterben.
  let id: string | null = null;
  try {
    id = await createLead(buildLead(get, typ, istSpam, request));
  } catch (e) {
    console.error('lead_persist_failed', e);
  }

  // 2) Mail best-effort (nur echte Anfragen, nur wenn Brevo konfiguriert).
  let mailOk = false;
  const apiKey = process.env.BREVO_API_KEY;
  if (!istSpam && apiKey) {
    mailOk = await sendBrevo(apiKey, buildBody(get, typ, empfaenger()));
  }
  if (id) setMailStatus(id, mailOk, mailFehler(mailOk, istSpam, Boolean(apiKey))).catch(() => undefined);

  // 3) Anonymer Lead-Zaehler (KEINE personenbezogenen Felder) -> Anfragen/Woche in den Railway-Logs.
  console.log(
    JSON.stringify({
      evt: 'lead_submitted',
      ts: Date.now(),
      typ,
      dienstleistung: leer(get('dienstleistung')),
      quelle: quelleKanal(get),
    }),
  );

  if (istSpam) return json({ ok: true }); // nach aussen kein Hinweis auf die Spam-Erkennung
  if (!id && !mailOk) return json({ ok: false, error: 'Versand fehlgeschlagen.' }, 502);
  return json({ ok: true }); // Lead sicher, sobald DB ODER Mail griff
};
