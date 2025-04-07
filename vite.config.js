import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hospito-dashboard/',  // ← this is important!
  plugins: [react()],
})