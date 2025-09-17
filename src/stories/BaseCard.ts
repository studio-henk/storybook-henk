import type { TagProps } from "./tag";
import { createTag } from "./tag";

type BaseCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  buttonLabel?: string; // optional
  buttonVariant?: string;
  tags?: TagProps[];
  variant?: string;
  extraClass?: string;
};

export function createBaseCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  buttonLabel,
  buttonVariant,
  tags = [],
  variant,
  extraClass,
}: BaseCardProps): string {
  const classes = ["henk-card"];
  if (variant) classes.push(`henk-card--${variant}`);
  if (extraClass) classes.push(extraClass);

  const tagsHtml = tags
    .map((tag) => {
      const tagEl = createTag(tag);
      // If createTag returns HTMLElement, get outerHTML
      return tagEl instanceof HTMLElement ? tagEl.outerHTML : "";
    })
    .join("");

  return `
<div class="${classes.join(" ")}">
      <a href="${href}" class="henk-card__image-link">
        <figure class="henk-card__image-container">
          <img class="henk-card__img" src="${imageSrc}" alt="${imageAlt}" width="1032" height="1032">
        </figure>
      </a>
      <div class="henk-card__content">
        <p class="henk-card__title truncate">${title}</p>
        ${description ? `<p class="henk-card__description truncate">${description}</p>` : ""}
        ${buttonLabel ? `<a href="${href}" class="henk-button henk-card__button henk-button--${buttonVariant}">${buttonLabel}</a>` : ""}
      </div>
      ${tagsHtml ? `<div class="henk-card__tags">${tagsHtml}</div>` : ""}
    </div>
  `;
}
