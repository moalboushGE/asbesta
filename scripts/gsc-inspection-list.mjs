// GSC-URL-Inspection-Prioliste: erzeugt aus Sitemap + GSC-Performance-Export (alte Seite) + _redirects
// eine nach Impressionen sortierte Liste der NEUEN URLs, die alte rankende Seiten 1:1 ersetzen.
// So nutzt man das begrenzte tägliche GSC-„URL prüfen / Indexierung beantragen"-Kontingent optimal.
// Nutzung: pnpm build && node scripts/gsc-inspection-list.mjs  (> inspection-prioliste.txt)
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://www.asbesta-schadstoffsanierung.de';

const sitemap = await readFile(path.join(root, 'dist', 'client', 'sitemap-0.xml'), 'utf8');
const newUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/\/$/, '')));

// _redirects: alte Pfade -> neue Ziele (exakte Regeln).
const red = await readFile(path.join(root, 'public', '_redirects'), 'utf8').catch(() => '');
const exact = new Map();
for (const line of red.split('\n')) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const [src, dst] = t.split(/\s+/);
  if (src && dst && !src.endsWith('*')) exact.set(src.replace(/\/$/, ''), dst.replace(/\/$/, ''));
}

// GSC-Performance-Export der ALTEN Seiten finden (Seiten.csv).
const perfDir = (await readdir(root)).find((d) => d.includes('Performance-on-Search'));
if (!perfDir) {
  console.error('Kein GSC-Performance-Export-Ordner gefunden.');
  process.exit(1);
}
const csv = await readFile(path.join(root, perfDir, 'Seiten.csv'), 'utf8');
const rows = csv.split('\n').slice(1).map((l) => l.split(',')).filter((r) => r[0] && r[0].startsWith('http'));

const out = [];
for (const r of rows) {
  const impr = Number(r[2]) || 0;
  let pathName;
  try {
    pathName = new URL(r[0]).pathname.replace(/\/$/, '');
  } catch {
    continue;
  }
  const target = exact.get(pathName);
  if (!target) continue;
  const full = (ORIGIN + target).replace(/\/$/, '');
  if (newUrls.has(full)) out.push({ impr, inspect: full + '/', from: r[0] });
}
out.sort((a, b) => b.impr - a.impr);

console.log('# GSC-URL-Inspection-Prioliste  (Impressionen | neue URL | ersetzt alte URL)');
for (const o of out) console.log(`${String(o.impr).padStart(4)} | ${o.inspect} | <- ${o.from}`);
console.log(`\n# ${out.length} priorisierte URLs. Oben anfangen, taeglich ein Kontingent in der GSC pruefen.`);
