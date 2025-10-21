import type { Meta, StoryObj } from "@storybook/html";
import { createLabeledInput } from "@components/forms/LabeledInput";
import { createButtonGroup } from "@components/ButtonGroup";

const meta: Meta = {
  title: "Sections/NewsletterBlock",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

export const NewsletterBlock: Story = {
  render: () => {
    const section = document.createElement("section");
    section.className = "shopify-section henk-section";

    const inner = document.createElement("div");
    inner.className = "henk-section__inner";

    const container = document.createElement("div");
    container.className = "henk-newsletter-form__container";
    container.id = "newsletter_form";

    const title = document.createElement("h2");
    title.className = "henk-newsletter-form__title";
    title.textContent = "Join our newsletter";

    const description = document.createElement("p");
    description.className = "henk-newsletter-form__description";
    description.textContent =
      "Enjoy exclusive invites to events, be the first to discover new interior treasures and read our most inspiring interior stories.";

    // Form
    const form = document.createElement("form");
    form.className = "henk-form newsletter-form";

    const grid = document.createElement("div");
    grid.className = "henk-form-grid"; // 2-column layout

    // Column 1: input
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "henk-form-grid__item";
    inputWrapper.appendChild(
      createLabeledInput({
        label: { text: "Email", htmlFor: "newsletter-email" },
        input: { id: "newsletter-email", type: "email", required: true },
        floating: true,
        orientation: "vertical",
      }),
    );

    // Column 2: button
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "henk-form-grid__item";
    buttonWrapper.appendChild(
      createButtonGroup({
        buttons: [{ type: "submit", label: "Subscribe", variant: "primary" }],
        alignment: "left",
      }),
    );

    grid.append(inputWrapper, buttonWrapper);
    form.appendChild(grid);

    container.append(title, description, form);
    inner.appendChild(container);
    section.appendChild(inner);

    return section.outerHTML;
  },
};
