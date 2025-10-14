import type { StoryFn } from "@storybook/html";
import { Icon, type IconOptions } from "./Icon";

// 🔍 Import all available SVG icons dynamically
const icons = import.meta.glob("../assets/icons/*.svg", {
  as: "raw",
  eager: true,
});

// Extract filenames (without `.svg`)
const iconNames = Object.keys(icons).map(
  (path) => path.split("/").pop()?.replace(".svg", "") || "",
);

export default {
  title: "Components/Base/Icon",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
      description: "Name of the icon (without .svg)",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "large"],
      defaultValue: "large",
      description: "Icon size",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Icons at HENK are SVG code elements rendered inside an `<i>` HTML element. This story dynamically lists all icons found in `../assets/icons/`.",
      },
    },
  },
};

// --- Default Template ---
const Template: StoryFn<IconOptions> = (args) => Icon(args);

// --- Interactive single icon story ---
export const Playground = Template.bind({});
Playground.args = {
  name: iconNames[0],
  size: "large",
};

// --- Grid of all icons preview ---
export const AllIcons = () => {
  const container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fill, minmax(80px, 1fr))";
  container.style.gap = "16px";
  container.style.textAlign = "center";

  iconNames.forEach((name) => {
    const wrapper = document.createElement("div");
    const iconEl = Icon({ name, size: "large" });
    const label = document.createElement("p");
    label.innerText = name;
    label.style.fontSize = "12px";
    label.style.marginTop = "4px";

    wrapper.appendChild(iconEl);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });

  return container;
};
