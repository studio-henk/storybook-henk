import type { Meta, StoryFn } from "@storybook/html";
import { createInfoBox, InfoBoxProps } from "./InfoBox";

const icons = import.meta.glob("../assets/icons/*.svg", {
  as: "raw",
  eager: true,
});
const iconNames = Object.keys(icons).map(
  (path) => path.split("/").pop()?.replace(".svg", "") || "",
);

export default {
  title: "Components/Composites/InfoBox",
  component: createInfoBox,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
    iconName: { control: "select", options: ["None", ...iconNames] },
    iconSize: { control: "select", options: ["small", "large"] },
  },
} as Meta<InfoBoxProps>;

// const Template: StoryFn<InfoBoxProps> = (args: InfoBoxProps) => {
//   return createInfoBox(args);
// };

const Template: StoryFn<InfoBoxProps> = (args: InfoBoxProps) =>
  createInfoBox(args);

export const Default = Template.bind({});
Default.args = {
  title: "Heading",
  content: "<p>Some important information here.</p>",
  iconName: "icon-info-open",
};

export const VariantInfo = Template.bind({});
VariantInfo.args = {
  variant: "info",
  title: "Did you know?",
  content: "<p>Our tables come in different sizes.</p>",
  iconName: "icon-info-open",
  iconSize: "large",
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
  title: "Bekijk de Otto S in een van onze winkels",
  content:
    '<p><a href="#">Bezoek ons</a> of maak een afspraak in Amsterdam, Antwerpen, Rotterdam of Utrecht.</p>',
  buttonConfig: {
    element: "a",
    href: "https://my.setmore.com/bookingpage/75b40b8e-862a-4c57-9955-376c5c809251",
    label: "Maak een afspraak",
  },
  iconName: "icon-location-open",
};

export const MultipleParagraphs = Template.bind({});
MultipleParagraphs.args = {
  title: "Heading",
  content:
    "<p>Some very important information here.</p><p>hello second paragraph</p>",
  buttonConfig: null,
  iconName: "icon-info-open",
};
