import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      hmr: {
        clientPort: 3000,  // this should match your client-side application port
      },
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  });
};
