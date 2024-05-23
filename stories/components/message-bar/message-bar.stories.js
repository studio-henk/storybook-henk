// message-bar.stories.js
// import { withDesign } from "storybook-addon-designs";
import { createMsgBar } from "./message-bar";

export default {
  title: "Components/Bars/Message Bar",
  component: createMsgBar,
  tags: ['autodocs'],
  parameters: {
    controls: { sort: "requiredFirst" },
  },
  argTypes: {
    texts: {
      name: "text",
      type: { name: "string", required: true },
      description: "text for bar",
      table: { type: { summary: "string" }, defaultValue: { summary: "Bezoek een verkooppunt bij jou in de buurt" } },
      control: "text",
    },
    showTimer: {
      name: "showTimer",
      type: { name: "boolean", required: false },
      description: "Whether to display timer",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
      control: "boolean",
    },    
  },
  // args: {
  //   texts: ["Made to order in Europe", "Customisable design", "Assembled on delivery"], // Default texts
  // },
};

const Template = ({ text, showTimer, ...args }) => {
  return createMsgBar({ text, showTimer, ...args });
};

export const Default = Template.bind({});
// Default.args = {  
//   showIcon: true,  
// };

// export const DefaultWithIcons = Template.bind({});
// DefaultWithIcons.args = {  
//   showIcon: true,  
// };

// export const DefaultWithLinks = Template.bind({});
// DefaultWithLinks.args = {
//   texts: ["<a href='#somewhere'>Free Shipping</a>", "24/7 Support", "Secure Checkout"],
// };

// export const Highlight = Template.bind({});
// Highlight.args = {
//   variant: 'Highlight',
// };

// export const HighlightAccessible = Template.bind({});
// HighlightAccessible.args = {
//   variant: 'Highlight-Contrast',
// };

// export const DefaultDutch = Template.bind({});
// DefaultDutch.args = {
//   texts: ["Gemaakt in Europa", "Aanpasbaar ontwerp", "Gemonteerd bij levering"],
// };