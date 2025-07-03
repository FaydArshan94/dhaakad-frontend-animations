import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dhaakad-frontend-animations/',  // 👈 IMPORTANT!
  plugins: [react()],
})
