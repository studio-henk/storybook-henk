import {
  createCustomDropdown,
  CreateCustomDropdownProps,
} from "./CustomDropdown";
// import "./select.css";

export default {
  title: "Components/Forms/CustomDropdown",
  argTypes: {
    label: { control: "text" },
    id: { control: "text" },
    options: { control: "array" },
    placeholder: { control: "text" },
  },
  args: {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    placeholder: "Select an option",
  },
  render: (args: CreateCustomDropdownProps) => {
    const dropdown = createCustomDropdown(args);
    return dropdown;
  },
};

export const Default = {
  args: {
    label: "Label",
    id: "custom-dropdown-1",
  },
};

export const CheckoutQuestion = {
  args: {
    label: "Did you see your HENK furniture before purchase?",
    id: "custom-dropdown-2",
    options: [
      "Yes, in a Studio HENK store",
      "Yes, at a friend's family's place",
      "No, I haven't seen my furniture in real life",
      "I have ordered samples",
    ],
    placeholder: "Select an option",
  },
};

export const countryDropdown = {
  args: {
    label: "Country",
    id: "custom-dropdown-3",
    options: [
      "Netherlands",
      "Austria (€ 199)",
      "Belgium",
      "Germany (€ 199)",
      "Finland (€ 399)",
      "France (€ 199)",
      "Italy (€ 249)",
      "Luxembourg (€ 149)",
      "Norway (€ 349)",
      "Sweden (€ 349)",
      "Switzerland (€ 299)",
      "Spain (€ 299)",
      "Denmark (€ 199)",
    ],
    placeholder: "Select a country",
  },
};
