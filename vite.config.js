import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Adjust this base path according to your GitHub Pages setup.
  // If your site is at https://<username>.github.io/<repo-name>/, use base: '/<repo-name>/'
  // If your site is at https://<username>.github.io/, (i.e. repo is <username>.github.io), use base: '/'
  base: '/', // Example: '/your-repository-name/' or '/'
  build: {
    outDir: 'dist',
  }
});