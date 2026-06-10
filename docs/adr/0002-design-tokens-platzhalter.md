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
