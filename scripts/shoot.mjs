// Screenshot-Loop: nimmt Full-Page-Screenshots der Seite ueber mehrere Breakpoints auf.
// Voraussetzung: Dev-/Preview-Server laeuft (Default http://localhost:4321/).
// Nutzung: node scripts/shoot.mjs  (optional SHOOT_URL=... als Override)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.SHOOT_URL ?? 'http://localhost:4321/';
const OUT = 'screenshots';

const VIEWPORTS = [
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1200', width: 1200, height: 900 },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    // kurze Pause, damit Webfonts sicher gerendert sind
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/home-${vp.name}.png`, fullPage: true });
    await page.close();
    console.log(`OK  ${vp.name}  ->  ${OUT}/home-${vp.name}.png`);
  }
} finally {
  await browser.close();
}
