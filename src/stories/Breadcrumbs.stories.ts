
import { createBreadcrumbs } from "./Breadcrumbs";

export default {
  title: "Sections/Breadcrumbs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Breadcrumbs component provides a navigation breadcrumb for better UX.",
      },
    },
    controls: {
      exclude: ["class", "style"],
    },
  },
};

const Template = ({ breadcrumbs }) =>
  createBreadcrumbs({ breadcrumbs }).outerHTML;

export const Default = Template.bind({});
Default.args = {
  breadcrumbs: [
    { name: "Home", fullPath: "/" },
    { name: "Category", fullPath: "/parent" },
    { name: "Current Page", fullPath: "/parent/current-page" },
  ],
};
