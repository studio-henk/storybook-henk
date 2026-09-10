import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-button.liquid?raw";

const renderButton = (args: any) => {
  const rendered = engine.parseAndRenderSync(snippet, {
    element: args.element,
    href: args.href,
    type: args.type,
    value: args.value,
    variant: args.variant,
    color: args.color,
    button_size: args.button_size,
    label: args.label,
    title: args.title,
    icon_name: args.icon_name,
    icon_position: args.icon_position,
    icon_only: args.icon_only,
    aria_label: args.aria_label,
    disabled: args.disabled,
    target: args.target,
    attrs: args.attrs,
    extra_classes: args.extra_classes,
  });

  return rendered;
};

const meta: Meta = {
  title: "Snippets/Components/Button",
  render: (args) => renderButton(args),
  tags: ["autodocs", "version:1.0.0"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Button component written in Liquid",
      },
    },
  },
  argTypes: {
    element: {
      control: false,
      description: "HTML element to render.",
      table: {
        defaultValue: { summary: "a" },
      },
    },

    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "transparent", "ghost", "overlay"],
      description: "Visual treatment of the button.",
      table: {
        defaultValue: { summary: "primary" },
      },
    },

    color: {
      control: { type: "select" },
      options: [
        "ivory",
        "off-white",
        "brown",
        "beige",
        "soft-blue",
        "blue",
        "gold",
        "green",
        "yellow",
      ],
      description: "Color theme of the button.",
      table: {
        defaultValue: { summary: "ivory" },
      },
    },

    button_size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "Size of the button.",
      table: {
        defaultValue: { summary: "large" },
      },
    },

    label: {
      control: "text",
      description: "Button text.",
      table: {
        defaultValue: { summary: "Button" },
      },
    },

    href: {
      control: false,
      description: "Destination URL when element is 'a'.",
      table: {
        defaultValue: { summary: "#" },
      },
    },

    type: {
      control: false,
      description: "Button type when element is 'button'.",
      table: {
        defaultValue: { summary: "button" },
      },
    },

    value: {
      control: false,
      description: "Value attribute when element is 'button'.",
    },

    icon_name: {
      control: "text",
      description: "Optional icon name.",
    },

    icon_position: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Position of the icon relative to the label.",
      table: {
        defaultValue: { summary: "left" },
      },
    },

    icon_only: {
      control: "boolean",
      description: "Render only the icon.",
      table: {
        defaultValue: { summary: "false" },
      },
    },

    disabled: {
      control: "boolean",
      description: "Disable the button.",
      table: {
        defaultValue: { summary: "false" },
      },
    },

    aria_label: {
      control: false,
      description:
        "Accessible label, particularly useful for icon-only buttons.",
    },

    title: {
      control: false,
      description: "Optional title attribute.",
    },

    target: {
      control: false,
      description: "Link target when element is 'a'.",
    },

    attrs: {
      control: false,
      description: "Additional HTML attributes.",
    },

    extra_classes: {
      control: false,
      description: "Additional CSS classes.",
    },
  },
  args: {
    variant: "primary",
    color: "ivory",
    button_size: "large",
    label: "Button text",
    icon_position: "left",
    icon_only: false,
    disabled: false,
    element: "a",
    type: "button",
    href: "#",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
  render: () => {
    const variants = [
      "primary",
      "secondary",
      "transparent",
      "ghost",
      "overlay",
    ];

    const buttons = variants
      .map((variant) =>
        engine.parseAndRenderSync(snippet, {
          element: "a",
          href: "#",
          variant,
          color: "ivory",
          button_size: "large",
          label: variant,
        }),
      )
      .join("");

    return `
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
      ">
        ${buttons}
      </div>
    `;
  },
};

export const Colors: Story = {
  render: () => {
    const colors = [
      "ivory",
      "off-white",
      "brown",
      "beige",
      "soft-blue",
      "blue",
      "gold",
      "green",
      "yellow",
    ];

    const buttons = colors
      .map((color) =>
        engine.parseAndRenderSync(snippet, {
          element: "a",
          href: "#",
          variant: "primary",
          color,
          button_size: "large",
          label: color,
        }),
      )
      .join("");

    return `
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
      ">
        ${buttons}
      </div>
    `;
  },
};

export const Small: Story = {
  args: {
    button_size: "small",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Button with icon",
    icon_name: "feather-chevron-right",
    icon_position: "right",
  },
};

export const IconOnly: Story = {
  args: {
    icon_only: true,
    icon_name: "feather-chevron-right",
    aria_label: "Open",
  },
};

export const Disabled: Story = {
  args: {
    element: "button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    element: "button",
    variant: "primary",
    disabled: false,
    attrs: 'data-state="loading" data-js-button-loading',
  },
};
