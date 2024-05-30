import './atom-paragraph.css';

export const createBaseParagraph = ({
  variant = '',
  text,
}) => {
  const baseParagraph = document.createElement('p');
  baseParagraph.innerText = text;

  if (variant) {
    baseParagraph.setAttribute('data-variant', variant);
  }

  return baseParagraph;
};


