export interface VideoBlockProps {
  id?: string;
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  width?: number;
  height?: number;
  cover?: boolean;
  rounded?: boolean;

  // aria label when no captions provided
  description?: string;
}

export function VideoBlock({
  id = "video-block",
  src,
  poster,
  autoplay = false,
  loop = true,
  className = "",
  width,
  height,
  cover = false,
  rounded = false,
  description,
}: VideoBlockProps): HTMLElement {
  // Container div
  const container = document.createElement("div");
  container.className = [
    "henk-video-container",
    cover ? "henk-video-container--cover" : "",
    rounded ? "henk-video-container--rounded" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");
  container.id = id;

  // Video element
  const video = document.createElement("video");
  video.className = "henk-video";
  video.src = src;
  if (!autoplay) video.controls = true;
  if (poster) video.poster = poster;
  if (width) video.width = width;
  if (height) video.height = height;
  if (description) video.setAttribute("aria-label", description);
  video.loop = loop;

  // Always start muted if autoplay
  // if (autoplay) video.setAttribute("muted", "");
  video.muted = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.preload = "auto";

  container.appendChild(video);
  let svgMuted: SVGSVGElement | null = null;
  let svgPlaying: SVGSVGElement | null = null;
  // Sound toggle button (only if autoplay)
  let button: HTMLButtonElement | null = null;

  if (autoplay) {
    button = document.createElement("button");
    button.className = "henk-button henk-video-sound-toggle";
    // button.textContent = "🔇";
    button.setAttribute("aria-label", "Toggle video sound");

    button.innerHTML = `
  <svg
    class="volume-x"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
  <svg
    class="volume-2"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
`;

    // Initially hide the "playing" icon if muted
    svgMuted = button.querySelector<SVGSVGElement>(".volume-x")!;
    svgPlaying = button.querySelector<SVGSVGElement>(".volume-2")!;
    svgMuted.style.display = "block";
    svgPlaying.style.display = "none";

    button.addEventListener("click", () => {
      video.muted = !video.muted;
      // button!.textContent = video.muted ? "🔇" : "🔊";
      svgMuted!.style.display = video.muted ? "block" : "none";
      svgPlaying!.style.display = video.muted ? "none" : "block";
    });

    container.appendChild(button);
  }

  // IntersectionObserver for autoplay/pause + reset muted
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // In view: play, keep current muted state if user toggled
          if (autoplay) video.play().catch(() => {});
        } else {
          // Out of view: pause and reset muted
          video.pause();
          if (autoplay) {
            video.muted = true;
            if (button) {
              svgMuted!.style.display = "block";
              svgPlaying!.style.display = "none";
            }
          }
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(video);

  return container;
}
