import { IconTemplate } from "../Icon.stories.js";
import CheckmarkIcon from "../../../assets/icons/icon-checkmark-fat.svg?raw";
import { createLabeledCheckbox } from "./LabeledCheckbox.js";

export default {
  title: "Components/Base/Forms/LabeledCheckbox",
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
