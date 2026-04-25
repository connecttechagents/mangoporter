import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ourStory: resolve(__dirname, 'our-story.html'),
        mangoes: resolve(__dirname, 'mangoes.html'),
        sinkTest: resolve(__dirname, 'sink-test.html'),
        howToRipen: resolve(__dirname, 'how-to-ripen.html'),
        communityDrops: resolve(__dirname, 'community-drops.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
