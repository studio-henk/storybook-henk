import type { Meta, StoryObj } from "@storybook/html-vite";
// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

import paginationRaw from "@src/snippets/henk-pagination.liquid?raw";
import henkIconRaw from "@src/snippets/henk-icon.liquid?raw";

// engine.registerPartial("henk-icon", henkIconRaw);
engine.__partials["henk-icon"] = henkIconRaw;

const meta = {
  title: "Snippets/HENK Pagination",
  tags: ["autodocs"],
  parameters: {
    version: "1.0.0",
    docs: {
      description: {
        component:
          "Pagination controls for collection pages. Renders only when multiple pages are available.",
      },
    },
  },
  render: (args) =>
    engine.parseAndRenderSync(paginationRaw, {
      ...args,
    }),
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const pagination = {
  // parts: [
  //   { title: "1", is_link: false, url: "?page=1" },
  //   { title: "2", is_link: true, url: "?page=2" },
  //   { title: "3", is_link: true, url: "?page=3" },
  // ],
  parts: [
    { title: 1, is_link: false, url: "" },
    { title: 2, is_link: true, url: "?page=2" },
    { title: 3, is_link: true, url: "?page=3" },
  ],
  current_page: 1,
  pages: 3,
  previous: null,
  next: { url: "?page=2", title: "Next" },
};

export const Default: Story = {
  args: {
    paginate: pagination,
    anchor: "",
  },
};

export const LastPage: Story = {
  args: {
    paginate: {
      ...pagination,
      current_page: 3,
      previous: { url: "?page=2", title: "Previous" },
      next: null,
      parts: [
        { title: "1", is_link: true, url: "?page=1" },
        { title: "2", is_link: true, url: "?page=2" },
        { title: 3, is_link: false, url: "?page=3" },
      ],
    },
    anchor: "",
  },
};

export const SinglePage: Story = {
  args: {
    paginate: {
      parts: [{ title: "1", is_link: false, url: "?page=1" }],
      pages: 1,
      current_page: 1,
      previous: null,
      next: null,
    },
    anchor: "",
  },
};
