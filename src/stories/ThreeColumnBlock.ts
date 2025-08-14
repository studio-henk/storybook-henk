import { createButton, type ButtonProps } from './Button';

export interface Column {
  imageUrl?: string;
  imageAlt?: string;
  imageLink?: string;
  heading: string;
  text: string;
  ButtonProps?: ButtonProps;
}

export interface ThreeColumnBlockProps {
  bgColor?: 'default' | 'primary' | 'secondary' | 'tertiary';
  alignColumnsCenter?: boolean;
  id?: string;
  title?: string;
  columns: Column[];
}

export const createThreeColumnBlock = ({
  bgColor = 'default',
  alignColumnsCenter = false,
  id,
  title,
  columns,
}: ThreeColumnBlockProps): HTMLElement => {
  const container = document.createElement('div');

  // Build class list
  const classList = [
    `henk-three-column-block`,
    bgColor !== 'default' ? `henk-three-column-block--bg-${bgColor}` : '',
    alignColumnsCenter ? 'henk-three-column-block--align-center' : '',
  ].filter(Boolean).join(' ');

  container.className = classList;
  if (id) container.id = id;

  const inner = document.createElement('div');
  inner.className = 'henk-three-column-block__inner';
  container.appendChild(inner);

  if (title) {
    const titleEl = document.createElement('h2');
    titleEl.className = 'henk-three-column-block__title';
    titleEl.textContent = title;
    inner.appendChild(titleEl);
  }

  const columnsWrapper = document.createElement('div');
  columnsWrapper.className = 'henk-three-column-block__columns';

  columns.forEach((col) => {
    const colEl = document.createElement('div');
    colEl.className = 'henk-three-column-block__column';

    // Image
    if (col.imageUrl) {
      const image = document.createElement('img');
      image.src = col.imageUrl;
      image.alt = col.imageAlt || '';

      const imageWrapper = col.imageLink
        ? Object.assign(document.createElement('a'), {
          href: col.imageLink,
          className: 'henk-three-column-block__image-link',
        })
        : document.createElement('div');

      image.className = 'henk-three-column-block__image';
      imageWrapper.appendChild(image);
      colEl.appendChild(imageWrapper);
    }

    // Heading
    // if (col.heading) {
    const headingEl = document.createElement('h3');
    headingEl.className = 'henk-three-column-block__heading';
    headingEl.textContent = col.heading || 'column heading';
    colEl.appendChild(headingEl);
    // }

    // Text
    // if (col.text) {
    const textEl = document.createElement('p');
    textEl.className = 'henk-three-column-block__text';
    textEl.textContent = col.text || 'column text';
    colEl.appendChild(textEl);
    // }

    // Link Button
    if (col.ButtonProps && col.ButtonProps.label && col.ButtonProps.href) {
      const button = createButton(col.ButtonProps);
      colEl.appendChild(button);
    }

    columnsWrapper.appendChild(colEl);
  });

  inner.appendChild(columnsWrapper);
  return container;
};

