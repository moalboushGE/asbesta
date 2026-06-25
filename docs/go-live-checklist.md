# Go-Live-Checkliste (Go/No-Go) – Phase 6

> **Stand:** 2026-06-24. Konsolidierte Pre-Launch-Checkliste für die Go/No-Go-Entscheidung.
> Legende: ✅ lokal verifiziert · ⏳ Launch-Tag/Live nötig · 👤 Inhaber/Anwalt.
> Reproduktion der ✅-Checks: `pnpm test:e2e`, `pnpm build && node scripts/seo-inventory.mjs`,
> `node server.mjs` + `node scripts/link-redirect-checker.mjs`.

## Technik / Build

- ✅ Produktions-Build grün (`pnpm build`), 422 Seiten, Sitemap-Index erzeugt.
- ✅ Quality-Gate grün (`pnpm check`: Typecheck + ESLint/SonarJS + Stylelint).
- ✅ E2E-Regression grün (`pnpm test:e2e`, 20 Tests, `retries: 1`).
- ✅ Security-Header (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP).
- ⏳ Railway: ENV gesetzt (BREVO_API_KEY, DATABASE_URL, ADMIN_PASSWORD, INDEXNOW_KEY), Postgres-Backup aktiv.

## SEO

- ✅ Index-Hygiene 0 Probleme (`seo-inventory.mjs`): eindeutige Titel/Descriptions, korrekter www-Canonical, JSON-LD je Seite.
- ✅ Self-referencing Canonical; `noindex` nur bewusst (404, Admin, Datenschutz-Entwurf, Wartungsseite).
- ✅ Sitemap-Index + `lastmod` 2026-06-24; `robots.txt` (AI-Bots erlaubt, nur `/admin` gesperrt).
- ✅ JSON-LD `@graph` valide je Seitentyp (419/419 Content-Seiten).
- ✅ GEO-/@id-Konsistenz geprüft (Tag 94): kanonische @ids (ORG_ID/PERSON_ID) ohne dangling-Refs;
  `sameAs` über entities.json/facts.json konsistent (`wa.me` aus `sameAs` entfernt – ist Kontaktfeld, kein Identitäts-`sameAs`); NAP identisch.
- ✅ **Redirect-Migration (RK1):** 362 Quellen 301→200, 0 Ketten; 105 real rankende Alt-URLs zu 100 % gedeckt (`docs/abnahme-phase-5.md`).
- ✅ OG-/Twitter-Tags + Assets (`og.png`, Icons, Manifest) im Build vorhanden.
- ⏳ Nach Cutover: GSC/Bing-Property der Live-Domain verifizieren, Sitemap einreichen, IndexNow.
- ⏳ OG-Preview mit offiziellem Debugger gegen Live-URL gegenprüfen.

## Barrierefreiheit (WCAG 2.2 AA)

- ✅ axe (2.0/2.1/2.2 AA) über 9 Seitentypen: 0 critical/serious.
- ✅ Skip-Link, Landmarks, `:focus-visible`, `prefers-reduced-motion`, Labels, barrierefreie Formularfehler, Target-Sizes.
- ✅ Freiwillige Barrierefreiheitserklärung `/barrierefreiheit/` veröffentlicht.
- ⏳ Manuelle Screenreader-Stichprobe (NVDA/VoiceOver) auf realem Gerät.

## Recht / Compliance

- ✅ Cookie-/Consent (§25 TDDDG): öffentlich cookieless, kein Banner nötig; sessionStorage-UTM offengelegt (`docs/cookieless-tdddg.md`).
- ✅ Impressum §5 DDG strukturell vollständig; Handwerkskammer-Sektion vorbereitet (rendert bei Dateneingabe).
- ✅ BFSG-Einordnung dokumentiert (Lead-Seite ohne Online-Vertrag → voraussichtlich nicht pflichtig, `docs/bfsg-einordnung.md`).
- 👤 Handwerkskammer-Daten + ggf. USt-IdNr (`docs/recht-offene-punkte.md`).
- 👤 Brevo-AV-Status; Beschäftigtenzahl/Umsatz (BFSG-Kleinstunternehmen).
- 👤 Anwaltliche Endfreigabe Datenschutz → `draft`-Flag entfernen (dann wird die Seite indexierbar).

## Performance

- ✅ CWV zuletzt (Commit 05ed86a, mobil): LCP ~2,5 s · CLS ~0,06; AVIF/WebP, self-hosted Fonts, Compression.
- ⏳ Lighthouse-CI-Gate (≥95) als CI-Schwelle – Phase-6-Nacharbeit (kein `lighthouse`-Dep).
- ⏳ Feld-CWV (CrUX/GSC) nach Go-Live beobachten.

## Monitoring & Betrieb

- ✅ Backup-/Rollback-Strategie + Launch-Runbook dokumentiert (`docs/backup-rollback.md`, `docs/launch-runbook.md`).
- ✅ Conversion-Tracking verdrahtet (Anruf/WhatsApp/Formular via `data-conv` → `asbestaTrack`), bereit für cookieless Analytics.
- ⏳ Monitoring/Alerting scharf schalten (`docs/monitoring.md`) – muss mit dem Cutover live sein.
- ⏳ Form-Backend-Produktivtest (echte Zustellung) auf Live.

## Go/No-Go

**GO**, sobald alle ⏳-Launch-Tag-Punkte am Cutover-Tag abgehakt und die 👤-Freigaben (insb. anwaltliche
Datenschutz-Freigabe + Impressums-Pflichtdaten) vorliegen. Der technische/SEO/A11y-Kern ist ✅ launch-bereit.
