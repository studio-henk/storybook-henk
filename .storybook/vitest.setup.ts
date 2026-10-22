import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from '@storybook/html-vite';
import { afterEach, expect } from "vitest";
import { page } from "vitest/browser";
import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

// Local visual regression: compare each rendered story with its baseline PNG.
afterEach(async () => {
  await document.fonts.ready;
  // Video frames never settle, so mask them out of the comparison.
  const videos = [...document.querySelectorAll("video")];
  videos.forEach((video) => video.pause());
  await expect.element(page.elementLocator(document.body)).toMatchScreenshot({
    screenshotOptions: {
      mask: videos.map((video) => page.elementLocator(video)),
    },
  });
});
