// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://swiftyjourney.com',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  experimental: {
    clientPrerender: true
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});