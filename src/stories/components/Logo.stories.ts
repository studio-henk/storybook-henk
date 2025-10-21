import type { Meta, StoryObj } from "@storybook/html";
import { createLogo, type LogoProps } from "./Logo";

const meta = {
  title: "Components/Logo",
  component: createLogo,
  tags: ["autodocs"],
  render: (args: LogoProps) => createLogo(args),
  parameters: {
    docs: {
      description: {
        component: "Logo component",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "default",
        "default-inverted",
        "transparent",
      ],
      description: "Logo variant",
    },
    href: {
      control: "text",
      description: "URL the logo links to",
    },
  },
  // } satisfies Meta<typeof createLogo>;
} satisfies Meta<LogoProps>;

export default meta;
type Story = StoryObj<LogoProps>;

export const Default: Story = {
  args: {
    variant: "default",
    href: "/nl",
  },
};

export const DefaultInverted: Story = {
  args: {
    variant: "default-inverted",
    href: "/nl",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    href: "/nl",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    href: "/en",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    href: "/en",
  },
};
