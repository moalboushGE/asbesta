# ADR 0003 – Keine CMS-Pflege (Daten-SSOT, Pflege durch Agentur)

- **Status:** akzeptiert (2026-06-10) — ersetzt die in ADR 0001 / Plan 9.5 genannte CMS-Option (Sveltia/Decap)
- **Bezug:** 100-Tage-Plan Kap. 3.9 / 8.1

## Kontext

Der Kunde möchte die Inhalte nicht selbst über ein CMS pflegen. Die Pflege übernimmt die Agentur.

## Entscheidung

Es wird **kein CMS** eingesetzt. Inhalte bleiben in **typisierten Daten-Dateien** (`src/data/*.ts`,
`src/data/*-detail.ts`) als Single Source of Truth. Änderungen erfolgen im Git-Repo und gehen per Deploy
(Cloudflare Pages) live. Anleitung: `MAINTENANCE.md`.

## Konsequenzen

- **+** Maximale Performance-/SEO-Kontrolle, kein Abo/Lock-in, kein Schulungsaufwand; der Build erzwingt
  Typ- und Qualitäts-Checks (`pnpm check`), bevor etwas live geht.
- **−** Inhaltsänderungen erfordern Repo-Zugriff und Deploy (durch die Agentur). Empfehlung: **Wartungsvertrag**
  (Content-/SEO-Pflege) zur Sicherung der laufenden Aktualität (E-E-A-T/Freshness).

## Alternativen

- Git-CMS (Sveltia/Decap) — verworfen: unnötiger Pflege-/Schulungsaufwand für den Kunden, der die Pflege
  ohnehin nicht selbst übernehmen möchte. Kann bei Bedarf später nachgerüstet werden (Inhalte sind bereits
  strukturiert).
