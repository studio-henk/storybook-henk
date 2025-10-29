import { VideoBlock, VideoBlockProps } from "./VideoBlock";

export interface VideoSectionProps extends VideoBlockProps {
  sectionClassName?: string;
}

export function VideoSection({
  sectionClassName = "",
  ...videoProps
}: VideoSectionProps): HTMLElement {
  const section = document.createElement("section");
  section.className = `henk-video-section ${sectionClassName}`;

  const videoBlock = VideoBlock(videoProps);
  section.append(videoBlock);

  return section;
}
