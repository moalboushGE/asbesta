import type { APIRoute } from 'astro';
import { site, owner, qualifikationen } from '../data/site';
import { leistungen } from '../data/leistungen';
import { standorte } from '../data/standorte';
import { resolveOrigin } from '../lib/origin';

// entities.json: Entitaeten + sameAs-Verknuepfungen fuer Entity-/Knowledge-Graph (GEO).
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);

  const konzepte = [
    { name: 'Asbest', sameAs: ['https://de.wikipedia.org/wiki/Asbest'] },
    { name: 'Asbestsanierung', sameAs: ['https://de.wikipedia.org/wiki/Asbestsanierung'] },
    {
      name: 'Kuenstliche Mineralfaser (KMF)',
      sameAs: ['https://de.wikipedia.org/wiki/K%C3%BCnstliche_Mineralfaser'],
    },
    {
      name: 'Polyzyklische aromatische Kohlenwasserstoffe (PAK)',
      sameAs: [
        'https://de.wikipedia.org/wiki/Polycyclische_aromatische_Kohlenwasserstoffe',
      ],
    },
    { name: 'TRGS 519', sameAs: [] as string[] },
    { name: 'VDI 3492', sameAs: [] as string[] },
    { name: 'Gefahrstoffverordnung', sameAs: ['https://de.wikipedia.org/wiki/Gefahrstoffverordnung'] },
  ];

  const data = {
    updated: '2026-06-18',
    entities: [
      {
        type: ['Organization', 'HomeAndConstructionBusiness'],
        name: site.legalName,
        url: origin + '/',
        areaServed: 'Nordrhein-Westfalen, Schwerpunkt Ruhrgebiet / Emscher-Lippe-Region und Rheinland',
        serviceCities: standorte.map((s) => s.name),
        // sameAs: hier spaeter offizielle Profile (Google Business, Wikidata, LinkedIn) eintragen
        sameAs: [] as string[],
        knowsAbout: leistungen.map((l) => l.title),
        founder: owner.name,
        location: {
          name: 'Marl',
          sameAs: 'https://de.wikipedia.org/wiki/Marl',
        },
      },
      {
        type: 'Person',
        name: owner.name,
        jobTitle: owner.role,
        worksFor: site.legalName,
        knowsAbout: ['Asbestsanierung', 'Schadstoffsanierung', 'TRGS 519', 'TRGS 524'],
        hasCredential: qualifikationen.map((q) => ({
          type: 'EducationalOccupationalCredential',
          name: q.title,
          recognizedBy: q.issuer,
          ...(q.validUntil ? { validUntil: q.validUntil } : {}),
        })),
      },
      ...leistungen.map((l) => ({
        type: 'Service',
        name: l.title,
        url: `${origin}/leistungen/${l.slug}/`,
        provider: site.legalName,
      })),
      ...konzepte.map((k) => ({ type: 'DefinedTerm', name: k.name, sameAs: k.sameAs })),
    ],
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
