import CheckmarkIcon from "@assets/icons/icon-checkmark-fat.svg?raw";
import { createLabeledCheckbox } from "./LabeledCheckbox";

export default {
  title: "Components/Forms/LabeledCheckbox",
  tags: ["autodocs"],
  component: createLabeledCheckbox,
  render: ({ label, checkbox, icon, size, ...args }) => {
    const LabeledCheckbox = createLabeledCheckbox({
      label,
      checkbox,
      icon,
      size,
    });
    return LabeledCheckbox;
  },
  argTypes: {
    label: {
      control: {
        type: "object",
      },
      defaultValue: {
        text: "Label text here",
        htmlFor: "input-id",
      },
    },
    checkbox: {
      control: {
        type: "object",
      },
      defaultValue: {
        id: "input-id",
        checked: false,
        name: "checkbox-name",
        disabled: false,
        required: false,
      },
    },
  },
};

export const Default = {
  args: {
    label: {
      text: "hello",
      htmlFor: "input-id",
    },
    checkbox: {
      id: "input-id",
      name: "checkbox-name",
      checked: true,
    },
    icon: CheckmarkIcon,
    size: "small",
  },
};

export const Required = {
  args: {
    label: {
      text: "This one is required. <a href='#test'>a link</a> You <a href='test2'>have to</a> check it",
      htmlFor: "input-id-req",
    },
    checkbox: {
      id: "input-id-req",
      name: "checkbox-name-req",
      checked: false,
      required: true,
    },
    icon: CheckmarkIcon,
    size: "small",
  },
};
