import { addons, types } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import React from "react";
import {
  useAddonState,
  useStorybookState,
  useParameter,
} from "@storybook/manager-api";

const ADDON_ID = "custom/code-panel";
const PANEL_ID = `${ADDON_ID}/panel`;

const CodePanel = ({ active }) => {
  const state = useStorybookState();
  const storyId = state?.storyId;
  const customCode = state?.storiesHash?.[storyId]?.parameters?.customCode;

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
