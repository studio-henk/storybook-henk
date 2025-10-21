/**
 * Creates a fieldset element with an optional legend and children elements.
 *
 * @param {Object} options - The options for creating the fieldset.
 * @param {string} [options.legend="Legend"] - The text for the legend element.
 * @param {string} [options.dataJs] - optional data-js attribute
 * @param {HTMLElement[]} [options.children=[]] - An optional array of child elements to append to the fieldset.
 * @returns {HTMLFieldSetElement} The created fieldset element.
 */
export const createFieldset = ({
  legend = "Legend",
  dataJs,
  children = [],
} = {}) => {
  const fieldset = document.createElement("fieldset");
  fieldset.className = "henk-fieldset";

  if (dataJs) {
    fieldset.setAttribute(`data-js-${dataJs}`, "");
  }

  const legendElement = document.createElement("legend");
  legendElement.textContent = legend;
  legendElement.className = "henk-legend";

  fieldset.appendChild(legendElement);

  // Append children and handle grouping
  children.forEach((child) => {
    // Check if child is a grouped object
    if (child && child.group) {
      const groupDiv = document.createElement("div");
      groupDiv.className = "form-group"; // Optional: Add a class for styling

      // Append the grouped children to the groupDiv
      (child.children || []).forEach((groupChild) => {
        groupDiv.appendChild(groupChild);
      });

      fieldset.appendChild(groupDiv);
    } else {
      // Append single child directly
      fieldset.appendChild(child);
    }
  });
  return fieldset;
};

// Exporting createLabeledInput as LabeledInput
export { createFieldset as Fieldset };
