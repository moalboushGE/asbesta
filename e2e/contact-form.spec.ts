import { test, expect } from '@playwright/test';

// Kritischer Pfad „Anfrage absenden". Der echte Endpunkt /api/anfrage braucht Postgres,
// daher wird der Erfolgsfall gemockt; der Validierungsfall (400) läuft gegen die echte API
// (Validierung erfolgt vor dem DB-Zugriff).
const FORM = '#anfrage-form';

test('Kontaktformular: erfolgreiche Anfrage zeigt Dank-Block (API gemockt)', async ({ page }) => {
  await page.route('**/api/anfrage/', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) }),
  );
  await page.goto('/kontakt/');
  await page.fill(`${FORM} input[name="name"]`, 'Max Mustermann');
  await page.fill(`${FORM} input[name="email"]`, 'max@example.de');
  await page.fill(`${FORM} textarea[name="nachricht"]`, 'Bitte um ein Angebot zur Asbestsanierung.');
  await page.check(`${FORM} input[name="einwilligung"]`);
  await page.click(`${FORM} button[type="submit"]`);

  await expect(page.getByText('Vielen Dank!')).toBeVisible();
  await expect(page.locator(FORM)).toHaveCount(0);
});

test('Kontaktformular: leere Pflichtfelder ergeben Fehlerhinweis (echte API, 400)', async ({ page }) => {
  await page.goto('/kontakt/');
  await page.click(`${FORM} button[type="submit"]`);
  await expect(page.locator(`${FORM} [data-status]`)).toContainText('Bitte prüfen Sie Ihre Eingaben');
});
