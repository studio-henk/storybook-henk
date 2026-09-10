import type { Meta, StoryObj } from "@storybook/html";
import type { CreateSelectDropdownProps } from "@components/forms/SelectDropdown";

import { createSelectDropdown } from "@components/forms/SelectDropdown";

const meta = {
  title: "Components/Forms/SelectDropdown",
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
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
    ariaLabel: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `<select>` HTML element represents a control that provides a menu of options.",
      },
    },
  },
} satisfies Meta<CreateSelectDropdownProps>;

export default meta;

type Story = StoryObj<CreateSelectDropdownProps>;

export const Default: Story = {
  args: {
    options: [
      { value: "opt1", text: "Option 1" },
      { value: "opt2", text: "Option 2" },
    ],
    id: "select-id",
    name: "select-name",
    className: "henk-select",
    required: false,
    ariaLabel: "Example select",
  },
  render: (args) => createSelectDropdown(args),
};
