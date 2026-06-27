# src/data/ — Inhalte (Single Source of Truth)

Typisierte, unveränderliche Inhaltsdaten für alle Seiten, JSON-LD, Sitemap und die GEO-Artefakte.
**Keine erfundenen Fakten/Preise** (YMYL) — nur Belegbares, Quellen als verifizierte Amts-/Norm-URLs.

## Wichtigste Dateien
- `site.ts` — Stammdaten: `site` (NAP/Kontakt/Nav/Zertifikate/`legal`), `owner`, `qualifikationen`.
- `leistungen.ts` (Liste) + `leistungen-detail.ts` (heroIntro/einleitung/leistungsumfang/`ablauf`/faqs).
- `standorte.ts` (Liste) + `standorte-detail.ts` / `standorte-owl.ts` / `standorte-owl-fill.ts` / `standorte-muensterland.ts` (Detail je Stadt inkl. `localFaqs`).
- `kombi-detail.ts` — Leistung×Stadt-Kombiseiten (Key `"<leistung>/<stadt>"`).
- `ratgeber.ts` (Metadaten + faqs + quellen) + `ratgeber-content.ts` (Block-Body: h2/p/ul/ol/callout/figure/table) + `ratgeber-neu.ts` (`neueArtikel`/`neuerContent`, gemerged in die beiden).
- `wissen.ts` — `definitionen` (Glossar), `regelwerke`, `kernfakten`, `kostenfaktoren`, `wissensFaqs`, `wissenMeta`.
- `images.ts` — Bild-Registry (`leistungImage` u. a.) → `src/assets/images/`. `bewertungen.ts` — Google-Aggregat. `inhalte.ts` — Startseiten-Bausteine.

## Konventionen
- `readonly` Interfaces; `slug` = Primärschlüssel (treibt `getStaticPaths`).
- Neuer Ratgeber → `ratgeber-neu.ts` (`neueArtikel` + `neuerContent`): Slug eindeutig, `quellen` verifiziert, metaDescription ≤ 160 Z., interne Links nur auf existierende Routen.
- Neuer Glossarbegriff → `wissen.ts` `definitionen`; `sameAs`-URL vorab auf HTTP 200 prüfen.

## Abhängigkeiten
Quelle für `src/lib/{schema,related}.ts`, alle `src/pages/**` und die GEO-Endpunkte (`facts.json.ts` etc.).
Hängt selbst nur von `src/assets` (Bilder) ab.
