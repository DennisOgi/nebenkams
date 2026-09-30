import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.nebenkams.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  devToolbar: { enabled: false },
});
