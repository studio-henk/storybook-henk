// HomePage.stories.js
import { createUspsBar } from '../components/usp-bar/usp-bar';
import {HeroVideoStory} from '../components/HeroVideo.stories.js';
import { FooterStory } from '../components/Footer.stories.js';
import { NewsletterBlock } from '../sections/NewsletterBlock.stories';
import { createSectionHeader } from '../components/SectionHeader';
import {createContentDivider } from '../components/base/content-divider/ContentDivider';
import { FAQBlock } from '../sections/FAQ-block.stories';

export default {
  title: 'Pages/HomePage', // Define the title of your story
  parameters: {
    layout: 'fullscreen',
  },
};


// Define the story for the HomePage
export const HomePage = () => {
  const uspBar = createUspsBar({    
    showIcon: false,
    variant: 'primary',
  });

  // create section header
  const sectionHeader = createSectionHeader({
    bgColor: 'primary',
    id: 'section-header-1',
    byline: 'This is a byline',
    title: 'Section Title',
    level: 2,
    content: '<p>This is some content inside the <a href="#">section</a> header.</p>',
    buttonUrl: 'https://example.com',
    buttonText: 'Click Me',
    buttonVariant: 'default',
  });

  // create content divider
  const contentDivider = createContentDivider({
    variant: 'default',
  });

  const homeContainer = document.createElement('div');
  homeContainer.id = "home-container";

  homeContainer.appendChild(uspBar);

  // create heroVideo
  const heroVideoContainer = document.createElement('div');
  heroVideoContainer.innerHTML = HeroVideoStory();

  // Append HeroVideoStory to the container
  homeContainer.appendChild(heroVideoContainer);

  // Append section header 
  homeContainer.appendChild(sectionHeader);

  // Append content divider
  homeContainer.appendChild(contentDivider);

  // Create FAQ block
  homeContainer.appendChild(FAQBlock());

  // Create newsletter form
  const newsletterFormContainer = document.createElement('div');
  newsletterFormContainer.innerHTML = NewsletterBlock(); 
  homeContainer.appendChild(newsletterFormContainer);

  // Create footer
  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = FooterStory();

  // Append FooterStory to the container
  homeContainer.appendChild(footerContainer);

  return homeContainer;
};

