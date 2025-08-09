import type { LogoProps } from "./Logo";
import { createLogo } from "./Logo";

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

  const headerInner = document.createElement("div");
  headerInner.className = "henk-header__inner";

  if (logoProps) {
    const logo = createLogo(logoProps);
    headerInner.appendChild(logo);
  } else {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    headerInner.appendChild(h1);
  }

  header.appendChild(headerInner);

  return header;
}
