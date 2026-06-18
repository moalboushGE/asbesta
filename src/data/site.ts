/** Zentrale Stammdaten (Single Source of Truth) – Asbesta Schadstoffsanierung. */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

/** Eine nachgewiesene Qualifikation des Inhabers (echte Sachkunde-/Fachkundenachweise). */
export interface Qualifikation {
  readonly id: string;
  /** Sachlich korrekter Titel des Nachweises. */
  readonly title: string;
  /** Ausstellende Stelle. */
  readonly issuer: string;
  /** Kurze, ehrliche Einordnung (wozu der Nachweis berechtigt). */
  readonly note: string;
  /** ISO-Datum (YYYY-MM-DD), bis wann der Nachweis nachweislich gültig ist – falls zutreffend. */
  readonly validUntil?: string;
  /** Bild-Slugs der zugehörigen Zertifikat-Scans (Register-Keys in src/data/images.ts). */
  readonly images: readonly string[];
}

/** Inhaber/Sachkundiger – benannte Person hinter dem Betrieb (E-E-A-T). */
export const owner = {
  name: 'Abdul-Rahman Omeirat',
  role: 'Inhaber & Sachkundiger nach TRGS 519, Anlage 3',
  bio: 'Abdul-Rahman Omeirat führt Asbesta persönlich und ist sachkundig nach TRGS 519, Anlage 3 – dem behördlich anerkannten „großen“ Sachkundenachweis für Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit Asbest. Jede anzeigepflichtige Sanierung läuft unter seiner fachlichen Verantwortung.',
} as const;

/**
 * Nachgewiesene Qualifikationen des Inhabers (Original-Bescheinigungen liegen vor;
 * Geburtsdatum auf den veröffentlichten Scans geschwärzt). Reihenfolge = Anzeige-Reihenfolge.
 */
export const qualifikationen: readonly Qualifikation[] = [
  {
    id: 'trgs-519-anlage-3',
    title: 'Sachkunde Asbest nach TRGS 519, Anlage 3',
    issuer: 'Haus der Technik e.V., Essen',
    note: 'Der „große“ Sachkundenachweis für Abbruch-, Sanierungs- und Instandhaltungsarbeiten mit Asbest – von der Bezirksregierung Düsseldorf anerkannt. Durch die Pflicht-Fortbildung 03/2025 verlängert.',
    validUntil: '2031-03-12',
    images: ['trgs-519-anlage-3-erwerb', 'trgs-519-anlage-3-fortbildung'],
  },
  {
    id: 'asbestzement-anlage-4c',
    title: 'Sachkunde Asbestzement & schwach gebundene Asbestprodukte',
    issuer: 'BG BAU – Berufsgenossenschaft der Bauwirtschaft',
    note: 'Sachkunde für Arbeiten an Asbestzementprodukten und ASI-Arbeiten geringen Umfangs nach TRGS 519, Anhang I (Anlage 4 C) – anerkannt von der Bezirksregierung Düsseldorf.',
    images: ['asbestzement-anlage-4c'],
  },
  {
    id: 'kontaminierte-bereiche-524',
    title: 'Sachkunde für Arbeiten in kontaminierten Bereichen',
    issuer: 'BG BAU – Berufsgenossenschaft der Bauwirtschaft',
    note: 'Sachkunde nach DGUV Regel 101-004 (Anhang 6 A) – erfüllt die Fachkundeanforderungen nach Anlage 2 A/2 B der TRGS 524.',
    images: ['kontaminierte-bereiche-524'],
  },
  {
    id: 'geraetefachkunde',
    title: 'Gerätefachkunde Asbest- & Schadstoffsanierung',
    issuer: 'MKI Industrieservice GmbH',
    note: 'Fachkundiger Umgang mit Industriesaugern, Unterdruckhaltung, Personen- und Materialschleusen sowie Atemschutz- und Körperschutzmitteln.',
    images: ['geraetefachkunde'],
  },
];

export const site = {
  name: 'Asbesta',
  legalName: 'Asbesta Schadstoffsanierung',
  claim: 'Asbest? Wir holen Sie da raus – schnell, sicher und professionell.',
  subClaim: 'Spezialisten für Schadstoffe. Aus Marl. Für ganz NRW.',
  intro:
    'Inhabergeführter Fachbetrieb für Asbest- und Schadstoffsanierung – von der Materialanalyse über die zertifizierte Sanierung nach TRGS 519 bis zur dokumentierten Entsorgung. Alles aus einer Hand.',
  phone: { display: '+49 2365 2960630', href: 'tel:+4923652960630' },
  whatsapp: { display: 'WhatsApp', href: 'https://wa.me/4917657724558' },
  email: 'info@asbesta-schadstoffsanierung.de',
  address: {
    street: 'Venusweg 24',
    zip: '45770',
    city: 'Marl',
    region: 'Nordrhein-Westfalen',
    country: 'Deutschland',
  },
  responseTime: 'Rückmeldung innerhalb von 24 Stunden',
  legal: {
    owner: 'Abdul-Rahman Omeirat',
    // USt-IdNr nach § 27a UStG nur Pflicht, wenn vorhanden. Leer lassen, bis sie vorliegt
    // (Impressum blendet die Sektion dann automatisch aus).
    ustId: '',
    supervisoryAuthority:
      'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)',
  },
  certifications: ['TRGS 519', 'TRGS 524', 'Fachbetrieb nach GefStoffV'],
  stats: [
    { value: 'TRGS 519', label: 'sachkundig nach Anlage 3' },
    { value: '100 %', label: 'dokumentiert & freigemessen' },
    { value: 'NRW', label: 'im Einsatz in ganz Nordrhein-Westfalen' },
  ] as readonly Stat[],
  nav: [
    { label: 'Leistungen', href: '/leistungen/' },
    { label: 'Standorte', href: '/standorte/' },
    { label: 'Ratgeber', href: '/ratgeber/' },
    { label: 'Über uns', href: '/ueber-uns/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ] as readonly NavItem[],
} as const;

/** WhatsApp-Deep-Link mit optional vorbelegter Nachricht (Conversion: niedrigschwelliger Einstieg). */
export function waLink(text?: string): string {
  return text ? `${site.whatsapp.href}?text=${encodeURIComponent(text)}` : site.whatsapp.href;
}
