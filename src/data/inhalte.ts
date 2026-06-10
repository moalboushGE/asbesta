/** Inhaltsbausteine der Startseite (Ablauf, Bewertungen). */

export interface Schritt {
  readonly nr: string;
  readonly title: string;
  readonly text: string;
}

export interface Bewertung {
  readonly name: string;
  readonly ort: string;
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

export const bewertungen: readonly Bewertung[] = [
  {
    name: 'Familie Krüger',
    ort: 'Marl',
    text: 'Schnell, professionell, pünktlich und freundlich. Jederzeit wieder.',
  },
  {
    name: 'M. Hoffmann',
    ort: 'Recklinghausen',
    text: 'Von der Planung bis zur Entsorgung war alles durchweg professionell.',
  },
  {
    name: 'S. Becker',
    ort: 'Gelsenkirchen',
    text: 'Top Arbeit – sauber und absolut zuverlässig ausgeführt.',
  },
  {
    name: 'R. Klein',
    ort: 'Dorsten',
    text: 'Unkomplizierte, schnelle und professionelle Ausführung.',
  },
  {
    name: 'Hausverwaltung NRW',
    ort: 'Bochum',
    text: 'Ein verlässlicher Partner für gleich mehrere unserer Objekte.',
  },
];
