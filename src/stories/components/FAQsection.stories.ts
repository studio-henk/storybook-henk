import type { Meta, StoryObj } from "@storybook/html";
import { createFAQSection } from "@components/FAQsection"; // <-- import the section creator

const meta = {
  title: "Sections/FAQ Section",
} satisfies Meta;

export default meta;

export const FAQSectionStory: StoryObj = {
  render: () => {
    const faqSection = createFAQSection({
      title: "Frequently Asked Questions",
      detailsItems: [
        {
          summary: "What is the purpose of this component?",
          iconName: "feather-help-circle",
          content:
            "<p>This component is used to display a list of frequently asked questions.</p>",
          variant: "plusmin",
        },
        {
          summary: "How many samples can I order?",
          iconName: "feather-help-circle",
          content:
            "<p>You are free to assemble your own samples or choose from our curated sample packs, which include six material samples each. You can help us reduce waste by ordering only the samples you need.</p>",
          variant: "plusmin",
        },
      ],
    });

    return faqSection;
  },
};

FAQSectionStory.storyName = "FAQ Section";
FAQSectionStory.parameters = {
  docs: {
    description: {
      story:
        "This story shows a FAQ section containing multiple collapsible details components.",
    },
  },
};
