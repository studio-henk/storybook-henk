import { createInfoBox } from "./info-box";
import { Icon } from "./Icon";

const icons = import.meta.glob("../assets/icons/*.svg", {
  as: "raw",
  eager: true,
});
const iconNames = Object.keys(icons).map(
  (path) => path.split("/").pop()?.replace(".svg", "") || "",
);
const iconOptions = ["None", ...iconNames];

export default {
  title: "Components/Composites/Info Box",
  component: createInfoBox,
  tags: ["autodocs"],
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    title: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "danger"],
    },
    buttonConfig: { control: "object" },
    iconName: {
      name: "Icon",
      control: "select",
      options: iconOptions,
    },
  },
};

// const Template = (args) => {
//   const iconHTML =
//     args.iconName && args.iconName !== "None"
//       ? Icon({ name: args.iconName, size: "large" })
//       : null;
//
//   return createInfoBox({ ...args, iconHTML });
// };

const Template = (args) => {
  let iconHTML = "";

  if (args.iconName && args.iconName !== "None") {
    const iconVal = Icon({ name: args.iconName, size: "large" });

    if (typeof iconVal === "string") {
      iconHTML = iconVal;
    } else if (iconVal instanceof Element) {
      iconHTML = iconVal.outerHTML;
    } else {
      // fallback to string coercion
      iconHTML = String(iconVal);
    }
  } else {
    iconHTML = ""; // safe empty string so .trim() works downstream
  }

  return createInfoBox({ ...args, iconHTML });
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  title: "Heading",
  content: "<p>Some very important information here.</p>",
  buttonConfig: null,
  iconName: "icon-location",
};

export const DefaultWithIconInfo = Template.bind({});
DefaultWithIconInfo.args = {
  variant: "default",
  title: "Still a heading",
  content: "<p>My my, do we have a fancy icon here?</p>",
  buttonConfig: null,
  iconName: "icon-info-open",
};

export const VariantInfo = Template.bind({});
VariantInfo.args = {
  variant: "info",
  title: "Did you know?",
  content:
    '<p>Our tables come in different sizes. You can <a href="#">choose the size</a> that best fits your needs.</p>',
  buttonConfig: null,
  iconName: "icon-info-open",
};

export const VariantSuccess = Template.bind({});
VariantSuccess.args = {
  variant: "success",
  title: "Yay! Congratulations!",
  content: '<p>You have successfully <a href="#">completed the task</a>.</p>',
  buttonConfig: null,
  iconName: "icon-success",
};

export const VariantWarning = Template.bind({});
VariantWarning.args = {
  variant: "warning",
  title: "Warning!",
  content:
    '<p>Step away from the computer! You have <a href="#">10 seconds</a> to comply.</p>',
  buttonConfig: null,
  iconName: "icon-warning",
};

export const VariantDanger = Template.bind({});
VariantDanger.args = {
  variant: "danger",
  title: "Be careful!",
  content:
    '<p>This is a dangerous box. <a href="#">Don\'t click the button</a>! Clicking the button will cause the box to disappear.</p>',
  buttonConfig: null,
  iconName: "icon-danger",
};

export const LocationExample = Template.bind({});
LocationExample.args = {
  variant: "default",
  title: "Bekijk de Otto S in een van onze winkels",
  content:
    '<p><a href="#">Bezoek ons</a> of maak een afspraak in Amsterdam, Antwerpen, Rotterdam of Utrecht.</p>',
  buttonConfig: {
    buttonElement: "a",
    href: "https://my.setmore.com/bookingpage/75b40b8e-862a-4c57-9955-376c5c809251",
    variant: "default",
    label: "Maak een afspraak",
  },
  iconName: "icon-info",
};

export const MultipleParagraphs = Template.bind({});
MultipleParagraphs.args = {
  variant: "default",
  title: "Heading",
  content:
    "<p>Some very important information here.</p><p>hello second paragraph</p>",
  buttonConfig: null,
  iconName: "icon-info",
};
