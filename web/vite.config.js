import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target: "https://the-sportos-v1.vercel.app", // Point to your backend server
        ws: true, // Enable WebSocket proxying
        changeOrigin: true, // Adjust origin header to match the target
      },
    },
  },
});
