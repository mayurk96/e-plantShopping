
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/e-plantShopping/', // Make sure the base path matches your GitHub repo name
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure this is set correctly
  }
});

