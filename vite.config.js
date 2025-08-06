import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ThomasGrantPortfolio/', 
  plugins: [react()],
  build: {
    outDir: 'docs', 
  },
});
