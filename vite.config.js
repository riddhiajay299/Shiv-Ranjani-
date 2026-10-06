import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

function copyImagesPlugin() {
  return {
    name: 'copy-images-plugin',
    closeBundle() {
      const src = resolve(__dirname, 'images');
      const dest = resolve(__dirname, 'dist/images');
      if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true });
        console.log('✓ Successfully copied images directory to dist/images');
      }
    }
  };
}

export default defineConfig({
  base: '/Shiv-Ranjani-/',

  plugins: [
    copyImagesPlugin()
  ],

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
        bandhani: resolve(__dirname, 'bandhani.html'),
        lagadiPatta: resolve(__dirname, 'lagadi-patta.html'),
        lehariya: resolve(__dirname, 'lehariya.html'),
        dupata: resolve(__dirname, 'dupata.html'),
        products: resolve(__dirname, 'products.html'),
      },
    },
  },
});