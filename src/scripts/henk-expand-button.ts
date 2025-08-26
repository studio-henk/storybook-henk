
// expand-button.ts

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Find all buttons with data-js-expand
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    "[data-js-expand]"
  );

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Toggle semantic attributes
      btn.setAttribute("aria-expanded", String(!isExpanded));
      btn.setAttribute("data-state", isExpanded ? "closed" : "open");
    });
  });
});