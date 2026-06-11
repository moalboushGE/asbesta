/** Zentrale Stammdaten (Single Source of Truth) – Asbesta Schadstoffsanierung. */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

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
  certifications: ['TRGS 519', 'TRGS 521', 'TRGS 524', 'Fachbetrieb nach GefStoffV'],
  stats: [
    { value: '1.000+', label: 'abgeschlossene Projekte' },
    { value: '15+', label: 'Jahre Erfahrung' },
    { value: '100 %', label: 'zertifiziert & versichert' },
  ] as readonly Stat[],
  nav: [
    { label: 'Leistungen', href: '/leistungen/' },
    { label: 'Standorte', href: '/standorte/' },
    { label: 'Ratgeber', href: '/ratgeber/' },
    { label: 'Über uns', href: '/ueber-uns/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ] as readonly NavItem[],
} as const;
