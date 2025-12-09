import type { TagProps } from "./tag";
import { createTag } from "./tag";

export type BaseCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  contentDir?: string;
  subtitle?: string;
  price?: string;
  fromPrice?: string;
  discountedPrice?: string;
  buttonLabel?: string; // optional
  buttonVariant?: string;
  buttonSize?: string;
  tags?: TagProps[];
  variant?: string;
  extraClass?: string;
  rounded?: boolean;
  shadow?: boolean;
  directionsLabel?: string;
  directionsUrl?: string;
};

export function createBaseCard({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  contentDir,
  price,
  fromPrice,
  discountedPrice,
  buttonLabel,
  buttonVariant,
  buttonSize,
  tags = [],
  variant,
  extraClass,
  rounded = false,
  shadow = false,
  directionsLabel,
  directionsUrl,
}: BaseCardProps): string {
  const classes = ["henk-card"];
  if (variant) classes.push(`henk-card--${variant}`);
  if (extraClass) classes.push(extraClass);
  if (rounded) classes.push("henk-card--rounded");
  if (shadow) classes.push("henk-card--shadow");

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
        <picture class="henk-card__image-container">
          <img class="henk-card__img" src="${imageSrc}" alt="${imageAlt}" width="1032" height="1032">
        </picture>
      </a>
      ${
        !variant
          ? `
            <div class="henk-card__content">
              <p class="henk-card__title truncate">${title}</p>
              ${
                discountedPrice
                  ? `<p class="henk-card__price"><del class="henk-card__price-original">${price}</del> - <span class="henk-card__price-number henk-card__price--discounted">${discountedPrice}</span></p>`
                  : fromPrice
                    ? `<p class="henk-card__price">Vanaf <span class="henk-card__price-number">${fromPrice}</span></p>`
                    : price
                      ? `<p class="henk-card__price"><span class="henk-card__price-number">${price}</span></p>`
                      : ""
              }
              ${subtitle ? `<p class="henk-card__subtitle truncate">${subtitle}</p>` : ""}
            </div>
          `
          : `
            <div class="henk-card__content henk-card__content--${contentDir} ">
              <p class="henk-card__title truncate">${title}</p>
              ${directionsLabel ? `<p class="henk-card__subtitle truncate"><a href="${directionsUrl}" class="henk-card__directions">${directionsLabel}</a></p>` : ""}
              ${buttonLabel ? `<a href="${href}" class="henk-button henk-card__button henk-button--${buttonVariant} henk-button--${buttonSize}">${buttonLabel}</a>` : ""}
            </div>
          `
      }
      ${tagsHtml ? `<div class="henk-card__tags">${tagsHtml}</div>` : ""}
    </div>
  `;
}
