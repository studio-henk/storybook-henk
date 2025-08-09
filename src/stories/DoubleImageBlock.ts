export interface DoubleImageBlockProps {
    reverseLayout?: boolean;
    largeImage?: string; // image URL or empty string
    largeImageUrl?: string; // link for large image
    largeImageNewTab?: boolean;
    smallImage?: string; // image URL or empty string
    smallImageUrl?: string; // link for small image
    smallImageNewTab?: boolean;
}
export function createDoubleImageBlock({
    reverseLayout = false,
    largeImage = '',
    largeImageUrl = '',
    largeImageNewTab = false,
    smallImage = '',
    smallImageUrl = '',
    smallImageNewTab = false,
}: DoubleImageBlockProps): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'henk-double-image-block' + (reverseLayout ? ' henk-double-image-block--reverse' : '');

    wrapper.innerHTML = `
    <div class="henk-double-image-block__inner">
      <div class="henk-double-image-block__grid">

        <div class="henk-double-image-block__grid-item">
          ${largeImageUrl
            ? `<a href="${largeImageUrl}"${largeImageNewTab ? ' target="_blank" rel="noopener"' : ''}>`
            : ''
        }
          ${largeImage
            ? `<img
                  class="item__image"
                  id="img1"
                  src="${largeImage}"
                  alt="Large Image"
                  loading="lazy"
                  width="1120"
                  height="1400"
                />`
            : `<svg class="placeholder-svg-large" width="1120" height="1400" aria-label="Large image placeholder" role="img" />`
        }
          ${largeImageUrl ? '</a>' : ''}
        </div>

        <div class="henk-double-image-block__grid-item">
          ${smallImageUrl
            ? `<a href="${smallImageUrl}"${smallImageNewTab ? ' target="_blank" rel="noopener"' : ''}>`
            : ''
        }
          ${smallImage
            ? `<img
                  class="item__image"
                  id="img2"
                  src="${smallImage}"
                  alt="Small Image"
                  loading="lazy"
                  width="808"
                  height="998"
                />`
            : `<svg class="placeholder-svg-small" width="808" height="998" aria-label="Small image placeholder" role="img" />`
        }
          ${smallImageUrl ? '</a>' : ''}
        </div>

      </div>
    </div>
  `;

    return wrapper;
}
