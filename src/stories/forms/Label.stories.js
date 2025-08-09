import { createLabel } from "./Label.js";

export default {
  title: "Components/Forms/Label",
  tags: ["autodocs"],
  component: createLabel,
  render: ({ text, ...args }) => {
    return createLabel({ text, ...args });
  },
  argTypes: {
    text: { control: "text", defaultValue: "Label text here" },
    htmlFor: { control: "text", defaultValue: "input-id" },
  },
};

export const Base = {
  args: {
    text: "a label",
    htmlFor: "input-mail",
  },
};

export const WithLinks = {
  args: {
    text: "a label with some <a href='#'>links</a>, <a href='#'>link</a>",
    htmlFor: "input-mail",
  },
};
