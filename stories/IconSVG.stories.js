import { fn } from '@storybook/test';
// import { createIconSVG } from './IconSVG';
import iconShareSVG from './assets/icon-share.svg?raw';
import iconTruckSVG from './assets/icon-truck.svg?raw';
import iconCheckmarkSVG from './assets/icons/icon-checkmark.svg?raw';

export default {
  title: 'Components/IconSVG',
  tags: ['autodocs'],
};

export const Share = () => {
  // Embed the SVG code into the story
  return iconShareSVG;
};

export const Truck = () => {
  // Embed the SVG code into the story
  return iconTruckSVG;
};

export const Checkmark = () => {
  // Embed the SVG code into the story
  return iconCheckmarkSVG;
};

// export default {
//   title: 'Components/IconSVG',
//   tags: ['autodocs'],
//   render: ({ iconName, ...args }) => {
//     // Create the IconImage element with the given iconName
//     return createIconSVG({ iconName, ...args });
//   },
//   argTypes: {    
//     iconName: { control: 'text' },
//     primary: { control: 'boolean' },
//     size: {
//       control: { type: 'select' },
//       options: ['small', 'medium', 'large'],
//     },
//   },
// };

// export const Default = {
//   args: {
//     iconName: 'icon-share', // Default icon name
//   },
// };

// const createIconStory = (iconName) => ({ primary, size, ...args }) => {
//   const iconRef = document.createElement('span');

//   createIcon({ iconName, primary, size }).then(icon => {
//     iconRef.innerHTML = ''; // Clear any previous content
//     iconRef.appendChild(icon);
//   }).catch(error => {
//     console.error('Error creating icon:', error);
//     iconRef.innerText = `Error creating icon: ${error.message}`;
//   });

//   return iconRef;
// };

// export const ShareIcon = createIconStory('icon-share');
// export const Discord = createIconStory('discord');
// export const Github = createIconStory('github');
