import '../components/base/forms/input.css';
import '../components/base/forms/label.css';
import '../components/base/forms/labeled-input.css';
import '../components/base/button.css';
import './newsletter-form.css';

export default {
  title: 'Sections/NewsletterBlock',
  tags: ['autodocs'],
};

// Define a function that creates and returns the HTML structure
export const NewsletterBlock = () => `
  <section class="henk-newsletter-form">
    <div class="henk-newsletter-form__container" id="newsletter_form">
      <h2 class="henk-newsletter-form__title">
        Sign up for our newsletter<br> and stay informed of our latest news
      </h2>

      <div class="henk-newsletter-form__input-container">

        <div class="henk-labeled-input --dir-vertical">
          <label class="henk-label" for="nl_email">
            Email
            <span class="required-indicator">*</span>
          </label>
          <div class="henk-newsletter-form__actions-container">

            <input type="text" placeholder="Enter email address" required="" class="henk-input henk-newsletter-form__input" name="nl_email" id="nl_email">
            <a href="javascript:subscribeNewsletter();" class="henk-button henk-button--primary henk-newsletter-form__button">Subscribe</a>

          </div>
        </div>

      </div>

      <div style="display:none;" id="order_place_loader_div1" class="henk-newsletter-form__loader">
        <img alt="loading data" src="/static/std/assets/toolkit/images/order_place_loader.gif">
      </div>
    </div>
    <p class="fs-x-large henk-newsletter-form__hidden-title" style="display: none;"></p>
  </section>
`;


