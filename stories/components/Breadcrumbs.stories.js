// import "./breadcrumbs.css";
import "./breadcrumbs.js";

export default {
  title: "Components/Breadcrumbs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Breadcrumbs component provides a navigation breadcrumb for better UX.",
      },
    },
    controls: {
      exclude: ["class", "style"], // Optionally exclude CSS classes and inline styles from controls
    },
  },
};

const Template = ({ breadcrumbs }) => `
    <nav aria-label="breadcrumb" class="henk-breadcrumbs" id="henk-breadcrumbs-bar">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="henk-breadcrumbs__list">
            ${breadcrumbs
              .map(
                (page, index) => `
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="henk-breadcrumbs__item">
                    ${
                      index === breadcrumbs.length - 1
                        ? `<span class="henk-breadcrumbs__name" itemprop="name">${page.name}</span>`
                        : `<a itemprop="item" class="henk-breadcrumbs__link" href="${page.fullPath}"><span class="henk-breadcrumbs__name" itemprop="name">${page.name}</span></a>`
                    }
                    <meta itemprop="position" content="${index + 1}" />
                </li>
            `,
              )
              .join("")}
        </ol>
    </nav>
`;

export const Default = Template.bind({});
Default.args = {
  breadcrumbs: [
    { name: "Home", fullPath: "/" },
    { name: "Category", fullPath: "/parent" },
    { name: "Current Page", fullPath: "/parent/current-page" },
  ],
};

// export const Configurable = Template.bind({});
// Configurable.args = {
//   breadcrumbs: [
//     { name: "Home", fullPath: "/" },
//     { name: "Blogs", fullPath: "/blogs/" },
//   ],
// };
// Configurable.parameters = {
//   controls: {
//     breadcrumbs: {
//       type: "array",
//       control: "object",
//       description: "List of breadcrumb items",
//     },
//   },
// };