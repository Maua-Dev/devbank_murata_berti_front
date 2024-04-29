import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      external: new RegExp('/iac/.*')
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
