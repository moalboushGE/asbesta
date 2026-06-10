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
        } else if (path === '/kontakt/') {
          priority = 0.8;
        } else if (path === '/impressum/' || path === '/datenschutz/') {
          priority = 0.2;
          changefreq = 'yearly';
        } else if (/^\/leistungen\/[^/]+\/[^/]+\/$/.test(path)) {
          priority = 0.6;
        }
        return { ...item, priority, changefreq, lastmod: new Date().toISOString() };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
