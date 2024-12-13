import { createLabeledTextarea } from "./LabeledTextarea.js";

export default {
  title: "Components/Base/Forms/LabeledTextarea",
  tags: ["autodocs"],
  component: createLabeledTextarea,
  render: ({ label, textarea, orientation, floating, ...args }) => {
    const LabeledTextarea = createLabeledTextarea({
      label,
      textarea,
      orientation,
      floating,
    });
    return LabeledTextarea;
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
    textarea: {
      control: {
        type: "object",
      },
      defaultValue: {
        id: "input-id",
        name: "textarea-name",
        disabled: false,
        required: false,
        placeholder: "Enter text here",
      },
    },
  },
};

export const Default = {
  args: {
    label: {
      text: "Comments",
      htmlFor: "input-id",
    },
    textarea: {
      id: "input-id",
      name: "tb-name",
    },
  },
};

export const Required = {
  args: {
    label: {
      text: "Remarks",
      htmlFor: "textarea-remarks",
    },
    textarea: {
      id: "textarea-remarks",
      name: "tb-remarks",
      required: true,
    },
  },
};

export const WithPlaceholder = {
  args: {
    label: {
      text: "Remarks",
      htmlFor: "textarea-remarks-p",
    },
    textarea: {
      id: "textarea-remarks-p",
      name: "tb-remarks",
      placeholder: "Please enter a question or remark",
    },
  },
};

export const WithPlaceholderEmpty = {
  args: {
    label: {
      text: "Remarks",
      htmlFor: "textarea-remarks-pe",
    },
    textarea: {
      id: "textarea-remarks-pe",
      name: "tb-remarks",
      placeholder: " ",
    },
  },
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
    label: {
      text: "Remarks",
      htmlFor: "textarea-remarks-h",
    },
    textarea: {
      id: "textarea-remarks-h",
      name: "tb-remarks-h",
    },
  },
};

export const Floating = {
  args: {
    floating: true,
    label: {
      text: "Remarks",
      htmlFor: "textarea-remarks-f",
    },
    textarea: {
      id: "textarea-remarks-f",
      name: "tb-remarks-h",
      placeholder: " ",
      required: true,
    },
  },
};
