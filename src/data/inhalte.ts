/** Inhaltsbausteine der Startseite (Ablauf, Bewertungen). */

export interface Schritt {
  readonly nr: string;
  readonly title: string;
  readonly text: string;
}

export const ablauf: readonly Schritt[] = [
  {
    nr: '01',
    title: 'Anfrage senden',
    text: 'Telefonisch, per WhatsApp oder Formular – Rückmeldung innerhalb von 24 Stunden.',
  },
  {
    nr: '02',
    title: 'Besichtigung',
    text: 'Kostenfrei vor Ort. Wir analysieren Material und Umfang.',
  },
  {
    nr: '03',
    title: 'Festpreis-Angebot',
    text: 'Transparent und fair als Festpreis – ohne versteckte Kosten.',
  },
  {
    nr: '04',
    title: 'Fachgerechte Sanierung',
    text: 'Nach TRGS 519, mit Schwarz-Weiß-Schleuse und Unterdruckhaltung.',
  },
  {
    nr: '05',
    title: 'Entsorgung & Übergabe',
    text: 'Inklusive Entsorgungsnachweis, Freimessung und Schlussdokumentation.',
  },
];
