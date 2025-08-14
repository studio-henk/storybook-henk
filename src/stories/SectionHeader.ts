
export interface SectionHeaderProps {
  bgColor?: 'default' | 'primary' | 'secondary';
  id?: string;
  caption?: string;
  title: string;
  level?: 1 | 2 | 3 | 'display';
  content?: string;
  buttonUrl?: string;
  buttonText?: string;
  buttonVariant?: 'default' | 'primary' | 'secondary' | 'tertiary';
  alignLeft?: boolean;
}

export const createSectionHeader = ({
  bgColor = 'default',
  id = '',
  caption = '',
  title,
  level = 2,
  content = '',
  buttonUrl = '',
  buttonText = '',
  buttonVariant = 'default',
  alignLeft = false
}: SectionHeaderProps): HTMLElement => {
  const container = document.createElement('div');

  // Build class list
  const classList = [
    `henk-section-header`,
    bgColor !== 'default' ? `henk-section-header--bg-${bgColor}` : '',
    alignLeft ? 'henk-section-header--align-left' : '',
  ].filter(Boolean).join(' ');

  container.className = classList;
  if (id) container.id = id;

  const innerDiv = document.createElement('div');
  innerDiv.className = 'henk-section-header__inner';

  const contentDiv = document.createElement('div');
  contentDiv.className = 'henk-section-header__content';

  if (caption) {
    const captionP = document.createElement('p');
    captionP.className = 'henk-section-header__caption';
    captionP.innerText = caption;
    contentDiv.appendChild(captionP);
  }

  // heading
  let headingTag: keyof HTMLElementTagNameMap = 'h2';
  let titleClass = 'henk-section-header__title';

  if (level === 'display') {
    headingTag = 'h1'; // or 'h1' if you prefer
    titleClass += ' fs-display';
  } else {
    const headingLevel = Math.min(Math.max(level, 1), 3);
    headingTag = `h${headingLevel}` as keyof HTMLElementTagNameMap;
  }
  const titleElement = document.createElement(headingTag);
  titleElement.className = titleClass;
  titleElement.innerText = title;
  contentDiv.appendChild(titleElement);

  // if (content) {
  //     const contentFragment = document.createRange().createContextualFragment(content);
  //     contentDiv.appendChild(contentFragment);
  // }

  if (content) {
    const contentEl = document.createElement('div');
    contentEl.className = 'henk-section-header__text';
    contentEl.innerHTML = content;
    contentDiv.appendChild(contentEl);
  }

  if (buttonUrl) {
    const button = document.createElement('a');
    button.href = buttonUrl;
    button.className = `henk-button henk-button--${buttonVariant}`;
    button.innerText = buttonText;
    contentDiv.appendChild(button);
  }

  innerDiv.appendChild(contentDiv);
  container.appendChild(innerDiv);

  return container;
};