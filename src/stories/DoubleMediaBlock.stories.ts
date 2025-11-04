// src/stories/DoubleMediaBlock.stories.ts
import type { Meta, StoryObj } from "@storybook/html";
import { createDoubleMediaBlock } from "@stories/DoubleMediaBlock";
import type { VideoBlockProps } from "@components/VideoBlock";

const meta: Meta = {
  title: "Sections/DoubleMediaBlock",
};
export default meta;

export const LargeImageSmallImage: StoryObj = {
  render: () =>
    createDoubleMediaBlock({
      largeMediaType: "image",
      largeImage:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
      smallMediaType: "image",
      smallImage:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
    }),
};

export const LargeVideoSmallImage: StoryObj = {
  render: () => {
    const videoProps: VideoBlockProps = {
      src: "assets/video/sh-rdam.mp4",
      poster:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
      autoplay: true,
      loop: true,
      cover: true,
    };

    return createDoubleMediaBlock({
      largeMediaType: "video",
      largeVideo: videoProps,
      smallMediaType: "image",
      smallImage:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
    });
  },
};

export const LargeVideoWithLink: StoryObj = {
  render: () => {
    const videoProps: VideoBlockProps = {
      src: "assets/video/sh-rdam.mp4",
      poster:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
      autoplay: true,
      loop: true,
      cover: true,
      rounded: true,
      description: "Sample video block",
      link: "https://example.com",
      link_target_blank: true,
    };

    return createDoubleMediaBlock({
      largeMediaType: "video",
      largeVideo: videoProps,
      smallMediaType: "image",
      smallImage:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
    });
  },
};

export const LargeVideoWithLinkReversed: StoryObj = {
  render: () => {
    const videoProps: VideoBlockProps = {
      src: "assets/video/sh-rdam.mp4",
      poster:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
      autoplay: true,
      loop: true,
      cover: true,
      rounded: true,
      description: "Sample video block",
      link: "https://example.com",
      link_target_blank: true,
    };

    return createDoubleMediaBlock({
      reverseLayout: true,
      largeMediaType: "video",
      largeVideo: videoProps,
      smallMediaType: "image",
      smallImage:
        "https://surf-turf-2-0.myshopify.com/cdn/shop/files/Frame_66.avif?crop=center&amp;height=1400&amp;v=1753351591&amp;width=1120",
    });
  },
};
