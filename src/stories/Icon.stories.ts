import { Icon } from "./Icon";

export default {
  title: "Components/Icon",
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "large"],
      defaultValue: "large",
      description: "Size of the icon",
    },
    name: {
      control: "text",
      description: "Name of the icon file (without .svg)",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Icons at HENK are SVG code elements rendered inside an `<i>` HTML element.",
      },
    },
  },
};

const Template = ({ name, size }) => Icon({ name, size });

// export const Default = Template.bind({});
// Default.args = {
//   name: "icon-chevron-right",
//   size: "large",
// };

export const ChevronLeft = Template.bind({});
ChevronLeft.args = { name: "icon-chevron-left", size: "large" };

export const ChevronRight = Template.bind({});
ChevronRight.args = {
  name: "icon-chevron-right",
  size: "large",
};

export const ChevronDown = Template.bind({});
ChevronDown.args = {
  name: "icon-chevron-down",
  size: "large",
};

export const Search = Template.bind({});
Search.args = {
  name: "icon-search",
  size: "large",
};

export const Truck = Template.bind({});
Truck.args = { name: "icon-truck", size: "large" };

export const Checkmark = Template.bind({});
Checkmark.args = { name: "icon-checkmark", size: "large" };

export const Star = Template.bind({});
Star.args = { name: "icon-star", size: "large" };

export const Instagram = Template.bind({});
Instagram.args = { name: "icon-instagram", size: "large" };

export const Facebook = Template.bind({});
Facebook.args = { name: "icon-facebook", size: "large" };

export const TikTok = Template.bind({});
TikTok.args = { name: "icon-tiktok", size: "large" };

export const Youtube = Template.bind({});
Youtube.args = { name: "icon-youtube", size: "large" };

export const Pinterest = Template.bind({});
Pinterest.args = { name: "icon-pinterest", size: "large" };

export const Location = Template.bind({});
Location.args = { name: "icon-location", size: "large" };

export const Info = Template.bind({});
Info.args = { name: "icon-info", size: "large" };

export const Success = Template.bind({});
Success.args = { name: "icon-success", size: "large" };

export const Warning = Template.bind({});
Warning.args = { name: "icon-warning", size: "large" };

export const Danger = Template.bind({});
Danger.args = { name: "icon-danger", size: "large" };

export const InfoOpen = Template.bind({});
InfoOpen.args = { name: "icon-info-open", size: "large" };

export const LocationOpen = Template.bind({});
LocationOpen.args = { name: "icon-location-open", size: "large" };

export const CircleX = Template.bind({});
CircleX.args = { name: "icon-circle-x", size: "large" };

export const X = Template.bind({});
X.args = { name: "icon-x", size: "large" };

export const Close = Template.bind({});
Close.args = { name: "icon-close", size: "large" };

export const IconArrowRight = Template.bind({});
IconArrowRight.args = { name: "icon-arrow-right", size: "large" };

export const IconBag = Template.bind({});
IconBag.args = { name: "icon-bag", size: "large" };

export const IconArrowLeft = Template.bind({});
IconArrowLeft.args = { name: "icon-arrow-left", size: "large" };

export const IconPlus = Template.bind({});
IconPlus.args = { name: "icon-plus", size: "large" };

export const IconMinus = Template.bind({});
IconMinus.args = { name: "icon-minus", size: "large" };

export const IconCheckmarkFat = Template.bind({});
IconCheckmarkFat.args = { name: "icon-checkmark-fat", size: "large" };

// export const ChevronRight = () => Icon({ name: "icon-chevron-right", size: "large" });

export const IconHamburger = Template.bind({});
IconHamburger.args = { name: "icon-hamburger", size: "large" };
