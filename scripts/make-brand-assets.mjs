// Erzeugt die Marken-Bildassets aus dem echten Logo (reproduzierbar): Start mit `node scripts/make-brand-assets.mjs`.
// Ausgabe nach public/: og.png (Social-Card 1200x630), logo.png (JSON-LD-Logo), apple-touch-icon.png,
// icon-192.png, icon-512.png, favicon-32.png. Marke: Ink #141414 + Logo-Rot + Weiss, Grotesk (Arial-nah).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
const logoSrc = path.join(root, 'src', 'assets', 'asbesta-logo.jpeg');

const INK = '#141414';
const RED = '#ec0410';
const WHITE = '#ffffff';
const GRAY = '#a8a8a8';
const FONT = 'Arial, Helvetica, sans-serif';

// --- Social-Card (Open Graph / Twitter) 1200x630 ---
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="84%" cy="16%" r="60%">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="14" height="630" fill="${RED}"/>
  <g transform="translate(96,118)">
    <rect width="92" height="92" rx="18" fill="${RED}"/>
    <text x="46" y="50" font-family="${FONT}" font-weight="800" font-size="68" fill="${WHITE}" text-anchor="middle" dominant-baseline="central">a</text>
  </g>
  <text x="210" y="182" font-family="${FONT}" font-weight="800" font-size="104" fill="${WHITE}" letter-spacing="-2">asbesta</text>
  <text x="214" y="232" font-family="${FONT}" font-weight="700" font-size="33" fill="${RED}" letter-spacing="6">SCHADSTOFFSANIERUNG</text>
  <text x="96" y="372" font-family="${FONT}" font-weight="800" font-size="60" fill="${WHITE}">Asbest? Wir holen Sie da raus.</text>
  <text x="96" y="432" font-family="${FONT}" font-weight="400" font-size="33" fill="${GRAY}">Zertifizierte Sanierung nach TRGS 519 · Marl &amp; ganz NRW</text>
  <g transform="translate(96,498)">
    <rect width="402" height="66" rx="33" fill="#ffffff" fill-opacity="0.07" stroke="${RED}" stroke-opacity="0.55"/>
    <rect x="22" y="23" width="20" height="20" rx="5" fill="${RED}"/>
    <text x="60" y="34" font-family="${FONT}" font-weight="700" font-size="32" fill="${WHITE}" dominant-baseline="central">+49 2365 2960630</text>
  </g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(path.join(pub, 'og.png'));

// --- JSON-LD-Logo: echtes Wortmarken-Logo, weiss-getrimmt, auf weissem Grund ---
await sharp(logoSrc)
  .trim()
  .flatten({ background: WHITE })
  .resize({ width: 600 })
  .png()
  .toFile(path.join(pub, 'logo.png'));

// --- App-/PWA-Icons aus dem Favicon-Mark (dunkles Rounded-Square + a) ---
const fav = path.join(pub, 'favicon.svg');
for (const [name, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['favicon-32.png', 32],
]) {
  await sharp(fav).resize(size, size).png().toFile(path.join(pub, name));
}

console.log('Marken-Assets erzeugt: og.png, logo.png, apple-touch-icon.png, icon-192/512.png, favicon-32.png');
