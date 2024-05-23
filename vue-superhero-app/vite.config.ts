import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createProxyMiddleware} from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: 'https:/erick9125/github.io/vue-superhero-api/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy :{ 
      //Redirigir solicitudes desde /api a la API de superhéroes
      '/api' : {
        target: 'https://superheroapi.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), //Reescribir la ruta
      },
      
    },
  },
})
