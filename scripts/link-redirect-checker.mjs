// Link- & Redirect-Checker: prueft gegen die LAUFENDE Seite (lokal `node server.mjs` oder Prod via BASE):
//  (a) jede exakte _redirects-Quelle loest 301 -> 200 auf (keine Ketten, keine Soft-404),
//  (b) interne <a href>-Links der Sitemap-Seiten liefern kein 4xx/5xx (Stichprobe oder voll via FULL=1).
// Nutzung: (Terminal 1) PORT=4321 node server.mjs   (Terminal 2) BASE=http://localhost:4321 node scripts/link-redirect-checker.mjs
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = process.env.BASE || 'http://localhost:4321';
const FULL = process.env.FULL === '1';
const bad = [];

// (a) _redirects-Quellen pruefen.
const red = await readFile(path.join(root, 'public', '_redirects'), 'utf8').catch(() => '');
const sources = [];
for (const line of red.split('\n')) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const [src] = t.split(/\s+/);
  if (src && !src.endsWith('*')) sources.push(src);
}
for (const src of sources) {
  try {
    const r = await fetch(BASE + src, { redirect: 'manual' });
    if (r.status !== 301 && r.status !== 308) {
      bad.push([src, `erwartet 301, ist ${r.status}`]);
      continue;
    }
    const loc = r.headers.get('location');
    const r2 = await fetch(new URL(loc, BASE), { redirect: 'manual' });
    if (r2.status === 301 || r2.status === 308) bad.push([src, `Redirect-Kette -> ${loc} -> ${r2.headers.get('location')}`]);
    else if (r2.status !== 200) bad.push([src, `Ziel ${loc} liefert ${r2.status}`]);
  } catch (e) {
    bad.push([src, `Fehler: ${e.message}`]);
  }
}

// (b) interne Links auf 4xx/5xx pruefen.
const sm = await fetch(BASE + '/sitemap-0.xml').then((r) => r.text());
const pages = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const sample = FULL ? pages : pages.slice(0, 60);
const seen = new Set();
for (const p of sample) {
  const html = await fetch(BASE + p).then((r) => r.text());
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1];
    if (seen.has(h) || /\.(png|svg|jpe?g|webp|ico|json|txt|xml|webmanifest|css|js)$/.test(h)) continue;
    seen.add(h);
    const r = await fetch(BASE + h, { redirect: 'manual' });
    if (r.status >= 400) bad.push([p, `toter Link ${h} -> ${r.status}`]);
  }
}

console.log(`Redirect-Quellen: ${sources.length} | Seiten geprueft: ${sample.length} | interne Links: ${seen.size}`);
console.log(bad.length ? bad.map((b) => `  ${b.join(' :: ')}`).join('\n') : '  Keine Fehler.');
console.log(`\nFehler gesamt: ${bad.length}`);
process.exit(bad.length ? 1 : 0);
