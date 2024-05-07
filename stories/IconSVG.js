// IconImage.js

export const createIconSVG = async ({ iconName }) => {
  // Construct the path to the SVG file based on the iconName
  const iconPath = `/assets/${iconName}.svg`;

  try {
    // Fetch the SVG file content
    const response = await fetch(iconPath);
    if (!response.ok) {
      throw new Error('Failed to fetch SVG file');
    }
    const svgContent = await response.text();

    // Create a <div> container
    const container = document.createElement('div');
    container.innerHTML = svgContent;

    // Extract the <svg> element from the container
    const svgElement = container.querySelector('svg');
    if (!svgElement) {
      throw new Error('SVG file does not contain valid SVG content');
    }

    // Return the <svg> element
    return svgElement;
  } catch (error) {
    console.error('Error fetching or parsing SVG file:', error);
    return null;
  }
};


// export const createIconSVG = async ({ iconName }) => {
//   // Construct the path to the SVG file based on the iconName
//   // const iconPath = `./assets/${iconName}.svg`;
//   // const iconPath = `./assets/${iconName}.svg?raw`;
//   // const IconPath = await import(`./assets/${iconName}.svg?raw`);
//   const IconPath = await import(`./${iconName}.svg?raw`);
//   console.log(iconPath);
//   console.log(iconPath.default);

//   // Create the <img> element
//   // const imgElement = document.createElement('img');
//   // imgElement.src = iconPath;
//   // imgElement.alt = iconName;
//   // imgElement.className = 'icon-image';

//   // return imgElement;
//   return iconPath;
// };


// export const createIconSVG = async ({
//   iconName = 'discord',
//   primary = false,
//   size = 'medium',
// }) => {
//   const IconModule = await import(`./assets/${iconName}.svg?raw`);
//   const IconSVG = IconModule.default;
  
//   const icon = document.createElement('span');
//   icon.innerHTML = IconSVG;

//   const mode = primary ? 'storybook-icon--primary' : 'storybook-icon--secondary';
//   icon.className = ['storybook-icon', `storybook-icon--${size}`, mode].join(' ');

//   return icon;
// };
