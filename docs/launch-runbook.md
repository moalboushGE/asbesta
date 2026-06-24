# Launch-Runbook (Cutover auf die neue Astro-Seite) – Tag 91

> **Stand:** 2026-06-24, v1. Ziel: kontrollierter Umzug der Domain
> `www.asbesta-schadstoffsanierung.de` von der Alt-WordPress-Seite auf die neue Astro-Seite (Railway).
> Ergänzt `docs/backup-rollback.md` (Rollback-Details) und `docs/abnahme-phase-5.md` (Redirect-Abnahme).
> Deploy-Modell: `git push main` → Railway baut & deployed automatisch.

## Rollen

| Rolle | Verantwortung |
|---|---|
| Inhaber (moalboushGE) | Domain-/DNS-Zugang, Freigaben, Go/No-Go-Entscheidung |
| Technik | Build/Deploy, Verifikation, Rollback-Ausführung |

## T‑7 bis T‑1 (Vorbereitung)

- [ ] DNS-**TTL auf 300 s** senken (ermöglicht schnellen DNS-Rollback am Cutover-Tag).
- [ ] **Beide** Domains als Railway-Custom-Domain gebunden – `www` UND Apex
      (`asbesta-schadstoffsanierung.de`) – jeweils mit **gültigem SSL-Zertifikat**. Apex erlaubt meist
      kein CNAME → ALIAS/ANAME bzw. A-Record (CNAME-Flattening) nutzen. Der apex→www-301 in `server.mjs`
      greift NUR, wenn der Apex den Server mit gültigem HTTPS erreicht – sonst Zertifikatsfehler statt Redirect.
- [ ] ENV auf Railway gesetzt: `BREVO_API_KEY`, `DATABASE_URL`, `ADMIN_PASSWORD`, ggf. `CONTACT_TO`,
      `INDEXNOW_KEY` (stabil, passend zur deployten Key-Datei).
- [ ] Postgres-Schema/Lead-Tabelle existiert auf der Live-DB (Staging-Formulartest gegen denselben DB-Stand).
- [ ] Brevo: Absender `anfrage@asbesta-schadstoffsanierung.de` verifiziert (SPF/DKIM).
- [ ] Postgres-Backup aktiviert + 1× Restore getestet (`docs/backup-rollback.md`).
- [ ] AVV-Verträge unterzeichnet (Brevo, Railway) – `docs/recht-offene-punkte.md`.
- [ ] Datenschutz anwaltlich freigegeben → `draft`-Flag in `datenschutz.astro` entfernt
      (`docs/recht-offene-punkte.md`, `docs/cookieless-tdddg.md`).
- [ ] Offene Impressums-Daten ergänzt (Handwerkskammer, ggf. USt-IdNr) in `src/data/site.ts`.

## Kritische DNS-/HTTPS-Hinweise (vor Cutover lesen)

- **MX / SPF / DKIM / DMARC NICHT anfassen.** Nur die A/ALIAS-/CNAME-Records für `www` und Apex auf
  Railway umstellen. Werden Mail-Records mitgezogen/gelöscht, bricht der Brevo-Mailversand – und damit
  die Lead-Zustellung des Formulars.
- **HSTS-Falle.** `server.mjs` sendet `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.
  Sobald ein Browser den Header gesehen hat, erzwingt er HTTPS für die Domain inkl. Subdomains für ein Jahr
  (kein Bypass). Daher: (1) gültiges HTTPS für `www` **und** Apex MUSS vor dem Cutover stehen; (2) das
  **Rollback-Ziel (Alt-WordPress) muss ebenfalls gültiges HTTPS** liefern, sonst greift der DNS-Rollback
  nicht; (3) **nicht** am Cutover-Tag zur HSTS-Preload-Liste anmelden (faktisch irreversibel) – Preload
  erst nach stabilem Betrieb.
- **Keine CDN-Invalidierung nötig:** HTML geht mit `Cache-Control: max-age=0, must-revalidate` raus,
  Assets sind gehasht/`immutable` – neue Deploys greifen sofort.

## Staging-Abnahme (auf der Railway-URL, vor DNS-Umstellung)

- [ ] `pnpm test:e2e` grün (20 Tests, axe 0 critical/serious).
- [ ] `pnpm build && node scripts/seo-inventory.mjs` → 0 Probleme.
- [ ] Redirect-Generalprobe gegen Railway-URL: `BASE=<railway-url> FULL=1 node scripts/link-redirect-checker.mjs` → 0 Fehler; `node scripts/gsc-inspection-list.mjs` → rankende Alt-URLs gedeckt (zuletzt 0 Lücken).
- [ ] Formular-Produktivtest: echte Anfrage absenden → Lead in `/admin` sichtbar + Brevo-Mail zugestellt.
- [ ] OG-/Social-Preview: nach Cutover mit dem offiziellen Debugger (Facebook Sharing Debugger /
      LinkedIn Post Inspector) gegen die Live-URL prüfen (Tags + `og.png` sind im Build verifiziert).

## T‑0 Cutover

1. **Go-Entscheidung** dokumentiert (Checkliste oben grün, Verantwortliche anwesend).
2. Letzten Stand deployen (`git push main` → Railway-Build grün abwarten).
3. **DNS umstellen**: `www` (und Apex) auf das Railway-Ziel zeigen lassen (CNAME/A bzw. Railway-Domain).
   Apex→www und http→https erzwingt `server.mjs` bereits serverseitig.
4. Propagation beobachten (dig/Browser inkognito); SSL der Live-Domain prüfen (gültiges Zertifikat, kein Mixed-Content).

## Direkt nach Cutover (Go-Live-Verifikation)

- [ ] Startseite, `/kontakt/`, je 1 Leistung/Standort/Ratgeber live laden (200, HTTPS, www-Canonical).
- [ ] Stichprobe Alt-URLs → 301 auf neue Ziele (keine 404/Ketten).
- [ ] Eine echte Testanfrage über das Live-Formular (Zustellung + DB).
- [ ] GSC-/Bing-Property der Live-Domain verifizieren, **Sitemap einreichen** (`/sitemap-index.xml`).
- [ ] `node scripts/indexnow-submit.mjs` (Bing/Yandex/ChatGPT-Suche) – Key-Datei deployt.
- [ ] Monitoring ist BEREITS mit dem Cutover live (nicht erst danach): Uptime, 5xx-Rate, SSL-Gültigkeit,
      Form-Submission-Erfolg. **Messbare Trigger** definieren (z. B. > 2 % 5xx über 5 min; 0 Lead-Zustellungen
      über 30 min) – siehe Tag 92.
- [ ] Folgetage: GSC-Coverage/Impressions auf Einbruch bei zuvor rankenden Alt-URLs beobachten
      (404-/Redirect-Probleme zeigen sich dort verzögert).

## Rollback-Trigger & -Schritte

**Trigger (sofort rollen, wenn nach Cutover):** Startseite/Formular nicht erreichbar (5xx), SSL-Fehler,
massenhaft 404 auf zuvor rankende Alt-URLs, Formular stellt keine Leads zu.

**Schritte:**
1. **Schnell:** DNS auf die Alt-WordPress-Seite zurückzeigen (dank TTL 300 s in Minuten wirksam).
   **Voraussetzung:** Alt-Seite liefert gültiges HTTPS auf `www`/Apex (HSTS – siehe oben), sonst wirkungslos.
2. **Parallel:** Ursache analysieren; ggf. Railway-Deploy zurückrollen (`git revert` + push oder
   Railway-Redeploy, `docs/backup-rollback.md`).
3. Nach Fix: erneuter Cutover-Versuch nach Mini-Checkliste.

## Notfall-/Wartungshinweis

Statische, abhängigkeitsfreie Wartungsseite liegt unter `public/wartung.html` bereit (on-brand, mit
Telefon/E-Mail). Einsatz: bei längerem Ausfall als Fallback ausliefern (z. B. Railway-Static/Edge oder
temporär als `index` zeigen). Inhalt: kurzer Hinweis + Sofort-Kontakt (Telefon/WhatsApp/E-Mail).
