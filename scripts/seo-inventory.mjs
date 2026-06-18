// SEO-Inventar-Validator: prueft das gebaute dist/client auf Indexierungs-Hygiene –
// eindeutige <title> & <meta description>, korrekter canonical-Host, kein ungewolltes noindex,
// vorhandenes JSON-LD und Description-Laenge. Liefert Exit-Code (0 ok / 1 Probleme) fuer CI.
// Nutzung: pnpm build && node scripts/seo-inventory.mjs
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'client');
const ORIGIN = 'https://www.asbesta-schadstoffsanierung.de';

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const grab = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};

const titles = new Map();
const descs = new Map();
const problems = [];
const files = await htmlFiles(root);

for (const f of files) {
  const rel = path.relative(root, f).replace(/\\/g, '/');
  const html = await readFile(f, 'utf8');
  const title = grab(html, /<title>([^<]*)<\/title>/);
  const desc = grab(html, /<meta name="description" content="([^"]*)"/);
  const canon = grab(html, /<link rel="canonical" href="([^"]*)"/);
  const robots = grab(html, /<meta name="robots" content="([^"]*)"/);
  const ld = (html.match(/application\/ld\+json/g) || []).length;
  const isLegalOr404 = /404|admin/.test(rel);

  if (!title) problems.push([rel, 'kein <title>']);
  else if (title.length > 60) problems.push([rel, `title ${title.length} Z. (>60)`]);
  if (!desc) problems.push([rel, 'keine description']);
  else if (desc.length > 160) problems.push([rel, `description ${desc.length} Z. (>160)`]);
  if (canon && !canon.startsWith(ORIGIN)) problems.push([rel, `canonical falscher Host: ${canon}`]);
  if (robots && /noindex/.test(robots) && !isLegalOr404) problems.push([rel, 'ungewollt noindex']);
  if (ld === 0 && !/404/.test(rel)) problems.push([rel, 'kein JSON-LD']);

  if (title) titles.set(title.toLowerCase(), (titles.get(title.toLowerCase()) || []).concat(rel));
  if (desc) descs.set(desc.toLowerCase(), (descs.get(desc.toLowerCase()) || []).concat(rel));
}

for (const [t, list] of titles) if (list.length > 1) problems.push(['DUP-TITLE', `(${list.length}x) ${t}`]);
for (const [d, list] of descs) if (list.length > 1) problems.push(['DUP-DESC', `(${list.length}x) ${d.slice(0, 70)}…`]);

console.log(`Geprueft: ${files.length} Seiten`);
console.log(problems.length ? problems.map((p) => `  ${p.join(' :: ')}`).join('\n') : '  Keine Probleme.');
console.log(`\nProbleme gesamt: ${problems.length}`);
process.exit(problems.length ? 1 : 0);
