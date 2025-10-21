import { createLabeledSelect } from "@components/forms/LabeledSelect";

export default {
  title: "Components/Forms/LabeledSelect",
  tags: ["autodocs"],
  component: createLabeledSelect,
  render: ({ label, select, orientation, ...args }) => {
    const labeledSelect = createLabeledSelect({
      label,
      select,
      orientation,
      ...args,
    });
    return labeledSelect;
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
      control: { type: "object", subComponent: "Label" },
      defaultValue: {
        text: "Label text here",
        htmlFor: "select-id",
      },
    },
    select: {
      control: { type: "object", subComponent: "SelectDropdown" },
      defaultValue: {
        options: [
          { value: "opt1", text: "Option 1" },
          { value: "opt2", text: "Option 2" },
        ],
        id: "select-id",
        name: "select-name",
        className: "henk-select",
        required: false,
      },
    },
  },
  args: {
    label: {
      text: "Label",
      htmlFor: "select-id",
    },
    select: {
      options: [
        { value: "opt1", text: "Option 1" },
        { value: "opt2", text: "Option 2" },
      ],
      id: "select-id",
      name: "select-name",
      className: "henk-select",
      required: false,
    },
  },
};

// export const Default = {};
// Default story using render function
export const Default = (args) => {
  return createLabeledSelect(args); // Pass all args to createLabeledSelect
};
Default.args = {
  select: {
    customArrow: true,
  },
};

// export const WithCustomArrow = {
//   args: {
//     label: {
//       text: "Label",
//       htmlFor: "select-id",
//     },
//     select: {
//       options: [
//         { value: "opt1", text: "Option 1" },
//         { value: "opt2", text: "Option 2" },
//       ],
//       id: "select-id",
//       name: "select-name",
//       className: "henk-select",
//       required: false,
//       customArrow: true,
//     },
//   },
// };
//
export const Required = {
  args: {
    label: {
      text: "Required!",
      htmlFor: "select-id2",
    },
    select: {
      options: [
        { value: "opt1", text: "Option 1" },
        { value: "opt2", text: "Option 2" },
      ],
      id: "select-id2",
      name: "select-name",
      required: true,
      customArrow: true,
    },
  },
};

export const Horizontal = {
  args: {
    orientation: "horizontal",
    label: {
      text: "Horizontal",
      htmlFor: "select-id",
    },
    select: {
      options: [
        { value: "opt1", text: "Option 1" },
        { value: "opt2", text: "Option 2" },
      ],
      id: "select-id",
      name: "select-name",
      className: "henk-select",
      required: true,
      customArrow: true,
    },
  },
};

export const Floating = {
  args: {
    floating: true,
    label: {
      text: "Country",
      htmlFor: "form_invoiceAddressCountry",
    },
    select: {
      options: [
        { value: "NL", text: "Netherlands" },
        { value: "BE", text: "Belgium" },
        { value: "DE", text: "Germany" },
      ],
      id: "form_invoiceAddressCountry",
      name: "countryCode",
      className: "henk-select",
      required: true,
      customArrow: true,
    },
  },
};

export const FloatingNoSelected = {
  args: {
    floating: true,
    label: {
      text: "Country",
      htmlFor: "form_invoiceAddressCountry",
    },
    select: {
      options: [
        {
          value: "",
          text: "Select your country",
          disabled: true,
          selected: true,
        },
        { value: "NL", text: "Netherlands" },
        { value: "BE", text: "Belgium" },
        { value: "DE", text: "Germany" },
      ],
      id: "form_invoiceAddressCountry",
      name: "countryCode",
      className: "henk-select",
      required: true,
      customArrow: true,
    },
  },
};
