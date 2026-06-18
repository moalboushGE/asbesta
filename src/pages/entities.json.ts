import type { APIRoute } from 'astro';
import { resolveOrigin } from '../lib/origin';
import { buildEntitiesGraph } from '../lib/schema';

// entities.json: valides JSON-LD (@context + @graph) – Entitäten + sameAs für Entity-/Knowledge-Graph (GEO).
// Organization, Person (Inhaber + Credentials), Services, DefinedTermSet/DefinedTerms (mit Definitionen)
// und der Dataset-Knoten – aufgebaut aus denselben Buildern wie das On-Page-Schema (DRY).
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);
  const doc = {
    '@context': 'https://schema.org',
    '@graph': buildEntitiesGraph(origin),
  };
  return new Response(JSON.stringify(doc, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
