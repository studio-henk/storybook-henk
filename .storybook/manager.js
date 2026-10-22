import { addons, types } from "storybook/manager-api";
import { AddonPanel, SyntaxHighlighter } from "storybook/internal/components";
import React from "react";
import liquid from "react-syntax-highlighter/dist/esm/languages/prism/liquid";
import {
  useAddonState,
  useStorybookState,
  useParameter,
} from "storybook/manager-api";
import { defaultConfig } from "storybook-addon-tag-badges/manager-helpers";

const ADDON_ID = "custom/code-panel";
const PANEL_ID = `${ADDON_ID}/panel`;

// Prism's Liquid grammar highlights {% %} / {{ }} and the HTML around them
SyntaxHighlighter.registerLanguage("liquid", liquid);

const CodePanel = ({ active }) => {
  const customCode = useParameter("customCode", null);

  return (
    <AddonPanel active={active}>
      <SyntaxHighlighter
        language="liquid"
        copyable
        padded
        format={false}
        wrapLongLines
      >
        {customCode || "No customCode parameter provided."}
      </SyntaxHighlighter>
    </AddonPanel>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Liquid code",
    render: CodePanel,
  });
});

addons.setConfig({
  tagBadges: [
    {
      tags: "todo",
      badge: {
        text: "TODO",
        style: { backgroundColor: "#7f1d1d", color: "#fff" },
        tooltip: "Needs work",
      },
      display: {
        sidebar: [{ type: "component", skipInherited: true }],
        mdx: true,
      },
    },
    ...defaultConfig,
  ],
});
