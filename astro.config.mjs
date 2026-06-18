// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.asbesta-schadstoffsanierung.de',
  trailingSlash: 'always',
  // Statische Pages werden vorgerendert (SEO/Performance); nur Endpunkte mit
  // `export const prerender = false` (z. B. /api/anfrage) laufen on-demand im Node-Server.
  // `mode: 'middleware'` => Build emittiert dist/server/entry.mjs (handler), den server.mjs einbindet
  // (eigener Express-Server fuer Security-Header + 301-Redirects + statische Auslieferung, Railway-tauglich).
  output: 'static',
  adapter: node({ mode: 'middleware' }),
  // CSRF: Astros eingebauter checkOrigin vergleicht gegen url.origin, das im middleware-mode hinter
  // dem Railway-Proxy fälschlich http statt https ist (TLS am Proxy terminiert) → würde legitime
  // Form-POSTs (Admin-Login/-Mutationen) mit 403 ablehnen. Der Origin-Check passiert daher explizit
  // in src/middleware.ts (Origin-Host == Request-Host) zusätzlich zum SameSite=Lax-Session-Cookie.
  security: { checkOrigin: false },
  integrations: [
    icon(),
    sitemap({
      // /admin nie in die Sitemap (ist ohnehin on-demand/prerender=false, hier doppelt abgesichert).
      filter: (page) => !/\/admin(\/|$)/.test(page),
      serialize(item) {
        const path = new URL(item.url).pathname;
        let priority = 0.7;
        let changefreq = 'monthly';
        if (path === '/') {
          priority = 1.0;
          changefreq = 'weekly';
        } else if (path === '/leistungen/' || path === '/standorte/') {
          priority = 0.9;
          changefreq = 'weekly';
        } else if (path === '/kontakt/' || path === '/ratgeber/') {
          priority = 0.8;
          // Ratgeber-Artikel (/ratgeber/[slug]/) erben den Default 0.7 / monthly.
        } else if (path === '/impressum/' || path === '/datenschutz/') {
          priority = 0.2;
          changefreq = 'yearly';
        } else if (/^\/leistungen\/[^/]+\/[^/]+\/$/.test(path)) {
          priority = 0.6;
        } else if (/^\/standorte\/[^/]+\/$/.test(path)) {
          // Lokale Landingpages: wichtiger fürs Local-SEO als Default 0.7.
          priority = 0.8;
        }
        // Fester Release-Stempel statt new Date(): sonst springen bei JEDEM Deploy alle lastmod-Werte
        // auf "jetzt" und Google verwirft das Signal. Bei echten Inhaltsupdates manuell anheben.
        return { ...item, priority, changefreq, lastmod: '2026-06-11T00:00:00+00:00' };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
