export interface CreateLogoProps {
    variant?: 'primary' | 'secondary';
    href: 'https://studio-henk.nl';
}

export const createLogo = ({
    variant = 'primary',
    href = 'https://studio-henk.nl',
}: CreateLogoProps): HTMLAnchorElement => {
    const logolink = document.createElement('a');

    logolink.className = `henk-logo henk-logo--${variant}`;
    logolink.href = href;

    // create span for text 
    const span = document.createElement('span');
    span.className = `visually-hidden`;
    span.textContent = "Studio HENK";

    logolink.appendChild(span);

    // svg logo
    logolink.innerHTML += `
        <svg fill="none" height="25" viewBox="0 0 106 25" width="103" xmlns="http://www.w3.org/2000/svg"><path d="M14.1281 9.84241H4.04317V0.230835H0V23.8324H4.04317V13.6883H14.1281V23.8324H18.1713V0.230835H14.1281V9.84241Z" fill="currentcolor"></path><path d="M33.956 13.6555H43.3966V9.80954H33.956V4.07678H44.2053V0.230835H29.9128V23.8324H44.4091V19.9931H33.956V13.6555Z" fill="currentcolor"></path><path d="M70.509 16.4824L58.7082 0.230835H55.066V23.8324H59.1158V7.62031L70.9166 23.8324H74.5587V0.230835H70.509V16.4824Z" fill="currentcolor"></path><path d="M104.656 20.4927C102.782 20.8937 100.902 19.901 99.0348 16.5482L95.6885 10.4867L103.834 0.230835H98.7718L90.3634 10.822V0.230835H86.3202V23.8324H90.3634V17.1661L93.0522 13.7935L95.465 18.1588C98.3116 23.3131 101.632 24.8843 105.169 23.9968L104.656 20.4927Z" fill="currentcolor"></path></svg>
    `;

    return logolink;
};

