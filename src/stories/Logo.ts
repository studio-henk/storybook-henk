export interface LogoProps {
  variant?: 'default' | 'default-inverted' | 'primary' | 'secondary';
  href?: string;
}

export const createLogo = ({
  variant = 'primary',
  href = 'https://studio-henk.nl',
}: LogoProps = {}): HTMLAnchorElement => {
  const logoLink = document.createElement('a');

  logoLink.className = `henk-logo henk-logo--${variant}`;
  logoLink.href = href;
  logoLink.setAttribute('aria-label', 'Studio HENK');

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('height', '24');
  svg.setAttribute('viewBox', '0 0 104 24');
  svg.setAttribute('width', '104');
  svg.setAttribute('xmlns', svgNS);

  svg.innerHTML = `
    <path d="M14.1281 9.84241H4.04317V0.230835H0V23.8324H4.04317V13.6883H14.1281V23.8324H18.1713V0.230835H14.1281V9.84241Z" fill="currentcolor"/>
    <path d="M33.956 13.6555H43.3966V9.80954H33.956V4.07678H44.2053V0.230835H29.9128V23.8324H44.4091V19.9931H33.956V13.6555Z" fill="currentcolor"/>
    <path d="M70.509 16.4824L58.7082 0.230835H55.066V23.8324H59.1158V7.62031L70.9166 23.8324H74.5587V0.230835H70.509V16.4824Z" fill="currentcolor"/>
    <path d="M104.656 20.4927C102.782 20.8937 100.902 19.901 99.0348 16.5482L95.6885 10.4867L103.834 0.230835H98.7718L90.3634 10.822V0.230835H86.3202V23.8324H90.3634V17.1661L93.0522 13.7935L95.465 18.1588C98.3116 23.3131 101.632 24.8843 105.169 23.9968L104.656 20.4927Z" fill="currentcolor"/>
  `;

  logoLink.appendChild(svg);

  return logoLink;
};
