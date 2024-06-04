import { fn } from '@storybook/test';
import ShareIcon from '../../assets/icons/icon-share.svg?raw';
import TruckIcon from '../../assets/icons/icon-truck.svg?raw';
import CheckmarkIcon from '../../assets/icons/icon-checkmark.svg?raw';
import StarIcon from '../../assets/icons/icon-star.svg?raw';
import IconInstaGram from '../../assets/icons/icon-instagram.svg?raw';
import IconFacebook from '../../assets/icons/icon-facebook.svg?raw';
import IconTikTok from '../../assets/icons/icon-tiktok.svg?raw';
import IconYouTube from '../../assets/icons/icon-youtube.svg?raw';
import IconPinterest from '../../assets/icons/icon-pinterest.svg?raw';

export default {
  title: 'Components/Base/Icon',
  tags: ['autodocs'],
};

const IconTemplate = ({ icon, size = 'large' }) => {
  const sizeClass = `icon--${size}`;
  return `<i class="henk-icon ${sizeClass}">${icon}</i>`;
};

export const Share = () => IconTemplate({ icon: ShareIcon });

export const ShareSmall = () => IconTemplate({ icon: ShareIcon, size: 'small' });

export const ShareMedium = () => IconTemplate({ icon: ShareIcon, size: 'medium' });

export const Truck = () => IconTemplate({ icon: TruckIcon });

export const TruckSmall = () => IconTemplate({ icon: TruckIcon, size: 'small' });

export const TruckMedium = () => IconTemplate({ icon: TruckIcon, size: 'medium' });

export const Checkmark = () => IconTemplate({ icon: CheckmarkIcon });

export const CheckmarkSmall = () => IconTemplate({ icon: CheckmarkIcon, size: 'small' });

export const CheckmarkMedium = () => IconTemplate({ icon: CheckmarkIcon, size: 'medium' });

export const Star = () => IconTemplate({ icon: StarIcon });

export const StarSmall = () => IconTemplate({ icon: StarIcon, size: 'small' });

export const StarMedium = () => IconTemplate({ icon: StarIcon, size: 'medium' });

export const Instagram = () => IconTemplate({ icon: IconInstaGram });

export const InstagramSmall = () => IconTemplate({ icon: IconInstaGram, size: 'small' });

export const InstagramMedium = () => IconTemplate({ icon: IconInstaGram, size: 'medium' });

export const Facebook = () => IconTemplate({ icon: IconFacebook });

export const FacebookSmall = () => IconTemplate({ icon: IconFacebook, size: 'small' });

export const FacebookMedium = () => IconTemplate({ icon: IconFacebook, size: 'medium' });

export const TikTok = () => IconTemplate({ icon: IconTikTok });

export const TikTokSmall = () => IconTemplate({ icon: IconTikTok, size: 'small' });

export const TikTokMedium = () => IconTemplate({ icon: IconTikTok, size: 'medium' });

export const Youtube = () => IconTemplate({ icon: IconYouTube });

export const YoutubeSmall = () => IconTemplate({ icon: IconYouTube, size: 'small' });

export const YoutubeMedium = () => IconTemplate({ icon: IconYouTube, size: 'medium' });

export const Pinterest = () => IconTemplate({ icon: IconPinterest });

export const PinterestSmall = () => IconTemplate({ icon: IconPinterest, size: 'small' });

export const PinterestMedium = () => IconTemplate({ icon: IconPinterest, size: 'medium' });