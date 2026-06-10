/** Inhaltsbausteine der Startseite (Gründe, Ablauf, Bewertungen). */

export interface Grund {
  readonly icon: string;
  readonly title: string;
  readonly text: string;
}

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

export const gruende: readonly Grund[] = [
  {
    icon: 'lucide:zap',
    title: 'Schnell',
    text: 'Termine kurzfristig – auch im Notfall. Rückmeldung innerhalb von 24 Stunden.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Professionell',
    text: 'Zertifiziert nach TRGS 519, 521 und 524. Fachbetrieb nach Gefahrstoffverordnung.',
  },
  {
    icon: 'lucide:calendar-check',
    title: 'Pünktlich',
    text: 'Verbindliche Termine und eine garantierte, dokumentierte Übergabe.',
  },
  {
    icon: 'lucide:sparkles',
    title: 'Sauber',
    text: 'Staubarme Verfahren, Unterdruckhaltung und besenreine Übergabe.',
  },
  {
    icon: 'lucide:handshake',
    title: 'Persönlich',
    text: 'Ein fester Ansprechpartner – direkter Kontakt zum Inhaber, ohne Umwege.',
  },
  {
    icon: 'lucide:recycle',
    title: 'Fachgerechte Entsorgung',
    text: 'Komplettentsorgung mit lückenlosem Entsorgungsnachweis.',
  },
];

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
