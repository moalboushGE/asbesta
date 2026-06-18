/** Standorte/Einzugsgebiet (SSOT fuer Routing & interne Verlinkung). Sitz: Marl. */

export interface Standort {
  readonly slug: string;
  readonly name: string;
  readonly region: string;
  /** Nahegelegene Standorte (slugs) fuer interne Verlinkung. */
  readonly nearby: readonly string[];
}

export const standorte: readonly Standort[] = [
  {
    slug: 'marl',
    name: 'Marl',
    region: 'Kreis Recklinghausen (Firmensitz)',
    nearby: ['herten', 'gladbeck', 'gelsenkirchen'],
  },
  {
    slug: 'herten',
    name: 'Herten',
    region: 'Kreis Recklinghausen',
    nearby: ['marl', 'gladbeck', 'gelsenkirchen'],
  },
  {
    slug: 'gladbeck',
    name: 'Gladbeck',
    region: 'Kreis Recklinghausen',
    nearby: ['marl', 'bottrop', 'gelsenkirchen'],
  },
  {
    slug: 'gelsenkirchen',
    name: 'Gelsenkirchen',
    region: 'Ruhrgebiet',
    nearby: ['herten', 'essen', 'gladbeck'],
  },
  {
    slug: 'bottrop',
    name: 'Bottrop',
    region: 'Ruhrgebiet',
    nearby: ['gladbeck', 'oberhausen', 'essen'],
  },
  {
    slug: 'essen',
    name: 'Essen',
    region: 'Ruhrgebiet',
    nearby: ['oberhausen', 'gelsenkirchen', 'bottrop'],
  },
  {
    slug: 'oberhausen',
    name: 'Oberhausen',
    region: 'Ruhrgebiet',
    nearby: ['bottrop', 'essen', 'duesseldorf'],
  },
  {
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    region: 'Rheinland',
    nearby: ['koeln', 'oberhausen', 'essen'],
  },
  { slug: 'koeln', name: 'Köln', region: 'Rheinland', nearby: ['duesseldorf', 'neuss', 'aachen'] },
  {
    slug: 'recklinghausen',
    name: 'Recklinghausen',
    region: 'Kreis Recklinghausen',
    nearby: ['marl', 'herten', 'dorsten'],
  },
  {
    slug: 'dorsten',
    name: 'Dorsten',
    region: 'Kreis Recklinghausen',
    nearby: ['marl', 'recklinghausen', 'gladbeck'],
  },
  {
    slug: 'bochum',
    name: 'Bochum',
    region: 'Ruhrgebiet',
    nearby: ['gelsenkirchen', 'herten', 'essen'],
  },
  {
    slug: 'datteln',
    name: 'Datteln',
    region: 'Kreis Recklinghausen',
    nearby: ['marl', 'haltern', 'recklinghausen'],
  },
  {
    slug: 'haltern',
    name: 'Haltern am See',
    region: 'Kreis Recklinghausen',
    nearby: ['marl', 'datteln', 'dorsten'],
  },
  {
    slug: 'castrop-rauxel',
    name: 'Castrop-Rauxel',
    region: 'Kreis Recklinghausen',
    nearby: ['recklinghausen', 'herten', 'dortmund'],
  },
  {
    slug: 'dortmund',
    name: 'Dortmund',
    region: 'Ruhrgebiet',
    nearby: ['castrop-rauxel', 'bochum', 'recklinghausen'],
  },
  {
    slug: 'duisburg',
    name: 'Duisburg',
    region: 'Ruhrgebiet',
    nearby: ['oberhausen', 'essen', 'duesseldorf'],
  },
  {
    slug: 'wuppertal',
    name: 'Wuppertal',
    region: 'Bergisches Land',
    nearby: ['solingen', 'remscheid', 'duesseldorf'],
  },
  {
    slug: 'krefeld',
    name: 'Krefeld',
    region: 'Niederrhein',
    nearby: ['duesseldorf', 'neuss', 'moenchengladbach'],
  },
  {
    slug: 'neuss',
    name: 'Neuss',
    region: 'Rhein-Kreis Neuss',
    nearby: ['duesseldorf', 'krefeld', 'koeln'],
  },
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'Niederrhein',
    nearby: ['krefeld', 'neuss', 'duesseldorf'],
  },
  {
    slug: 'solingen',
    name: 'Solingen',
    region: 'Bergisches Land',
    nearby: ['remscheid', 'wuppertal', 'duesseldorf'],
  },
  {
    slug: 'aachen',
    name: 'Aachen',
    region: 'StädteRegion Aachen',
    nearby: ['koeln', 'duesseldorf'],
  },
  {
    slug: 'hamm',
    name: 'Hamm',
    region: 'Ruhrgebiet',
    nearby: ['dortmund', 'recklinghausen', 'bochum'],
  },
  {
    slug: 'muelheim',
    name: 'Mülheim an der Ruhr',
    region: 'Ruhrgebiet',
    nearby: ['oberhausen', 'essen', 'duisburg'],
  },
  {
    slug: 'bielefeld',
    name: 'Bielefeld',
    region: 'Ostwestfalen-Lippe',
    nearby: ['guetersloh', 'herford', 'detmold'],
  },
  {
    slug: 'remscheid',
    name: 'Remscheid',
    region: 'Bergisches Land',
    nearby: ['solingen', 'wuppertal', 'duesseldorf'],
  },
  {
    slug: 'guetersloh',
    name: 'Gütersloh',
    region: 'Ostwestfalen-Lippe',
    nearby: ['bielefeld', 'herford', 'paderborn'],
  },
  {
    slug: 'detmold',
    name: 'Detmold',
    region: 'Ostwestfalen-Lippe',
    nearby: ['bielefeld', 'herford', 'paderborn'],
  },
  {
    slug: 'herford',
    name: 'Herford',
    region: 'Ostwestfalen-Lippe',
    nearby: ['bielefeld', 'guetersloh', 'minden'],
  },
  {
    slug: 'paderborn',
    name: 'Paderborn',
    region: 'Ostwestfalen-Lippe',
    nearby: ['guetersloh', 'detmold', 'bielefeld'],
  },
  {
    slug: 'minden',
    name: 'Minden',
    region: 'Ostwestfalen-Lippe',
    nearby: ['herford', 'bielefeld', 'guetersloh'],
  },
];
