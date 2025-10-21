import { createLabeledInput } from "@components/forms/LabeledInput";
import { createButtonGroup } from "@components/ButtonGroup";
import type { StoryObj } from "@storybook/html";

export default {
  title: "Components/Forms/TwoColumnForm",
} as const;

// Story 1: Standard Two-Column Form
export const TwoColumnForm: StoryObj = {
  render: () => {
    const form = document.createElement("form");
    form.className = "henk-form";

    // Grid container for form fields
    const fieldsGrid = document.createElement("div");
    fieldsGrid.className = "henk-form-grid"; // CSS: display: grid; grid-template-columns: repeat(2, 1fr);

    // Wrap each input in a grid item
    const firstNameWrapper = document.createElement("div");
    firstNameWrapper.className = "henk-form-grid__item";
    firstNameWrapper.appendChild(
      createLabeledInput({
        label: { text: "First Name", htmlFor: "first-name" },
        input: { id: "first-name", type: "text", required: true },
        floating: true,
        orientation: "vertical",
      }),
    );

    const lastNameWrapper = document.createElement("div");
    lastNameWrapper.className = "henk-form-grid__item";
    lastNameWrapper.appendChild(
      createLabeledInput({
        label: { text: "Last Name", htmlFor: "last-name" },
        input: { id: "last-name", type: "text", required: true },
        floating: true,
        orientation: "vertical",
      }),
    );

    fieldsGrid.append(firstNameWrapper, lastNameWrapper);
    form.appendChild(fieldsGrid);

    // Button group below grid
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "henk-form-grid__item";
    const buttonGroup = createButtonGroup({
      buttons: [{ type: "submit", label: "Submit", variant: "primary" }],
      alignment: "right",
    });
    buttonWrapper.appendChild(buttonGroup);
    form.appendChild(buttonWrapper);

    return form;
  },
};

// Story 2: Two-Column Form with Button in Column 2
export const TwoColumnFormWithButtonInColumn: StoryObj = {
  render: () => {
    const form = document.createElement("form");
    form.className = "henk-form";

    const fieldsGrid = document.createElement("div");
    fieldsGrid.className = "henk-form-grid"; // Same 2-column grid

    // Column 1: input
    const emailWrapper = document.createElement("div");
    emailWrapper.className = "henk-form-grid__item";
    emailWrapper.appendChild(
      createLabeledInput({
        label: { text: "Email", htmlFor: "email" },
        input: { id: "email", type: "email", required: true },
        floating: true,
        orientation: "vertical",
      }),
    );

    // Column 2: button group
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "henk-form-grid__item";
    const buttonGroup = createButtonGroup({
      buttons: [{ type: "submit", label: "Subscribe", variant: "primary" }],
      alignment: "left",
    });
    buttonWrapper.appendChild(buttonGroup);

    fieldsGrid.append(emailWrapper, buttonWrapper);
    form.appendChild(fieldsGrid);

    return form;
  },
};
