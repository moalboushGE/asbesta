// Cloudflare Pages Function: nimmt das Kontaktformular entgegen und versendet per Resend.
// Wird von Cloudflare Pages automatisch unter /api/anfrage deployt (laeuft NICHT im lokalen Astro-Build).
// ENV-Secrets (im Cloudflare-Dashboard setzen): RESEND_API_KEY, CONTACT_TO.

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
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

  if (!env.RESEND_API_KEY || !env.CONTACT_TO) {
    return json({ ok: false, error: 'Server nicht konfiguriert.' }, 500);
  }

  const text = FIELDS.map((f) => `${f}: ${get(f)}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Asbesta Website <anfrage@asbesta-schadstoffsanierung.de>',
      to: [env.CONTACT_TO],
      reply_to: get('email'),
      subject: `Neue Anfrage von ${get('name')}${get('ort') ? ' aus ' + get('ort') : ''}`,
      text,
    }),
  });

  if (!res.ok) return json({ ok: false, error: 'Versand fehlgeschlagen.' }, 502);
  return json({ ok: true });
};
