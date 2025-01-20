import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  commonjsOptions: {
    esmExternals: true
  },
  plugins: [react()],
  define: { global: 'globalThis' }
})
