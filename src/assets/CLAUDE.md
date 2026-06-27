# src/assets/ — Bildquellen

Original-JPGs, zur Build-Zeit via `astro:assets` zu WebP optimiert (durch `ui/Figure.astro`, quality 62, responsive widths).

## Struktur
`asbesta-logo.jpeg` + `images/{hero,leistungen,ratgeber,ablauf,zertifizierungen,allgemein}/`.

## Konventionen
- Zugriff IMMER über die Registry `src/data/images.ts` (z. B. `leistungImage(slug)`), nicht per direktem Pfad.
- Dateinamen kebab-case, sprechend (oft = Leistungs-/Bereichs-Slug). Anzeige nur über `Figure` (festes aspect-ratio → CLS-sicher).
- Zertifikat-Scans hier sind retuschiert (Geburtsdatum geschwärzt); Originale liegen NICHT im Repo (siehe `.gitignore`).

## Abhängigkeiten
← `src/data/images.ts` (Registry); gerendert via `src/components/ui/Figure.astro`.
