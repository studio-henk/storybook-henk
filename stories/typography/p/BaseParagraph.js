import './henk-paragraph.css';

export const createBaseParagraph = ({ variant = "", text }) => {
  const baseParagraph = document.createElement("p");
  // baseParagraph.innerText = text;
  baseParagraph.innerHTML = text;

  if (variant) {
    baseParagraph.setAttribute("data-variant", variant);
  }

  return baseParagraph;
};