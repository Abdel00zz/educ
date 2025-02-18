import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/math/',
  plugins: [react()],
  server: {
    // Removed historyApiFallback
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
