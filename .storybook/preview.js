/** @type { import('@storybook/html').Preview } */

// import '../stories/styles/global.css';
import '../stories/styles/tokens/_tokens-colors.css';
import '../stories/styles/tokens/_tokens-colorsV2.css';
import '../stories/styles/henk-styles.min.css';
import '../stories/_font-face.css';
import '../stories/global.css';

const preview = {
  parameters: {
    // options: {
    //   storySort: (a, b) =>
    //     a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    // },
    // options: {
    //   storySort: {
    //     order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components', '*', 'WIP'],
    //   },
    // },
    options: {
      storySort: {
        order: ['Colors', 'Typography', 'Components', ['Base', 'Bars'], '*'],
      },
    },
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
