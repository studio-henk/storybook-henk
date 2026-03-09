// .storybook/main.ts
import type { StorybookConfig } from "@storybook/html-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/stories/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    // "@geometricpanda/storybook-addon-badges",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  managerVite: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@storybook/manager-api": "storybook/manager-api",
      "@storybook/theming": "storybook/theming",
      "@storybook/components": "storybook/internal/components",
    };
    return config;
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tsconfigPaths());
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@storybook/manager-api": "storybook/manager-api",
      "@storybook/preview-api": "storybook/preview-api",
      "@storybook/theming": "storybook/theming",
      "@storybook/components": "storybook/internal/components",
    };
    return config;
  },
};

export default config;
