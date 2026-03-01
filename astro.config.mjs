// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.artisan-francilien-idf.fr',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  }
});