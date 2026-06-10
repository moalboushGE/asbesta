# ADR 0002 – Design-Tokens als Platzhalter bis finales Logo/CI

- **Status:** akzeptiert (2026-06-10), revidierbar bei Eingang der Marken-Assets
- **Bezug:** 100-Tage-Plan Kap. 2.3, 8.1

## Kontext

Das finale Logo-SVG und die exakten CI-Hex-Werte liegen noch nicht vor. Entwicklung soll dennoch starten.

## Entscheidung

- Farb-, Typo-, Radius- und Spacing-Tokens werden zentral in `src/styles/global.css` (`@theme`) definiert –
  als **Single Source of Truth** gemäß der im Plan vorgeschlagenen Palette (Brand-Grün, Ink, Signal-Orange, Neutral).
- Das Logo wird zunächst als **Wortmarke „ASBESTA"** + Shield-Icon dargestellt (Platzhalter).
- Echte Projektfotos werden durch klar gekennzeichnete Platzhalterflächen ersetzt – **keine** KI-/Fake-Bilder (Anti-AI-Slop, Kap. 8.5).

## Konsequenzen

- Sobald Logo-SVG und CI-Farben vorliegen: **nur** die Tokens (und die Logo-Komponente) anpassen –
  kein Refactoring der Komponenten nötig (Tokens = SSOT).

## Alternativen

- Warten auf Assets – verworfen: blockiert den Entwicklungsstart unnötig.

## Update (2026-06-10) – Logo eingegangen

Marke bestätigt: **Schwarz + Rot + Weiß** (nicht Grün – die Grün-Annahme stammte aus der Alt-Seite).
Umgesetzt: Tokens ersetzt (`--color-red-*` Brand-Rot `#e2231a`, `--color-ink-*` Schwarz, neutrale Grautöne),
Display-Font auf **Archivo** (industrielle Grotesk passend zur Wortmarke), Logo als Bild
(`src/assets/asbesta-logo.jpeg`, Build → WebP ~15 kB) in Header/Footer integriert.
**Offen:** vektorbasierte **SVG-Variante** + **Negativ-/Weiß-Version** für dunkle Sektionen.
