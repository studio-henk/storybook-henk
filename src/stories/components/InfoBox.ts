import { Icon } from "@components/Icon";
import { createButton, ButtonProps } from "@components/Button";

export interface InfoBoxProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  content?: string;
  buttonConfig?: ButtonProps | null;
  iconName?: string | null;
  iconSize?: "small" | "large";
}

export const createInfoBox = ({
  variant,
  title = "This is a title",
  content = "<p>This is an info box</p>",
  buttonConfig = null,
  iconName = null,
  iconSize = "large",
}: InfoBoxProps) => {
  const infoBox = document.createElement("div");
  infoBox.className = `info-box`;

  if (variant) {
    infoBox.className = `info-box info-box--variant-${variant.toLowerCase()}`;
  }

  const container = document.createElement("div");
  container.className = "info-box__container";

  // header
  const header = document.createElement("div");
  header.className = [
    "info-box__header",
    iconName ? "info-box__header--has-icon" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const heading = document.createElement("p");
  heading.className = "info-box__heading";
  heading.innerText = title;
  header.appendChild(heading);

  // if (iconName) {
  //   const iconEl = document.createElement("i");
  //   iconEl.className = `henk-icon icon--${iconSize}`;
  //   iconEl.innerHTML = Icon({ name: iconName, size: iconSize }) as string;
  //   header.appendChild(iconEl);
  // }

  if (iconName) {
    const iconEl = Icon({ name: iconName, size: iconSize });
    header.appendChild(iconEl);
  }

  container.appendChild(header);

  // body
  const body = document.createElement("div");
  body.className = "info-box__body";
  body.innerHTML = content;
  container.appendChild(body);

  // footer / button
  if (buttonConfig) {
    const footer = document.createElement("div");
    footer.className = "info-box__footer";
    const button = createButton(buttonConfig);
    footer.appendChild(button);
    container.appendChild(footer);
  }

  infoBox.appendChild(container);

  return infoBox;
};
