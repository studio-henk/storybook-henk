export interface HeaderBlockProps {
  bgColor?: "default" | "primary" | "secondary";
  id?: string;
  caption?: string;
  title: string;
  level?: 1 | 2 | 3 | "display";
  alignLeft?: boolean;
}

export const HeaderBlock = ({
  bgColor = "default",
  id = "",
  caption = "",
  title,
  level = 2,
  alignLeft = true,
}: HeaderBlockProps): HTMLElement => {
  const container = document.createElement("header");

  // Build class list
  const classList = [
    `henk-header-block`,
    bgColor !== "default" ? `henk-header-block--bg-${bgColor}` : "",
    alignLeft
      ? "henk-header-block--align-left"
      : "henk-header-block--align-center",
  ]
    .filter(Boolean)
    .join(" ");

  container.className = classList;
  if (id) container.id = id;

  // const innerDiv = document.createElement("div");
  // innerDiv.className = "henk-section-header__inner";

  // const contentDiv = document.createElement("div");
  // contentDiv.className = "henk-section-header__content";

  if (caption) {
    const captionP = document.createElement("p");
    captionP.className = "henk-header-block__caption";
    captionP.innerText = caption;
    container.appendChild(captionP);
  }

  // heading
  let headingTag: keyof HTMLElementTagNameMap = "h2";
  let titleClass = "henk-header-block__title";

  if (level === "display") {
    headingTag = "h1"; // or 'h1' if you prefer
    titleClass += " fs-display";
  } else {
    const headingLevel = Math.min(Math.max(level, 1), 3);
    headingTag = `h${headingLevel}` as keyof HTMLElementTagNameMap;
  }
  const titleElement = document.createElement(headingTag);
  titleElement.className = titleClass;
  titleElement.innerText = title;
  container.appendChild(titleElement);

  // innerDiv.appendChild(contentDiv);
  // container.appendChild(innerDiv);

  return container;
};
