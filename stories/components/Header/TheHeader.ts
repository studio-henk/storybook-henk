import type { LogoProps } from "../Logo";
import { createLogo } from "../Logo";

export interface HeaderProps {
  logoProps?: LogoProps;
  title?: string;
}

export function createHeader({
  logoProps,
  title = "Site Title",
}: HeaderProps = {}): HTMLElement {
  const header = document.createElement("header");
  header.className = "henk-header";

  if (logoProps) {
    const logo = createLogo(logoProps);
    header.appendChild(logo);
  } else {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    header.appendChild(h1);
  }

  return header;
}
