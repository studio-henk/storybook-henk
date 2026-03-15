import { addons, types } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import React from "react";
import {
  useAddonState,
  useStorybookState,
  useParameter,
} from "storybook/manager-api";
import { defaultConfig } from "storybook-addon-tag-badges/manager-helpers";

const ADDON_ID = "custom/code-panel";
const PANEL_ID = `${ADDON_ID}/panel`;

const CodePanel = ({ active }) => {
  const state = useStorybookState();
  const storyId = state?.storyId;
  const customCode = useParameter("customCode", null);

  return (
    <AddonPanel active={active}>
      <pre style={{ whiteSpace: "pre-wrap", padding: 16 }}>
        <code>{customCode || "No customCode parameter provided."}</code>
      </pre>
    </AddonPanel>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Custom Code",
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
