import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { leistungen } from '../data/leistungen';
import { leistungenDetail } from '../data/leistungen-detail';
import { ratgeberArtikel } from '../data/ratgeber';
import { standorte } from '../data/standorte';
import { standorteDetail } from '../data/standorte-detail';
import { definitionen, regelwerke, kernfakten, kostenfaktoren, wissensFaqs, wissenMeta } from '../data/wissen';
import { resolveOrigin } from '../lib/origin';

// llms-full.txt: ausfuehrlicher Volltext (Firma + alle Leistungen + Wissensbasis) fuer LLM-Kontext.
export const GET: APIRoute = (context) => {
  const origin = resolveOrigin(context.site);

  const services = leistungen
    .map((l) => {
      const d = leistungenDetail[l.slug];
      const intro = d ? d.heroIntro : l.summary;
      const body = d ? d.einleitung.join('\n\n') : '';
      const umfang = d ? d.leistungsumfang.map((x) => `- ${x}`).join('\n') : '';
      const ablaufSteps =
        d && d.ablauf && d.ablauf.length > 0 ? d.ablauf.map((s, i) => `${i + 1}. ${s.titel}: ${s.text}`).join('\n') : '';
      const ablauf = ablaufSteps ? `\n\nAblauf:\n${ablaufSteps}` : '';
      return `### ${l.title}\nURL: ${origin}/leistungen/${l.slug}/\n\n${intro}\n\n${body}\n\nLeistungsumfang:\n${umfang}${ablauf}`;
    })
    .join('\n\n---\n\n');

  const glossar = definitionen
    .map((d) => {
      const label = d.abbr ? `${d.term} (${d.abbr})` : d.term;
      const synonyme = d.altLabel && d.altLabel.length > 0 ? `\nAuch genannt: ${d.altLabel.join(', ')}.` : '';
      return `### ${label}\n${d.definition}${synonyme}`;
    })
    .join('\n\n');
  const ratgeber = ratgeberArtikel
    .map((a) => {
      const faqs = a.faqs.map((f) => `**${f.frage}**\n${f.antwort}`).join('\n\n');
      return `### ${a.title} (Stand: ${a.dateModified})\nURL: ${origin}/ratgeber/${a.slug}/\n\n${a.excerpt}\n\n${faqs}`;
    })
    .join('\n\n---\n\n');
  const standorteListe = standorte
    .map((s) => `- ${s.name} (${s.region}): ${origin}/standorte/${s.slug}/`)
    .join('\n');
  // Zitierfaehige Lokal-Q&A je Stadt (Service vor Ort + zustaendige Behoerde) in den LLM-Volltext.
  const standorteFaqs = standorte
    .map((s) => {
      const d = standorteDetail[s.slug];
      if (!d || !d.localFaqs) return null;
      const faqs = d.localFaqs
        .filter((f) => /behörde|behoerde/i.test(f.frage) || /asbesta/i.test(f.frage))
        .map((f) => `**${f.frage}**\n${f.antwort}`)
        .join('\n\n');
      return faqs ? `### ${s.name} (${s.region})\nURL: ${origin}/standorte/${s.slug}/\n\n${faqs}` : null;
    })
    .filter((x): x is string => x !== null)
    .join('\n\n---\n\n');
  const regeln = regelwerke
    .map((r) => `### ${r.code} — ${r.name}\n${r.description}\nBetrifft: ${r.appliesTo}`)
    .join('\n\n');
  const fakten = kernfakten.map((k) => `- ${k.aussage}`).join('\n');
  const kosten = kostenfaktoren.map((k) => `- **${k.faktor}**: ${k.einfluss}`).join('\n');
  const faq = wissensFaqs.map((f) => `**${f.frage}**\n${f.antwort}`).join('\n\n');

  const md = `# ${site.legalName} — Volltext
Stand: ${wissenMeta.dateModified}

${site.intro}

Standort: ${site.address.street}, ${site.address.zip} ${site.address.city} (${site.address.region}). Einsatzgebiet: Nordrhein-Westfalen, Schwerpunkt Ruhrgebiet / Emscher-Lippe-Region und Rheinland. Eigene Standortseiten: ${standorte.map((s) => s.name).join(', ')}.
Kontakt: Telefon ${site.phone.display}, WhatsApp ${site.whatsapp.href}.
Zertifizierung & Qualifikation: ${site.certifications.join(', ')}; sachkundige Mitarbeiter nach TRGS 519 Anlage 3; arbeitsmedizinische Vorsorge; volle Betriebshaftpflicht.
Kennzahlen: ${site.stats.map((s) => `${s.value} ${s.label}`).join(', ')}.

## Leistungen im Detail

${services}

## Standorte (eigene Stadtseiten)

${standorteListe}

## Lokale Fragen je Standort (Service vor Ort & zuständige Behörde)

${standorteFaqs}

## Glossar / Definitionen

${glossar}

## Regelwerke

${regeln}

## Kernfakten

${fakten}

## Kosten (Einflussfaktoren, keine Pauschalpreise)

${kosten}

## Häufige Fragen (Q&A)

${faq}

## Ratgeber (Fachbeiträge mit Q&A)

${ratgeber}
`;

  return new Response(md, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
