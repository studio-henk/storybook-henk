export interface HeadingProps {
  tag: string;
  text: string;
  weight?: "normal" | "medium" | "bold";
  style?: "normal" | "italic";
  display?: boolean;
}

export const createHeadingElement = ({
  tag,
  text,
  weight = "normal",
  style = "normal",
  display = false,
}: HeadingProps): HTMLElement => {
  const heading = document.createElement(tag);
  heading.textContent = text;

  if (weight === "medium") {
    heading.classList.add("fw-500");
  }

  if (weight === "bold") {
    heading.classList.add("fw-700");
  }

  if (style === "italic") {
    heading.classList.add("fs-italic");
  }

  if (display) {
    heading.classList.add("fs-display");
  }

  return heading;
};
