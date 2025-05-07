import { createSelectDropdown } from "./SelectDropdown";

export default {
  title: "Components/Base/Forms/Base/SelectDropdown",
  tags: ["autodocs"],
  component: createSelectDropdown,
  render: (args) => createSelectDropdown(args),
  argTypes: {
    options: {
      control: "array",
      defaultValue: [
        { value: "opt1", text: "Option 1" },
        { value: "opt2", text: "Option 2" },
      ],
    },
    // defaultOption: { control: "text", defaultValue: "opt1" },
    id: { control: "text", defaultValue: "select-id" },
    name: { control: "text", defaultValue: "select-name" },
    className: { control: "text", defaultValue: "henk-select" },
    required: { control: "boolean" },
  },
  args: {
    options: [
      { value: "opt1", text: "Option 1" },
      { value: "opt2", text: "Option 2" },
    ],
    // defaultOption: "opt1",
    id: "select-id",
    name: "select-name",
    className: "henk-select",
    required: false,
  },
  parameters: {
    // badges: [BADGE.BETA],
    docs: {
      description: {
        component:
          "The ```<select>``` HTML element represents a control that provides a menu of options.",
      },
    },
    // controls: { exclude: ['tag'] },
  },
};

export const Default = {};

export const Required = {
  args: {
    required: true,
  },
};

// export const WithDifferentDefaultOption = {
//   args: {
//     defaultOption: "Option 2",
//   },
// };

export const WithCustomArrow = {
  args: {
    customArrow: true,
  },
};
