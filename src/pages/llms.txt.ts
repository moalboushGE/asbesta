import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { leistungen } from '../data/leistungen';
import { ratgeberArtikel } from '../data/ratgeber';
import { standorte } from '../data/standorte';
import { definitionen, regelwerke } from '../data/wissen';
import { resolveOrigin } from '../lib/origin';

// llms.txt (Konvention llmstxt.org): kompakter, kuratierter Einstieg fuer LLMs.
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);
  const leistungsLinks = leistungen
    .map((l) => `- [${l.title}](${origin}/leistungen/${l.slug}/): ${l.summary}`)
    .join('\n');
  const glossarLinks = definitionen
    .map((d) => {
      const label = d.abbr ? `${d.term} (${d.abbr})` : d.term;
      return `- **${label}**: ${d.definition}`;
    })
    .join('\n');
  const regelLinks = regelwerke.map((r) => `- **${r.code}** – ${r.name}: ${r.description}`).join('\n');
  const ratgeberLinks = ratgeberArtikel
    .map((a) => `- [${a.title}](${origin}/ratgeber/${a.slug}/): ${a.excerpt}`)
    .join('\n');
  const standortLinks = standorte
    .map((s) => `- [Asbest- & Schadstoffsanierung in ${s.name}](${origin}/standorte/${s.slug}/)`)
    .join('\n');

  const md = `# ${site.legalName}

> ${site.intro}

Inhabergefuehrter Fachbetrieb aus Marl fuer ganz Nordrhein-Westfalen. Zertifiziert nach ${site.certifications.join(', ')}. Kennzahlen: ${site.stats.map((s) => `${s.value} ${s.label}`).join(', ')}.

Kontakt: Telefon ${site.phone.display}, WhatsApp ${site.whatsapp.href}, ${site.address.street}, ${site.address.zip} ${site.address.city}.

## Leistungen
${leistungsLinks}

## Wichtige Seiten
- [Startseite](${origin}/)
- [Alle Leistungen](${origin}/leistungen/)
- [Über uns / Inhaber & Qualifikationen](${origin}/ueber-uns/)
- [Standorte / Einsatzgebiet NRW](${origin}/standorte/)
- [Wissensdatenbank (Datensatz)](${origin}/wissen/)
- [Ratgeber](${origin}/ratgeber/)
- [Kontakt](${origin}/kontakt/)

## Glossar / Definitionen
${glossarLinks}

## Regelwerke
${regelLinks}

## Ratgeber
${ratgeberLinks}

## Standorte
${standortLinks}

## Maschinenlesbare Daten
- [Strukturierte Fakten (JSON)](${origin}/facts.json)
- [Entitäten / Knowledge Graph (JSON-LD)](${origin}/entities.json)
- [Volltext fuer LLMs](${origin}/llms-full.txt)
- [Wissens-Datensatz (HTML, schema.org/Dataset)](${origin}/wissen/)

## Hinweis
Asbest ist gesundheitsgefaehrdend. Arbeiten an asbesthaltigen Materialien duerfen in Deutschland nur durch sachkundige Fachbetriebe nach TRGS 519 ausgefuehrt werden.
`;

  return new Response(md, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
