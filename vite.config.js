import { defineConfig } from "vite";
import path from "path";
import glob from "fast-glob";

const entries = {};
// find all .ts files in src/scripts
const files = glob.sync("src/scripts/*.ts");
files.forEach((file) => {
  const name = path.basename(file, ".ts"); // file name without extension
  entries[name] = path.resolve(__dirname, file);
});

export default defineConfig({
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".json"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@templates": path.resolve(__dirname, "src/stories/templates"),
      "@stories": path.resolve(__dirname, "src/stories"),
      "@scripts": path.resolve(__dirname, "src/scripts"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    outDir: "dist/assets",
    emptyOutDir: false, // don’t wipe existing files
    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: "[name].js", // each TS file becomes .js
        format: "es",
      },
    },
  },
});
