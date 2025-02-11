import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    port: process.env.PORT || 5173, // Use PORT from environment or default to 5173
    host: true, // Expose the app to external requests (0.0.0.0)
  },
})
