// type="radio" id="contactChoice1" name="contact" value="email"

export interface RadioProps {
  checked?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  ariaLabel?: string;
  custom?: boolean;
}

export const Radio = ({
  checked = false,
  id = "",
  name = "",
  disabled = false,
  required = false,
  custom = false,
}: RadioProps): HTMLInputElement => {
  const baseRadio = document.createElement("input");
  baseRadio.type = "radio";
  baseRadio.className = ["henk-radio"].join(" ");

  if (custom) {
    baseRadio.className += " henk-radio--custom";
  }

  if (checked) {
    baseRadio.setAttribute("checked", "checked");
  }

  if (id) {
    baseRadio.setAttribute("id", id);
  }

  if (name) {
    baseRadio.name = name;
  }

  if (disabled) {
    baseRadio.disabled = disabled;
  }

  if (required) {
    baseRadio.required = required;
  }

  return baseRadio;
};
