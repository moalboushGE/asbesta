import { test, expect } from '@playwright/test';

// Hauptnavigation (aus src/data/site.ts) + Startseite: jede Seite liefert 200 und genau eine <h1>.
const routes = [
  '/',
  '/leistungen/',
  '/standorte/',
  '/ratgeber/',
  '/wissen/',
  '/ueber-uns/',
  '/kontakt/',
];

for (const route of routes) {
  test(`Navigation: ${route} lädt mit 200 und genau einer h1`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status(), `Statuscode für ${route}`).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
  });
}
