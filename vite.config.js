import { defineConfig } from "vite";
import path from "path";
import glob from "fast-glob";
import { fileURLToPath } from "node:url";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));
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
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/stories/components"),
      "@internal-components": path.resolve(
        __dirname,
        "src/internal-components",
      ),
      "@templates": path.resolve(__dirname, "src/stories/templates"),
      "@stories": path.resolve(__dirname, "src/stories"),
      "@scripts": path.resolve(__dirname, "src/scripts"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    outDir: "dist/assets",
    emptyOutDir: false,
    // don’t wipe existing files
    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: "[name].js",
        // each TS file becomes .js
        format: "es",
      },
    },
  },
});
