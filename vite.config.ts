import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to listen on all interfaces (needed for Render)
    port: Number(process.env.PORT) || 3000, // Use the PORT provided by Render, fallback to 3000
    allowedHosts: ['candidatesearch-i7gs.onrender.com'], // Add this host to allowed hosts
  },
});
