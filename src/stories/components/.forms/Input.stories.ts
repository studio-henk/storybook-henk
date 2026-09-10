import { createInput } from "@components/forms/Input";

export default {
  title: "Components/Forms/Input",
  tags: ["autodocs"],
  component: createInput,
  render: (args) => createInput(args),
  parameters: {
    docs: {
      description: {
        component: "The input component is used to collect user input.",
      },
    },
  },
  argTypes: {
    id: { control: "text", defaultValue: "input-id" },
    type: { control: "text", defaultValue: "text" },
    value: { control: "text", defaultValue: "" },
    placeholder: { control: "text", defaultValue: "Enter text here" },
    required: { control: "boolean", defaultValue: false },
  },
};

export const Base = {
  args: {
    id: "input-id",
    type: "text",
    value: "",
    placeholder: "Enter text here",
  },
};

// export const Required = {
//   args: {
//     id: "input-id2",
//     type: "text",
//     value: "",
//     placeholder: "Enter text here",
//     required: true,
//   },
// };
