// src/js/henk-toggle.ts
export function attachToggle(root = document) {
    root
        .querySelectorAll("[data-js-behavior~='toggle']")
        .forEach((el) => {
        el.addEventListener("click", () => {
            el.toggleAttribute("open");
        });
    });
}
