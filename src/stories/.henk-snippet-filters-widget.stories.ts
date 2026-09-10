import type { Meta, StoryObj } from "@storybook/html-vite";
import engine from "@src/liquid-engine.js";
import snippet from "@src/snippets/henk-snippet-filters-widget.liquid?raw";

const renderFiltersWidget = (args: any) => {
  return engine.parseAndRenderSync(snippet, {
    active_filters_count: args.active_filters_count,
    filters: args.filters,
  });
};

const defaultFilters = [
  {
    label: "Color",
    type: "list",
    active_values: [{ label: "Beige" }],
    values: [
      {
        label: "Beige",
        value: "beige",
        param_name: "filter.v.color",
        active: true,
        count: 2,
        display: { type: "colors", value: ["#EAD8AB"] },
      },
      {
        label: "Chocolate brown",
        value: "chocolate-brown",
        param_name: "filter.v.color",
        active: false,
        count: 1,
        display: { type: "colors", value: ["#39281E"] },
      },
      {
        label: "Olive green",
        value: "olive-green",
        param_name: "filter.v.color",
        active: false,
        count: 0,
        display: { type: "colors", value: ["#646D41"] },
      },
    ],
  },
  {
    label: "Price",
    type: "price_range",
    active_values: [],
    min_value: {
      param_name: "filter.v.price.gte",
      value: "",
    },
    max_value: {
      param_name: "filter.v.price.lte",
      value: "",
    },
  },
  {
    label: "Availability",
    type: "boolean",
    active_values: [],
    values: [
      {
        label: "In stock",
        value: "in-stock",
        param_name: "filter.v.availability",
        active: false,
        count: 3,
        display: { type: "text", value: [] },
      },
      {
        label: "Out of stock",
        value: "out-of-stock",
        param_name: "filter.v.availability",
        active: false,
        count: 0,
        display: { type: "text", value: [] },
      },
    ],
  },
];

const meta: Meta = {
  title: "Snippets/FiltersWidget",
  render: (args) => renderFiltersWidget(args),
  tags: ["autodocs"],
  parameters: {
    customCode: snippet,
    docs: {
      description: {
        component: "Filters widget snippet written in Liquid",
      },
    },
  },
  argTypes: {
    active_filters_count: {
      control: "number",
      description: "Number of active filters",
    },
    filters: {
      control: "object",
      description: "Filters payload rendered by the snippet",
    },
  },
  args: {
    active_filters_count: 1,
    filters: defaultFilters,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
