import CheckmarkIcon from "../../../assets/icons/icon-checkmark-fat.svg?raw";
import { createForm } from "./Form.js";
import { createFieldset } from "./Fieldset.js";
import { createLabeledInput } from "./LabeledInput.js";
import { createLabeledSelect } from "./LabeledSelect";
import { createButton } from "../Button.js";
import { createLabeledCheckbox } from "./LabeledCheckbox.js";

export default {
  title: "Components/Base/Forms/Base/Form",
  tags: ["autodocs"],
  render: ({ ...args }) => {
    // return createForm({ ...args });
    // Create form using your existing setup
    const form = createForm({ ...args });

    // Add DOM manipulation after the form is rendered
    setTimeout(() => {
      // Select the checkbox and the delivery address fieldset
      const checkbox = form.querySelector(
        '[data-js-toggle-fieldset] input[type="checkbox"]',
      );
      const deliveryAddressFieldset = form.querySelector(
        "[data-js-delivery-address]",
      );

      // Function to toggle the delivery address fieldset
      function toggleDeliveryAddress() {
        if (checkbox.checked) {
          deliveryAddressFieldset.style.display = "none";
          setRequiredFields(false);
        } else {
          deliveryAddressFieldset.style.display = "block";
          setRequiredFields(true);
        }
      }

      // Function to set required attributes for delivery address fields
      function setRequiredFields(isRequired) {
        const deliveryFields =
          deliveryAddressFieldset.querySelectorAll("input, select");
        deliveryFields.forEach((field) => {
          if (isRequired) {
            field.setAttribute("required", "required");
          } else {
            field.removeAttribute("required");
          }
        });
      }

      // Initial toggle state on page load
      toggleDeliveryAddress();

      // Event listener for checkbox changes
      checkbox.addEventListener("change", toggleDeliveryAddress);
    }, 0);

    // Return the form element
    return form;
  },
  argTypes: {
    name: { control: "text" },
    novalidate: { control: "boolean" },
    fieldsets: { control: "object" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export const Default = {
  args: {
    name: "form-one-page",
    id: "form_one_page",
    onsubmit: "return postalCodeValidate();",
    action: "/en/action/checkout/delivery",
    method: "post",
    novalidate: false,
    fieldsets: [
      createFieldset({
        legend: "Invoice Details",
        children: [
          createLabeledInput({
            floating: true,
            label: {
              text: "Company",
              htmlFor: "form_invoiceAddressCompany",
            },
            input: {
              id: "form_invoiceAddressCompany",
              name: "company",
              placeholder: "",
              required: false,
            },
          }),
          {
            group: true,
            children: [
              createLabeledInput({
                floating: true,
                label: {
                  text: "First Name",
                  htmlFor: "form_invoiceAddressFirstname",
                },
                input: {
                  id: "form_invoiceAddressFirstname",
                  name: "firstname",
                  placeholder: "",
                  required: true,
                },
              }),
              createLabeledInput({
                floating: true,
                label: {
                  text: "Last Name",
                  htmlFor: "form_invoiceAddressLastname",
                },
                input: {
                  id: "form_invoiceAddressLastname",
                  name: "lastname",
                  placeholder: "",
                  required: true,
                },
              }),
            ],
          },
          createLabeledInput({
            floating: true,
            label: {
              text: "Street",
              htmlFor: "form_invoiceAddressStreet",
            },
            input: {
              id: "form_invoiceAddressStreet",
              name: "street",
              placeholder: "",
              required: true,
            },
          }),
          {
            group: true,
            children: [
              createLabeledInput({
                floating: true,
                label: {
                  text: "Number",
                  htmlFor: "form_invoiceAddressNumber",
                },
                input: {
                  id: "form_invoiceAddressNumber",
                  name: "streetNumber",
                  placeholder: "",
                  required: true,
                },
              }),
              createLabeledInput({
                floating: true,
                label: {
                  text: "Addition",
                  htmlFor: "form_invoiceAddressAddition",
                },
                input: {
                  id: "form_invoiceAddressAddition",
                  name: "streetAddition",
                  placeholder: "",
                  required: false,
                },
              }),
            ],
          },
          {
            group: true,
            children: [
              createLabeledInput({
                floating: true,
                label: {
                  text: "Postcode",
                  htmlFor: "form_invoiceAddressZipcode",
                },
                input: {
                  id: "form_invoiceAddressZipcode",
                  name: "zip",
                  placeholder: "",
                  required: true,
                },
              }),
              createLabeledInput({
                floating: true,
                label: {
                  text: "City",
                  htmlFor: "form_invoiceAddressCity",
                },
                input: {
                  id: "form_invoiceAddressCity",
                  name: "city",
                  placeholder: "",
                  required: true,
                },
              }),
              createLabeledSelect({
                floating: true,
                label: {
                  text: "Country",
                  htmlFor: "form_invoiceAddressCountry",
                },
                select: {
                  options: [
                    { value: "NL", text: "Netherlands" },
                    { value: "BE", text: "Belgium" },
                    { value: "DE", text: "Germany" },
                  ],
                  id: "form_invoiceAddressCountry",
                  name: "countryCode",
                  className: "henk-select",
                  required: true,
                  customArrow: true,
                },
              }),
            ],
          },
          createLabeledCheckbox({
            label: {
              text: "Billing address same as delivery",
              htmlFor: "terms-checkbox",
            },
            checkbox: {
              id: "terms-checkbox",
              name: "terms",
              checked: true,
              required: true,
            },
            icon: CheckmarkIcon,
            size: "small",
            dataJs: "toggle-fieldset",
          }),
        ],
      }),
      createFieldset({
        legend: "Delivery Address",
        dataJs: "delivery-address",
        children: [
          createLabeledInput({
            floating: true,
            label: {
              text: "Company",
              htmlFor: "form_shippingAddressCompany",
            },
            input: {
              id: "form_shippingAddressCompany",
              name: "company1",
              placeholder: "",
              required: false,
            },
          }),
          {
            group: true,
            children: [
              createLabeledInput({
                floating: true,
                label: {
                  text: "First Name",
                  htmlFor: "form_shippingAddressFirstname",
                },
                input: {
                  id: "form_shippingAddressFirstname",
                  name: "firstname1",
                  placeholder: "",
                  required: false,
                },
              }),
              createLabeledInput({
                floating: true,
                label: {
                  text: "Last Name",
                  htmlFor: "form_shippingAddressLastname",
                },
                input: {
                  id: "form_shippingAddressLastname",
                  name: "lastname1",
                  placeholder: "",
                  required: false,
                },
              }),
            ],
          },
        ],
      }),
      createFieldset({
        legend: "Contact Details",
        children: [
          {
            group: true, // Indicate that these fields should be in a row
            children: [
              createLabeledInput({
                floating: true,
                label: {
                  text: "E-mail",
                  htmlFor: "form_invoiceAddressEmail",
                },
                input: {
                  type: "email",
                  id: "form_invoiceAddressEmail",
                  name: "email",
                  placeholder: "",
                  required: true,
                },
              }),
              createLabeledInput({
                floating: true,
                label: {
                  text: "Phone Number",
                  htmlFor: "form_invoiceAddressPhone",
                },
                input: {
                  type: "tel",
                  id: "form_invoiceAddressPhone",
                  name: "phone",
                  placeholder: "",
                  required: true,
                },
              }),
            ],
          },
        ],
      }),
    ],
    children: [
      createButton({
        buttonElement: "button",
        type: "submit",
        label: "Save <span class='amp'>&</span> Continue",
        disabled: true,
        variant: "primary",
      }),
    ],
  },
};
