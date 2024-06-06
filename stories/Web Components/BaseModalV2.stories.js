import { fn } from "@storybook/test";
import "./BaseModalV2.js";
import { Share } from '../components/base/Icon.stories.js';
import { ShareMedium } from "../components/base/Icon.stories.js"; 

/**
 * Renders a BaseModalV2 component with a hidden modal and a button to open it.
 *
 * @return {string} The HTML markup for the BaseModalV2 component.
 */
export default {
  title: "Web Components/BaseModalV2",
};

export const Default = () => `
<base-modal-v2 
  hidden
  modalTitle="Default Modal"
>
<button
id="button-open"
class="henk-button modal-open"
slot="trigger"
>Open modal
</button>
<div
    class="slot"
    slot="content"
  >
  <p>some modal content here</p>  
</div>
</base-modal-v2>
`;

export const ShareMail = () => `
<base-modal-v2 
  hidden
  modalTitle="Mail je keuze"
>
  <button
    id="button-share"
    class="henk-button modal-open"
    slot="trigger"
  >Deel
  ${ShareMedium()}  
  </button>
  <div
    class="slot"
    slot="content"
  >
    <div class="share-form-container">
      <form
        class="base-form"
        action="/submitted"
        method="POST"
      >
        <fieldset class="base-form__fieldset">
          <label
            class="base-form__label"
            for="txt_email"
            title="Please enter a valid email address."
          >Email Address
          </label>
          <input
            class="base-form__input"
            type="email"
            name="txt_email"
            id="txt_email"
            autocomplete="email"
            inputmode="text"
            placeholder="Enter your email address"
            minlength="5"
            required=""
            title="Please enter a valid email address."
          />
          <label for="txt_email2">Email Address 2</label>
          <input 
            class="henk-input"
            type="email"
            name="txt_email2"
            id="txt_email2"
            autocomplete="email"
            inputmode="text"
            placeholder="Enter your email address"
            minlength="5"
            required=""
            title="Please enter a valid email address."
          />
          <span
            class="base-form__message fs-small"
          >Please enter a valid email address.
          </span>
          <div class="sh-atom-checkbox-label">
            <input type="checkbox" class="atom-checkbox" id="hocker" required="" />
            <label class="atom-label" for="hocker">Ik ga akkoord met de <a href="/en/privacy-policy-studio-h-k" target="_blank">privacy voorwaarden</a></label>
            <span class="molecule-label-checkbox__hint-required">*</span>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
  <div
    class="slot"
    slot="footer"
  >
    <button
    type="reset"
    id="button-cancel"
    class="henk-button henk-button--default"
  >Annuleren
  </button>
    <button
      type="submit"
      id="button-send"
      class="henk-button henk-button--primary"
    >Verstuur
    </button>
  </div>
</base-modal-v2>
`;
