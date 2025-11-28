import { defineConfig } from "vite";
import path from "path";
import glob from "fast-glob";

const entries = {};
glob.sync("src/scripts/*.ts").forEach((file) => {
  const name = path.basename(file, ".ts");
  entries[name] = path.resolve(__dirname, file);
});

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@scripts": path.resolve(__dirname, "src/scripts"),
    },
  },

  build: {
    outDir: "public/assets",
    assetsDir: ".",
    emptyOutDir: false,

    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: "[name].min.js",
        format: "es",
        manualChunks: undefined,
      },
    },
  },
});
