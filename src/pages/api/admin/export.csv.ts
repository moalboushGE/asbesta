// CSV-Export aller Anfragen (Session-geschützt via Middleware). Excel-DE-kompatibel:
// UTF-8 mit BOM (Umlaute), Semikolon-getrennt, Felder gequotet, Formel-Injection escaped.
export const prerender = false;
import type { APIRoute } from 'astro';
import { listLeads } from '../../../lib/leads';

const COLS = [
  'created_at',
  'typ',
  'status',
  'name',
  'telefon',
  'email',
  'ort',
  'dienstleistung',
  'wunschzeit',
  'nachricht',
  'quelle_kanal',
  'ist_spam',
] as const;

function cell(v: unknown): string {
  let s: string;
  if (v === null || v === undefined) s = '';
  else if (v instanceof Date) s = v.toISOString().slice(0, 16).replace('T', ' '); // 2026-06-18 12:13
  else s = String(v);
  if (/^[\t\r\n=+\-@]/.test(s)) s = `'${s}`; // Formel-Injection in Excel verhindern (auch führende TAB/CR/LF)
  return `"${s.replace(/"/g, '""')}"`;
}

// Byte-Order-Mark als Code-Point (kein literales Sonderzeichen im Quelltext), damit Excel Umlaute erkennt.
const BOM = String.fromCharCode(0xfeff);

export const GET: APIRoute = async () => {
  const leads = await listLeads({ status: 'alle', limit: 500 });
  const head = COLS.join(';');
  const rows = leads.map((l) => COLS.map((c) => cell((l as unknown as Record<string, unknown>)[c])).join(';'));
  const body = BOM + [head, ...rows].join('\r\n');
  const datum = new Date().toISOString().slice(0, 10);
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="anfragen-${datum}.csv"`,
    },
  });
};
