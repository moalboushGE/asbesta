// Cloudflare Pages Function: nimmt das Kontaktformular entgegen und versendet per Brevo.
// Wird von Cloudflare Pages automatisch unter /api/anfrage deployt (laeuft NICHT im lokalen Astro-Build).
// ENV-Secrets (im Cloudflare-Dashboard setzen): BREVO_API_KEY (Pflicht), CONTACT_TO (optional).
// Empfaenger ist standardmaessig info@asbesta-schadstoffsanierung.de (per CONTACT_TO ueberschreibbar).

interface Env {
  BREVO_API_KEY: string;
  CONTACT_TO?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

const SPAM_MIN_MS = 3000;
const FIELDS = ['name', 'telefon', 'email', 'ort', 'dienstleistung', 'nachricht'];
const DEFAULT_TO = 'info@asbesta-schadstoffsanierung.de';
// Absenderadresse – muss in Brevo als Sender/Domain verifiziert sein (SPF/DKIM).
const FROM_EMAIL = 'anfrage@asbesta-schadstoffsanierung.de';
const FROM_NAME = 'Asbesta Website';

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Ungueltige Anfrage.' }, 400);
  }

  const get = (key: string): string => String(form.get(key) ?? '').trim();

  // Anti-Spam: Honeypot (unsichtbares Feld) + Zeitfalle
  if (get('website')) return json({ ok: true });
  const ts = Number(get('ts'));
  if (ts && Date.now() - ts < SPAM_MIN_MS) {
    return json({ ok: false, error: 'Bitte erneut versuchen.' }, 400);
  }

  // Pflichtfelder + Einwilligung
  if (!get('name') || !get('email') || !get('nachricht') || get('einwilligung') !== 'ja') {
    return json({ ok: false, error: 'Bitte Pflichtfelder ausfuellen und Einwilligung erteilen.' }, 400);
  }

  if (!env.BREVO_API_KEY) {
    return json({ ok: false, error: 'Server nicht konfiguriert.' }, 500);
  }

  const to = env.CONTACT_TO?.trim() || DEFAULT_TO;
  const text = FIELDS.map((f) => `${f}: ${get(f)}`).join('\n');

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': env.BREVO_API_KEY,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: to }],
      replyTo: { email: get('email'), name: get('name') },
      subject: `Neue Anfrage von ${get('name')}${get('ort') ? ' aus ' + get('ort') : ''}`,
      textContent: text,
    }),
  });

  if (!res.ok) return json({ ok: false, error: 'Versand fehlgeschlagen.' }, 502);
  return json({ ok: true });
};
