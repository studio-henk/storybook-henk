import { fn } from "@storybook/test";
import "./BaseModalV2.js";
import { Share } from "../components/base/Icon.stories.js";
import { ShareMedium } from "../components/base/Icon.stories.js";
import { LabeledInput } from "../components/base/forms/LabeledInput.ts";

/**
 * Renders a BaseModalV2 component with a hidden modal and a button to open it.
 *
 * @return {string} The HTML markup for the BaseModalV2 component.
 */
export default {
  title: "Components/Web Components/BaseModalV2",
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
        <div class="henk-labeled-input">
        <label class="henk-label">
          Email
          <span class="required-indicator">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter text here"
          required=""
          id="input-id"
          class="henk-input"
        />
      </div>
      <div class="henk-labeled-input">
        <label class="henk-label">
          First Name
          <span class="required-indicator">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter text here"
          required=""
          id="input-id2"
          class="henk-input"
        />
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
      aria-label="Send"
    >Verstuur
    </button>
  </div>
</base-modal-v2>
`;