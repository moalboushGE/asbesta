# Mitarbeit & Standards

Verbindlich: **Engineering- & Qualitäts-Charta** (100-Tage-Plan, Kap. 8).

## Architektur-Invarianten (Kap. 8.1)

- Trennung **Daten / Präsentation / Logik**: Daten in `src/data`, Logik in `src/lib`, UI in `src/components`.
- **Tokens als Single Source of Truth** – keine rohen Hex-/px-Werte in Komponenten; immer Tokens/Utilities.
- **Datengetrieben statt dupliziert** (`getStaticPaths`), Komposition statt Copy-Paste (Rule of Three).
- Jede öffentliche Komponente: typisiertes `Props`-Interface + JSDoc.

## Komponenten-Budgets (Kap. 8.2, CI-Gate)

| Metrik | Hard-Limit |
|---|---|
| Zeilen je Datei | 300 |
| Zeilen je Funktion | 80 |
| Zyklomatische Komplexität | 15 |
| Cognitive Complexity (SonarJS) | 15 |
| Verschachtelungstiefe | 4 |
| Parameter je Funktion | 4 |

Bei Überschreitung: aufteilen (Single Responsibility), nicht Budget erhöhen.

## Vor jedem Merge (Definition of Done, Kap. 1.6 + 8.8)

1. `pnpm check` grün (Typecheck, ESLint/SonarJS, Stylelint).
2. `pnpm build` grün.
3. **Design-Integritäts-Review** (Kap. 8.5/8.6): `pnpm shoot` → Screenshots auswerten
   (0 KI-Slop-Marker, Marken-/Token-Konformität, WCAG-Kontrast, Responsivität 360/768/1024/1200).
4. Bei Architektur-/Tooling-/Dependency-Entscheidung: ADR unter `docs/adr/` ergänzen.

## Anti-AI-Slop (Kap. 8.5) – nicht erlaubt

Generische Lila/Blau-Verläufe · Default-Schrift ohne Hierarchie · uniformer Radius überall ·
Stereotyp-Layouts · KI-/Fake-Bilder · Emoji-Icons · erfundene Trust-Badges · Floskel-Copy.
