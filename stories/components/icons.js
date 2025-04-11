// icons.js

// Define an object to hold the SVG content
const icons = {};

// Array to store promises for each dynamic import
const promises = [];

// Dynamically import all SVG files in the icons directory
const iconModules = import.meta.glob('../../assets/icons/*.svg', {
  query: '?raw',
})
// console.log(iconModules);

// Iterate over each imported SVG file
Object.keys(iconModules).forEach((path) => {
  const iconName = path.match(/\/([^/]+)\.svg$/)[1]; // Extract the icon name from the path
  
  // Dynamically import the SVG file and store its content in the icons object
  const promise = iconModules[path]().then(svg => {
    icons[iconName] = svg.default || svg; // Store the SVG content in the icons object
  });
  
  promises.push(promise); // Add the promise to the array
});

// Wait for all promises to resolve
Promise.all(promises).then(() => {
  // console.log(icons);
  console.log('Icons loaded');
});

export { icons };
