import { createTextarea } from "./Textarea.js";

export default {
  title: "Components/Base/Forms/Base/Textarea",
  tags: ["autodocs"],
  component: createTextarea,
  render: (args) => createTextarea(args),
  parameters: {
    docs: {
      description: {
        component:
          "The textarea component is used to collect multiline user input.",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      required: true,
      description: "Name of the textarea",
      table: { category: "Code Attributes" },
    },
    id: {
      control: "text",
      required: true,
      description: "ID of the textarea",
      table: { category: "Code Attributes" },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
      table: { category: "Visual Properties" },
    },
    required: {
      control: "boolean",
      description: "Marks textarea as required",
      table: { category: "Code Attributes" },
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea",
      table: { category: "Visual Properties" },
    },
    autocomplete: {
      control: "text",
      defaultValue: "off",
      description: "Autocomplete attribute",
      table: { category: "Code Attributes" },
    },
    form: {
      control: "text",
      description: "Associates textarea with a form",
      table: { category: "Code Attributes" },
    },
    cols: {
      control: "number",
      description: "Textarea width in characters",
      table: { category: "Visual Attributes" },
    },
  },
};

export const Default = {
  args: {
    name: "my_textarea",
    id: "textarea-id",
  },
};

export const WithPlaceholder = {
  args: {
    name: "my_textarea",
    id: "textarea-id",
    placeholder: "Please enter a question or remark",
  },
};

export const Required = {
  args: {
    name: "my_textarea",
    id: "textarea-id-required",
    required: true,
  },
};
