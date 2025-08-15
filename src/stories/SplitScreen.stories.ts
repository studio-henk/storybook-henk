import type { Meta, StoryObj, Decorator } from '@storybook/html';
import type { SplitScreenProps } from './SplitScreen.ts';
import { createSplitScreen } from './SplitScreen.ts';

// Decorator to wrap each story in a <section> tag (mimicking Shopify's DOM)
const withSectionWrapper: Decorator = (Story) => {
  const section = document.createElement('section');
  section.className = 'shopify-section';

  const storyHtml = Story();
  const fragment =
    typeof storyHtml === 'string'
      ? document.createRange().createContextualFragment(storyHtml)
      : storyHtml;

  section.appendChild(fragment);
  return section;
};

const meta: Meta = {
  title: 'Sections/SplitScreen',
  decorators: [withSectionWrapper],
  tags: ['autodocs'],
  render: (args) => createSplitScreen(args as SplitScreenProps),
  parameters: {
    docs: {
      description: {
        component:
          'This block should be used to split content and visuals. It mimics Shopify section structure using a section wrapper.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Optional DOM ID',
      table: { disable: true }, // usually set by Shopify
    },
    bgColor: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Background color (currently only "default" supported)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse grid layout (image right, text left)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: String(false) },
      },
    },
    title: {
      control: 'text',
      name: 'title *',
      description: '**Required.** Main heading of the block.',
    },
    caption: {
      control: 'text',
      description: 'Optional caption above title',
    },
    level: {
      control: { type: 'radio' },
      options: [2, 3],
      description: 'HTML heading level for the title',
      table: {
        type: { summary: '2 | 3' },
        defaultValue: { summary: String(2) },
      },
    },
    content: {
      control: 'text',
      description: 'HTML content under the heading',
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL for the left/right side',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    imageLink: {
      control: 'text',
      description: 'Image URL for the left/right side',
    },
    buttonUrl: {
      control: 'text',
      description: 'URL for the optional button',
    },
    buttonText: {
      control: 'text',
      description: 'Text inside the button',
    },
    buttonVariant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'tertiary'],
      description: 'Visual variant of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    id: 'split-screen-1',
    bgColor: 'default',
    reverse: false,
    title: 'Een afvalvrije meubelindustrie',
    caption: 'ONZE MISSIE',
    level: 2,
    display: false,
    content:
      '<p>Als B Corp gebruiken wij de kracht van ons bedrijf om positieve verandering te bewerkstelligen. Het is onze missie om de meubelindustrie van binnenuit te hervormen en deze volledig afvalvrij te maken.</p>',
    imageUrl:
      'https://surf-turf-2-0.myshopify.com/cdn/shop/files/studio-henk-renewi2_-_media--5860a965--query.jpg?crop=center&height=1728&v=1724855609&width=1152',
    imageAlt: '',
    imageLink: '',
    buttonUrl: '#',
    buttonText: 'Lees meer',
    buttonVariant: 'default',
  },
};

export default meta;

export const Default: StoryObj = {};

export const Reverse: StoryObj = {
  args: {
    reverse: true,
  },
};


export const ImageLinked: StoryObj = {
  args: {
    id: 'ss-3',
    title: 'Eén HENK eettafel, één boom',
    content: '<p>Als er één ding is waar Studio HENK groot mee geworden is, dan is het de eettafel.</p><p>Geen enkele van onze eettafels is hetzelfde, maar de waarden wel: met zorg vervaardigd van hout uit duurzaam beheerde bossen, lokaal en met oog voor de toekomst.</p><p>Omdat we niet alleen van de aarde willen nemen, geven we daar vanaf nu ook iets voor terug. Voor elke verkochte eettafel planten we een boom en ondersteunen de groei ervan. Zo dragen we bij aan het herstel van biodiversiteit.</p>',
    imageUrl: 'https://surf-turf-2-0.myshopify.com/cdn/shop/files/weforest_-_media--2df6f497--query.avif?crop=center&height=1728&v=1753954539&width=1152',
    imageAlt: 'weforest',
    imageLink: 'https://www.studio-henk.nl/nl/weforest'
  },
};