import type { APIRoute } from 'astro';
import { site, owner, qualifikationen } from '../data/site';
import { leistungen } from '../data/leistungen';
import { leistungenDetail } from '../data/leistungen-detail';
import { ratgeberArtikel } from '../data/ratgeber';
import { standorte } from '../data/standorte';
import { bewertungAggregat, googleReviewsUrl } from '../data/bewertungen';
import { definitionen, regelwerke, kernfakten, kostenfaktoren, wissenLicense } from '../data/wissen';
import { resolveOrigin } from '../lib/origin';

// facts.json: maschinenlesbare Firmenfakten (Single Source of Truth fuer AI-Crawler & Entwickler).

// Frage-Antwort-Wissen aus den echten Leistungs- & Ratgeber-FAQs (KI-Zitierfaehigkeit).
// Kombi-FAQs bewusst ausgelassen (Near-Duplicate-Vermeidung).
function buildFaq(origin: string): unknown[] {
  return [
    ...leistungen.flatMap((l) => {
      const d = leistungenDetail[l.slug];
      return d
        ? d.faqs.map((f) => ({ question: f.frage, answer: f.antwort, topic: l.title, source: `${origin}/leistungen/${l.slug}/` }))
        : [];
    }),
    ...ratgeberArtikel.flatMap((a) =>
      a.faqs.map((f) => ({ question: f.frage, answer: f.antwort, topic: a.title, source: `${origin}/ratgeber/${a.slug}/` })),
    ),
  ];
}

function buildOrganization(origin: string): Record<string, unknown> {
  return {
    name: site.legalName,
    shortName: site.name,
    url: origin + '/',
    telephone: site.phone.display,
    whatsapp: site.whatsapp.href,
    email: site.email,
    address: {
      street: site.address.street,
      postalCode: site.address.zip,
      city: site.address.city,
      region: site.address.region,
      country: site.address.country,
    },
    areaServed: 'Nordrhein-Westfalen, Schwerpunkt Ruhrgebiet / Emscher-Lippe-Region und Rheinland',
    serviceCities: standorte.map((s) => s.name),
    certifications: site.certifications,
    owner: {
      name: owner.name,
      role: owner.role,
      credentials: qualifikationen.map((q) => ({
        name: q.title,
        issuer: q.issuer,
        ...(q.validUntil ? { validUntil: q.validUntil } : {}),
      })),
    },
    ownerLed: true,
    insurance: 'Betriebshaftpflicht',
    documentation: 'Freimessung nach VDI 3492 + Entsorgungsnachweis',
    responseTime: site.responseTime,
    rating: { value: bewertungAggregat.rating, count: bewertungAggregat.anzahl, scale: 5, source: 'Google', url: googleReviewsUrl },
    sameAs: [googleReviewsUrl],
  };
}

const glossary = definitionen.map((d) => ({
  term: d.term,
  ...(d.abbr ? { abbr: d.abbr } : {}),
  ...(d.altLabel && d.altLabel.length > 0 ? { alternateName: d.altLabel } : {}),
  definition: d.definition,
  category: d.kategorie,
  ...(d.sameAs && d.sameAs.length > 0 ? { sameAs: d.sameAs } : {}),
}));

const regulations = regelwerke.map((r) => ({
  code: r.code,
  name: r.name,
  description: r.description,
  appliesTo: r.appliesTo,
  ...(r.sameAs && r.sameAs.length > 0 ? { sameAs: r.sameAs } : {}),
}));

const keyFacts = kernfakten.map((k) => k.aussage);
const costFactors = kostenfaktoren.map((k) => ({ factor: k.faktor, influence: k.einfluss }));
const serviceArea = {
  region: 'Nordrhein-Westfalen',
  statement: `Asbesta saniert im gesamten Einzugsgebiet Nordrhein-Westfalen in ${standorte.length} Städten mit eigener Standortseite – im Ruhrgebiet und der Emscher-Lippe-Region, im Rheinland und Bergischen Land, in Ostwestfalen-Lippe und im Münsterland (u. a. ${standorte
    .slice(0, 12)
    .map((s) => s.name)
    .join(', ')} und weitere).`,
  cities: standorte.map((s) => s.name),
};

export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);
  const facts = {
    schemaVersion: '1.2',
    updated: '2026-06-25',
    language: 'de',
    dataset: origin + '/wissen/',
    license: wissenLicense.license,
    isAccessibleForFree: wissenLicense.isAccessibleForFree,
    organization: buildOrganization(origin),
    services: leistungen.map((l) => ({ slug: l.slug, name: l.title, summary: l.summary, url: `${origin}/leistungen/${l.slug}/` })),
    glossary,
    regulations,
    keyFacts,
    costFactors,
    serviceArea,
    faq: buildFaq(origin),
    disclaimer:
      'Arbeiten an asbesthaltigen Materialien dürfen in Deutschland nur durch sachkundige Fachbetriebe nach TRGS 519 ausgeführt werden.',
  };
  return new Response(JSON.stringify(facts, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
