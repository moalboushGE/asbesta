/** Themen-Zuordnung Leistung -> passende Ratgeber-Beiträge (bidirektionale Verlinkung,
 *  wiederverwendet in Leistungs-Detail- und Kombi-Seiten). */
export const RATGEBER_MAP: Record<string, readonly string[]> = {
  'welleternit-ausbauen': [
    'asbestdach-foerderung-neues-dach',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
  ],
  'fassadenplatten-ausbauen': [
    'asbest-fassadenplatten-erkennen',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
  ],
  'asbestzement-ausbauen': [
    'asbest-fassadenplatten-erkennen',
    'asbest-entsorgen',
    'asbestdach-entsorgen-kosten-ablauf',
  ],
  'floor-flex-entfernen': [
    'asbest-bodenbelag',
    'asbest-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'bitumenkleber-entfernen': [
    'asbest-bodenbelag',
    'asbest-putz-fliesenkleber-spachtelmasse',
    'asbest-entsorgen',
  ],
  'cushion-vinyl-entfernen': [
    'asbest-bodenbelag',
    'asbest-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  materialanalyse: [
    'asbest-putz-fliesenkleber-spachtelmasse',
    'asbest-erkennen',
    'asbest-hauskauf',
  ],
  'luftanalysen-vdi-3492': [
    'spritzasbest-erkennen-sanieren',
    'asbestsanierung-pflicht-kosten-ablauf',
    'gefstoffv-novelle-2024',
  ],
  asbestsanierung: [
    'spritzasbest-erkennen-sanieren',
    'asbestsanierung-pflicht-kosten-ablauf',
    'nachtspeicherofen-asbest-entsorgen',
  ],
  abbrucharbeiten: [
    'asbestsanierung-pflicht-kosten-ablauf',
    'asbest-entsorgen',
    'gefstoffv-novelle-2024',
  ],
  'kmf-sanierung': ['mineralwolle-kmf-entsorgen', 'asbest-erkennen', 'gefstoffv-novelle-2024'],
  'pak-sanierung': ['asbestsanierung-pflicht-kosten-ablauf', 'asbest-erkennen', 'asbest-entsorgen'],
  'fensterbaenke-ausbauen': [
    'asbest-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
    'asbest-entsorgen',
  ],
};

export const DEFAULT_RATGEBER: readonly string[] = [
  'asbest-erkennen',
  'asbestsanierung-pflicht-kosten-ablauf',
  'asbest-entsorgen',
];

/** Liefert die passenden Ratgeber-Slugs zu einer Leistung (mit Fallback). */
export function ratgeberFuer(leistungSlug: string): readonly string[] {
  return RATGEBER_MAP[leistungSlug] ?? DEFAULT_RATGEBER;
}

/** Reverse: passende Leistungs-Slugs zu einem Ratgeber-Beitrag (aus der gepflegten Kuratierung). */
export function leistungenFuerRatgeber(ratgeberSlug: string): readonly string[] {
  const treffer = Object.entries(RATGEBER_MAP)
    .filter(([, slugs]) => slugs.includes(ratgeberSlug))
    .map(([leistungSlug]) => leistungSlug);
  return treffer.length > 0 ? treffer : ['asbestsanierung', 'welleternit-ausbauen', 'materialanalyse'];
}
