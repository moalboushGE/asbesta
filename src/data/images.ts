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
  alt: 'Sanierungsteam in Warnwesten und Helmen bei der Besichtigung am Gebäude',
  credit: P(18111488),
};
const imgAsbestzement: SiteImage = {
  src: lAsbestzement,
  alt: 'Team in Schutzausrüstung trennt mit Schneidgerät asbestzementhaltige Bauteile',
  credit: P(8215884),
};

export const heroImage: SiteImage = {
  src: heroSanierung,
  alt: 'Fachkraft im weißen Schutzanzug mit Atemschutzmaske bei der Asbestsanierung in einem Innenraum',
  credit: P(6195952),
};

/** Reihenfolge entspricht den fünf Ablauf-Schritten in src/data/inhalte.ts. Zugriff über ablaufImage(). */
const ablaufImages: readonly SiteImage[] = [
  {
    src: ablauf01,
    alt: 'Mitarbeiter mit Bauhelm am Telefon prüft Unterlagen – Anfrage und Beratung',
    credit: P(8278922),
  },
  imgBesichtigung,
  {
    src: ablauf03,
    alt: 'Handschlag zweier Fachkräfte in Schutzkleidung – verbindliches Festpreis-Angebot',
    credit: P(8486896),
  },
  {
    src: ablauf04,
    alt: 'Fachkraft im Schutzanzug bei der staubarmen Asbestsanierung mit Industriesauger',
    credit: P(6195951),
  },
  {
    src: ablauf05,
    alt: 'Techniker bei der Messung mit mobilem Prüfgerät – Freimessung und Übergabe',
    credit: P(12203703),
  },
];

/** Zugriff über leistungImage(slug). */
const leistungImages: Record<string, SiteImage> = {
  asbestsanierung: {
    src: lAsbestsanierung,
    alt: 'Saniererin in Vollschutz mit Helm und Visier in einer abgeschotteten Asbest-Sanierungszone',
    credit: P(11137291),
  },
  abbrucharbeiten: {
    src: lAbbrucharbeiten,
    alt: 'Abbruchbagger beim kontrollierten Rückbau eines mehrgeschossigen Gebäudes',
    credit: P(11521973),
  },
  materialanalyse: {
    src: lMaterialanalyse,
    alt: 'Laborfachkraft untersucht Materialproben unter dem Mikroskop',
    credit: P(37785181),
  },
  'floor-flex-entfernen': {
    src: lFloorFlex,
    alt: 'Fachkraft entfernt mit Handwerkzeug alten Bodenbelag von einer Unterlage',
    credit: P(8487753),
  },
  'bitumenkleber-entfernen': {
    src: lBitumenkleber,
    alt: 'Akkuschrauber und Werkzeug auf einem für die Bodensanierung vorbereiteten Untergrund',
    credit: P(8487757),
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
    alt: 'Kontrollierter Rückbau eines Gebäudes mit Abbruchkran',
    credit: P(6726785),
  },
  'luftanalysen-vdi-3492': {
    src: lLuftanalysen,
    alt: 'Techniker führt mit einem mobilen Messgerät eine Luftmessung durch',
    credit: P(12203702),
  },
};

export const ueberUnsImage: SiteImage = {
  src: imgUeberUns,
  alt: 'Zwei Fachkräfte mit Helm und Warnweste auf einer Baustelle',
  credit: P(8961007),
};

/** Kontextuelle Arbeitsfotos für Stadt-Seiten (rotiert per Index, Alt-Text wird seitenspezifisch gesetzt). */
const stadtImagePool: readonly SiteImage[] = [
  {
    src: imgStadt1,
    alt: 'Sanierungsfachkraft mit Sicherheitsgurt entsorgt Bauschutt in einen Container',
    credit: P(34019842),
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
