/** @type { import('@storybook/html').Preview } */

// import '../stories/styles/global.css';
import '../stories/styles/tokens/_tokens-colors.css';
import '../stories/styles/henk-styles.min.css';
import '../stories/_font-face.css';
import '../stories/global.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },    
  },  
};

export default preview;
