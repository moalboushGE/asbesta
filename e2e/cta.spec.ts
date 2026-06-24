import { test, expect } from '@playwright/test';

// Conversion-Pfade: Telefon- und WhatsApp-CTAs müssen vorhanden und mit Tracking-Attribut versehen sein.
const TEL = 'a[href="tel:+4923652960630"][data-conv="call"]';
const WA = 'a[href*="wa.me/"][data-conv="whatsapp"]';

test('Kontaktseite: Telefon- und WhatsApp-CTA mit Tracking-Attribut vorhanden', async ({ page }) => {
  await page.goto('/kontakt/');
  await expect(page.locator(TEL)).not.toHaveCount(0);
  await expect(page.locator(WA)).not.toHaveCount(0);
});

test('Startseite: Telefon-CTA auch im Mobile-Viewport vorhanden', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('a[data-conv="call"][href^="tel:"]')).not.toHaveCount(0);
});
