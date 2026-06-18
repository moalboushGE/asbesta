// Datenzugriff für Anfragen (Leads). Alle Queries parametrisiert ($N) – kein String-Interpolieren
// von Nutzereingaben. Wird von /api/anfrage (Schreiben) und vom /admin-Dashboard (Lesen/Verwalten) genutzt.
import { getPool, ensureSchema } from './db';

export const STATUS = [
  'neu',
  'gesehen',
  'in_bearbeitung',
  'angebot_raus',
  'gewonnen',
  'verloren',
  'kein_interesse',
  'spam',
] as const;
export type Status = (typeof STATUS)[number];

/** „Offene" Vorgänge – Standard-Arbeitsvorrat im Dashboard. */
export const OFFEN_STATUS: Status[] = ['neu', 'gesehen', 'in_bearbeitung', 'angebot_raus'];

export function istStatus(v: string): v is Status {
  return (STATUS as readonly string[]).includes(v);
}

export interface Lead {
  id: string;
  typ: string;
  name: string | null;
  telefon: string | null;
  email: string | null;
  ort: string | null;
  dienstleistung: string | null;
  wunschzeit: string | null;
  nachricht: string | null;
  einwilligung: boolean;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  gclid: string | null;
  landingpage: string | null;
  referrer: string | null;
  quelle_kanal: string | null;
  ist_spam: boolean;
  spam_grund: string | null;
  status: Status;
  interne_notiz: string | null;
  mail_versendet: boolean;
  mail_fehler: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewLead {
  typ: string;
  name?: string | null;
  telefon?: string | null;
  email?: string | null;
  ort?: string | null;
  dienstleistung?: string | null;
  wunschzeit?: string | null;
  nachricht?: string | null;
  einwilligung: boolean;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  gclid?: string | null;
  landingpage?: string | null;
  referrer?: string | null;
  quelle_kanal: string;
  ist_spam: boolean;
  spam_grund?: string | null;
  ip_hash?: string | null;
  user_agent?: string | null;
}

const INSERT_COLS = `typ,name,telefon,email,ort,dienstleistung,wunschzeit,nachricht,einwilligung,
  utm_source,utm_medium,utm_campaign,gclid,landingpage,referrer,quelle_kanal,
  ist_spam,spam_grund,status,ip_hash,user_agent`;

const orNull = (x: string | null | undefined): string | null => x ?? null;

/** Lead persistieren. Liefert die neue ID. Spam landet als status='spam'. */
export async function createLead(l: NewLead): Promise<string> {
  await ensureSchema();
  const status: Status = l.ist_spam ? 'spam' : 'neu';
  const { rows } = await getPool().query(
    `INSERT INTO anfragen (${INSERT_COLS})
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)
     RETURNING id`,
    [
      l.typ,
      orNull(l.name),
      orNull(l.telefon),
      orNull(l.email),
      orNull(l.ort),
      orNull(l.dienstleistung),
      orNull(l.wunschzeit),
      orNull(l.nachricht),
      l.einwilligung,
      orNull(l.utm_source),
      orNull(l.utm_medium),
      orNull(l.utm_campaign),
      orNull(l.gclid),
      orNull(l.landingpage),
      orNull(l.referrer),
      l.quelle_kanal,
      l.ist_spam,
      orNull(l.spam_grund),
      status,
      orNull(l.ip_hash),
      orNull(l.user_agent),
    ],
  );
  return String(rows[0].id);
}

/** Mail-Ergebnis nachtragen (nicht blockierend aufrufbar). */
export async function setMailStatus(id: string, ok: boolean, fehler: string | null): Promise<void> {
  await getPool().query('UPDATE anfragen SET mail_versendet=$1, mail_fehler=$2 WHERE id=$3', [ok, fehler, id]);
}

export interface ListFilter {
  status?: string;
  typ?: string;
  q?: string;
  limit?: number;
}

/** Liste mit Filtern. Ohne status-Filter wird Spam ausgeblendet. */
export async function listLeads(f: ListFilter = {}): Promise<Lead[]> {
  await ensureSchema();
  const where: string[] = [];
  const params: unknown[] = [];
  if (!f.status || f.status === 'alle') {
    if (!f.status) where.push('ist_spam = false');
  } else if (f.status === 'offen') {
    params.push(OFFEN_STATUS);
    where.push(`status = ANY($${params.length})`);
  } else {
    params.push(f.status);
    where.push(`status = $${params.length}`);
  }
  if (f.typ) {
    params.push(f.typ);
    where.push(`typ = $${params.length}`);
  }
  if (f.q) {
    params.push(`%${f.q}%`);
    const n = params.length;
    where.push(`(name ILIKE $${n} OR email ILIKE $${n} OR telefon ILIKE $${n} OR ort ILIKE $${n} OR nachricht ILIKE $${n})`);
  }
  const rawLimit = Number(f.limit ?? 200);
  const limit = Number.isFinite(rawLimit) ? Math.min(Math.max(rawLimit, 1), 500) : 200;
  params.push(limit);
  const sql = `SELECT * FROM anfragen ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
    ORDER BY created_at DESC LIMIT $${params.length}`;
  const { rows } = await getPool().query(sql, params);
  return rows as Lead[];
}

export async function getLead(id: string): Promise<Lead | null> {
  await ensureSchema();
  const { rows } = await getPool().query('SELECT * FROM anfragen WHERE id=$1', [id]);
  return (rows[0] as Lead | undefined) ?? null;
}

export async function updateStatus(id: string, status: Status): Promise<void> {
  await getPool().query('UPDATE anfragen SET status=$1, updated_at=now() WHERE id=$2', [status, id]);
}

export async function updateNotiz(id: string, notiz: string): Promise<void> {
  await getPool().query('UPDATE anfragen SET interne_notiz=$1, updated_at=now() WHERE id=$2', [notiz || null, id]);
}

export async function deleteLead(id: string): Promise<void> {
  await getPool().query('DELETE FROM anfragen WHERE id=$1', [id]);
}

export interface Counts {
  total: number;
  offen: number;
  neu: number;
  gewonnen: number;
  woche: number;
}

export async function counts(): Promise<Counts> {
  await ensureSchema();
  const { rows } = await getPool().query(
    `SELECT
       count(*) FILTER (WHERE ist_spam = false) AS total,
       count(*) FILTER (WHERE status = ANY($1)) AS offen,
       count(*) FILTER (WHERE status = 'neu') AS neu,
       count(*) FILTER (WHERE status = 'gewonnen') AS gewonnen,
       count(*) FILTER (WHERE ist_spam = false AND created_at > now() - interval '7 days') AS woche
     FROM anfragen`,
    [OFFEN_STATUS],
  );
  const r = rows[0];
  return { total: +r.total, offen: +r.offen, neu: +r.neu, gewonnen: +r.gewonnen, woche: +r.woche };
}

/** DSGVO-Aufbewahrung: Spam nach 30 Tagen; alle nicht-gewonnenen, nicht-Spam-Vorgänge 6 Monate nach
 *  dem letzten Kontakt (updated_at) löschen – deckt auch ruhende „neu/in Bearbeitung"-Leads ab, wie in
 *  der Datenschutzerklärung zugesagt. 'gewonnen' bleibt ausgenommen (handels-/steuerrechtliche Fristen). */
export async function retentionSweep(): Promise<void> {
  await ensureSchema();
  const p = getPool();
  await p.query(`DELETE FROM anfragen WHERE ist_spam = true AND created_at < now() - interval '30 days'`);
  await p.query(
    `DELETE FROM anfragen WHERE ist_spam = false AND status <> 'gewonnen'
       AND updated_at < now() - interval '6 months'`,
  );
}

let lastSweep = 0;
/** Aufbewahrungs-Sweep höchstens einmal pro 24 h pro Prozess (vom Dashboard-Load getriggert). */
export async function maybeRetentionSweep(): Promise<void> {
  const now = Date.now();
  if (now - lastSweep < 24 * 60 * 60 * 1000) return;
  lastSweep = now;
  try {
    await retentionSweep();
  } catch (e) {
    console.error('retention_sweep_failed', e);
  }
}
