// HomePage.stories.js
import { createUspsBar } from '../components/usp-bar/usp-bar';
import {HeroVideoStory} from '../components/HeroVideo.stories.js';

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

  const homeContainer = document.createElement('div');
  homeContainer.id = "home-container";

  homeContainer.appendChild(uspBar);

  // create heroVideo
  const heroVideoContainer = document.createElement('div');
  heroVideoContainer.innerHTML = HeroVideoStory();

  // Append HeroVideoStory to the container
  homeContainer.appendChild(heroVideoContainer);

  return homeContainer;
};

