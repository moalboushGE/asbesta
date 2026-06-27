# src/components/patterns/ — wiederkehrende Layout-Teile

Globale, seitenübergreifende Bausteine.

## Komponenten
- `Header.astro` — Sticky-Header (Logo, Nav, Telefon, Mobile-`<details>`-Menü).
- `Footer.astro` — mehrspaltiger Footer (Marke/Bewertung, Leistungen, Ratgeber, Recht, Standorte).
- `DesktopCtaBar.astro` / `MobileCallBar.astro` — persistente CTA-Leisten (Anruf/WhatsApp/Anfrage).
- `Breadcrumb.astro` — semantische Breadcrumb (`items` name/href, aria-current).
- `ExpertReviewLine.astro` — E-E-A-T-Zeile („fachlich verantwortet von …").

## Konventionen
Daten aus `src/data/site.ts` (`site`/`owner`/`waLink`). Tracking-Hooks `data-conv="call"|"whatsapp"`.
