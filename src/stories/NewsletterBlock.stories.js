
export default {
  title: "Sections/NewsletterBlock",
  tags: ["autodocs"],
};

// Define a function that creates and returns the HTML structure
export const NewsletterBlock = () => `
  <section class="shopify-section">
    <div class="henk-newsletter-form">
      <div class="henk-newsletter-form__container" id="newsletter_form">
        <h2 class="henk-newsletter-form__title">Join our newsletter</h2>
        <p class="henk-newsletter-form__description">Enjoy exclusive invites to events, be the first to discover new interior treasures and read our most inspiring interior stories.</p>

        <div id="klaviyo-form-placeholder"></div>
      </div>
    </div>
  </section>
`;

// export const NewsletterBlockMinimal = () => `
//   <section class="henk-newsletter-form">
//     <div class="henk-newsletter-form__container" id="newsletter_form">      
//       <div class="henk-newsletter-form__input-container">
//         <div class="henk-labeled-input --dir-vertical">
//           <label class="henk-label" for="nl_email">
//             Email
//             <span class="required-indicator">*</span>
//           </label>
//           <div class="henk-newsletter-form__actions-container">
//
//             <input type="text" placeholder="Enter email address" required="" class="henk-input henk-newsletter-form__input" name="nl_email" id="nl_email">
//             <a href="javascript:subscribeNewsletter();" class="henk-button henk-button--default henk-newsletter-form__button">Subscribe</a>
//
//           </div>
//         </div>
//
//       </div>
//       <div style="display:none;" id="order_place_loader_div1" class="henk-newsletter-form__loader">
//         <img alt="loading data" src="/assets/order_place_loader.gif">
//       </div>
//     </div>
//     <p class="fs-x-large henk-newsletter-form__hidden-title" style="display: none;"></p>
//   </section>
// `;