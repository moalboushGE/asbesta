// IndexNow-Submission: reicht alle Sitemap-URLs + GEO-Endpunkte bei Bing/Yandex/Seznam ein.
// Google nutzt IndexNow nicht, aber Bing, die ChatGPT-/Copilot-Suche und Yandex profitieren stark
// (relevant fuer den GEO-Fokus). Nutzung:
//   1) pnpm build
//   2) [INDEXNOW_KEY=<32-stelliger-key>] node scripts/indexnow-submit.mjs
// Beim ersten Lauf wird ein Key erzeugt und nach public/<key>.txt geschrieben – diese Datei MUSS
// committet/deployt werden, damit sie unter https://<host>/<key>.txt erreichbar ist (IndexNow-Verifikation).
import { readFile, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = process.env.INDEXNOW_HOST || 'www.asbesta-schadstoffsanierung.de';
const ORIGIN = `https://${HOST}`;
const KEY = process.env.INDEXNOW_KEY || randomUUID().replace(/-/g, '');

await writeFile(path.join(root, 'public', `${KEY}.txt`), KEY, 'utf8');

const xml = await readFile(path.join(root, 'dist', 'client', 'sitemap-0.xml'), 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const p of ['/facts.json', '/entities.json', '/llms.txt', '/llms-full.txt']) urls.push(ORIGIN + p);

const body = { host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: urls };
for (const ep of ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow', 'https://yandex.com/indexnow']) {
  try {
    const r = await fetch(ep, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    console.log(`${ep} -> ${r.status} (${urls.length} URLs)`);
  } catch (e) {
    console.error(`${ep} FEHLER: ${e.message}`);
  }
}
console.log(`\nIndexNow-Key: ${KEY}`);
console.log(`Key-Datei: public/${KEY}.txt – committen, damit sie unter ${ORIGIN}/${KEY}.txt liegt.`);
console.log('Tipp: KEY als Railway-ENV INDEXNOW_KEY fest hinterlegen, dann bleibt er stabil.');
