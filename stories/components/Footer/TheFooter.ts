
// components/Footer.ts
export function createFooter(): HTMLElement {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<p>© ${new Date().getFullYear()} Your Company. All rights reserved.</p>`;
    return footer;
}
