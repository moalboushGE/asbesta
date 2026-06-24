import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG-2.x-AA-Audit (automatisiert) je Seitentyp. Assertion: keine Verstöße mit
// impact 'critical' oder 'serious'. Repräsentative URLs aus der gebauten Sitemap.
const pages = [
  { name: 'Start', path: '/' },
  { name: 'Leistung-Pillar', path: '/leistungen/' },
  { name: 'Leistung×Stadt', path: '/leistungen/abbrucharbeiten/aachen/' },
  { name: 'Standort', path: '/standorte/aachen/' },
  { name: 'Ratgeber-Artikel', path: '/ratgeber/asbest-bodenbelag/' },
  { name: 'Kontakt', path: '/kontakt/' },
];

for (const p of pages) {
  test(`A11y: ${p.name} ohne kritische/ernste Verstöße`, async ({ page }) => {
    const response = await page.goto(p.path);
    expect(response?.status(), `Statuscode für ${p.path}`).toBe(200);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      // Rein dekorative, vor Screenreadern versteckte Elemente (z. B. faded Watermark-Ziffern)
      // sind aus der Barrierefreiheits-Bewertung ausgenommen – ihr Kontrast ist bedeutungslos.
      .exclude('[aria-hidden="true"]')
      .analyze();

    const ernst = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
    const bericht = ernst.map((v) => `${v.id} (${v.impact}, ${v.nodes.length}x): ${v.help}`).join('\n');
    expect(ernst, bericht || 'keine').toEqual([]);
  });
}
