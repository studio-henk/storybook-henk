import { createLabeledInput } from "./LabeledInput.js";

export default {
  title: "Components/Forms/LabeledInput",
  tags: ["autodocs"],
  component: createLabeledInput,
  render: ({ label, input, orientation, floating }) => {
    const labeledInput = createLabeledInput({
      label,
      input,
      orientation,
      floating,
    });
    return labeledInput;
  },
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
    },
    floating: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    label: {
      control: {
        type: "object",
      },
      defaultValue: {
        text: "Label text here",
        htmlFor: "input-id",
      },
    },
    input: { control: { type: "object", subComponent: "Input" } },
  },
};

export const Default = {
  args: {
    label: {
      text: "Label",
      htmlFor: "input-id",
    },
    input: {
      id: "input-id",
      type: "text",
      value: "",
      placeholder: "Enter text here",
    },
  },
};

export const Required = {
  args: {
    label: {
      text: "Required input",
      htmlFor: "input-id",
    },
    input: {
      id: "input-id",
      type: "text",
      value: "",
      placeholder: "Enter text here",
      required: true,
    },
  },
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
    label: {
      text: "Label text here",
      htmlFor: "input-id",
    },
    input: {
      id: "input-id",
      type: "text",
      value: "",
      placeholder: "Enter text here",
      required: true,
    },
  },
};

export const FloatingLabel = {
  args: {
    floating: true,
    label: {
      text: "Label text here",
      htmlFor: "input-id-666",
    },
    input: {
      id: "input-id-666",
      type: "text",
      value: "",
      placeholder: "",
      required: false,
    },
  },
};

export const FloatingLabelRequired = {
  args: {
    floating: true,
    label: {
      text: "Label text here",
      htmlFor: "input-id-666",
    },
    input: {
      id: "input-id-666",
      type: "text",
      value: "",
      placeholder: "",
      required: true,
    },
  },
};
