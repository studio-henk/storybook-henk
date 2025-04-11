import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    fs: {
      allow: [
        path.resolve(
          "/Users/studiohenk-nh/Sites/pimcore-local/public/static/std/assets/css",
        ), // The absolute path to the symlink target
      ],
    },
  },
  resolve: {
    alias: {
      "@styles": path.resolve(
        "/Users/studiohenk-nh/Sites/pimcore-local/public/static/std/assets/css",
      ), // Alias for the external CSS folder
    },
  },
});
// import { defineConfig } from "vite";

// export default defineConfig({
//   server: {
//     fs: {
//       allow: [
//         "/Users/studiohenk-nh/Sites/pimcore-local/public/static/std/assets/css", // Add the absolute path to the symlinked folder
//       ],
//     },
//   },
//   resolve: {
//     alias: {
//       "@styles":
//         "/Users/studiohenk-nh/Sites/pimcore-local/public/static/std/assets/css", // Create alias for the CSS folder
//     },
//   },
// });
