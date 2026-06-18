/**
 * Zentrales Bild-Register (SSOT) – Asbesta.
 *
 * Alle Fotos sind aktuell kuratierte, kommerziell lizenzfreie Profi-Aufnahmen
 * (Quelle: Pexels, Pexels-Lizenz: kommerzielle Nutzung ohne Attributionspflicht).
 * Austausch gegen echte Projektfotos = Datei in src/assets/images/… ersetzen
 * und ggf. `alt`/`credit` hier anpassen. Siehe MAINTENANCE.md.
 */
import type { ImageMetadata } from 'astro';

// Hero
import heroSanierung from '../assets/images/hero/sanierung.jpg';
// Ablauf (Reihenfolge = Ablauf-Schritte 1–5)
import ablauf01 from '../assets/images/ablauf/01-anfrage.jpg';
import ablauf02 from '../assets/images/ablauf/02-besichtigung.jpg';
import ablauf03 from '../assets/images/ablauf/03-angebot.jpg';
import ablauf04 from '../assets/images/ablauf/04-sanierung.jpg';
import ablauf05 from '../assets/images/ablauf/05-uebergabe.jpg';
// Leistungen (Schlüssel = Leistung.slug)
import lAsbestsanierung from '../assets/images/leistungen/asbestsanierung.jpg';
import lAbbrucharbeiten from '../assets/images/leistungen/abbrucharbeiten.jpg';
import lMaterialanalyse from '../assets/images/leistungen/materialanalyse.jpg';
import lFloorFlex from '../assets/images/leistungen/floor-flex-entfernen.jpg';
import lBitumenkleber from '../assets/images/leistungen/bitumenkleber-entfernen.jpg';
import lWelleternit from '../assets/images/leistungen/welleternit-ausbauen.jpg';
import lFassadenplatten from '../assets/images/leistungen/fassadenplatten-ausbauen.jpg';
import lAsbestzement from '../assets/images/leistungen/asbestzement-ausbauen.jpg';
import lFensterbaenke from '../assets/images/leistungen/fensterbaenke-ausbauen.jpg';
import lCushionVinyl from '../assets/images/leistungen/cushion-vinyl-entfernen.jpg';
import lKmf from '../assets/images/leistungen/kmf-sanierung.jpg';
import lPak from '../assets/images/leistungen/pak-sanierung.jpg';
import lLuftanalysen from '../assets/images/leistungen/luftanalysen-vdi-3492.jpg';
// Allgemein
import imgUeberUns from '../assets/images/allgemein/ueber-uns.jpg';
import imgStadt1 from '../assets/images/allgemein/stadt-1.jpg';
import imgStadt2 from '../assets/images/allgemein/stadt-2.jpg';
// Qualifikationsnachweise des Inhabers (Original-Bescheinigungen, Geburtsdatum geschwärzt)
import zTrgs519Erwerb from '../assets/images/zertifizierungen/trgs-519-anlage-3-erwerb.jpg';
import zTrgs519Fortbildung from '../assets/images/zertifizierungen/trgs-519-anlage-3-fortbildung.jpg';
import zAsbestzement from '../assets/images/zertifizierungen/asbestzement-anlage-4c.jpg';
import zKontaminiert from '../assets/images/zertifizierungen/kontaminierte-bereiche-524.jpg';
import zGeraete from '../assets/images/zertifizierungen/geraetefachkunde.jpg';

export interface SiteImage {
  readonly src: ImageMetadata;
  readonly alt: string;
  /** Quelle/Lizenz (Pexels-Lizenz: kommerziell, ohne Attributionspflicht). */
  readonly credit: string;
}

const P = (id: number): string => `Pexels (Pexels-Lizenz) · pexels.com/photo/${id}`;

// Wiederverwendete Motive (Ablauf + Stadt-Pool / Leistung + Stadt-Pool)
const imgBesichtigung: SiteImage = {
  src: ablauf02,
  alt: 'Fachkraft mit Helm und Warnweste begutachtet ein Gebäude vor Ort – Besichtigung',
  credit: P(8293678),
};
const imgAsbestzement: SiteImage = {
  src: lAsbestzement,
  alt: 'Team in Schutzausrüstung trennt mit Schneidgerät asbestzementhaltige Bauteile',
  credit: P(8215884),
};

export const heroImage: SiteImage = {
  src: heroSanierung,
  alt: 'Fachkraft im weißen Einweg-Schutzanzug mit Atemschutzmaske (P3) und Schutzbrille – Asbestsanierung',
  credit: P(4176922),
};

/** Reihenfolge entspricht den fünf Ablauf-Schritten in src/data/inhalte.ts. Zugriff über ablaufImage(). */
const ablaufImages: readonly SiteImage[] = [
  {
    src: ablauf01,
    alt: 'Fachkraft am Telefon mit Grundrissplänen am Schreibtisch – Anfrage und Beratung',
    credit: P(5292227),
  },
  imgBesichtigung,
  {
    src: ablauf03,
    alt: 'Handschlag mit Unterlagen im Büro – verbindliches Festpreis-Angebot',
    credit: P(8297616),
  },
  {
    src: ablauf04,
    alt: 'Hände in Schutzhandschuhen schließen den weißen Einweg-Schutzanzug – Vorbereitung der Sanierung',
    credit: P(9545082),
  },
  {
    src: ablauf05,
    alt: 'Fachkraft mit Helm und Klemmbrett bei der Endkontrolle im sanierten Raum – Übergabe',
    credit: P(7937365),
  },
];

/** Zugriff über leistungImage(slug). */
const leistungImages: Record<string, SiteImage> = {
  asbestsanierung: {
    src: lAsbestsanierung,
    alt: 'Fachkraft mit Helm, Schutzbrille und FFP3-Maske vor einer entkernten Wand – Asbestsanierung',
    credit: P(8486911),
  },
  abbrucharbeiten: {
    src: lAbbrucharbeiten,
    alt: 'Abbruchbagger beim kontrollierten Rückbau eines mehrgeschossigen Gebäudes',
    credit: P(11521973),
  },
  materialanalyse: {
    src: lMaterialanalyse,
    alt: 'Materialprobe unter dem Labormikroskop bei der Asbest-Analyse',
    credit: P(8851782),
  },
  'floor-flex-entfernen': {
    src: lFloorFlex,
    alt: 'Fachkraft entfernt mit Handwerkzeug alten Bodenbelag von einer Unterlage',
    credit: P(8487753),
  },
  'bitumenkleber-entfernen': {
    src: lBitumenkleber,
    alt: 'Alten Bodenbelag und Klebstoffreste mit dem Spachtel vom Untergrund entfernen',
    credit: P(5691702),
  },
  'welleternit-ausbauen': {
    src: lWelleternit,
    alt: 'Arbeiter trägt asbesthaltige Wellplatten von einem Dach ab',
    credit: P(36884223),
  },
  'fassadenplatten-ausbauen': {
    src: lFassadenplatten,
    alt: 'Handwerker mit Helm auf einem Gerüst bei Arbeiten an einer Gebäudefassade',
    credit: P(27134625),
  },
  'asbestzement-ausbauen': imgAsbestzement,
  'fensterbaenke-ausbauen': {
    src: lFensterbaenke,
    alt: 'Gebäudefassade mit Fenstern und Dämmung während der Sanierung am Gerüst',
    credit: P(5511085),
  },
  'cushion-vinyl-entfernen': {
    src: lCushionVinyl,
    alt: 'Industriesauger und Werkzeug in einem Raum bei der Bodensanierung',
    credit: P(3616746),
  },
  'kmf-sanierung': {
    src: lKmf,
    alt: 'Fachkraft baut mit Handschuhen künstliche Mineralfaser-Dämmung aus',
    credit: P(6124239),
  },
  'pak-sanierung': {
    src: lPak,
    alt: 'Kontrollierter Rückbau eines Gebäudes mit Abbruchbagger',
    credit: P(34891691),
  },
  'luftanalysen-vdi-3492': {
    src: lLuftanalysen,
    alt: 'Laborfachkraft mit Schutzbrille und Maske bei der Schadstoff-Probenauswertung am Mikroskop',
    credit: P(5726706),
  },
};

export const ueberUnsImage: SiteImage = {
  src: imgUeberUns,
  alt: 'Fachkraft im weißen Schutzanzug mit P3-Atemschutzmaske und Schutzbrille',
  credit: P(3985287),
};

/** Kontextuelle Arbeitsfotos für Stadt-Seiten (rotiert per Index, Alt-Text wird seitenspezifisch gesetzt). */
const stadtImagePool: readonly SiteImage[] = [
  {
    src: imgStadt1,
    alt: 'Verwittertes Asbestzement-Wellplattendach an einem älteren Gebäude',
    credit: P(13548818),
  },
  {
    src: imgStadt2,
    alt: 'Arbeiter bei Sanierungsarbeiten auf einem Dach',
    credit: P(34524716),
  },
  imgBesichtigung, // Team bei der Besichtigung
  imgAsbestzement, // Schneidarbeiten in Schutzausrüstung
];

/** Liefert ein kontextuelles Stadt-Bild anhand eines stabilen Index (z. B. Position im Städte-Array). */
export function stadtImage(index: number): SiteImage {
  return stadtImagePool[index % stadtImagePool.length] ?? heroImage;
}

/** Liefert das Ablauf-Bild zu einem Schritt-Index (typsicher, mit Fallback). */
export function ablaufImage(index: number): SiteImage {
  return ablaufImages[index] ?? heroImage;
}

/** Liefert das Themenbild zu einer Leistung (typsicher, mit Fallback). */
export function leistungImage(slug: string): SiteImage {
  return leistungImages[slug] ?? heroImage;
}

const C = 'Original-Qualifikationsnachweis Asbesta Schadstoffsanierung (Geburtsdatum geschwärzt)';

/** Scans der echten Qualifikationsnachweise des Inhabers (Schlüssel = Slug in site.ts qualifikationen). */
const zertifikatImages: Record<string, SiteImage> = {
  'trgs-519-anlage-3-erwerb': {
    src: zTrgs519Erwerb,
    alt: 'Sachkundenachweis TRGS 519 Anlage 3 (Erwerb) – Haus der Technik e.V., Essen',
    credit: C,
  },
  'trgs-519-anlage-3-fortbildung': {
    src: zTrgs519Fortbildung,
    alt: 'Bescheinigung Pflicht-Fortbildung Sachkundeerhalt Asbest TRGS 519 Anlage 3, gültig bis 2031',
    credit: C,
  },
  'asbestzement-anlage-4c': {
    src: zAsbestzement,
    alt: 'Sachkundenachweis Asbestzement und schwach gebundene Asbestprodukte (TRGS 519 Anlage 4 C) – BG BAU',
    credit: C,
  },
  'kontaminierte-bereiche-524': {
    src: zKontaminiert,
    alt: 'Sachkundenachweis für Arbeiten in kontaminierten Bereichen (DGUV 101-004, TRGS 524) – BG BAU',
    credit: C,
  },
  geraetefachkunde: {
    src: zGeraete,
    alt: 'Teilnahmebestätigung Gerätefachkunde Asbest- und Schadstoffsanierung – MKI Industrieservice',
    credit: C,
  },
};

/** Liefert den Zertifikat-Scan zu einem Nachweis-Slug (typsicher, mit Fallback). */
export function zertifikatImage(slug: string): SiteImage {
  return zertifikatImages[slug] ?? heroImage;
}
