export interface LabelProps {
  /** The text content of the label */
  text?: string;
  /** The ID of the input element associated with the label */
  htmlFor?: string;
  /** Whether the label should display a required asterisk */
  required?: boolean;
}

/**
 * Creates a label element.
 * @param props - The properties to configure the label element.
 * @returns The created HTMLLabelElement
 */
export const createLabel = ({
  text = "label text",
  htmlFor,
  required = false,
}: LabelProps): HTMLLabelElement => {
  const label = document.createElement("label");
  label.className = "henk-label";

  if (htmlFor) {
    label.htmlFor = htmlFor;
  }

  // Create a span for the main label text
  const textSpan = document.createElement("span");
  textSpan.className = "henk-label-text";
  textSpan.innerHTML = text;

  // Add required indicator if needed
  if (required) {
    const asterisk = document.createElement("span");
    asterisk.className = "required-indicator";
    asterisk.innerText = " *";
    textSpan.appendChild(asterisk);
  }

  label.appendChild(textSpan);

  return label;
};
