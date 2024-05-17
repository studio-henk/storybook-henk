import './heading-group.css';

export const createHeadingGroup = ({
  level = '2',
  heading = '',
  paragraphs = [],
  className = '',
  reverse = false,
}) => {
  const hgroup = document.createElement('hgroup');  

  const headingTag = `h${level}`;
  
  if (heading) {
    const headingElement = document.createElement(headingTag);
    headingElement.innerText = heading;
    headingElement.className = 'henk-hgroup__heading';
    hgroup.appendChild(headingElement);
  }

  paragraphs.forEach(paragraphText => {
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = paragraphText;
    paragraphElement.className = 'henk-hgroup__paragraph';
    hgroup.appendChild(paragraphElement);
  });

  hgroup.className = [
    'henk-hgroup',
    className ? `henk-hgroup--${className}` : '',
    reverse ? 'henk-hgroup--reverse' : '',
  ].filter(Boolean).join(' ');

  return hgroup;
};
