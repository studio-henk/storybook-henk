import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".json"],
    alias: {},
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/ProductCard2.ts"),
      name: "ProductCard2",
      fileName: "product-card2",
      formats: ["es"], // output ES module
    },
    outDir: "dist", // or wherever you serve your assets from in Storybook
    emptyOutDir: false, // keep existing files
  },
});
