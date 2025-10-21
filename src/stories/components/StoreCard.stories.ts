import type { Meta, StoryObj } from "@storybook/html";
import { createStoreCard, StoreCardProps } from "@components/StoreCard";

const meta: Meta<StoreCardProps> = {
  title: "Components/Cards/StoreCard",
  render: (args) => createStoreCard(args),
  args: {
    name: "Amsterdam",
    address: "Rozengracht 204, 1016 NL Amsterdam",
    imageUrl: "https://via.placeholder.com/920x764",
    imageAlt: "Visit our store in Amsterdam",
    href: "/pages/winkels/amsterdam",
    directionsUrl:
      "https://www.google.com/maps/place/Studio+HENK+Amsterdam+Flagship+store",
  },
};
export default meta;

type Story = StoryObj<StoreCardProps>;

// export const Default: Story = {};

export const Antwerp: Story = {
  args: {
    name: "Antwerpen",
    address: "Kloosterstraat 52-Rechts, 2000 Antwerpen",
    imageUrl:
      "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-store-antwerpen.avif?v=1752841496",

    imageAlt: "Visit our store in Antwerp",
    href: "/pages/winkels/antwerpen",
    directionsUrl:
      "https://www.google.com/maps/place/Studio+HENK+Antwerpen+Flagship+store/@51.2159204,4.3922698,17z",
  },
};
