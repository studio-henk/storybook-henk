import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import tsconfigPaths from "vite-tsconfig-paths";

// Renders every story in headless Chromium, runs axe on it and compares a
// screenshot against the baseline in __screenshots__/.
// Run: npm run test:stories  (update baselines: npm run test:stories:update)
export default defineConfig({
  plugins: [tsconfigPaths(), storybookTest({ configDir: ".storybook" })],
  publicDir: "public",
  server: { hmr: { overlay: false } },
  resolve: {
    alias: {
      "@templates": `${process.cwd()}/src/templates`,
    },
  },
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      headless: true,
      // Fixed colour scheme so baselines do not depend on the macOS appearance.
      provider: playwright({ contextOptions: { colorScheme: "light" } }),
      instances: [{ browser: "chromium" }],
      viewport: { width: 1280, height: 800 },
    },
    // Dot-prefixed stories/folders are hidden from Storybook; skip them here too.
    exclude: ["**/node_modules/**", "**/.*", "**/.*/**"],
    setupFiles: [".storybook/vitest.setup.ts"],
  },
});
