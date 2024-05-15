import './heading-group.css';

export const createHeadingGroup = ({
  level = '1',
  heading = '',
  subheading = '',
  className = '',
  reverse = false,
}) => {
  const hgroup = document.createElement('hgroup');  

  const headingTag = `h${level}`;
  
  if (heading) {
    const headingElement = document.createElement(headingTag);
    headingElement.innerText = heading;
    hgroup.appendChild(headingElement);
  }

  if (subheading) {
    const subheadingElement = document.createElement('p');
    subheadingElement.innerText = subheading;
    hgroup.appendChild(subheadingElement);
  }

  // hgroup.className = ['henk-hgroup', className ? `henk-hgroup--${className}` : ''].filter(Boolean).join(' ');
  hgroup.className = [
    'henk-hgroup',
    className ? `henk-hgroup--${className}` : '',
    reverse ? 'henk-hgroup--reverse' : '',
  ].filter(Boolean).join(' ');

  return hgroup;
};
