// .storybook/main.ts
import type { StorybookConfig } from "@storybook/html-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "url";

const mdxShimPath = fileURLToPath(
  new URL("../node_modules/@storybook/addon-docs/dist/mdx-react-shim.js", import.meta.url)
);

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
    "@github-ui/storybook-addon-performance-panel/universal",
    "storybook-addon-tag-badges",
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  docs: {
    mdxPluginOptions: {
      mdxCompileOptions: {
        providerImportSource: "@storybook/addon-docs/mdx-react-shim",
      },
    },
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
    config.plugins.push({
      name: "fix-mdx-react-shim",
      enforce: "pre",
      resolveId(source) {
        if (source.startsWith("file://") && source.includes("mdx-react-shim")) {
          try {
            return new URL(source).pathname;
          } catch {
            return source.replace("file://./", `${process.cwd()}/`);
          }
        }
        return null;
      },
    });
    config.plugins.push(tsconfigPaths());
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@templates": `${process.cwd()}/src/templates`,
      "@storybook/manager-api": "storybook/manager-api",
      "@storybook/preview-api": "storybook/preview-api",
      "@storybook/theming": "storybook/theming",
      "@storybook/components": "storybook/internal/components",
      "file://./node_modules/@storybook/addon-docs/dist/mdx-react-shim.js": `file://${mdxShimPath}`,
    };
    return config;
  }
};

export default config;
