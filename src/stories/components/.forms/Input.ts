export interface CreateInputProps {
  id?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
}

export const createInput = ({
  id,
  type = "text",
  value = "",
  placeholder = "",
  required = false,
}: CreateInputProps): HTMLInputElement => {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  input.placeholder = placeholder;

  if (required) {
    input.required = required;
    // const span = document.createElement('span');
    // span.className = 'required-indicator';
    // span.innerText = '*';
    // input.appendChild(span);
  }

  if (id) {
    input.id = id;
  }

  input.className = "henk-input";

  return input;
};
