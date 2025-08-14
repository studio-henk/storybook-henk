import { defineConfig } from "vite";
import path from "path";
import glob from 'fast-glob';

const entries = {};
// find all .ts files in src/scripts
const files = glob.sync('src/scripts/*.ts');
files.forEach(file => {
  const name = path.basename(file, '.ts'); // file name without extension
  entries[name] = path.resolve(__dirname, file);
});

export default defineConfig({
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".json"],
    alias: {},
  },
  build: {
    outDir: 'dist/assets',
    emptyOutDir: false, // don’t wipe existing files
    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: '[name].js', // each TS file becomes .js
        format: 'es',
      },
    },
  },
});