# Backup- & Rollback-Strategie (Pre-Launch, Tag 90)

> **Stand:** 2026-06-24. Deploy-Modell: `git push` auf `main` → Railway baut & deployed automatisch.
> Die echte Domain zeigt noch auf die Alt-WordPress-Seite; Pushes aktualisieren bis zum DNS-Cutover
> nur die Railway-Umgebung.

## Was wird gesichert?

| Asset | Quelle der Wahrheit | Sicherung |
|---|---|---|
| **Code + Inhalte** | Git / GitHub (`moalboushGE/asbesta`) | jeder Commit = wiederherstellbarer Stand; GitHub als Remote-Backup |
| **Build-Artefakt** | reproduzierbar aus Code (`pnpm build`) | nicht separat sichern – aus jedem Commit neu baubar |
| **Lead-Datenbank (Postgres)** | Railway-Postgres | **Railway-Backups aktivieren/prüfen** (siehe unten) – einzige nicht aus Code reproduzierbare Daten |
| **Secrets/ENV** | Railway-Variables (BREVO_API_KEY, DATABASE_URL, ADMIN_PASSWORD …) | außerhalb Git; sicher dokumentieren (Passwort-Manager) |

## Rollback der Website (Code/Deploy)

1. **Schnellster Weg (Railway):** Railway-Dashboard → Service → *Deployments* → letzten funktionierenden
   Deploy auswählen → **Redeploy/Rollback**. Greift sofort, ohne Code-Änderung.
2. **Per Git (sauber, nachvollziehbar):** fehlerhaften Commit identifizieren →
   `git revert <commit>` → `git push origin main` → Railway baut den revertierten Stand neu.
3. **Verifikation nach Rollback:** Startseite + `/kontakt/` laden, Formular-Testabsendung, `pnpm test:e2e`
   gegen die Railway-URL (BASE=<railway-url>) optional.

## Rollback der Datenbank (Leads)

- Railway-Postgres-Backups (Point-in-Time bzw. tägliche Snapshots) **vor Launch aktivieren** und einen
  Restore einmal testen. Das Admin-Dashboard (`/admin`) erlaubt zusätzlich CSV-Export der Anfragen
  (`/api/admin/export.csv`) als manuelles Zwischen-Backup.

## Pre-Cutover-Checkliste (für den späteren DNS-Umzug)

- DNS-TTL vorab auf **300 s** senken (schneller Rollback der DNS-Umstellung möglich).
- Alt-WordPress als Fallback erreichbar halten, bis die neue Seite verifiziert ist.
- Redirect-Generalprobe (alle Alt-URLs) gegen die Railway-URL fahren (`link-redirect-checker.mjs`,
  `gsc-inspection-list.mjs`) – bereits 0 Fehler / 0 RK1-Lücken (siehe `docs/abnahme-phase-5.md`).
- Nach Cutover: GSC/Bing-Property der Live-Domain verifizieren, Sitemap einreichen, IndexNow
  (`scripts/indexnow-submit.mjs`).

## Offen (Inhaber / extern)

- **AVV-Verträge** final unterzeichnen: Brevo, Railway (Hosting). (Status siehe `docs/recht-offene-punkte.md`.)
- **Railway-Postgres-Backups** aktivieren + 1× Restore testen (Zugang erforderlich).
- DNS-/Domain-Zugang für den Cutover.
