import { VideoBlock } from "@components/VideoBlock";
import type { VideoBlockProps } from "@components/VideoBlock";

export interface DoubleMediaBlockProps {
  reverseLayout?: boolean;

  // Large media
  largeMediaType?: "image" | "video";
  largeImage?: string;
  largeImageUrl?: string;
  largeImageNewTab?: boolean;
  largeVideo?: VideoBlockProps;

  // Small media
  smallMediaType?: "image" | "video";
  smallImage?: string;
  smallImageUrl?: string;
  smallImageNewTab?: boolean;
  smallVideo?: VideoBlockProps;
}

export function createDoubleMediaBlock({
  reverseLayout = false,
  largeMediaType = "image",
  largeImage = "",
  largeImageUrl = "",
  largeImageNewTab = false,
  largeVideo,
  smallMediaType = "image",
  smallImage = "",
  smallImageUrl = "",
  smallImageNewTab = false,
  smallVideo,
}: DoubleMediaBlockProps): HTMLElement {
  const wrapper = document.createElement("div");
  wrapper.className =
    "henk-double-media-block" +
    (reverseLayout ? " henk-double-media-block--reverse" : "");

  const inner = document.createElement("div");
  inner.className = "henk-double-media-block__inner";

  const grid = document.createElement("div");
  grid.className = "henk-double-media-block__grid";

  // --- Large Media ---
  const largeItem = document.createElement("div");
  largeItem.className = "henk-double-media-block__grid-item";

  if (largeMediaType === "video" && largeVideo) {
    largeItem.appendChild(VideoBlock(largeVideo));
  } else {
    const content = largeImage
      ? `<img
          class="item__image"
          id="img1"
          src="${largeImage}"
          alt="Large Image"
          loading="lazy"
          width="1120"
          height="1400"
        />`
      : `<svg class="placeholder-svg-large" width="1120" height="1400" aria-label="Large image placeholder" role="img"></svg>`;

    if (largeImageUrl) {
      const a = document.createElement("a");
      a.href = largeImageUrl;
      if (largeImageNewTab) a.setAttribute("target", "_blank");
      a.innerHTML = content;
      largeItem.appendChild(a);
    } else {
      largeItem.innerHTML = content;
    }
  }

  // --- Small Media ---
  const smallItem = document.createElement("div");
  smallItem.className = "henk-double-media-block__grid-item";

  if (smallMediaType === "video" && smallVideo) {
    smallItem.appendChild(VideoBlock(smallVideo));
  } else {
    const content = smallImage
      ? `<img
          class="item__image"
          id="img2"
          src="${smallImage}"
          alt="Small Image"
          loading="lazy"
          width="808"
          height="998"
        />`
      : `<svg class="placeholder-svg-small" width="808" height="998" aria-label="Small image placeholder" role="img"></svg>`;

    if (smallImageUrl) {
      const a = document.createElement("a");
      a.href = smallImageUrl;
      if (smallImageNewTab) a.setAttribute("target", "_blank");
      a.innerHTML = content;
      smallItem.appendChild(a);
    } else {
      smallItem.innerHTML = content;
    }
  }

  grid.appendChild(largeItem);
  grid.appendChild(smallItem);
  inner.appendChild(grid);
  wrapper.appendChild(inner);

  return wrapper;
}
