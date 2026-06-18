import type { APIRoute } from 'astro';

// Kontaktformular-Endpunkt (on-demand, laeuft im Node-Server / Railway).
// ENV (Railway -> Variables): BREVO_API_KEY (Pflicht), CONTACT_TO (optional).
// Empfaenger ist standardmaessig info@asbesta-schadstoffsanierung.de (per CONTACT_TO ueberschreibbar).
export const prerender = false;

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

export const POST: APIRoute = async ({ request }) => {
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

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return json({ ok: false, error: 'Server nicht konfiguriert.' }, 500);
  }

  const to = process.env.CONTACT_TO?.trim() || DEFAULT_TO;
  const text = FIELDS.map((f) => `${f}: ${get(f)}`).join('\n');

  let res: Response;
  try {
    res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
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
  } catch {
    return json({ ok: false, error: 'Versand fehlgeschlagen.' }, 502);
  }

  if (!res.ok) return json({ ok: false, error: 'Versand fehlgeschlagen.' }, 502);
  return json({ ok: true });
};
