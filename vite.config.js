import { defineConfig } from "vite";

export default defineConfig({
  server: {
    fs: {
      allow: [
        "/Users/studiohenk-nh/Sites/pimcore-local/public/static/std/assets/css", // Add the absolute path to the symlinked folder
      ],
    },
  },
  resolve: {
    alias: {
      "@styles":
        "/Users/studiohenk-nh/Sites/pimcore-local/public/static/std/assets/css", // Create alias for the CSS folder
    },
  },
});