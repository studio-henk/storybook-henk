import { VideoBlock } from "@components/VideoBlock";
import type { VideoBlockProps } from "@components/VideoBlock";

export interface SplitScreenProps {
  bgColor?: "default";
  id?: string;
  title: string;
  caption?: string;
  level?: 1 | 2 | 3;
  display?: boolean;
  content?: string;

  imageUrl?: string;
  imageAlt?: string;
  mediaLink?: string;
  mediaLinkTargetBlank?: boolean;
  videoProps?: VideoBlockProps;

  buttonUrl?: string;
  buttonText?: string;
  buttonVariant?: "default" | "primary" | "secondary" | "tertiary";
  reverse?: boolean;
}

export const createSplitScreen = ({
  bgColor = "default",
  id = "",
  title,
  display = false,
  caption = "",
  level = 2,
  content = "",
  imageUrl = "",
  imageAlt = "",
  mediaLink = "",
  mediaLinkTargetBlank = false,
  videoProps,
  buttonUrl = "",
  buttonText = "",
  buttonVariant = "default",
  reverse = false,
}: SplitScreenProps): HTMLElement => {
  const container = document.createElement("div");
  container.className = `henk-split-screen${bgColor !== "default" ? ` henk-split-screen--bg-${bgColor}` : ""}`;
  if (id) container.id = id;

  const inner = document.createElement("div");
  inner.className = "henk-split-screen__inner";
  if (reverse) inner.dataset.order = "reverse";

  const grid = document.createElement("div");
  grid.className = "henk-split-screen__grid";

  // === IMAGE COLUMN ===
  const mediaItem = document.createElement("div");
  mediaItem.className = "henk-split-screen__grid-item";

  let mediaElement: HTMLElement | undefined;

  if (videoProps) {
    const videoBlock = VideoBlock(videoProps); // <div> with <video> + optional button
    const videoElement = videoBlock.querySelector("video");
    const button = videoBlock.querySelector("button");

    if (videoElement && mediaLink) {
      // Wrap only the video in a link
      const link = document.createElement("a");
      link.href = mediaLink;
      if (mediaLinkTargetBlank) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      // link.appendChild(videoElement);
      // mediaItem.appendChild(link);

      // append button separately
      // if (button) mediaItem.appendChild(button);
      // Wrap only the video in the link, keep container intact
      videoElement.parentElement?.insertBefore(link, videoElement);
      link.appendChild(videoElement);
    }

    // Always append the container
    mediaItem.appendChild(videoBlock);
    // } else {
    //   mediaItem.appendChild(videoBlock);
    // }
  } else if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = imageAlt || "";
    img.className = "henk-split-screen__img";
    img.width = 1152;
    img.height = 1728;

    if (mediaLink) {
      const link = document.createElement("a");
      link.href = mediaLink;
      if (mediaLinkTargetBlank) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      link.appendChild(img);
      mediaItem.appendChild(link);
    } else {
      mediaItem.appendChild(img);
    }
  }
  // if (videoProps) {
  //   mediaElement = VideoBlock(videoProps);
  // } else if (imageUrl) {
  //   const img = document.createElement("img");
  //   img.src = imageUrl;
  //   img.alt = imageAlt || "";
  //   img.className = "henk-split-screen__img";
  //   img.width = 1152;
  //   img.height = 1728;
  //   mediaElement = img;
  // }
  //
  // // Wrap in link if provided
  // if (mediaElement) {
  //   if (mediaLink) {
  //     const link = document.createElement("a");
  //     link.href = mediaLink;
  //     if (mediaLinkTargetBlank) {
  //       link.target = "_blank";
  //       link.rel = "noopener";
  //     }
  //     link.appendChild(mediaElement);
  //     mediaItem.appendChild(link);
  //   } else {
  //     mediaItem.appendChild(mediaElement);
  //   }
  // }

  // Video has priority if provided
  // if (videoProps) {
  //   const videoElement = VideoBlock(videoProps); // returns <div> wrapper with video and button
  //   mediaItem.appendChild(videoElement);
  // } else if (imageUrl) {
  //   const img = document.createElement("img");
  //   img.src = imageUrl;
  //   img.alt = imageAlt || "";
  //   img.className = "henk-split-screen__img";
  //   img.width = 1152;
  //   img.height = 1728;
  //   // imageItem.appendChild(img);
  //
  //   if (imageLink) {
  //     const link = document.createElement("a");
  //     link.href = imageLink;
  //
  //     if (imageLinkTargetBlank) {
  //       link.target = "_blank";
  //       link.rel = "noopener";
  //     }
  //
  //     link.appendChild(img);
  //     mediaItem.appendChild(link);
  //   } else {
  //     mediaItem.appendChild(img);
  //   }
  // }

  // === CONTENT COLUMN ===
  const contentItem = document.createElement("div");
  contentItem.className = "henk-split-screen__grid-item";

  const contentDiv = document.createElement("div");
  contentDiv.className = "henk-split-screen__content";

  if (caption) {
    const subtitleEl = document.createElement("p");
    subtitleEl.className = "henk-split-screen__caption";
    subtitleEl.innerText = caption;
    contentDiv.appendChild(subtitleEl);
  }

  const safeLevel = Math.min(Math.max(level, 1), 3);
  const headingTag = `h${safeLevel}` as keyof HTMLElementTagNameMap;

  const titleElement = document.createElement(headingTag);
  titleElement.className = [
    "henk-split-screen__title",
    display ? "fs-display" : "",
  ]
    .filter(Boolean)
    .join(" ");
  titleElement.innerText = title;
  contentDiv.appendChild(titleElement);

  if (content) {
    const contentEl = document.createElement("div");
    contentEl.className = "henk-split-screen__text";
    contentEl.innerHTML = content;
    contentDiv.appendChild(contentEl);
  }

  if (buttonUrl && buttonText) {
    const button = document.createElement("a");
    button.href = buttonUrl;
    button.innerText = buttonText;
    button.className = `henk-button henk-button--${buttonVariant}`;
    contentDiv.appendChild(button);
  }

  contentItem.appendChild(contentDiv);
  grid.appendChild(mediaItem);
  grid.appendChild(contentItem);
  inner.appendChild(grid);
  container.appendChild(inner);

  return container;
};
