import type { Meta, StoryObj, Decorator } from "@storybook/html";
import {
  createThreeColumnBlock,
  ThreeColumnBlockProps,
} from "./ThreeColumnBlock";

// Decorator to wrap each story in a <section> tag (mimicking Shopify's DOM)
const withSectionWrapper: Decorator = (Story) => {
  const section = document.createElement("section");
  section.className = "shopify-section";

  const storyHtml = Story();
  const fragment =
    typeof storyHtml === "string"
      ? document.createRange().createContextualFragment(storyHtml)
      : storyHtml;

  section.appendChild(fragment);
  return section;
};

const meta = {
  title: "Sections/ThreeColumnBlock",
  decorators: [withSectionWrapper],
  tags: ["autodocs"],
  render: (args: ThreeColumnBlockProps) => createThreeColumnBlock(args),
  parameters: {
    docs: {
      description: {
        component:
          "A flexible three-column layout block designed to highlight key content, such as services or features. Each column can include an optional image, heading, description, and call-to-action button.",
      },
    },
    controls: {},
  },
  argTypes: {
    alignColumnsCenter: {
      control: { type: "boolean" },
      description: "Aligns the content of the columns centered.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    bgColor: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary"],
    },
    id: {
      control: "text",
      table: { disable: true },
    },
    title: { control: "text" },
    columns: { control: "object" },
  },
  args: {
    alignColumnsCenter: false,
    bgColor: "default",
    title: "Wij helpen je met kiezen",
    columns: [
      {
        imageUrl:
          "https://www.studio-henk.nl/Images/samples-landingpage/4-steps-block/1020940/image-thumb__1020940__blogsliderBrickImageThumb/samplesservice2@2x.avif",
        imageAlt: "Sample Service",
        imageLink: "https://example.com",
        heading: "Ontdek onze sample service",
        text: "Ontdek onze materialen vanuit het comfort van je eigen huis. Kies voor door ons samengestelde pakketten of selecteer zelf welke stalen je wilt uitproberen.",
        ButtonProps: {
          label: "Lees meer",
          href: "https://example.com/samples",
          variant: "tertiary",
        },
      },
      {
        imageUrl:
          "https://www.studio-henk.nl/Images/home/new-home/services/636298/image-thumb__636298__blogsliderBrickImageThumb/studio-henk-interior-advice-2@2x.avif",
        heading: "Gratis interieuradvies",
        text: "Onze interieuradviseurs staan voor je klaar als je je interieur wilt veranderen of advies nodig hebt over het personaliseren van je favoriete HENK meubelstuk.",
        ButtonProps: {
          label: "Advies aanvragen",
          href: "https://example.com/interieuradvies",
          variant: "tertiary",
        },
      },
      {
        imageUrl:
          "https://www.studio-henk.nl/_default_upload_bucket/1021643/image-thumb__1021643__blogsliderBrickImageThumb/Our%20Stores@2x.avif",
        heading: "Bezoek onze winkels",
        text: "Ervaar de hele collectie ​​in een van onze eigen winkels in Amsterdam, Antwerpen en Utrecht. Of bezoek een van onze verkooppunten bij jou in de buurt.",
        ButtonProps: {
          label: "Winkels bekijken",
          href: "https://example.com/winkels",
          variant: "tertiary",
        },
      },
    ],
  },
} satisfies Meta<ThreeColumnBlockProps>;

export default meta;

// type Story = StoryObj<typeof meta>;
type Story = StoryObj<ThreeColumnBlockProps>;

export const Default: Story = {};

// export const Primary: Story = {
//   args: {
//     bgColor: "primary",
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: "On a light variant of primary colour.",
//       },
//     },
//   },
// };

export const Secondary: Story = {
  args: {
    bgColor: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary colour for background",
      },
    },
  },
};

// export const Tertiary: Story = {
//   args: {
//     bgColor: 'tertiary',
//     title: 'HENK Visits',
//     columns: [
//       {
//         imageUrl: 'https://www.studio-henk.nl/_default_upload_bucket/1096701/image-thumb__1096701__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Gisele%20Azad-13@2x.avif',
//         imageAlt: 'Azad',
//         imageLink: 'https://www.studio-henk.nl/nl/blogs/henk-at-home-met-gisele-azad',
//         heading: 'Gisele Azad',
//         text: 'Samen met haar vriend Rudmer verhuisde Gisele een jaar geleden naar een idyllisch bosperceel midden in de Drentse natuur.',
//         ButtonProps: {
//           label: 'Lees meer',
//           href: 'https://example.com/samples',
//           variant: 'secondary',
//         },
//       },
//       {
//         imageUrl: 'https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif',
//         imageAlt: 'Azad',
//         imageLink: 'https://www.studio-henk.nl/nl/blogs/henk-at-home-met-gisele-azad',
//         heading: 'Laila Rietbergen',
//         text: 'Dagelijks inspireert de Utrechtse Laila honderdduizenden volgers op Instagram met haar passie en liefde voor de Japandi-interieurstijl.',
//         ButtonProps: {
//           label: 'Lees meer',
//           href: 'https://example.com/samples',
//           variant: 'secondary',
//         },
//       },
//       {
//         imageUrl: 'https://www.studio-henk.nl/_default_upload_bucket/1028113/image-thumb__1028113__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Nellie%20Benner-24@2x.avif',
//         imageAlt: 'Azad',
//         imageLink: 'https://www.studio-henk.nl/nl/blogs/henk-at-home-met-gisele-azad',
//         heading: 'Nellie Brenner',
//         text: 'In de hoofdstad van Nederland stappen we binnen in het kleurrijke interieur van Nellie, waar ze samenwoont met haar vriend en hun drie katten.',
//         ButtonProps: {
//           label: 'Lees meer',
//           href: 'https://example.com/samples',
//           variant: 'secondary',
//         },
//       },
//     ]
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Tertiary colour for background',
//       },
//     },
//   },
// };

export const MinimalCentered: Story = {
  args: {
    alignColumnsCenter: true,
    title: "",
    columns: [
      {
        imageUrl: "",
        heading: "Duurzaam ontworpen",
        text: "Wij ontwerpen meubels die generaties lang meegaan, met oog voor de hoogste kwaliteit, vakmanschap en duurzaamheid.",
      },
      {
        imageUrl: "",
        heading: "Volledig aanpasbaar design",
        text: "Creëer een uniek design meubel dat past bij jouw stijl, met een ruime keuze uit materialen, kleuren en afmetingen.",
      },
      {
        imageUrl: "",
        heading: "Op maat gemaakt in Europa",
        text: "Wij produceren op bestelling om verspilling van grondstoffen te voorkomen. Grotendeels in Nederland, altijd binnen Europa.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "With only the required props.",
      },
    },
  },
};
