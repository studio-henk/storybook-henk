// IconImage.js

export const createIconImage = ({ iconName }) => {
  // Construct the path to the SVG file based on the iconName
  // const iconPath = `./assets/${iconName}.svg`;
  const iconPath = `/${iconName}.svg`;
  console.log(iconPath);

  // Create the <img> element
  const imgElement = document.createElement('img');
  imgElement.src = iconPath;
  imgElement.alt = iconName;
  imgElement.className = 'icon-image';

  return imgElement;
};

// // IconImage.js

// export const createIconImage = async ({ iconName }) => {
//   // Assuming icons are stored in a specific directory and are named with their icon names
//   const iconPath = await import(`./assets/${iconName}.svg`);
//   console.log(iconPath);
  
//   // Create the <i> element
//   const iconElement = document.createElement('i');
//   iconElement.classList.add('icon');
  
//   // Create the <img> element
//   const imgElement = document.createElement('img');
//   imgElement.src = iconPath;
//   imgElement.alt = iconName;
  
//   // Append the <img> element to the <i> element
//   iconElement.appendChild(imgElement);
  
//   return iconElement;
// };
