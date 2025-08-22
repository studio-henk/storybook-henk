import type { Meta, StoryObj } from "@storybook/html";
import IconChevronDown from "@assets/icons/icon-chevron-down.svg?raw";
import { attachToggle } from "@scripts/henk-toggle";

interface Language {
  iso_code: string;
  endonym_name: string;
}

interface Localization {
  currentLanguage: Language;
  available_languages: Language[];
}

const mockLocalization: Localization = {
  currentLanguage: { iso_code: "en", endonym_name: "English" },
  available_languages: [
    { iso_code: "en", endonym_name: "English" },
    { iso_code: "nl", endonym_name: "Nederlands" },
  ],
};

const render = (localization: Localization, container: HTMLElement): void => {
  // Build options excluding current language
  const optionsHTML = localization.available_languages
    .filter((lang) => lang.iso_code !== localization.currentLanguage.iso_code)
    .map(
      (lang) => `
      <li>
        <button type="button" value="${lang.iso_code}" class="henk-button henk-button--ghost">
          ${lang.endonym_name}
        </button>
      </li>
    `,
    )
    .join("");

  container.innerHTML = `
    <div class="henk-localise">
      <div class="henk-popover henk-popover--lang">
        <button 
          id="lang-button" 
          popovertarget="henk-lang-popover" 
          class="henk-button henk-button--small henk-button--ghost"
        >
          ${localization.currentLanguage.endonym_name}
          <i class="henk-icon">${IconChevronDown}</i>
        </button>
        <div popover id="henk-lang-popover" anchor="lang-button">
          <ul id="lang-options" class="henk-list henk-list--no-bullets">
            ${optionsHTML}
          </ul>
        </div>
      </div>
    </div>
  `;

  const triggerButton =
    container.querySelector<HTMLButtonElement>("#lang-button");
  const optionsContainer =
    container.querySelector<HTMLUListElement>("#lang-options");
  if (!triggerButton || !optionsContainer) return;

  // attach click handlers dynamically
  const attachHandlers = () => {
    optionsContainer
      .querySelectorAll<HTMLButtonElement>("button")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();

          const newLang = localization.available_languages.find(
            (l) => l.iso_code === btn.value,
          );
          if (!newLang) return;

          console.log("Language selected:", newLang.endonym_name);

          // Update trigger
          triggerButton.innerHTML = `${newLang.endonym_name} <i class="henk-icon">${IconChevronDown}</i>`;

          // Update the localization object
          const updatedLocalization = {
            ...localization,
            currentLanguage: newLang,
          };

          // Rebuild options list excluding new current language
          optionsContainer.innerHTML = updatedLocalization.available_languages
            .filter(
              (lang) =>
                lang.iso_code !== updatedLocalization.currentLanguage.iso_code,
            )
            .map(
              (lang) => `
            <li>
              <button type="button" value="${lang.iso_code}" class="henk-button henk-button--ghost">
                ${lang.endonym_name}
              </button>
            </li>
          `,
            )
            .join("");

          // Re-attach handlers to new buttons
          attachHandlers();
        });
      });
  };

  attachHandlers();
};

const meta: Meta = {
  title: "Components/LanguageSelector",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement("div");
    render(mockLocalization, container);
    // Attach the toggle behavior to the popover button
    // attachToggle(container);
    return container;
  },
};
