/**
 * ------------------------------------------------------------
 * Module: Button Loading
 * File:   henk-button-loading.ts
 * Output: henk-button-loading.min.js
 *
 * Version: v1 (2026-07-03)
 * Status:  ACTIVE
 *
 * Description:
 * - Handles loading state for buttons
 *
 * Notes / Changelog:
 * - v1: Initial version
 *
 * Strategy:
 * - Always keep this file as the latest version
 * - Older versions stored in as henk-button-loading_vX.ts
 * * ------------------------------------------------------------
 * */

const buttons = document.querySelectorAll<HTMLButtonElement>(
  "[data-js-button-loading]",
);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    button.dataset.state = "loading";
    // button.disabled = true;
  });
});
