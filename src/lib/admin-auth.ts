// Single-Password-Admin-Auth ohne externe Dependency (nur node:crypto).
// Login prüft ADMIN_PASSWORD timing-safe; Session ist ein signiertes, statusloses HMAC-Cookie
// (kein DB-Lookup). Secret = ADMIN_SESSION_SECRET (fest in Railway setzen, sonst Sessions brechen je Deploy).
import crypto from 'node:crypto';

export const COOKIE = 'asbesta_admin';
const MAXAGE_MS = 12 * 60 * 60 * 1000;
export const MAXAGE_SEC = Math.floor(MAXAGE_MS / 1000);

function secret(): string {
  return process.env.ADMIN_SESSION_SECRET ?? '';
}

/** true, wenn Passwort UND Session-Secret konfiguriert sind (sonst /admin fail-fast). */
export function adminKonfiguriert(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD) && secret().length > 0;
}

/** Konstantzeit-Vergleich über SHA-256-Digests gleicher Länge. */
export function passwordOk(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || !input) return false;
  const a = crypto.createHash('sha256').update(input).digest();
  const b = crypto.createHash('sha256').update(pw).digest();
  return crypto.timingSafeEqual(a, b);
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
}

export function issueToken(): string {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + MAXAGE_MS })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(tok?: string | null): boolean {
  if (!tok || secret().length === 0) return false;
  const i = tok.lastIndexOf('.');
  if (i < 0) return false;
  const payload = tok.slice(0, i);
  const expected = Buffer.from(sign(payload));
  const got = Buffer.from(tok.slice(i + 1));
  if (expected.length !== got.length) return false;
  if (!crypto.timingSafeEqual(expected, got)) return false;
  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { exp?: number };
    return typeof parsed.exp === 'number' && Date.now() < parsed.exp;
  } catch {
    return false;
  }
}

/** Datensparsame, gesalzene IP (kein Klartext) – nur zur Spam-/Missbrauchstriage. */
export function hashIp(ip: string): string {
  if (!ip) return '';
  return crypto
    .createHmac('sha256', secret() || 'asbesta-fallback-salt')
    .update(ip)
    .digest('hex')
    .slice(0, 24);
}
