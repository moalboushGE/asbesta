import type { APIRoute } from 'astro';

// Kontaktformular-Endpunkt (on-demand, laeuft im Node-Server / Railway).
// ENV (Railway -> Variables): BREVO_API_KEY (Pflicht), CONTACT_TO (optional).
// Empfaenger ist standardmaessig info@asbesta-schadstoffsanierung.de (per CONTACT_TO ueberschreibbar).
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

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Ungueltige Anfrage.' }, 400);
  }
  const get: Get = (key) => String(form.get(key) ?? '').trim();

  const spam = spamCheck(get);
  if (spam === 'honeypot') return json({ ok: true });
  if (spam) return json({ ok: false, error: 'Bitte erneut versuchen.' }, 400);

  const typ = get('typ') || 'anfrage';
  if (pflichtfelderFehlen(get, typ)) {
    return json({ ok: false, error: 'Bitte Pflichtfelder ausfuellen und Einwilligung erteilen.' }, 400);
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return json({ ok: false, error: 'Server nicht konfiguriert.' }, 500);

  const to = process.env.CONTACT_TO?.trim() || DEFAULT_TO;
  const ok = await sendBrevo(apiKey, buildBody(get, typ, to));
  if (!ok) return json({ ok: false, error: 'Versand fehlgeschlagen.' }, 502);

  // Anonymer Lead-Zaehler (KEINE personenbezogenen Felder) -> Anfragen/Woche in den Railway-Logs.
  console.log(
    JSON.stringify({
      evt: 'lead_submitted',
      ts: Date.now(),
      typ,
      dienstleistung: get('dienstleistung') || null,
      quelle: get('utm_source') || get('referrer') || 'direkt',
    }),
  );

  return json({ ok: true });
};
