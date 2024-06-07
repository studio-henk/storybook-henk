/* todo:
- overflow on body when modal is open, remove when closed
- able to use all button types
- slot content
- animate fade in / out
*/

class BaseModalV2 extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'openButtonText', 'modalTitle'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  generateTemplate() {
    const openButtonText = this.getAttribute('openButtonText') || 'Open';
    const modalTitle = this.getAttribute('modalTitle') || 'Modal title';

    return `      
    <style>
    :host {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
    }
    
    :host * {
      box-sizing: border-box;
    }
    
    :host([open]) {
    }
    
    .BaseModal {
    }
    
    .BaseModal__overlay {
      display: flex;
      opacity: 0;
      background-color: rgba(0,0,0, 0.5);
      position: fixed;
      pointer-events: none;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index: -1;      
      justify-content: center;
      align-items:center;
      transition: opacity 1.3s ease; 
    }
    
    :host([open]) .BaseModal__overlay {
      opacity: 1; 
      z-index: 9999999;
      pointer-events: all;
    }
    
    .BaseModal__content {
      background-color: var(--color-white,#fff);
      border-radius: 8px;
      margin: 0 auto;
      width: 100vw;
      max-height: 90vh;
      max-width: 90vw;
      display: flex;
      flex-direction: column;
      /*justify-content: space-between;*/
      padding: 24px;
      gap: 0;
    }

    .BaseModal__content .BaseModal__footer {
      display: flex;
      justify-content: flex-end;
    }
    
    @media only screen and (min-width: 768px) {
      .BaseModal__content {
        width: 50vw;
        min-width: 25vw;
        max-width: 640px;
      }
    }           
    
    .BaseModal__header {
      display: flex;
      justify-content: center;
      position:relative;
    }
    
    .BaseModal__header-title {
      font-size: 1.375rem;      
    }
    
    .modal-close {
      --_color-button-background: var(--color-ui-surface-default);
      --_color-button-text: var(--color-alias-primary);
      --_color-button-border: var(--color-alias-primary);
      background-color: var(--_color-button-background);
      color: var(--_color-button-text);
      border: 1px solid var(--_color-button-border);
      position: absolute;
      right: 0;
      cursor: pointer;
    }
    
    .modal-close svg {
      fill: currentcolor;
    }

    .henk-icon {
      display: inline-flex;
      place-content: center;
      padding: 2px;
    }

    .henk-button--icon-only {
      padding-inline: 9px;
      border-radius: 3em;
      min-height: 44px;
      min-width: 44px;
      line-height: 1;
    }

    .henk-icon.icon--large svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    .henk-button:has(.icon--large) {
      padding-block: 9px;
    }
    </style>
    <div class="BaseModal">            
      <slot name="trigger"></slot>
      <div class="BaseModal__overlay">               
        <div class="BaseModal__content">
          <div class="BaseModal__header">
            <span class="BaseModal__header-title">${modalTitle}</span>
            <button 
              type="button" 
              class="henk-button henk-button--default henk-button--icon-only modal-close"               
            >
              <span class="visually-hidden" part="button-label-hidden">close</span>              
              <i class="henk-icon icon--large">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6 6L18 18"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </i>
            </button>
    </div>
    <div class="BaseModal__main">            
    <slot name="content" />
    </div>
    <div class="BaseModal__footer">
    <slot name="footer" />
    </div>
    </div>
    </div>
    </div>
    `;
  }

  connectedCallback() {
    // Generate and append the template to the shadow DOM
    // noinspection DuplicatedCode
    this.shadowRoot.innerHTML = this.generateTemplate();
    // TODO: try without shadow dom

    // remove hidden attr
    this.removeAttribute('hidden');

    // event handler on button
    // const thisOpenButtonElement = this.shadowRoot.querySelector('.modal_open');
    // console.log(thisOpenButtonElement);

    // event handler on button
    const slotTrigger = this.shadowRoot.querySelector('slot[name="trigger"]');
    slotTrigger.addEventListener('click', this.openModal.bind(this));

    const thisCloseButtonElement = this.shadowRoot.querySelector('.modal-close');
    const thisModalOverlay = this.shadowRoot.querySelector(
      '.BaseModal__overlay'
    );

    // thisOpenButtonElement.addEventListener('click', this.openModal.bind(this));
    thisCloseButtonElement.addEventListener(
      'click',
      this.closeModal.bind(this)
    );
    thisModalOverlay.addEventListener('click', this.closeModal.bind(this));

    // Event handler for the modal content
    const modalContentElement = this.shadowRoot.querySelector(
      '.BaseModal__content'
    );
    modalContentElement.addEventListener('click', (event) => {
      // Prevent the click event from propagating to the overlay
      event.stopPropagation();
    });
  }

  disconnectedCallback() {
    console.log('disconnectedCallback called');
  }

  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this.attrName = newValue;
    }
  }

  openModal() {
    document.querySelector('body').classList.add('BaseModal_open');
    this.open = true;
  }

  // Close the modal when the overlay is clicked
  closeModal() {
    // console.log("clicked, closing");
    document.querySelector('body').classList.remove('BaseModal_open');
    if (document.querySelector('body').classList.length === 0) {
      document.querySelector('body').removeAttribute('class');
    }
    this.open = false;
  }
}

customElements.define('base-modal-v2', BaseModalV2);
