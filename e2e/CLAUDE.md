# e2e/ — End-to-End-Tests (Playwright)

`pnpm test:e2e` = `astro build` + `playwright test` (Config `playwright.config.ts`: webServer `node server.mjs`, baseURL :4321, retries 1).

## Specs
- `navigation.spec.ts` — Kernrouten laden (200, genau eine `<h1>`).
- `contact-form.spec.ts` — Formular: Erfolg (API gemockt) + barrierefreie Pflichtfeld-Validierung.
- `a11y.spec.ts` — axe-core über 9 Seitentypen (0 critical/serious).
- `cta.spec.ts` — Telefon-/WhatsApp-CTA + Tracking-Attribute.

## Konventionen
Semantische Selektoren (Rolle/Text/Label). API-Erfolg gemockt (kein DB-Zwang). ESLint-Längenbudgets hier ausgenommen.
