// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.artisan-francilien-idf.fr',
  trailingSlash: 'never',
  adapter: netlify(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});