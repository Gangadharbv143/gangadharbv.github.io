import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // IMPORTANT FIX FOR ALL GITHUB / STATIC DEPLOYS
  base: "./",
})