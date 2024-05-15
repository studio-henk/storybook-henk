/** @type { import('@storybook/html').Preview } */

// current henk styles
// import '/static/std/assets/css/tokens/_tokens-colors.css';
// import '/static/std/assets/css/tokens/_tokens-size-font.css';
// import '/static/std/assets/css/tokens/_tokens-size-spacing.css';

// import '/static/std/assets/css/henk-styles.min.css';
// import '/static/std/assets/css/henk-styles.css';


//import '../stories/_font-face.css';


// new sb styles
// import '/styles/_font-face.css';
// import '/styles/tokens/_tokens-colorsV2.css'; // TODO: move to head with preload like in pimcore version?
// import '/styles/global.css';

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
