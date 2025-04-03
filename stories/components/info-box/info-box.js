// import "./_info-box.css";
import { createButton } from "../base/Button.js";
// import { Checkmark } from '../base/Icon.stories';

export const createInfoBox = ({
  variant = "default",
  title = "This is a title",
  content = "<p>This is an info box</p>",
  buttonConfig = null,
  iconHTML = null,
}) => {
  const infoBox = document.createElement("div");
  infoBox.className = `info-box info-box--variant-${variant.toLowerCase()}`;

  // inner container
  const infoBox__container = document.createElement("div");
  infoBox__container.className = "info-box__container";

  // header
  const infoBox__header = document.createElement("div");
  // infoBox__header.className = "info-box__header";
  infoBox__header.className = [
    "info-box__header",
    iconHTML ? "info-box__header--has-icon" : "",
  ]
    .join(" ")
    .trim();

  // heading
  // <p class="info-box__heading">Bekijk de Otto S in een van onze winkels</p>
  const heading = document.createElement("p");
  heading.className = "info-box__heading";
  heading.innerText = title;
  infoBox__header.appendChild(heading);

  // icon, optional
  // if (iconHTML) {
  //   infoBox__header.innerHTML = iconHTML;
  // }
  if (iconHTML) {
    const template = document.createElement("template");
    template.innerHTML = iconHTML.trim();
    const iconElement = template.content.firstChild;
    infoBox__header.appendChild(iconElement);
  }

  infoBox__container.appendChild(infoBox__header);

  // content
  // info-box__body
  const infoBox__body = document.createElement("div");
  infoBox__body.className = "info-box__body";
  infoBox__body.innerHTML = content;
  infoBox__container.appendChild(infoBox__body);

  // footer = optional if has button
  // const infoBox__footer = document.createElement("div");
  // infoBox__footer.className = "info-box__footer";
  // infoBox__footer.innerHTML = "<p>footer</p>";
  // infoBox__container.appendChild(infoBox__footer);

  if (buttonConfig) {
    const infoBox__footer = document.createElement("div");
    infoBox__footer.className = "info-box__footer";
    const button = createButton(buttonConfig);
    infoBox__footer.appendChild(button);
    infoBox__container.appendChild(infoBox__footer);
  }

  infoBox.appendChild(infoBox__container);

  return infoBox;
};
