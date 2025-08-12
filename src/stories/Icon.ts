
const icons = import.meta.glob("../assets/icons/*.svg", { as: "raw", eager: true });

interface IconOptions {
  name: string; // e.g. "icon-arrow-left"
  size?: "small" | "large";
  className?: string;
}

export function Icon({
  name,
  size = "large",
  className = ""
}: IconOptions): HTMLElement {
  const matchKey = Object.keys(icons).find(key => key.endsWith(`${name}.svg`));
  if (!matchKey) {
    console.warn(`Icon "${name}" not found`);
    return document.createElement("span");
  }

  const svgContent = icons[matchKey] as string;
  const sizeClass = `icon--${size}`;

  const el = document.createElement("i");
  el.className = `henk-icon ${sizeClass} ${className}`.trim();
  el.innerHTML = svgContent; // inject the raw SVG markup as HTML

  return el;
}
