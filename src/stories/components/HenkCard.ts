import type { TagProps } from "./tag";
import { createTag } from "./tag";

export type HenkCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  tags?: TagProps[];
  extraClass?: string;
  rounded?: boolean;
  shadow?: boolean;
};

export function createHenkCard({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  tags = [],
  extraClass,
  rounded = false,
  shadow = false,
}: HenkCardProps): string {
  const classes = ["henk-card"];
  if (extraClass) classes.push(extraClass);
  if (rounded) classes.push("henk-card--rounded");
  if (shadow) classes.push("henk-card--shadow");

  const tagsHtml = tags
    .map((tag) => {
      const tagEl = createTag(tag);
      return tagEl instanceof HTMLElement ? tagEl.outerHTML : "";
    })
    .join("");

  return `
<div class="${classes.join(" ")}">
      <a href="${href}" class="henk-card__image-link">
        <picture class="henk-card__image-container">
          <img class="henk-card__img" src="${imageSrc}" alt="${imageAlt}" width="1032" height="1032">
        </picture>
      </a>
      <div class="henk-card__content">
        <p class="henk-card__title truncate">${title}</p>
        ${subtitle ? `<p class="henk-card__subtitle truncate">${subtitle}</p>` : ""}
      </div>
      ${tagsHtml ? `<div class="henk-card__tags">${tagsHtml}</div>` : ""}
    </div>
  `;
}
