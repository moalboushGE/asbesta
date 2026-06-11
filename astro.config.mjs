// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.asbesta-schadstoffsanierung.de',
  trailingSlash: 'always',
  integrations: [
    icon(),
    sitemap({
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
