import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: change "portfolio" to your repo name if different
  base: "/portfolio/",
})