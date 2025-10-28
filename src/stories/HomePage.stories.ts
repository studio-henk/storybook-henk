import type { Meta, StoryObj } from "@storybook/html";

import { createBaseLayout } from "./templates/BaseLayout";
import { createHeader } from "./TheHeader";
import { TheFooter } from "./TheFooter";
import { createSplitScreen } from "./SplitScreen";
import { createThreeColumnBlock } from "./ThreeColumnBlock";
// import { NewsletterBlock } from "./NewsletterBlock.stories";
import { NewsletterBlock as RawNewsletterBlock } from "./NewsletterBlock.stories";

function wrapWithShopifySection(
  element: HTMLElement,
  id?: string,
): HTMLElement {
  const section = document.createElement("section");
  section.className = "shopify-section";
  if (id) {
    section.id = id;
  }
  section.appendChild(element);
  return section;
}

function htmlToNode(html: string): HTMLElement {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild as HTMLElement;
}

const NewsletterBlockRender = RawNewsletterBlock.render as
  | (() => string)
  | undefined;

if (!NewsletterBlockRender) {
  throw new Error("NewsletterBlock story is missing a render function");
}

const meta = {
  title: "Pages/HomePage",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const HomePage: Story = {
  render: () => {
    const header = createHeader({
      cartCount: 3,
      align: "center",
      inBetween: true,
      isHomepage: true,
      logoProps: { variant: "transparent", href: "/" },
    });
    const footer = TheFooter({});

    const mainContent = document.createElement("div");
    mainContent.id = "home-main-content";

    const split1 = createSplitScreen({
      id: "split-screen-1",
      bgColor: "default",
      reverse: false,
      title: "Eén HENK eettafel, één boom",
      level: 2,
      display: false,
      content:
        "<p>Als er één ding is waar Studio HENK groot mee geworden is, dan is het de eettafel. Geen enkele van onze eettafels is hetzelfde, maar de waarden wel: met zorg vervaardigd van hout uit duurzaam beheerde bossen, lokaal en met oog voor de toekomst. Omdat we niet alleen van de aarde willen nemen, geven we daar vanaf nu ook iets voor terug. Voor elke verkochte eettafel planten we een boom en ondersteunen de groei ervan. Zo dragen we bij aan het herstel van biodiversiteit.</p>",
      imageUrl:
        "https://www.studio-henk.nl/_default_upload_bucket/1213383/image-thumb__1213383__splitscreenBrickThumbAvif/weforest~-~media--2df6f497--query.avif",
      imageAlt: "",
      buttonUrl: "https://www.studio-henk.nl/nl/weforest",
      buttonText: "Lees meer",
      buttonVariant: "default",
    });

    const threecolumn1 = createThreeColumnBlock({
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
    });

    const videoBlock1 = document.createElement("div");
    videoBlock1.textContent = "video block";

    const threecolumn2 = createThreeColumnBlock({
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
    });

    const split2 = createSplitScreen({
      id: "split-screen-2",
      bgColor: "default",
      reverse: true,
      title: "Een afvalvrije meubelindustrie",
      caption: "ONZE MISSIE",
      level: 2,
      display: false,
      content:
        "<p>Als B Corp gebruiken wij de kracht van ons bedrijf om positieve verandering te bewerkstelligen. Het is onze missie om de meubelindustrie van binnenuit te hervormen en deze volledig afvalvrij te maken.</p>",
      imageUrl:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-renewi2_-_media--5860a965--query.jpg?crop=center&height=1728&v=1724855609&width=1152",
      imageAlt: "",
      buttonUrl: "https://www.studio-henk.nl/nl/b-corp",
      buttonText: "Lees meer",
      buttonVariant: "default",
    });

    const split3 = createSplitScreen({
      id: "split-screen-3",
      bgColor: "default",
      reverse: false,
      title: "Onze designs voor een vriendelijkere prijs",
      caption: "NIEUW",
      level: 2,
      display: false,
      content:
        "<p>We hebben nieuwe, slimme keuzes aan onze collectie toegevoegd. Hiermee laten we zien dat kwaliteit, duurzaamheid en een tot 15% vriendelijkere prijs hand in hand kunnen gaan.</p>",
      imageUrl:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/table.avif?crop=center&height=1728&v=1753254132&width=1152",
      imageAlt: "Another image",
      buttonUrl: "https://www.studio-henk.nl/nl/smart-collection",
      buttonText: "Ontdek meer",
      buttonVariant: "default",
    });

    const threecolumn3 = createThreeColumnBlock({
      bgColor: "tertiary",
      title: "HENK Visits",
      columns: [
        {
          imageUrl:
            "https://www.studio-henk.nl/_default_upload_bucket/1096701/image-thumb__1096701__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Gisele%20Azad-13@2x.avif",
          imageAlt: "Azad",
          imageLink:
            "https://www.studio-henk.nl/nl/blogs/henk-at-home-met-gisele-azad",
          heading: "Gisele Azad",
          text: "Samen met haar vriend Rudmer verhuisde Gisele een jaar geleden naar een idyllisch bosperceel midden in de Drentse natuur.",
          ButtonProps: {
            label: "Lees meer",
            href: "https://example.com/samples",
            variant: "secondary",
          },
        },
        {
          imageUrl:
            "https://www.studio-henk.nl/_default_upload_bucket/1039902/image-thumb__1039902__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Laila%20Rietbergen-19@2x.avif",
          imageAlt: "Azad",
          imageLink:
            "https://www.studio-henk.nl/nl/blogs/henk-at-home-met-gisele-azad",
          heading: "Laila Rietbergen",
          text: "Dagelijks inspireert de Utrechtse Laila honderdduizenden volgers op Instagram met haar passie en liefde voor de Japandi-interieurstijl.",
          ButtonProps: {
            label: "Lees meer",
            href: "https://example.com/samples",
            variant: "secondary",
          },
        },
        {
          imageUrl:
            "https://www.studio-henk.nl/_default_upload_bucket/1028113/image-thumb__1028113__blogsliderBrickImageThumb/2024%20Studio%20Henk%20Nellie%20Benner-24@2x.avif",
          imageAlt: "Azad",
          imageLink:
            "https://www.studio-henk.nl/nl/blogs/henk-at-home-met-gisele-azad",
          heading: "Nellie Brenner",
          text: "In de hoofdstad van Nederland stappen we binnen in het kleurrijke interieur van Nellie, waar ze samenwoont met haar vriend en hun drie katten.",
          ButtonProps: {
            label: "Lees meer",
            href: "https://example.com/samples",
            variant: "secondary",
          },
        },
      ],
    });

    mainContent.appendChild(wrapWithShopifySection(split1, "section-split1"));
    mainContent.appendChild(
      wrapWithShopifySection(threecolumn1, "section-threecolumn1"),
    );
    mainContent.appendChild(
      wrapWithShopifySection(videoBlock1, "section-videoBlock1"),
    );
    mainContent.appendChild(
      wrapWithShopifySection(threecolumn2, "section-threecolumn2"),
    );
    mainContent.appendChild(wrapWithShopifySection(split2, "section-split2"));
    mainContent.appendChild(wrapWithShopifySection(split3, "section-split3"));
    mainContent.appendChild(
      wrapWithShopifySection(threecolumn3, "section-threecolumn3"),
    );
    mainContent.appendChild(htmlToNode(NewsletterBlockRender()));

    return createBaseLayout({ header, mainContent, footer });
  },
};
