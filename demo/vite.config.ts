import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  
  return {
    plugins: [react()],
    base: isProd ? '/sidebar/' : '/',  // Match the repository name for GitHub Pages
    server: {
      port: 3009,
      open: true
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    },
    resolve: {
      alias: {
        '@asafarim/shared': path.resolve(__dirname, '../../../libs/shared/src')
      }
    }
  };
})
 