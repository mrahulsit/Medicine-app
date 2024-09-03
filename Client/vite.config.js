import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "ignore-missing-sourcemap",
      enforce: "pre",
      transform(code, id) {
        if (id.includes("rsuite/Dropdown/styles/index.css")) {
          return { code, map: null }; // Skip source map processing for this file
        }
      },
    },
  ],
  build: {
    sourcemap: false,
  },
  css: {
    devSourcemap: false,
  },
});
