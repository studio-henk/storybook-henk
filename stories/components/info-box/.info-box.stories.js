import { createInfoBox } from "./info-box";
import { Share } from "../base/Icon.stories";
import { Location } from "../base/Icon.stories";
import { LocationOpenDefault } from "../base/Icon.stories";
import { InfoDefault } from "../base/Icon.stories";
import { InfoOpenDefault } from "../base/Icon.stories";
import { SuccessDefault } from "../base/Icon.stories";
import { WarningDefault } from "../base/Icon.stories";
import { DangerDefault } from "../base/Icon.stories";

export default {
  title: "Components/Info Box",
  component: createInfoBox,
  tags: ["autodocs"],
  parameters: {
    controls: { sort: "requiredFirst" },
    // layout: "fullscreen",
    //layout: "centered",
  },
  argTypes: {
    title: {
      name: "title",
      type: { name: "string", required: false },
      description: "Title of the info box",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Default" },
      },
      control: "text",
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "Variant of the info box",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Default" },
      },
      control: "select",
      options: ["default", "info", "success", "warning", "danger"],
    },
    buttonConfig: {
      name: "Button Configuration",
      type: { name: "object", required: false },
      description: "Configuration object for the button",
      table: { type: { summary: "object" }, defaultValue: { summary: null } },
      control: {
        type: "object",
      },
    },
    iconHTML: {
      name: "Icon",
      type: { name: "string", required: false },
      description: "SVG Icon for the info box",
      table: { type: { summary: "string" }, defaultValue: { summary: null } },
      control: {
        type: "select",
        options: {
          None: null,
          Share: Share(),
          Location: Location(),
          LocationOpenDefault: LocationOpenDefault(),
          InfoDefault: InfoDefault(),
          InfoOpenDefault: InfoOpenDefault(),
          SuccessDefault: SuccessDefault(),
          WarningDefault: WarningDefault(),
          DangerDefault: DangerDefault(),
          // Add more icon story functions here
        },
      },
    },
  },
  // args: {
  //   texts: ["Made to order in Europe", "Customisable design", "Assembled on delivery"], // Default texts
  // },
};

const Template = ({ variant, ...args }) => {
  return createInfoBox({ variant, ...args });
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  title: "Heading",
  content: "<p>Some very important information here.</p>",
  buttonConfig: null,
  iconHTML: null,
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  variant: "default",
  title: "Still a heading",
  content: "<p>My my, do we have a fancy icon here?</p>",
  buttonConfig: null,
  // iconHTML: InfoDefault(),
  iconHTML: InfoOpenDefault(),
};

export const VariantInfo = Template.bind({});
VariantInfo.args = {
  variant: "info",
  title: "Did you know?",
  content:
    '<p>Our tables come in different sizes. You can <a href="#">choose the size</a> that best fits your needs.</p>',
  buttonConfig: null,
  // iconHTML: InfoDefault(),
  iconHTML: InfoOpenDefault(),
};

export const VariantSuccess = Template.bind({});
VariantSuccess.args = {
  variant: "success",
  title: "Yay! Congratulations!",
  content: '<p>You have successfully <a href="#">completed the task</a>.</p>',
  buttonConfig: null,
  iconHTML: SuccessDefault(),
};

export const VariantWarning = Template.bind({});
VariantWarning.args = {
  variant: "warning",
  title: "Warning!",
  content:
    '<p>Step away from the computer! You have <a href="#">10 seconds</a> to comply.</p>',
  buttonConfig: null,
  iconHTML: WarningDefault(),
};

export const VariantDanger = Template.bind({});
VariantDanger.args = {
  variant: "danger",
  title: "Be careful!",
  content:
    '<p>This is a dangerous box. <a href="#">Don\'t click the button</a>! Clicking the button will cause the box to disappear.</p>',
  buttonConfig: null,
  iconHTML: DangerDefault(),
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
  // iconHTML: Location(),
  iconHTML: LocationOpenDefault(),
};

export const MultipleParagraphs = Template.bind({});
MultipleParagraphs.args = {
  variant: "default",
  title: "Heading",
  content:
    "<p>Some very important information here.</p><p>hello second paragraph</p>",
  buttonConfig: null,
  iconHTML: null,
};
