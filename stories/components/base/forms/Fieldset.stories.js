import { createFieldset } from "./Fieldset.js";

export default {
  title: "Components/Base/Forms/Base/Fieldset",
  tags: ["autodocs"],
  render: ({ legend, ...args }) => {
    return createFieldset({ legend, ...args });
  },
  argTypes: {
    legend: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    legend: "Legend here",
  },
};
