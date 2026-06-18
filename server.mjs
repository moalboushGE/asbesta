// Produktions-Server fuer Railway (Node).
// Liefert die vorgerenderten statischen Seiten + Assets aus, setzt Security-Header,
// erzwingt 301-Redirects (Alt-URLs -> neue Struktur) und trailingSlash, und delegiert
// On-demand-Routen (z. B. /api/anfrage) an den Astro-SSR-Handler (@astrojs/node middleware mode).
// Start: `node server.mjs`. Lauscht auf process.env.PORT (Railway setzt das) / HOST 0.0.0.0.
import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const baseDir = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_DIR = path.join(baseDir, 'dist', 'client');

function stripSlash(p) {
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

// 301-Map aus dist/client/_redirects laden (wiederverwendet die gepflegte Cloudflare-Redirect-Datei).
function loadRedirects() {
  const exact = new Map();
  const prefixes = [];
  const file = path.join(CLIENT_DIR, '_redirects');
  if (!fs.existsSync(file)) return { exact, prefixes };
  for (const raw of fs.readFileSync(file, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const [source, target] = line.split(/\s+/);
    if (!source || !target) continue;
    if (source.endsWith('*')) prefixes.push({ prefix: source.slice(0, -1), target });
    else exact.set(stripSlash(source), target);
  }
  return { exact, prefixes };
}

const { exact, prefixes } = loadRedirects();

function findRedirect(pathname) {
  const hit = exact.get(stripSlash(pathname));
  if (hit) return hit;
  for (const { prefix, target } of prefixes) {
    if (pathname.startsWith(prefix)) return target;
  }
  return null;
}

const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), browsing-topics=()',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
};

const app = express();
app.disable('x-powered-by');

// 1) Security-Header auf jede Antwort
app.use((req, res, next) => {
  for (const key of Object.keys(SECURITY_HEADERS)) res.setHeader(key, SECURITY_HEADERS[key]);
  next();
});

// 1b) Cloudflare-Konfigdateien nie oeffentlich ausliefern (auf Railway irrelevant)
app.use((req, res, next) => {
  const p = stripSlash(req.path);
  if (p === '/_headers' || p === '/_redirects') return res.status(404).type('text').send('Not found');
  next();
});

// 2) 301-Redirects (Alt-Domain-URLs)
app.use((req, res, next) => {
  const target = findRedirect(req.path);
  if (target && target !== req.path) return res.redirect(301, target);
  next();
});

// 3) trailingSlash 'always' erzwingen (Dateien mit Endung ausgenommen)
app.use((req, res, next) => {
  const isGet = req.method === 'GET' || req.method === 'HEAD';
  const last = req.path.split('/').pop() || '';
  if (isGet && req.path !== '/' && !req.path.endsWith('/') && !last.includes('.')) {
    return res.redirect(301, req.path + '/' + req.url.slice(req.path.length));
  }
  next();
});

// 4) Statische Auslieferung (vorgerenderte HTML-Seiten + gehashte Assets)
app.use(
  express.static(CLIENT_DIR, {
    index: 'index.html',
    setHeaders: (res, filePath) => {
      if (filePath.includes(`${path.sep}_astro${path.sep}`)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }
    },
  }),
);

// 5) On-demand-Routen (z. B. /api/anfrage) an Astro delegieren
app.use(ssrHandler);

// 6) 404-Fallback (statische 404-Seite mit korrektem Status)
app.use((req, res) => {
  res.status(404);
  const notFound = path.join(CLIENT_DIR, '404.html');
  if (fs.existsSync(notFound)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    fs.createReadStream(notFound).pipe(res);
  } else {
    res.type('text').send('404 Not Found');
  }
});

const port = process.env.PORT || 4321;
const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Asbesta-Server laeuft auf http://${host}:${port}`);
});
