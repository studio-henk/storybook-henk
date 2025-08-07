// .storybook/main.ts
import type { StorybookConfig } from '@storybook/html-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@whitespace/storybook-addon-html",
        "@storybook/addon-designs",
        "@geometricpanda/storybook-addon-badges",
    ],
    framework: {
        name: "@storybook/html-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    viteFinal: async (config) => {
        config.plugins = config.plugins || [];
        config.plugins.push(tsconfigPaths());
        return config;
    },
};

export default config;