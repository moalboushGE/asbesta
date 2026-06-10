/** Aufloesung des Site-Origins (Fallback fuer Endpoints/JSON-LD). */
export const SITE_ORIGIN = 'https://www.asbesta-schadstoffsanierung.de';

export function resolveOrigin(site: URL | undefined): string {
  return site?.origin ?? SITE_ORIGIN;
}
