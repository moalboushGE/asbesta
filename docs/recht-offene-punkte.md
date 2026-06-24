# Recht/Compliance – offene Punkte (Tag 87)

> **Stand:** 2026-06-24. Ergebnis des Compliance-Audits (Impressum §5 DDG, NAP-Konsistenz,
> Datenschutz Art. 13 DSGVO, Zugang/Lesbarkeit). 49 Findings, 45 adversarial bestätigt.
> Die **sicheren, eindeutigen Korrekturen sind bereits umgesetzt** (siehe unten). Hier verbleiben
> nur die Punkte, die eine **Inhaber-Angabe** oder eine **juristische Freigabe** brauchen.

## Bereits umgesetzt (Code)

- `LegalLayout`: Draft-Rechtsseiten werden jetzt automatisch `noindex` (bis `draft=false`).
- Datenschutz: falsche Angabe „optional hochgeladene Bilder" entfernt (es gibt keinen Upload);
  Brevo als EU-Auftragsverarbeiter (Köln) + Link zur Brevo-Datenschutzerklärung; Klarstellung
  „keine Cookies"; Link zur Aufsichtsbehörde (LDI NRW); Hinweis zur Ausübung der Betroffenenrechte
  inkl. Antwortfrist (Art. 12 Abs. 3 DSGVO).
- Impressum: Handwerkskammer-Sektion vorbereitet (rendert automatisch, sobald Daten in `site.ts`
  hinterlegt sind – analog zur USt-IdNr).
- NAP: Telefonnummer in `kombi-detail.ts` auf einheitliches Format `+49 2365 2960630` normalisiert.

## Braucht Angabe vom Inhaber (needs-user)

1. **USt-IdNr** (§ 27a UStG): Liegt eine vor? Falls ja: vollständige Nummer → `site.ts` (`legal.ustId`).
   Falls Kleinunternehmer ohne USt-IdNr: bestätigen (dann bleibt die Sektion korrekt ausgeblendet).
2. **Handwerksrolle/Handwerkskammer** (§ 5 DDG, falls eintragungspflichtig): zuständige Kammer
   (Name/Ort), Registernummer, verliehene Berufsbezeichnung. → `site.ts` (`legal.craftChamber`,
   `craftRegisterNo`, `craftTitle`). Falls **nicht** in der Handwerksrolle (z. B. handwerksähnliches
   Gewerbe): bitte bestätigen, dann entfällt der Block.
3. **Öffentliche Kontakt-E-Mail bestätigen**: aktuell durchgängig `info@asbesta-schadstoffsanierung.de`.
   (Der 100-Tage-Plan nannte beispielhaft `kontakt@…` – nur im Planungsdokument, nicht im Code.) → bestätigen.
4. **Brevo-AV-Vertrag**: Ist der Auftragsverarbeitungsvertrag mit Brevo abgeschlossen? (Datenschutz
   sagt aktuell „wird geschlossen".) Status/Datum klären.
5. **WhatsApp/Meta**: Wird WhatsApp nur als öffentlicher Dienst genutzt (Kunde schreibt direkt) oder
   besteht ein Business-Datenfluss? (Bestimmt die DSGVO-Einordnung.)
6. **Beschäftigtenzahl/Umsatz** (für BFSG-Kleinstunternehmen-Einordnung, Phase 6 Recht).

## Braucht juristische Freigabe (needs-lawyer)

1. **Finalisierung der Datenschutzerklärung** (aktuell `draft`): vor Entfernen des Draft-Flags
   anwaltlich/DSB prüfen. Schwerpunkte: Rechtsgrundlagen je Verarbeitungsschritt (Art. 6 (1) b vs. f)
   sauber zuordnen; Interessensabwägung für UTM-/Referrer-Speicherung dokumentieren; Konkretisierung
   des Widerspruchsrechts (Art. 21) gegenüber der Tracking-/Attributions-Speicherung.
2. **Consent-Text des Kontaktformulars** vs. tatsächliche Verarbeitung (IP-Hash, UTM, Brevo-Übergabe)
   synchronisieren – juristisch bewerten, ob der Verweis auf die Datenschutzhinweise ausreicht.

## Vom Audit nicht abgedeckt / separat prüfen (Lücken)

- BFSG-/WCAG-Konformität: technische Barrierefreiheit ist separat (Tag 85/86 + axe-Harness) –
  ggf. zusätzlicher Accessibility-Consultant.
- Gewerbeanmeldung/Handelsregister-Status (falls relevant) mit Inhaber verifizieren.
- Tatsächlicher Server-Standort von Railway (EU/USA) für die Drittland-Bewertung verifizieren.
- Verlinktes LDI-Beschwerdeverfahren / Brevo-AV-Referenz final prüfen.
