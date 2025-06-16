import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment: https://username.github.io/reponame/
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
  }
});