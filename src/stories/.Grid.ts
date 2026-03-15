export function createStoresGrid(children: HTMLElement[]): HTMLElement {
  const section = document.createElement("section");
  section.className = "henk-section henk-section--stores";

  const inner = document.createElement("div");
  inner.className = "henk-section__inner";

  const grid = document.createElement("div");
  grid.className = "henk-section__grid henk-section__grid--stores";

  children.forEach((child) => grid.appendChild(child));

  inner.appendChild(grid);
  section.appendChild(inner);

  return section;
}
