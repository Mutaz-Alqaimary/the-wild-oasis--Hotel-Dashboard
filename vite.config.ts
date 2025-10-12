import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // --- React ecosystem ---
          if (id.includes("react")) return "react-vendor"; // react, react-dom, react-router-dom, react-icons, etc.

          // --- Redux & Toolkit ---
          if (id.includes("@reduxjs") || id.includes("redux")) return "redux";

          // --- React Query ---
          if (id.includes("@tanstack/react-query")) return "react-query";

          // --- Supabase ---
          if (id.includes("@supabase")) return "supabase";

          // --- Charts ---
          if (id.includes("recharts")) return "charts";

          // --- Map & Leaflet ---
          if (id.includes("leaflet") || id.includes("react-leaflet"))
            return "maps";

          // --- Date utilities ---
          if (id.includes("date-fns")) return "date-utils";

          // --- Styling libraries ---
          if (id.includes("styled-components")) return "styled";
          if (id.includes("tailwindcss")) return "tailwind";

          // --- Everything else (smaller libs) ---
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});
