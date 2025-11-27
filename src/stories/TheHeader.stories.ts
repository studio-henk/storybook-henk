import type { Meta, StoryObj } from "@storybook/html";
import { createHeader, type HeaderProps } from "./TheHeader";
import { withSectionWrapper } from "@decorators/withSectionWrapper";

const meta = {
  title: "Global/Header",
  tags: ["autodocs"],
  decorators: [withSectionWrapper],
  // render: (args: HeaderProps) => createHeader(args),
  render: (args: HeaderProps) => {
    const header = createHeader(args); // creates header element

    // Append header to the Storybook preview DOM
    document.body.appendChild(header);

    return header; // return for Storybook rendering
  },
  argTypes: {
    title: {
      control: "text",
      description: "Fallback title if logo is not provided",
    },
  },
  args: {
    logoProps: { variant: "default", href: "/" },
  },
} satisfies Meta<HeaderProps>;

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {};

export const WithCartCountBadge: Story = {
  args: {
    cartCount: 3,
  },
};

export const WithCartIcon: Story = {
  args: {
    cartCount: 3,
    cartIconName: "feather-shopping-cart",
  },
};

export const WithAltBagIcon: Story = {
  args: {
    cartCount: 3,
    cartIconName: "feather-shopping-bag",
  },
};

// export const InvertedLogo: Story = {
//   args: {
//     logoProps: {
//       variant: "default-inverted",
//       href: "/",
//     },
//   },
// };

// export const LogoCentered: Story = {
//   args: {
//     align: "center",
//     inBetween: true,
//     logoProps: {
//       variant: "transparent",
//       href: "/",
//     },
//   },
// };

// export const PrimaryLogo: Story = {
//   args: {
//     logoProps: {
//       variant: "primary",
//       href: "/",
//     },
//   },
// };

// export const SecondaryLogo: Story = {
//   args: {
//     logoProps: {
//       variant: "secondary",
//       href: "/",
//     },
//   },
// };
