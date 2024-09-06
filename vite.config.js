import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    include: ['react-slick', 'slick-carousel'],
  },
  define: {
    global: 'globalThis', // 브라우저에서 global 변수를 globalThis로 대체
  },


});
