// Postgres-Anbindung (Railway). EIN pg.Pool pro Prozess (langlebiger Node/Express-Server),
// lazy initialisiert. Schema wird idempotent + race-sicher beim ersten Zugriff angelegt.
// 'pg' wird vom Astro/Vite-SSR-Build NICHT gebündelt (bleibt Runtime-Import aus node_modules).
import pg from 'pg';
import type { Pool } from 'pg';

let pool: Pool | null = null;
let schemaReady: Promise<void> | null = null;

/** SSL nur für öffentliche Hosts. Railway-intern (railway.internal) und localhost sprechen
 *  kein SSL; der öffentliche Railway-Proxy schon (Cert nicht verify-full-fähig → rejectUnauthorized:false).
 *  Per ENV überschreibbar: PGSSL=disable | require. */
function wantSsl(url: string): boolean {
  if (process.env.PGSSL === 'disable') return false;
  if (process.env.PGSSL === 'require') return true;
  if (/\.railway\.internal/.test(url)) return false;
  if (/@(localhost|127\.0\.0\.1|\[::1\])[:/]/.test(url)) return false;
  return true;
}

/** Lazy-Singleton-Pool (ein Pool pro Prozess). */
export function getPool(): Pool {
  if (pool) return pool;
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL ist nicht gesetzt.');
  pool = new pg.Pool({
    connectionString: url,
    ssl: wantSsl(url) ? { rejectUnauthorized: false } : false,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });
  return pool;
}

const SCHEMA_SQL = `
  CREATE EXTENSION IF NOT EXISTS pgcrypto;
  CREATE TABLE IF NOT EXISTS anfragen (
    id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    typ            text NOT NULL,
    name           text,
    telefon        text,
    email          text,
    ort            text,
    dienstleistung text,
    wunschzeit     text,
    nachricht      text,
    einwilligung   boolean NOT NULL DEFAULT false,
    utm_source     text,
    utm_medium     text,
    utm_campaign   text,
    gclid          text,
    landingpage    text,
    referrer       text,
    quelle_kanal   text,
    ist_spam       boolean NOT NULL DEFAULT false,
    spam_grund     text,
    status         text NOT NULL DEFAULT 'neu',
    interne_notiz  text,
    mail_versendet boolean NOT NULL DEFAULT false,
    mail_fehler    text,
    ip_hash        text,
    user_agent     text,
    created_at     timestamptz NOT NULL DEFAULT now(),
    updated_at     timestamptz NOT NULL DEFAULT now()
  );
  CREATE INDEX IF NOT EXISTS anfragen_status_idx ON anfragen (status);
  CREATE INDEX IF NOT EXISTS anfragen_created_idx ON anfragen (created_at DESC);
`;

/** Einmalige, gecachte Schema-Init. Advisory-Lock serialisiert die DDL über mehrere
 *  Instanzen/Boots hinweg. Bei Fehler wird der Cache zurückgesetzt (erneut versuchbar). */
export function ensureSchema(): Promise<void> {
  if (schemaReady) return schemaReady;
  schemaReady = (async () => {
    const client = await getPool().connect();
    try {
      await client.query('BEGIN');
      await client.query('SELECT pg_advisory_xact_lock($1)', [728_491]);
      await client.query(SCHEMA_SQL);
      await client.query('COMMIT');
    } catch (e) {
      await client.query('ROLLBACK').catch(() => undefined);
      schemaReady = null;
      throw e;
    } finally {
      client.release();
    }
  })();
  return schemaReady;
}
