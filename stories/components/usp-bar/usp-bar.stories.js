// usps-bar.stories.js
// import { withDesign } from "storybook-addon-designs";
import { createUspsBar } from "./usp-bar";
// import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: "Components/Bars/USP Bar",
  component: createUspsBar,
  tags: ['autodocs'],
  // decorators: [withDesign],
  parameters: {
    controls: { sort: "requiredFirst" },
    // layout: "fullscreen",
    //layout: "centered",
  },
  argTypes: {
    texts: {
      name: "texts",
      type: { name: "array", required: true },
      description: "Array of text labels for USPS items",
      table: { type: { summary: "array" }, defaultValue: { summary: "[]" } },
      control: "array",
    },
    showIcon: {
      name: "showIcon",
      type: { name: "boolean", required: false },
      description: "Whether to display icons for USPS items",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
      control: "boolean",
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Variant of the USPS bar",
      table: { type: { summary: "string" }, defaultValue: { summary: "Default" } },
      control: "select",
      options: ["Default", "Highlight", "Highlight-Contrast"],
    },
  },
  args: {
    texts: ["Made to order in Europe", "Customisable design", "Assembled on delivery"], // Default texts
  },
};

const Template = ({ texts, showIcon, ...args }) => {
  return createUspsBar({ texts, showIcon, ...args });
};

export const Default = Template.bind({});

export const DefaultWithIcons = Template.bind({});
DefaultWithIcons.args = {  
  showIcon: true,  
};

export const DefaultWithLinks = Template.bind({});
DefaultWithLinks.args = {
  texts: ["<a href='#somewhere'>Free Shipping</a>", "24/7 Support", "Secure Checkout"],
};

export const Highlight = Template.bind({});
Highlight.args = {
  variant: 'Highlight',
};

export const HighlightAccessible = Template.bind({});
HighlightAccessible.args = {
  variant: 'Highlight-Contrast',
};

export const DefaultDutch = Template.bind({});
DefaultDutch.args = {
  texts: ["Gemaakt in Europa", "Aanpasbaar ontwerp", "Gemonteerd bij levering"],
};