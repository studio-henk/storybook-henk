
// Breadcrumbs.ts
export function createBreadcrumbs({ breadcrumbs }) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <nav aria-label="breadcrumb" class="henk-breadcrumbs" id="henk-breadcrumbs-bar">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="henk-breadcrumbs__list">
        ${breadcrumbs
      .map(
        (page, index) => `
              <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="henk-breadcrumbs__item">
                ${index === breadcrumbs.length - 1
            ? `<span class="henk-breadcrumbs__name" itemprop="name">${page.name}</span>`
            : `<a itemprop="item" class="henk-breadcrumbs__link" href="${page.fullPath}">
                        <span class="henk-breadcrumbs__name" itemprop="name">${page.name}</span>
                      </a>`
          }
                <meta itemprop="position" content="${index + 1}" />
              </li>
            `
      )
      .join("")}
      </ol>
    </nav>
  `;
  return wrapper.firstElementChild as HTMLElement;
}
