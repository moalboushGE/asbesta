// Screenshot-Loop: Full-Page-Screenshots mehrerer Routen ueber Breakpoints.
// Voraussetzung: Preview-/Dev-Server laeuft (Default http://localhost:4321).
// Nutzung: node scripts/shoot.mjs  (SHOOT_URL und SHOOT_ROUTES optional)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.SHOOT_URL ?? 'http://localhost:4321';
const OUT = 'screenshots';

const ROUTES = process.env.SHOOT_ROUTES
  ? process.env.SHOOT_ROUTES.split(',').map((p) => ({ path: p, name: p.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home' }))
  : [
      { path: '/', name: 'home' },
      { path: '/leistungen/', name: 'leistungen' },
      { path: '/leistungen/asbestsanierung/', name: 'leistung-asbest' },
    ];

const VIEWPORTS = [
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'desktop-1200', width: 1200, height: 900 },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
        reducedMotion: 'reduce',
      });
      await page.goto(BASE + route.path, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${OUT}/${route.name}-${vp.name}.png`, fullPage: true });
      await page.close();
      console.log(`OK  ${route.name}  ${vp.name}`);
    }
  }
} finally {
  await browser.close();
}
