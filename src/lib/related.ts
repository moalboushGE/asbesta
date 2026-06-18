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
    'asbest-testen-lassen',
    'asbest-erkennen',
    'asbest-putz-fliesenkleber-spachtelmasse',
  ],
  'luftanalysen-vdi-3492': [
    'asbest-testen-lassen',
    'asbestsanierung-pflicht-kosten-ablauf',
    'spritzasbest-erkennen-sanieren',
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

/** Themen-Zuordnung Ratgeber -> verwandte Ratgeber (Topical-Cluster statt „immer die neuesten 3"). */
export const RATGEBER_RELATED: Record<string, readonly string[]> = {
  'asbest-erkennen': [
    'asbest-testen-lassen',
    'asbest-fassadenplatten-erkennen',
    'asbest-putz-fliesenkleber-spachtelmasse',
  ],
  'asbest-testen-lassen': [
    'asbest-erkennen',
    'asbest-fassadenplatten-erkennen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'asbestsanierung-pflicht-kosten-ablauf': ['asbest-entsorgen', 'gefstoffv-novelle-2024', 'asbest-hauskauf'],
  'asbest-entsorgen': [
    'asbestdach-entsorgen-kosten-ablauf',
    'mineralwolle-kmf-entsorgen',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'asbest-fassadenplatten-erkennen': [
    'asbestdach-entsorgen-kosten-ablauf',
    'asbestdach-foerderung-neues-dach',
    'asbest-erkennen',
  ],
  'spritzasbest-erkennen-sanieren': ['asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf', 'asbest-entsorgen'],
  'asbestdach-foerderung-neues-dach': [
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-fassadenplatten-erkennen',
    'asbest-entsorgen',
  ],
  'asbestdach-entsorgen-kosten-ablauf': [
    'asbestdach-foerderung-neues-dach',
    'asbest-fassadenplatten-erkennen',
    'asbest-entsorgen',
  ],
  'nachtspeicherofen-asbest-entsorgen': ['asbest-entsorgen', 'asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbest-putz-fliesenkleber-spachtelmasse': [
    'asbest-erkennen',
    'asbest-bodenbelag',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'mineralwolle-kmf-entsorgen': ['asbest-entsorgen', 'asbest-erkennen', 'gefstoffv-novelle-2024'],
  'asbest-hauskauf': ['asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf', 'gefstoffv-novelle-2024'],
  'gefstoffv-novelle-2024': ['asbestsanierung-pflicht-kosten-ablauf', 'asbest-hauskauf', 'asbest-entsorgen'],
  'asbest-bodenbelag': ['asbest-putz-fliesenkleber-spachtelmasse', 'asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbest-mietwohnung-rechte': ['asbest-erkennen', 'asbest-hauskauf', 'asbestsanierung-pflicht-kosten-ablauf'],
  'asbestdach-vor-photovoltaik': [
    'asbestdach-foerderung-neues-dach',
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-fassadenplatten-erkennen',
  ],
  'asbest-schornstein-ofenrohr-heizung': ['nachtspeicherofen-asbest-entsorgen', 'asbest-erkennen', 'asbest-entsorgen'],
  'asbest-arbeitsplatz-arbeitgeberpflichten': [
    'gefstoffv-novelle-2024',
    'asbestkataster-schadstoffkataster',
    'asbestsanierung-pflicht-kosten-ablauf',
  ],
  'asbest-exposition-sofortmassnahmen': ['asbest-erkennen', 'asbestsanierung-pflicht-kosten-ablauf', 'asbest-entsorgen'],
  'asbestkataster-schadstoffkataster': [
    'gefstoffv-novelle-2024',
    'asbest-arbeitsplatz-arbeitgeberpflichten',
    'asbest-hauskauf',
  ],
  'asbest-wellplatten-gartenhaus-kleinmengen': [
    'asbestdach-entsorgen-kosten-ablauf',
    'asbest-entsorgen',
    'asbestdach-foerderung-neues-dach',
  ],
  'asbest-versicherung': ['asbestdach-entsorgen-kosten-ablauf', 'asbest-hauskauf', 'asbestsanierung-pflicht-kosten-ablauf'],
};

/** Verwandte Ratgeber-Slugs zu einem Beitrag (leer, wenn nicht kuratiert -> Layout-Fallback). */
export function verwandteRatgeber(slug: string): readonly string[] {
  return RATGEBER_RELATED[slug] ?? [];
}

/** Reverse: passende Leistungs-Slugs zu einem Ratgeber-Beitrag (aus der gepflegten Kuratierung). */
export function leistungenFuerRatgeber(ratgeberSlug: string): readonly string[] {
  const treffer = Object.entries(RATGEBER_MAP)
    .filter(([, slugs]) => slugs.includes(ratgeberSlug))
    .map(([leistungSlug]) => leistungSlug);
  return treffer.length > 0 ? treffer : ['asbestsanierung', 'welleternit-ausbauen', 'materialanalyse'];
}
