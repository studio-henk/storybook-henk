/** @type { import('@storybook/html').Preview } */

// current henk styles
import '../public/static/std/assets/css/tokens/_tokens-colors.css';
import '../public/static/std/assets/css/tokens/_tokens-size-font.css';
import '../public/static/std/assets/css/tokens/_tokens-size-spacing.css';

import '../public/static/std/assets/css/henk-styles.min.css';


//import '../stories/_font-face.css';


// new sb styles
import '../public/styles/tokens/_tokens-colorsV2.css';
import '../public/styles/global.css';

const preview = {
  parameters: {
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
