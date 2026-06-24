# Abnahmeprotokoll Phase 5 — Technische SEO, Schema, Redirects & Performance

> **Stand:** 2026-06-24 · **Build:** lokaler Produktions-Build (`pnpm build`, 420 Seiten) ·
> **Status:** Phase 5 abnahmebereit. Offene Punkte sind extern blockiert (siehe unten) und in Phase 6 verortet.

Dieses Protokoll dokumentiert die technische SEO-Abnahme zum Abschluss von Phase 5. Alle Prüfungen
sind reproduzierbar über die Skripte in `scripts/` (gegen den lokalen Produktions-Server).

## Reproduktion

```bash
pnpm build
node scripts/seo-inventory.mjs                 # Index-Hygiene auf dist/client
node server.mjs                                 # Server (Port 4321) – separates Terminal
BASE=http://127.0.0.1:4321 FULL=1 node scripts/link-redirect-checker.mjs
node scripts/gsc-inspection-list.mjs            # Alt->Neu-Prioliste (GSC-Impressionen)
```

## Abnahme-Checkliste

| # | Baustein | Ergebnis | Beleg |
|---|---|---|---|
| 1 | **Build** | ✅ grün | `pnpm build` exit 0; `sitemap-index.xml` erzeugt; 420 Seiten |
| 2 | **Index-Hygiene** (Titel/Description einzigartig, Längen, Canonical-Host, kein ungewolltes noindex, JSON-LD vorhanden) | ✅ 0 Probleme | `seo-inventory.mjs`: „Geprueft: 420 Seiten — Keine Probleme." |
| 3 | **Canonical** | ✅ self-referencing | `src/layouts/BaseLayout.astro` (aus `Astro.site` + Pfad) |
| 4 | **robots-Meta** | ✅ index/follow default; `noindex,follow` nur bewusst (404); Admin per `X-Robots-Tag` | `BaseLayout.astro`, `server.mjs` |
| 5 | **robots.txt** | ✅ AI-/Retrieval-Bots erlaubt (inkl. **Claude-SearchBot, Bingbot** ergänzt); Sitemap + ML-Endpunkte verlinkt | `src/pages/robots.txt.ts` |
| 6 | **Sitemap** | ✅ `sitemap-index.xml` + `sitemap-0.xml`; Admin gefiltert; 4 customPages (facts/entities/llms) | `astro.config.mjs` |
| 7 | **Redirects 301→200** (keine Ketten/Soft-404) | ✅ 0 Fehler | `link-redirect-checker.mjs` (FULL=1): 362 Quellen, 423 Seiten, 421 interne Links — „Keine Fehler." |
| 8 | **Interne Links** (kein 4xx/5xx) | ✅ 0 tote Links | s. #7 |
| 9 | **www-/HTTPS-Kanonisierung** | ✅ apex/http → `https://www` (301); Preview/localhost unberührt | `server.mjs` (CANON_HOST) |
| 10 | **JSON-LD `@graph`** | ✅ genau ein valides `@graph` je Seite (419/419 außer 404) | Smoke-Test über gebaute HTML |
| 11 | **RK1 — Alt-URL-Migration** | ✅ **0 Lücken** | s. Abschnitt RK1 |

## RK1 — Migrations-Redirects (kritisches Risiko)

Quelle: GSC-Performance-Export der Alt-Domain (`…-Performance-on-Search-2026-06-14/Seiten.csv`),
also die **real rankenden** Alt-URLs (mit Impressionen). Jede gegen den lokalen Server getestet:

- **105** rankende Alt-URLs gesamt
- **4** bereits live (HTTP 200)
- **101** sauber 301 → 200 (korrektes neues Ziel)
- **0** Redirect-Ketten
- **0** Lücken (keine rankende Alt-URL ohne sauberes Ziel)

Einordnung: Die im Plan genannten „~1.960 Alt-URLs" sind die theoretisch generierte Gesamtmenge
(13 Leistungen × ~49 Städte). Tatsächlich erzielten nur **105** je Impressionen — diese sind zu 100 %
abgedeckt. Der impressionslose Long-Tail wird über 14 Wildcard-Regeln in `public/_redirects`
auf die passenden Hubs geleitet (362 exakte + 14 Wildcard-Regeln, alle 301).

Priorisierte Inspektionsliste für die GSC (nach Cutover): `node scripts/gsc-inspection-list.mjs` (45 URLs).

## Performance / Core Web Vitals

Letzte empirische Messung (Commit `05ed86a`, mobil emuliert Slow 4G + 4× CPU):
**LCP ~2,5 s · CLS ~0,06** (beide „Good"); Font-Swap-CLS-Ursache durch metrik-angepassten
Barlow-Fallback eliminiert. Bild-Pipeline AVIF/WebP, Asset-Caching/Compression in `server.mjs`.

## Offen / extern blockiert (→ Phase 6 bzw. kundenseitig)

| Punkt | Warum offen | Verortung |
|---|---|---|
| Voller **Lighthouse-CI-Gate** (Score ≥ 95 als CI-Schwelle) | kein `lighthouse`-Dependency im Projekt | Phase 6 (CI-Setup) |
| **Rich-Results-Test** (Google) der Schema-Typen | nur extern/manuell durchführbar | Phase 6 QA |
| **GBP-/Verzeichnis-Plan** Freigabe | kein GBP-Zugang vorhanden | kundenseitig |
| **Anwaltliche Freigabe** Impressum/Datenschutz | Kunde/Anwalt | Tag 87 (Recht) |
| **RK7** — finale öffentliche E-Mail (statt `kontakt@alboush-elektro.de`) | kundenseitig zu bestätigen | vor Launch |
| **Echte Projektfotos** (Stock ersetzen) | kundenseitig beizustellen | Phase 4/6 |

## Fazit

**Meilenstein Phase 5 abgeschlossen:** Technische SEO, strukturierte Daten, 301-Redirects und
Performance sind lokal abnahmebereit; RK1 für alle real rankenden Alt-URLs geschlossen.
Nächster Schritt: **Phase 6 (QA, Barrierefreiheit, Recht/Compliance, Pre-Launch-Härtung)**.
