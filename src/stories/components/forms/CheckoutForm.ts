/**
 * @typedef {Object} FormProps
 * @property {string} name - The name of the form.
 * @property {string} id - The id of the form.
 * @property {Function} [onsubmit] - The onsubmit handler.
 * @property {string} [action] - The form action URL.
 * @property {string} [method] - The form method (GET or POST).
 * @property {boolean} [novalidate] - Whether to disable validation.
 * @property {Array<HTMLFieldSetElement>} [fieldsets] - Array of fieldset elements to include in the form.
 * @property {Array<HTMLElement>} [children] - Additional child elements to append after fieldsets.
 */

/**
 * Creates a form element.
 * @param {FormProps} props - The form properties.
 * @returns {HTMLFormElement} The form element.
 */
export const createForm = ({
  name = "form_name",
  id = "form_id",
  onsubmit,
  action,
  method,
  novalidate = false,
  fieldsets = [],
  children = [],
}) => {
  const formElement = document.createElement("form");
  formElement.name = name;
  formElement.id = id;

  if (onsubmit) {
    formElement.onsubmit = onsubmit;
  }

  if (action) {
    formElement.action = action;
  }

  if (method) {
    formElement.method = method;
  }

  if (novalidate) {
    formElement.noValidate = novalidate;
  }

  // Add any fieldsets passed in
  fieldsets.forEach((fieldset) => {
    formElement.appendChild(fieldset);
  });

  // Add any additional child elements (e.g., buttons)
  children.forEach((child) => {
    formElement.appendChild(child);
  });

  return formElement;
};

// Exporting createLabeledInput as LabeledInput
export { createForm as Form };
