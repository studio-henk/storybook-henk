// sectionHeader.js
// import './_SectionHeader.css';
// import './_SectionHeader.css';
import './section-header.css';

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
  section.className = `section-header section-header--bg-${bgColor}`;
  section.id = id;

  const contentDiv = document.createElement('div');
  contentDiv.className = 'section-header__content';

  if (byline) {
    const bylineP = document.createElement('p');
    bylineP.className = 'section-header__byline';
    bylineP.innerText = byline;
    contentDiv.appendChild(bylineP);
  }

  const titleElement = document.createElement(`h${level}`);
  titleElement.className = 'section-header__title';
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
