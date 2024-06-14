import { PinterestSmall, StarSmall, TikTokSmall, YoutubeSmall } from '../components/base/Icon.stories.js';
import { InstagramSmall } from '../components/base/Icon.stories.js';
import { FacebookSmall } from '../components/base/Icon.stories.js';
import BcorpLogoSVG from '../assets/icons/b-corp.svg?raw';
import { PinterestMedium, StarMedium, TikTokMedium, YoutubeMedium, InstagramMedium, FacebookMedium } from '../components/base/Icon.stories.js';

export default {
  title: 'Sections/Footer', // Define the title of your story
  parameters: {
    layout: 'fullscreen',
  },
};

// Create a template for your HeroVideo component
export const FooterStory = () => `
  <footer class="henk-footer">
    <div class="henk-footer__container">
      <h2 class="visually-hidden">Footer</h2>
      
      <!-- First Row: Link Lists Grid -->
      <div class="henk-footer__row henk-footer__row--links">
        <div class="henk-footer__grid">          
          <div class="henk-footer__grid-column">
              <h3 class="henk-footer__heading h4"><a href="/en/collection">Collection</a></h3>
              <ul class="henk-footer__list --no-bullets">
                  <li class="henk-footer__list-item"><a href="/en/products/dining-tables" class="henk-footer__link">Dining Tables</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/coffee-tables" class="henk-footer__link">Coffee Tables</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/chairs" class="henk-footer__link">Dining Chairs</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/dining-benches" class="henk-footer__link">Dining Benches</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/stools" class="henk-footer__link">Stools</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/sofas" class="henk-footer__link">Sofas</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/lounge-chairs" class="henk-footer__link">Lounge Chairs</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/poufs" class="henk-footer__link">Poufs</a></li>
                  <li class="henk-footer__list-item"><a href="/en/products/cabinets" class="henk-footer__link">Cabinets</a></li>
                  <li class="henk-footer__list-item"><a href="#" class="henk-footer__link">Accessories</a></li>
              </ul>
          </div>

          <div class="henk-footer__grid-column">
            <h3 class="henk-footer__heading h4"><a href="/en/about-us">About</a></h3>
            <ul class="henk-footer__list --no-bullets">
              <li class="henk-footer__list-item"><a href="/en/about-us/" class="henk-footer__link">Abou HENK</a></li>
              <li class="henk-footer__list-item"><a href="/en/about-us/b-corp" class="henk-footer__link">Sustainability</a></li>              
              <li class="henk-footer__list-item"><a href="https://studio-henk.homerun.co/" class="henk-footer__link">Careers</a></li>              
              <li class="henk-footer__list-item"><a href="/en/contact" class="henk-footer__link">Contact</a></li>
              <li class="henk-footer__list-item"><a href="/en/press" class="henk-footer__link">Press</a></li>
              <li class="henk-footer__list-item"><a href="/en/top-nav/imagebank" class="henk-footer__link">Image Bank</a></li>              
            </ul>
          </div>
          <div class="henk-footer__grid-column">
            <h3 class="henk-footer__heading h4"><a href="/en/services">Services</a></h3>
            <ul class="henk-footer__list --no-bullets">              
              <li class="henk-footer__list-item"><a href="/en/samples" class="henk-footer__link">Samples Service</a></li>
              <li class="henk-footer__list-item"><a href="/en/interior-advice" class="henk-footer__link">Interior Advice</a></li>
              <li class="henk-footer__list-item"><a href="/en/maintenance" class="henk-footer__link">Maintenance</a></li>
              <li class="henk-footer__list-item"><a href="/en/manuals" class="henk-footer__link">Manuals</a></li>
              <li class="henk-footer__list-item"><a href="/en/stock" class="henk-footer__link">Stock</a></li>
              <li class="henk-footer__list-item"><a href="https://assets.studio-henk.nl/assets/Pricelists/STUDIOHENK_Pricelist_2024_DIGITAL_v36.pdf" class="henk-footer__link">Price List</a></li>              
            </ul>
          </div>
          <div class="henk-footer__grid-column">
            <h3 class="henk-footer__heading h4"><a href="/en/contact">Support</a></h3>
            <ul class="henk-footer__list --no-bullets">
              <li class="henk-footer__list-item"><a href="/en/contact" class="henk-footer__link">Contact</a></li>
              <li class="henk-footer__list-item"><a href="/en/faq" class="henk-footer__link">FAQ</a></li>
              <li class="henk-footer__list-item"><a href="/en/planning" class="henk-footer__link">Delivery Times</a></li>                        
              <!-- <li class="henk-footer__list-item"><a href="#" class="henk-footer__link">Order Status</a></li>
              <li class="henk-footer__list-item"><a href="#" class="henk-footer__link">Returns</a></li> -->
            </ul>
          </div>
          <div class="henk-footer__grid-column">
            <h3 class="henk-footer__heading h4"><a href="/en/stores">Stores</a></h3>
            <ul class="henk-footer__list --no-bullets">
              <li class="henk-footer__list-item"><a href="/en/stores/amsterdam-flagship-store" class="henk-footer__link">Amsterdam</a></li>
              <li class="henk-footer__list-item"><a href="/en/stores/antwerp-flagship-store" class="henk-footer__link">Antwerpen</a></li>
              <li class="henk-footer__list-item"><a href="/en/stores/rotterdam-brand-store" class="henk-footer__link">Rotterdam</a></li>              
              <li class="henk-footer__list-item"><a href="/en/stores/utrecht-brand-store" class="henk-footer__link">Utrecht</a></li>
            </ul>
          </div>
        </div>
      </div>   
      
      <!-- Second Row: Google Rating Widget and Social Media Links -->

      <div class="henk-footer__row henk-footer__row--social-rating">
        <div class="henk-footer__section henk-footer__section--rating">
          <h3 class="henk-footer__heading h4 visually-hidden">Google Rating</h3>          
          <div class="henk-footer__certificates-rating">
          <a href="https://www.bcorporation.net/en-us/find-a-b-corp/company/studio-henk/">${BcorpLogoSVG}</a>

            <div class="henk-footer__rating-widget">              
              <div class="star-rating">
                <ol class="star-rating__stars">
                <li class="star-rating__star">${StarSmall()}</li>
                <li class="star-rating__star">${StarSmall()}</li>
                <li class="star-rating__star">${StarSmall()}</li>
                <li class="star-rating__star">${StarSmall()}</li>
                <li class="star-rating__star">${StarSmall()}</li>
                </ol>
                <p class="star-rating__rating">4.6 Sterren</p>
                <p class="star-rating__reviews"><a href="https://www.google.com/maps/place/Studio+HENK+Amsterdam+Flagship+store/@52.3726924,4.874644,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6096bedafecb5:0xcf2b8610a886605e!8m2!3d52.3726924!4d4.8772189!16s%2Fg%2F11r_xqvrvl?entry=ttu">159 reviews on Google</a></p> 
              </div>
            </div>
          </div>
        </div>
        <div class="henk-footer__section henk-footer__section--social">
          <h3 class="henk-footer__heading h4 visually-hidden">Follow Us</h3>
          <ul class="henk-footer__social-media henk-list henk-list--horizontal --no-bullets">              
            <li class="henk-footer__social-media-item">            
              <a href="https://www.instagram.com/studiohenk/" class="henk-footer__social-media-link">
               <!-- ${InstagramSmall()} --> 
                ${InstagramMedium()}
              </a>
            </li>
            <li class="henk-footer__social-media-item">
              <a href="https://www.facebook.com/studiohenk/" class="henk-footer__social-media-link">
                <!-- ${FacebookSmall()} -->
                ${FacebookMedium()}
              </a>
            </li>
            <li class="henk-footer__social-media-item">
              <a href="https://www.tiktok.com/@studiohenk" class="henk-footer__social-media-link">
                <!-- ${TikTokSmall()} -->
                ${TikTokMedium()}
              </a>
            </li>
            <li class="henk-footer__social-media-item">
              <a href="https://nl.pinterest.com/studiohenk/" class="henk-footer__social-media-link">
                <!-- ${PinterestSmall()} -->
                ${PinterestMedium()}
              </a>
            </li>
            <li class="henk-footer__social-media-item">
              <a href="https://www.youtube.com/channel/UC_RBQhav2vf-zwLTIr-xHQg" class="henk-footer__social-media-link">
                <!-- ${YoutubeSmall()} -->
                ${YoutubeMedium()}
              </a>
            </li>            
          </ul>
        </div>
      </div>

      <!-- Third Row: Payment Logos and Small Print Links -->

      <div class="henk-footer__row henk-footer__row--payment-terms">
        <div class="henk-footer__section henk-footer__section--payment">
          <h3 class="visually-hidden">Payment methods</h3>
          <ul class="henk-footer__payment-logos --no-bullets">
            <li class="henk-footer__payment-logo-item">
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.98611V15.614C0 16.2663 0.533729 16.8 1.18606 16.8H9.32839C15.4841 16.8 18.1527 13.3545 18.1527 8.78226C18.1527 4.2337 15.4841 0.800049 9.32839 0.800049H1.18606C0.533729 0.800049 0 1.33378 0 1.98611Z" fill="white"/>
              <path d="M5.44995 4.14476V14.2144H9.83246C13.8117 14.2144 15.5374 11.9669 15.5374 8.7882C15.5374 5.74595 13.8117 3.38568 9.83246 3.38568H6.20903C5.78798 3.38568 5.44995 3.72964 5.44995 4.14476Z" fill="#CC0066"/>
              <path d="M9.32831 15.7148H2.24751C1.61889 15.7148 1.10889 15.2048 1.10889 14.5762V3.02986C1.10889 2.40124 1.61889 1.89124 2.24751 1.89124H9.32831C16.0474 1.89124 17.0496 6.21444 17.0496 8.7882C17.0496 13.2537 14.3038 15.7148 9.32831 15.7148ZM2.24751 2.27078C1.82646 2.27078 1.48843 2.6088 1.48843 3.02986V14.5762C1.48843 14.9972 1.82646 15.3353 2.24751 15.3353H9.32831C14.0607 15.3353 16.67 13.0106 16.67 8.7882C16.67 3.11881 12.0681 2.27078 9.32831 2.27078H2.24751Z" fill="black"/>
              <path d="M6.99201 7.43013C7.1462 7.43013 7.28853 7.45385 7.42492 7.50129C7.56132 7.54873 7.674 7.62583 7.77481 7.72071C7.8697 7.82153 7.94679 7.94606 8.00609 8.08839C8.05947 8.23665 8.08912 8.40863 8.08912 8.61026C8.08912 8.78817 8.0654 8.94829 8.02389 9.09654C7.97644 9.2448 7.91121 9.37527 7.82225 9.48201C7.7333 9.58876 7.62062 9.67179 7.48423 9.73702C7.34783 9.79632 7.18771 9.8319 7.00387 9.8319H5.96606V7.42419H6.99201V7.43013ZM6.95643 9.39306C7.03352 9.39306 7.10469 9.3812 7.18178 9.35748C7.25294 9.33376 7.31818 9.29224 7.37155 9.23294C7.42492 9.17364 7.47237 9.10247 7.50795 9.00759C7.54353 8.9127 7.56132 8.80596 7.56132 8.66956C7.56132 8.55096 7.54946 8.43828 7.52574 8.34339C7.50202 8.24851 7.46051 8.15955 7.40713 8.09432C7.35376 8.02909 7.2826 7.96978 7.19364 7.9342C7.10469 7.89862 6.99794 7.88083 6.86747 7.88083H6.48793V9.39899H6.95643V9.39306Z" fill="white"/>
              <path d="M10.23 7.43013V7.8749H8.9609V8.39084H10.1292V8.80003H8.9609V9.38713H10.2596V9.8319H8.43311V7.42419H10.23V7.43013Z" fill="white"/>
              <path d="M12.0446 7.43018L12.946 9.83788H12.3944L12.2106 9.30416H11.3092L11.1194 9.83788H10.5857L11.493 7.43018H12.0446ZM12.0742 8.90682L11.7718 8.02321H11.7658L11.4515 8.90682H12.0742Z" fill="white"/>
              <path d="M13.8059 7.43018V9.39311H14.9801V9.83788H13.2781V7.43018H13.8059Z" fill="white"/>
              <path d="M3.46908 9.74296C4.08154 9.74296 4.57805 9.24646 4.57805 8.63399C4.57805 8.02153 4.08154 7.52502 3.46908 7.52502C2.85661 7.52502 2.36011 8.02153 2.36011 8.63399C2.36011 9.24646 2.85661 9.74296 3.46908 9.74296Z" fill="black"/>
              <path d="M4.30523 14.2144C3.37417 14.2144 2.62695 13.4613 2.62695 12.5361V11.2255C2.62695 10.763 3.00056 10.3834 3.46906 10.3834C3.93162 10.3834 4.31116 10.757 4.31116 11.2255V14.2144H4.30523Z" fill="black"/>
            </svg>            
            </li>
            <li class="henk-footer__payment-logo-item">
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.08378 0.800049H22.6731C22.8848 0.800049 23.0878 0.884334 23.2375 1.03436C23.3872 1.18439 23.4713 1.38788 23.4713 1.60005V16C23.4713 16.2122 23.3872 16.4157 23.2375 16.5657C23.0878 16.7158 22.8848 16.8 22.6731 16.8H1.08378C0.872099 16.8 0.669091 16.7158 0.519412 16.5657C0.369733 16.4157 0.285645 16.2122 0.285645 16V1.60005C0.285645 1.38788 0.369733 1.18439 0.519412 1.03436C0.669091 0.884334 0.872099 0.800049 1.08378 0.800049Z" fill="white"/>
                <path d="M2.35034 14.6834V11.9243H3.19974C3.81713 11.9243 4.2143 12.1569 4.2143 12.6377C4.2143 12.9097 4.08847 13.0989 3.91151 13.2093C4.16711 13.3275 4.31654 13.5561 4.31654 13.8675C4.31654 14.4233 3.91151 14.6834 3.28232 14.6834L2.35034 14.6834ZM2.89694 13.0713H3.30199C3.54972 13.0713 3.6559 12.9491 3.6559 12.7245C3.6559 12.484 3.46321 12.4052 3.20367 12.4052H2.89694V13.0713ZM2.89694 14.2026H3.23513C3.56546 14.2026 3.75814 14.1198 3.75814 13.8596C3.75814 13.6034 3.59299 13.497 3.28232 13.497H2.89694V14.2026ZM5.37655 14.7307C4.83781 14.7307 4.56647 14.4667 4.56647 14.1119C4.56647 13.7217 4.885 13.4931 5.35688 13.4891C5.47415 13.4913 5.5911 13.5018 5.70687 13.5207V13.4261C5.70687 13.1856 5.56923 13.0713 5.30576 13.0713C5.12827 13.0691 4.95202 13.1012 4.78668 13.1659L4.68837 12.7402C4.85747 12.6693 5.1288 12.622 5.36868 12.622C5.94674 12.622 6.2338 12.9294 6.2338 13.4615V14.5573C6.07258 14.6401 5.76978 14.7307 5.37655 14.7307ZM5.70687 14.2853V13.8636C5.61518 13.8431 5.52159 13.8326 5.42767 13.832C5.24677 13.832 5.10521 13.903 5.10521 14.0883C5.10521 14.2538 5.22318 14.3405 5.4316 14.3405C5.52637 14.3436 5.62058 14.3247 5.70687 14.2853ZM6.61587 14.6834V12.7954C6.89846 12.6816 7.20006 12.6228 7.5046 12.622C8.07872 12.622 8.40905 12.9058 8.40905 13.43V14.6834H7.86637V13.4694C7.86637 13.1974 7.74053 13.0713 7.50065 13.0713C7.38154 13.0696 7.26349 13.0938 7.1546 13.1423V14.6834L6.61587 14.6834ZM10.3055 12.7402L10.2032 13.1699C10.0628 13.1088 9.91193 13.0754 9.75889 13.0713C9.44037 13.0713 9.26734 13.296 9.26734 13.6665C9.26734 14.0725 9.44822 14.2814 9.78642 14.2814C9.93734 14.2773 10.0859 14.2424 10.2229 14.1789L10.3094 14.6164C10.1314 14.6959 9.938 14.7349 9.74315 14.7307C9.09038 14.7307 8.71287 14.3247 8.71287 13.6823C8.71287 13.0437 9.08645 12.622 9.7117 12.622C9.91555 12.621 10.1175 12.6612 10.3055 12.7402ZM11.4778 14.7307C10.8722 14.7307 10.4947 14.309 10.4947 13.6744C10.4947 13.0437 10.8722 12.622 11.4778 12.622C12.0874 12.622 12.457 13.0437 12.457 13.6744C12.457 14.309 12.0874 14.7307 11.4778 14.7307ZM11.4778 14.2814C11.757 14.2814 11.9025 14.0488 11.9025 13.6744C11.9025 13.3039 11.757 13.0713 11.4778 13.0713C11.2026 13.0713 11.0492 13.3039 11.0492 13.6744C11.0492 14.0488 11.2026 14.2814 11.4778 14.2814ZM12.771 14.6834V12.7954C13.0536 12.6816 13.3552 12.6228 13.6598 12.622C14.2339 12.622 14.5642 12.9058 14.5642 13.43V14.6834H14.0215V13.4694C14.0215 13.1974 13.8957 13.0713 13.6558 13.0713C13.5367 13.0696 13.4187 13.0938 13.3098 13.1423V14.6834L12.771 14.6834ZM15.7881 14.7307C15.3201 14.7307 15.0802 14.4745 15.0802 13.9542V13.1029H14.8128V12.6693H15.0802V12.2317L15.6229 12.2042V12.6693H16.0594V13.1029H15.6229V13.9464C15.6229 14.175 15.7173 14.2814 15.8942 14.2814C15.9644 14.2812 16.0343 14.2733 16.1027 14.2577L16.1302 14.6953C16.0179 14.7202 15.9031 14.7321 15.7881 14.7307ZM17.1578 14.7307C16.6191 14.7307 16.3477 14.4667 16.3477 14.1119C16.3477 13.7217 16.6663 13.4931 17.1381 13.4891C17.2554 13.4913 17.3724 13.5018 17.4881 13.5207V13.4261C17.4881 13.1856 17.3505 13.0713 17.087 13.0713C16.9095 13.0691 16.7333 13.1012 16.5679 13.1659L16.4696 12.7402C16.6387 12.6693 16.9101 12.622 17.1499 12.622C17.728 12.622 18.0151 12.9294 18.0151 13.4615V14.5573C17.8538 14.6401 17.551 14.7307 17.1578 14.7307ZM17.4881 14.2853V13.8636C17.3964 13.8431 17.3028 13.8326 17.2089 13.832C17.028 13.832 16.8865 13.903 16.8865 14.0883C16.8865 14.2538 17.0044 14.3405 17.2129 14.3405C17.3076 14.3436 17.4018 14.3247 17.4881 14.2853ZM19.8717 12.7402L19.7695 13.1699C19.629 13.1088 19.4782 13.0754 19.3251 13.0713C19.0066 13.0713 18.8336 13.296 18.8336 13.6665C18.8336 14.0725 19.0145 14.2814 19.3527 14.2814C19.5036 14.2773 19.6521 14.2424 19.7892 14.1789L19.8757 14.6164C19.6976 14.6959 19.5043 14.7349 19.3094 14.7307C18.6566 14.7307 18.2791 14.3247 18.2791 13.6823C18.2791 13.0437 18.6527 12.622 19.2779 12.622C19.4818 12.621 19.6838 12.6612 19.8717 12.7402ZM21.0649 14.7307C20.5969 14.7307 20.357 14.4745 20.357 13.9542V13.1029H20.0896V12.6693H20.357V12.2317L20.8997 12.2042V12.6693H21.3362V13.1029H20.8997V13.9464C20.8997 14.175 20.9941 14.2814 21.171 14.2814C21.2412 14.2812 21.3111 14.2733 21.3795 14.2577L21.407 14.6953C21.2947 14.7202 21.1799 14.7321 21.0649 14.7307Z" fill="#1E3764"/>
                <path d="M6.13559 10.5448C9.00712 10.5448 10.4429 8.62593 11.8787 6.70709H2.35034V10.5448H6.13559Z" fill="url(#paint0_linear_1576_515)"/>
                <path d="M17.6212 2.86945C14.7497 2.86945 13.3139 4.78829 11.8782 6.70713H21.4065V2.86945H17.6212Z" fill="url(#paint1_linear_1576_515)"/>
                <defs>
                <linearGradient id="paint0_linear_1576_515" x1="4.27762" y1="8.8031" x2="11.2519" y2="6.21869" gradientUnits="userSpaceOnUse">
                <stop stop-color="#005AB9"/>
                <stop offset="1" stop-color="#1E3764"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1576_515" x1="12.4551" y1="7.03998" x2="19.8598" y2="4.51957" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FBA900"/>
                <stop offset="1" stop-color="#FFD800"/>
                </linearGradient>
                </defs>
              </svg>            
            </li>
            <li class="henk-footer__payment-logo-item">
              <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1576_522)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9153 2.5105H16.9153V15.0896H9.9153V2.5105Z" fill="#FF5F00"/>
                <path d="M10.3597 8.80005C10.3574 6.34694 11.4854 4.02493 13.4152 2.51027C12.0059 1.40249 10.2641 0.800049 8.47144 0.800049C4.08277 0.800049 0.471436 4.41138 0.471436 8.80005C0.471436 13.1887 4.08277 16.8 8.47144 16.8C10.2641 16.8 12.0059 16.1974 13.4152 15.0896C11.4854 13.5752 10.3574 11.2529 10.3597 8.80005Z" fill="#EB001B"/>
                <path d="M26.3585 8.7996C26.3585 13.188 22.7474 16.8 18.359 16.8C16.5663 16.8 14.8245 16.1974 13.4152 15.0896C15.3432 13.5736 16.4708 11.2525 16.4708 8.80005C16.4708 6.34738 15.3432 4.02627 13.4152 2.51027C14.8245 1.40249 16.5663 0.800049 18.359 0.800049C22.7474 0.800049 26.3585 4.41116 26.3585 8.7996Z" fill="#F79E1B"/>
                </g>
                <defs>
                <clipPath id="clip0_1576_522">
                <rect width="26" height="16.0001" fill="white" transform="translate(0.471436 0.800049)"/>
                </clipPath>
                </defs>
              </svg>            
            </li>
            <li class="henk-footer__payment-logo-item">
              <svg width="52" height="17" viewBox="0 0 52 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1490_308)">
                <path d="M22.7155 16.5692H18.6379L21.1883 1.08074H25.2658L22.7155 16.5692Z" fill="white"/>
                <path d="M37.4973 1.45939C36.693 1.14601 35.4174 0.799988 33.84 0.799988C29.8132 0.799988 26.9776 2.90894 26.9602 5.9241C26.9267 8.14868 28.9904 9.38427 30.5339 10.126C32.1115 10.884 32.6477 11.3787 32.6477 12.0543C32.6317 13.0919 31.3729 13.5702 30.199 13.5702C28.571 13.5702 27.6987 13.3236 26.3731 12.7463L25.8361 12.4989L25.2655 15.9757C26.2219 16.4036 27.9839 16.7833 29.8132 16.8C34.0917 16.8 36.8772 14.7237 36.9102 11.5105C36.9265 9.74737 35.8368 8.39637 33.4875 7.2924C32.0613 6.58373 31.1879 6.10587 31.1879 5.38077C31.2046 4.72159 31.9266 4.04641 33.5365 4.04641C34.8621 4.01335 35.8361 4.32629 36.574 4.63946L36.9428 4.80393L37.4973 1.45939Z" fill="white"/>
                <path d="M42.9168 11.0822C43.2526 10.1924 44.5448 6.74863 44.5448 6.74863C44.5279 6.7817 44.88 5.84242 45.0813 5.26579L45.3663 6.60037C45.3663 6.60037 46.1384 10.3078 46.3061 11.0822C45.6689 11.0822 43.7222 11.0822 42.9168 11.0822ZM47.9502 1.08074H44.7961C43.8235 1.08074 43.0845 1.36062 42.6649 2.36582L36.6081 16.5689H40.8866C40.8866 16.5689 41.591 14.6573 41.7424 14.2456H46.9777C47.0948 14.7894 47.4643 16.5689 47.4643 16.5689H51.2398L47.9502 1.08074Z" fill="white"/>
                <path d="M15.2321 1.08074L11.2388 11.6424L10.8024 9.50034C10.0641 7.02873 7.74869 4.34338 5.16479 3.00815L8.82256 16.5527H13.1345L19.5439 1.08074H15.2321Z" fill="white"/>
                <path d="M7.5307 1.08075H0.970193L0.903076 1.3937C6.02069 2.679 9.40988 5.7765 10.8024 9.50034L9.37631 2.38269C9.14151 1.39348 8.41995 1.11338 7.5307 1.08075Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1490_308">
                <rect width="51.2" height="16" fill="white" transform="translate(0.471436 0.800049)"/>
                </clipPath>
                </defs>
              </svg>            
            </li>
          </ul>
        </div>
        <div class="henk-footer__section footer__section--terms">
          <h3 class="visually-hidden">Terms and Policies</h3>
          <ul class="henk-footer__small-print --no-bullets">
            <li class="henk-footer__small-print-item"><a href="/en/intellectual-property" class="footer__link">Intellectual Property</a></li>
            <li class="henk-footer__small-print-item"><a href="/en/privacy-policy-studio-h-k" class="footer__link">Privacy Policy</a></li>
            <li class="henk-footer__small-print-item"><a href="/en/cookies" class="footer__link">Cookie Statement</a></li>
            <li class="henk-footer__small-print-item"><a href="/en/terms-and-conditions-studio-h-k" class="footer__link">Terms and Conditions</a></li>            
          </ul>
        </div>
      </div>
    </div>
  </footer>
`;





