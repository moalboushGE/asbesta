# src/components/sections/ — Seitenabschnitte

Große, datengetriebene Inhaltsblöcke (v. a. Startseite + Conversion).

## Komponenten
- `Hero.astro` — Hero mit Value-Prop, CTA-Hierarchie, Bild + Badge.
- `StatsBand.astro`, `Gruende.astro`, `Zertifizierung.astro` (Trust); `Bewertungen.astro` (Google); `Qualifikationen.astro` (Inhaber-Sachkunde).
- `LeistungenGrid.astro`, `RegionBand.astro`, `RatgeberTeaser.astro` (Übersichten/Querverlinkung).
- `AblaufSteps.astro` (5-Schritte-Prozess), `CtaSection.astro` (Abschluss-CTA).
- `ContactForm.astro` (Voll-Formular), `MiniAnfrage.astro` (Inline-Anfrage; optionale Props dienstleistung/ort/heading).

## Konventionen
Formulare tragen `data-anfrage-form` (+ Honeypot, `ts`, UTM/gclid-Hiddenfelder) → `public/scripts/anfrage-form.js` → `POST /api/anfrage/`.
