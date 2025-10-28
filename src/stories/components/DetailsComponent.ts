import { Icon } from "@components/Icon";

export interface DetailsProps {
  summary: string;
  content: string;
  variant?: "default" | "plusmin";
  name?: string;
  iconName?: string;
  iconSize?: "small" | "large";
  iconClassName?: string;
}

export const createDetailsComponent = ({
  summary = "Summary",
  content = "<p>Content</p>",
  variant = "default",
  name = "cc",
  iconName,
  iconSize = "large",
  iconClassName = "",
}: DetailsProps): HTMLDetailsElement => {
  const details = document.createElement("details");
  details.className = "henk-details";

  details.name = name;

  if (variant) {
    details.className = `henk-details henk-details--${variant}`;
  }

  const summaryElement = document.createElement("summary");
  summaryElement.className = "henk-details__summary";
  // If an icon is provided, prepend it
  if (iconName) {
    const iconEl = Icon({
      name: iconName,
      size: iconSize,
      className: iconClassName,
    });
    iconEl.classList.add("henk-details__icon"); // optional BEM element
    summaryElement.appendChild(iconEl);
  }
  const textNode = document.createTextNode(summary);
  summaryElement.appendChild(textNode);
  // summaryElement.textContent = summary;

  const contentElement = document.createElement("div");
  contentElement.className = "henk-details__content";
  contentElement.innerHTML = content;

  details.appendChild(summaryElement);
  details.appendChild(contentElement);

  return details;
};
