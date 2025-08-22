// src/js/henk-toggle.ts
export function attachToggle(root: HTMLElement | Document = document) {
  root
    .querySelectorAll<HTMLElement>("[data-js-behavior~='toggle']")
    .forEach((el) => {
      el.addEventListener("click", () => {
        el.toggleAttribute("open");
      });
    });
}
