import type { Meta, StoryObj } from "@storybook/html";
import { Radio, RadioProps } from "@components/forms/Radio";

const meta: Meta<RadioProps> = {
  title: "Components/Forms/Radio",
  tags: ["autodocs"],
  render: (args) => Radio(args),
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    id: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
    },
    name: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
    },
  },
  args: {
    checked: false,
    id: "radio_id_01",
    name: "radio_name_01",
    value: "radio_value_01",
  },
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    id: "radio_id_02",
    name: "radio_name_02",
    value: "radio_value_02",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    id: "radio_id_03",
    name: "radio_name_03",
    value: "radio_value_03",
  },
};

export const Custom: Story = {
  args: {
    checked: false,
    custom: true,
    id: "radio_id_04",
    name: "radio_name_04",
    value: "radio_value_04",
  },
};

export const CustomChecked: Story = {
  args: {
    checked: true,
    custom: true,
    id: "radio_id_05",
    name: "radio_name_05",
    value: "radio_value_05",
  },
};

export const CustomDisabled: Story = {
  args: {
    checked: false,
    custom: true,
    disabled: true,
    id: "radio_id_06",
    name: "radio_name_06",
    value: "radio_value_06",
  },
};
