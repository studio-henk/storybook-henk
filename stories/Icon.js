export const createIcon = async ({
  iconName = 'discord',
  primary = false,
  size = 'medium',
}) => {
  const IconModule = await import(`./assets/${iconName}.svg?raw`);
  const IconSVG = IconModule.default;
  
  const icon = document.createElement('span');
  icon.innerHTML = IconSVG;

  const mode = primary ? 'storybook-icon--primary' : 'storybook-icon--secondary';
  icon.className = ['storybook-icon', `storybook-icon--${size}`, mode].join(' ');

  return icon;
};
