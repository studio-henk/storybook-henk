import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

import paymentLogosRaw from "@src/snippets/henk-payment-logos.liquid?raw";
import idealRaw from "@src/snippets/henk-asset-logo-ideal.liquid?raw";
import bancontactRaw from "@src/snippets/henk-asset-logo-bancontact.liquid?raw";
import mastercardRaw from "@src/snippets/henk-asset-logo-mastercard.liquid?raw";
import visaRaw from "@src/snippets/henk-asset-logo-visa.liquid?raw";

if ((engine as any).registerPartial) {
  (engine as any).registerPartial("henk-asset-logo-ideal", idealRaw);
  (engine as any).registerPartial("henk-asset-logo-bancontact", bancontactRaw);
  (engine as any).registerPartial("henk-asset-logo-mastercard", mastercardRaw);
  (engine as any).registerPartial("henk-asset-logo-visa", visaRaw);
}

const meta: Meta = {
  title: "Snippets/HENK Payment Logos",

  render: () => engine.parseAndRenderSync(paymentLogosRaw, {}),

  tags: ["autodocs", "version:1.0.0"],

  parameters: {
    customCode: paymentLogosRaw,
    docs: {
      description: {
        component: "Payment method logos used across the theme.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
