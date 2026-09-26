import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Listens on all local IPs (0.0.0.0)
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
