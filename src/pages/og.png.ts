import type { APIRoute } from 'astro';
import { join } from 'node:path';
import sharp from 'sharp';

// Generiert ein Open-Graph-Vorschaubild (1200x630): Logo auf weisser Marken-Flaeche
// mit rotem Akzentbalken. Bildkomposition via Sharp – kein Font-Rendering noetig.
const WIDTH = 1200;
const HEIGHT = 630;
const BAR = 16;

export const GET: APIRoute = async () => {
  const logoPath = join(process.cwd(), 'src', 'assets', 'asbesta-logo.jpeg');
  const logo = await sharp(logoPath).resize({ width: 820, withoutEnlargement: true }).toBuffer();

  const png = await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([
      { input: logo, gravity: 'centre' },
      {
        input: {
          create: { width: WIDTH, height: BAR, channels: 4, background: { r: 226, g: 35, b: 26, alpha: 1 } },
        },
        top: HEIGHT - BAR,
        left: 0,
      },
    ])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
