// usps-bar.stories.js
// import { withDesign } from "storybook-addon-designs";
import { createUspsBar } from "./usps-bar";

export default {
  title: "Components/USPS Bar",
  component: createUspsBar,
  tags: ['autodocs'],
  // decorators: [withDesign],
  parameters: {
    controls: { sort: "requiredFirst" },
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
      options: ["Default", "Primary", "Secondary", "Tertiary", "Quaternary", "Highlight"],
    },
  },
};

const Template = ({ texts, showIcon, ...args }) => {
  return createUspsBar({ texts, showIcon, ...args });
};

export const Default = Template.bind({});
Default.args = {
  texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
  variant: 'Default',
};

export const DefaultWithIcons = Template.bind({});
DefaultWithIcons.args = {
  texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
  variant: 'Default',
  showIcon: true,
};

export const DefaultWithLinks = Template.bind({});
DefaultWithLinks.args = {
  texts: ["<a href='#somewhere'>Free Shipping</a>", "24/7 Support", "Secure Checkout"],
  variant: 'Default',
};

export const DefaultWithLinksAndIcons = Template.bind({});
DefaultWithLinksAndIcons.args = {
  texts: ["<a href='#somewhere'>Free Shipping</a>", "24/7 Support", "Secure Checkout"],
  variant: 'Default',
  showIcon: true,
};

export const Primary = Template.bind({});
Primary.args = {
  texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
  variant: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
  variant: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
  variant: 'Tertiary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
  variant: 'Quaternary',
};

// export const WithIcons = Template.bind({});
// WithIcons.args = {
//   texts: ["Free Shipping", "24/7 Support", "Secure Checkout"],
//   showIcon: true,
// };

// export const CustomTexts = Template.bind({});
// CustomTexts.args = {
//   texts: ["Fast Delivery", "Expert Assistance", "Safe Transactions"],
// };
