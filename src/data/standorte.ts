/** Standorte/Einzugsgebiet (SSOT fuer Routing & interne Verlinkung). Sitz: Marl. */

export interface Standort {
  readonly slug: string;
  readonly name: string;
  readonly region: string;
  /** Nahegelegene Standorte (slugs) fuer interne Verlinkung. */
  readonly nearby: readonly string[];
}

export const standorte: readonly Standort[] = [
  { slug: 'marl', name: 'Marl', region: 'Kreis Recklinghausen (Firmensitz)', nearby: ['herten', 'gladbeck', 'gelsenkirchen'] },
  { slug: 'herten', name: 'Herten', region: 'Kreis Recklinghausen', nearby: ['marl', 'gladbeck', 'gelsenkirchen'] },
  { slug: 'gladbeck', name: 'Gladbeck', region: 'Kreis Recklinghausen', nearby: ['marl', 'bottrop', 'gelsenkirchen'] },
  { slug: 'gelsenkirchen', name: 'Gelsenkirchen', region: 'Ruhrgebiet', nearby: ['herten', 'essen', 'gladbeck'] },
  { slug: 'bottrop', name: 'Bottrop', region: 'Ruhrgebiet', nearby: ['gladbeck', 'oberhausen', 'essen'] },
  { slug: 'essen', name: 'Essen', region: 'Ruhrgebiet', nearby: ['oberhausen', 'gelsenkirchen', 'bottrop'] },
  { slug: 'oberhausen', name: 'Oberhausen', region: 'Ruhrgebiet', nearby: ['bottrop', 'essen', 'duesseldorf'] },
  { slug: 'duesseldorf', name: 'Düsseldorf', region: 'Rheinland', nearby: ['koeln', 'oberhausen', 'essen'] },
  { slug: 'koeln', name: 'Köln', region: 'Rheinland', nearby: ['duesseldorf'] },
  { slug: 'recklinghausen', name: 'Recklinghausen', region: 'Kreis Recklinghausen', nearby: ['marl', 'herten', 'dorsten'] },
  { slug: 'dorsten', name: 'Dorsten', region: 'Kreis Recklinghausen', nearby: ['marl', 'recklinghausen', 'gladbeck'] },
  { slug: 'bochum', name: 'Bochum', region: 'Ruhrgebiet', nearby: ['gelsenkirchen', 'herten', 'essen'] },
];
