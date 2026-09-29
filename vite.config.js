import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Shiv-Ranjani-/',

  server: {
    host: true,
    port: 5173,
  },

  preview: {
    host: true,
    port: 1505,
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notAvailable: resolve(__dirname, 'not-available.html'),
        ajrakh: resolve(__dirname, 'ajrakh.html'),
      },
    },
  },
});