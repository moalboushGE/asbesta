/** Echte Google-Rezensionen (Stand 2026-06). Quelle: Google Business Profil „Asbesta
 *  Schadstoffsanierung" (Marl). NUR echte, öffentlich nachprüfbare Bewertungen – nichts erfunden.
 *  Texte sinngetreu übernommen; Zeitangaben wie bei Google (relativ). */

export interface Bewertung {
  readonly name: string;
  readonly rating: number;
  readonly zeit: string;
  readonly text: string;
}

/** Google-Maps-Profil (CID aus dem GBP-Eintrag) – für sameAs & „auf Google ansehen". */
export const googleReviewsUrl = 'https://www.google.com/maps?cid=12261917291665454602';

/** Aggregat (entspricht der auf Google sichtbaren Gesamtbewertung). */
export const bewertungAggregat = { rating: 5, anzahl: 6 } as const;

export const bewertungen: readonly Bewertung[] = [
  {
    name: 'Dennis Ploetz',
    rating: 5,
    zeit: 'vor einem Jahr',
    text: 'Von der ersten Kontaktaufnahme und Baustelleneinrichtung bis zur abgeschlossenen Asbestsanierung war alles sehr zufriedenstellend. In einem Reihenendhaus aus den 1960er-Jahren wurden die asbesthaltige Mineralwolle-Dämmung im Dach, Asbestzementplatten hinter den Heizkörpern, Floor-Flex-Platten in mehreren Räumen und asbesthaltiger Putz im ganzen Haus entfernt. Alles wurde vorab besprochen und erklärt, alle Mitarbeiter waren freundlich und sämtliche Arbeiten wurden exakt im vereinbarten Zeitrahmen abgeschlossen. Ich kann Asbesta uneingeschränkt empfehlen.',
  },
  {
    name: 'André Tacke',
    rating: 5,
    zeit: 'vor 6 Monaten',
    text: 'Wir hatten einen asbesthaltigen Boden, den es zu entfernen galt. In diesem Fall kann ich nur Positives über diese Sanierung berichten. Die Endrechnung entsprach dem Kostenvoranschlag.',
  },
  {
    name: 'D.',
    rating: 5,
    zeit: 'vor 10 Monaten',
    text: 'Die Firma Asbesta kann ich nur weiterempfehlen. Das habe ich auch schon gemacht 👍 Schnell, professionell, pünktlich und freundlich. Und zu einem guten Preis. Vielen Dank.',
  },
  {
    name: 'J. E.',
    rating: 5,
    zeit: 'vor 7 Monaten',
    text: 'Waren wirklich super schnell. Wir haben innerhalb von zwei Wochen einen Termin zum Anschauen gemacht, den Auftrag vergeben und die Arbeiten wurden durchgeführt. Danke!',
  },
  {
    name: 'Lisa Konermann',
    rating: 5,
    zeit: 'vor 5 Monaten',
    text: 'Vielen Dank für die unkomplizierte, schnelle und professionelle Ausführung der Asbestreinigung. Top Arbeit!',
  },
  {
    name: 'Artem Sander',
    rating: 5,
    zeit: 'vor einem Jahr',
    text: 'Top, 10/10 – Preis, Freundlichkeit, Sauberkeit, Pünktlichkeit. Wir sind zufrieden.',
  },
];
