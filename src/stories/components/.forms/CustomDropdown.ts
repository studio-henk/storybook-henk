export interface CreateCustomDropdownProps {
  label: string;
  id: string;
  options: string[];
  className?: string;
  placeholder?: string;
}

export const createCustomDropdown = ({
  label,
  id,
  options,
  className = "henk-input",
  placeholder = "Select an option",
}: CreateCustomDropdownProps): HTMLElement => {
  const wrapper = document.createElement("div");
  wrapper.className = "custom-select-wrapper";

  const labelElement = document.createElement("label");
  labelElement.className = "henk-label";
  labelElement.innerText = label;
  labelElement.htmlFor = id;

  const input = document.createElement("input");
  input.type = "text";
  input.className = className;
  input.placeholder = placeholder;
  input.autocomplete = "off";
  input.id = id;
  input.name = id;

  const dropdownList = document.createElement("div");
  dropdownList.className = "dropdown-list";

  options.forEach((option) => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.textContent = option;

    item.addEventListener("click", () => {
      input.value = option;
      dropdownList.classList.remove("show");

      // Remove 'selected' class from previously selected item
      const prevSelected = dropdownList.querySelector(
        ".dropdown-item.selected",
      );
      if (prevSelected) {
        prevSelected.classList.remove("selected");
      }
      // Add 'selected' class to the newly selected item
      item.classList.add("selected");
    });

    dropdownList.appendChild(item);
  });

  input.addEventListener("focus", () => {
    dropdownList.classList.add("show");
  });

  input.addEventListener("input", () => {
    const filter = input.value.toLowerCase();
    const items = dropdownList.getElementsByClassName("dropdown-item");
    for (let i = 0; i < items.length; i++) {
      const text = items[i].textContent || items[i].innerText;
      items[i].style.display = text.toLowerCase().includes(filter)
        ? ""
        : "none";
    }
  });

  input.addEventListener("keydown", (event) => {
    const items = dropdownList.getElementsByClassName("dropdown-item");
    const visibleItems = Array.from(items).filter(
      (item) => item.style.display !== "none",
    );
    let selectedIndex = Array.from(visibleItems).findIndex((item) =>
      item.classList.contains("selected"),
    );

    if (event.key === "ArrowDown") {
      selectedIndex = (selectedIndex + 1) % visibleItems.length;
      visibleItems.forEach((item) => item.classList.remove("selected"));
      visibleItems[selectedIndex].classList.add("selected");
    }

    if (event.key === "ArrowUp") {
      selectedIndex =
        (selectedIndex - 1 + visibleItems.length) % visibleItems.length;
      visibleItems.forEach((item) => item.classList.remove("selected"));
      visibleItems[selectedIndex].classList.add("selected");
    }

    if (event.key === "Enter") {
      if (selectedIndex > -1) {
        input.value = visibleItems[selectedIndex].textContent || "";
        dropdownList.classList.remove("show");

        // Remove 'selected' class from previously selected item
        const prevSelected = dropdownList.querySelector(
          ".dropdown-item.selected",
        );
        if (prevSelected) {
          prevSelected.classList.remove("selected");
        }
        // Add 'selected' class to the newly selected item
        visibleItems[selectedIndex].classList.add("selected");
      }
    }

    if (event.key === "Escape") {
      dropdownList.classList.remove("show");
    }
  });

  document.addEventListener("click", function (event) {
    if (!wrapper.contains(event.target as Node)) {
      dropdownList.classList.remove("show");
    }
  });

  // wrapper.appendChild(labelElement);
  wrapper.appendChild(input);
  wrapper.appendChild(dropdownList);

  // return wrapper;

  const LabeledCustomDropdown = document.createElement("div");
  LabeledCustomDropdown.className = "labeled-custom-dropdown";
  LabeledCustomDropdown.appendChild(labelElement);
  LabeledCustomDropdown.appendChild(wrapper);

  return LabeledCustomDropdown;
};
