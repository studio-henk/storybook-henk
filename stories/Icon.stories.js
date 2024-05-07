import { fn } from '@storybook/test';
import { createIcon } from './Icon';

export default {
  title: 'Components/Icon',
  tags: ['autodocs'],
  argTypes: {    
    iconName: { control: 'text' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const createIconStory = (iconName) => ({ primary, size, ...args }) => {
  const iconRef = document.createElement('span');

  createIcon({ iconName, primary, size }).then(icon => {
    iconRef.innerHTML = ''; // Clear any previous content
    iconRef.appendChild(icon);
  }).catch(error => {
    console.error('Error creating icon:', error);
    iconRef.innerText = `Error creating icon: ${error.message}`;
  });

  return iconRef;
};

export const ShareIcon = createIconStory('icon-share');
export const CheckmarkIcon = createIconStory('icon-checkmark');
// export const Discord = createIconStory('discord');
// export const Github = createIconStory('github');
