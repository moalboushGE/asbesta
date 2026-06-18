/** Datengetriebene Quelle aller Leistungen – kein Hardcoding in Komponenten (Kap. 8.1). */

export interface Leistung {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  /** Lucide-Icon-Name (astro-icon), z. B. "lucide:shield-check". */
  readonly icon: string;
}

export const leistungen: readonly Leistung[] = [
  {
    slug: 'asbestsanierung',
    title: 'Asbestsanierung',
    summary:
      'Zertifizierte Asbestsanierung nach TRGS 519 – mit Schwarz-Weiß-Schleuse und Unterdruckhaltung.',
    icon: 'lucide:shield-check',
  },
  {
    slug: 'abbrucharbeiten',
    title: 'Abbrucharbeiten',
    summary: 'Professioneller Rückbau und Teilabbruch – sauber, termintreu und fachgerecht entsorgt.',
    icon: 'lucide:hammer',
  },
  {
    slug: 'materialanalyse',
    title: 'Materialanalyse',
    summary: 'Asbest- und Schadstoffanalysen im Labor – Klarheit vor jedem Eingriff.',
    icon: 'lucide:flask-conical',
  },
  {
    slug: 'floor-flex-entfernen',
    title: 'Floor-Flex entfernen',
    summary: 'Floor-Flex-Platten und Kleber fachgerecht und staubarm entfernen.',
    icon: 'lucide:layers',
  },
  {
    slug: 'bitumenkleber-entfernen',
    title: 'Bitumenkleber entfernen',
    summary: 'Schwarzen Bitumen- und Asbestkleber rückstandslos entfernen.',
    icon: 'lucide:layers-2',
  },
  {
    slug: 'welleternit-ausbauen',
    title: 'Welleternit ausbauen',
    summary: 'Sicherer Ausbau asbesthaltiger Wellplatten und Dacheindeckungen.',
    icon: 'lucide:house',
  },
  {
    slug: 'fassadenplatten-ausbauen',
    title: 'Fassadenplatten ausbauen',
    summary: 'Demontage asbesthaltiger Fassadenplatten – kontrolliert und nachweisbar.',
    icon: 'lucide:panels-top-left',
  },
  {
    slug: 'asbestzement-ausbauen',
    title: 'Asbestzement ausbauen',
    summary: 'Demontage von Asbestzement-Bauteilen aller Art.',
    icon: 'lucide:layers-3',
  },
  {
    slug: 'fensterbaenke-ausbauen',
    title: 'Fensterbänke ausbauen',
    summary: 'Asbesthaltige Fensterbänke fachgerecht entfernen.',
    icon: 'lucide:ruler',
  },
  {
    slug: 'cushion-vinyl-entfernen',
    title: 'Cushion-Vinyl entfernen',
    summary: 'CV-Beläge sicher und vollständig entfernen.',
    icon: 'lucide:square-stack',
  },
  {
    slug: 'kmf-sanierung',
    title: 'KMF-Sanierung',
    summary: 'Künstliche Mineralfasern und alte Mineralwolle fachgerecht entfernen (KMF-Entfernung).',
    icon: 'lucide:wind',
  },
  {
    slug: 'pak-sanierung',
    title: 'PAK-Sanierung',
    summary: 'Polyzyklische aromatische Kohlenwasserstoffe sicher sanieren.',
    icon: 'lucide:biohazard',
  },
  {
    slug: 'luftanalysen-vdi-3492',
    title: 'Luftanalysen & Freimessung VDI 3492',
    summary: 'Raumluftmessung und Freimessung nach VDI 3492.',
    icon: 'lucide:gauge',
  },
];
