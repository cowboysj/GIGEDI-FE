import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }
    ),
  ],
  server: {
    proxy : {
      '/api': {
      target: 'https://api.shoot-manage.com',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, ''),
     
    }},
  },
  build: {
    chunkSizeWarningLimit: 2000, // 기본값은 500KB
  },
})
