// sectionHeader.js
import './_SectionHeader.css';


export const createSectionHeader = ({
  bgColor = 'default',
  id = '',
  byline = '',
  title = '',
  level = 2,
  content = '',
  buttonUrl = '',
  buttonText = ''
}) => {
  const section = document.createElement('section');
  section.className = `SectionHeader SectionHeader--BG-${bgColor}`;
  section.id = id;

  const contentDiv = document.createElement('div');
  contentDiv.className = 'SectionHeader__content';

  if (byline) {
    const bylineP = document.createElement('p');
    bylineP.className = 'SectionHeader__byline';
    bylineP.innerText = byline;
    contentDiv.appendChild(bylineP);
  }

  const titleElement = document.createElement(`h${level}`);
  titleElement.className = 'SectionHeader__title';
  titleElement.innerText = title;
  contentDiv.appendChild(titleElement);

  if (content) {
    const contentFragment = document.createRange().createContextualFragment(content);
    contentDiv.appendChild(contentFragment);
  }

  if (buttonUrl) {
    const button = document.createElement('a');
    button.href = buttonUrl;
    button.className = 'sh-atom-button';
    button.setAttribute('data-style', 'filled');
    button.innerText = buttonText;
    contentDiv.appendChild(button);
  }

  section.appendChild(contentDiv);

  return section;
};
