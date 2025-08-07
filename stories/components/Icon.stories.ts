import { fn } from "@storybook/test";
// import { BADGE } from '@geometricpanda/storybook-addon-badges';

import IconChevronRight from "@assets/icons/icon-chevron-right.svg?raw";
import IconChevronLeft from "@assets/icons/icon-chevron-left.svg?raw";

import ShareIcon from "@assets/icons/icon-share.svg?raw";
import TruckIcon from "@assets/icons/icon-truck.svg?raw";
import CheckmarkIcon from "@assets/icons/icon-checkmark.svg?raw";
import StarIcon from "@assets/icons/icon-star.svg?raw";
import IconInstaGram from "@assets/icons/icon-instagram.svg?raw";
import IconFacebook from "@assets/icons/icon-facebook.svg?raw";
import IconTikTok from "@assets/icons/icon-tiktok.svg?raw";
import IconYouTube from "@assets/icons/icon-youtube.svg?raw";
import IconPinterest from "@assets/icons/icon-pinterest.svg?raw";
import IconLocation from "@assets/icons/icon-location.svg?raw";
import IconInfo from "@assets/icons/icon-info.svg?raw";
import IconSuccess from "@assets/icons/icon-success.svg?raw";
import IconWarning from "@assets/icons/icon-warning.svg?raw";
import IconDanger from "@assets/icons/icon-danger.svg?raw";
import IconInfoOpen from "@assets/icons/icon-info-open.svg?raw";
import IconLocationOpen from "@assets/icons/icon-location-open.svg?raw";
import IconCircleX from "@assets/icons/icon-circle-x.svg?raw";
import IconClose from "@assets/icons/icon-x.svg?raw";
import IconArrowRight from "@assets/icons/icon-arrow-right.svg?raw";
import IconArrowLeft from "@assets/icons/icon-arrow-left.svg?raw";
import BagIcon from "@assets/icons/icon-bag.svg?raw";
import IconPlus from "@assets/icons/icon-plus.svg?raw";
import IconMinus from "@assets/icons/icon-minus.svg?raw";
import IconCheckmarkFat from "@assets/icons/icon-checkmark-fat.svg?raw";

export default {
  title: "Components/Icon",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Icons at HENK are SVG code elements rendered inside an ```<i>``` HTML element. Icons are used to represent actions, objects, or concepts in a visually appealing way.",
      },
    },
    badges: [BADGE.BETA, BADGE.SHOPIFY],
  },
};

const IconTemplate = ({ icon, size = "large" }) => {
  const sizeClass = `icon--${size}`;
  return `<i class="henk-icon ${sizeClass}">${icon}</i>`;
};

// export const Share = () => IconTemplate({ icon: ShareIcon });
//
// export const ShareSmall = () =>
//   IconTemplate({ icon: ShareIcon, size: "small" });
//
// export const ShareMedium = () =>
//   IconTemplate({ icon: ShareIcon, size: "medium" });

export const ChevronRight = () => IconTemplate({ icon: IconChevronRight });

export const ChevronRightSmall = () =>
  IconTemplate({ icon: IconChevronRight, size: "small" });

export const ChevronLeft = () => IconTemplate({ icon: IconChevronLeft });

export const ChevronLeftSmall = () =>
  IconTemplate({ icon: IconChevronLeft, size: "small" });

export const Truck = () => IconTemplate({ icon: TruckIcon });

export const TruckSmall = () =>
  IconTemplate({ icon: TruckIcon, size: "small" });

export const TruckMedium = () =>
  IconTemplate({ icon: TruckIcon, size: "medium" });

export const Checkmark = () => IconTemplate({ icon: CheckmarkIcon });

export const CheckmarkSmall = () =>
  IconTemplate({ icon: CheckmarkIcon, size: "small" });

export const CheckmarkMedium = () =>
  IconTemplate({ icon: CheckmarkIcon, size: "medium" });

export const Star = () => IconTemplate({ icon: StarIcon });

export const StarSmall = () => IconTemplate({ icon: StarIcon, size: "small" });

export const StarMedium = () =>
  IconTemplate({ icon: StarIcon, size: "medium" });

export const Instagram = () => IconTemplate({ icon: IconInstaGram });

export const InstagramSmall = () =>
  IconTemplate({ icon: IconInstaGram, size: "small" });

export const InstagramMedium = () =>
  IconTemplate({ icon: IconInstaGram, size: "medium" });

export const Facebook = () => IconTemplate({ icon: IconFacebook });

export const FacebookSmall = () =>
  IconTemplate({ icon: IconFacebook, size: "small" });

export const FacebookMedium = () =>
  IconTemplate({ icon: IconFacebook, size: "medium" });

export const TikTok = () => IconTemplate({ icon: IconTikTok });

export const TikTokSmall = () =>
  IconTemplate({ icon: IconTikTok, size: "small" });

export const TikTokMedium = () =>
  IconTemplate({ icon: IconTikTok, size: "medium" });

export const Youtube = () => IconTemplate({ icon: IconYouTube });

export const YoutubeSmall = () =>
  IconTemplate({ icon: IconYouTube, size: "small" });

export const YoutubeMedium = () =>
  IconTemplate({ icon: IconYouTube, size: "medium" });

export const Pinterest = () => IconTemplate({ icon: IconPinterest });

export const PinterestSmall = () =>
  IconTemplate({ icon: IconPinterest, size: "small" });

export const PinterestMedium = () =>
  IconTemplate({ icon: IconPinterest, size: "medium" });

export const Location = () => IconTemplate({ icon: IconLocation });

export const LocationSmall = () =>
  IconTemplate({ icon: IconLocation, size: "small" });

export const LocationMedium = () =>
  IconTemplate({ icon: IconLocation, size: "medium" });

export const InfoDefault = () => IconTemplate({ icon: IconInfo });

export const InfoSmall = () => IconTemplate({ icon: IconInfo, size: "small" });

export const InfoMedium = () =>
  IconTemplate({ icon: IconInfo, size: "medium" });

export const SuccessDefault = () => IconTemplate({ icon: IconSuccess });

export const SuccessSmall = () =>
  IconTemplate({ icon: IconSuccess, size: "small" });

export const SuccessMedium = () =>
  IconTemplate({ icon: IconSuccess, size: "medium" });

export const WarningDefault = () => IconTemplate({ icon: IconWarning });

export const WarningSmall = () =>
  IconTemplate({ icon: IconWarning, size: "small" });

export const WarningMedium = () =>
  IconTemplate({ icon: IconWarning, size: "medium" });

export const DangerDefault = () => IconTemplate({ icon: IconDanger });

export const DangerSmall = () =>
  IconTemplate({ icon: IconDanger, size: "small" });

export const DangerMedium = () =>
  IconTemplate({ icon: IconDanger, size: "medium" });

export const InfoOpenDefault = () => IconTemplate({ icon: IconInfoOpen });

export const InfoOpenSmall = () =>
  IconTemplate({ icon: IconInfoOpen, size: "small" });

export const InfoOpenMedium = () =>
  IconTemplate({ icon: IconInfoOpen, size: "medium" });

export const LocationOpenDefault = () =>
  IconTemplate({ icon: IconLocationOpen });

export const LocationOpenSmall = () =>
  IconTemplate({ icon: IconLocationOpen, size: "small" });

export const LocationOpenMedium = () =>
  IconTemplate({ icon: IconLocationOpen, size: "medium" });

export const CircleXDefault = () => IconTemplate({ icon: IconCircleX });

export const CircleXSmall = () =>
  IconTemplate({ icon: IconCircleX, size: "small" });

export const CircleXMedium = () =>
  IconTemplate({ icon: IconCircleX, size: "medium" });

export const CloseDefault = () => IconTemplate({ icon: IconClose });

export const CloseSmall = () =>
  IconTemplate({ icon: IconClose, size: "small" });

export const CloseMedium = () =>
  IconTemplate({ icon: IconClose, size: "medium" });

export const IconArrowRightLarge = () =>
  IconTemplate({ icon: IconArrowRight, size: "large" });

export const IconArrowRightMedium = () =>
  IconTemplate({ icon: IconArrowRight, size: "medium" });

export const IconArrowRightSmall = () =>
  IconTemplate({ icon: IconArrowRight, size: "small" });

export const IconBag = () => IconTemplate({ icon: BagIcon });

export const IconArrowLeftLarge = () =>
  IconTemplate({ icon: IconArrowLeft, size: "large" });

export const IconArrowLeftMedium = () =>
  IconTemplate({ icon: IconArrowLeft, size: "medium" });

export const IconArrowLeftSmall = () =>
  IconTemplate({ icon: IconArrowLeft, size: "small" });

export const IconPlusDefault = () => IconTemplate({ icon: IconPlus });

export const IconPlusMedium = () =>
  IconTemplate({ icon: IconPlus, size: "medium" });

export const IconPlusSmall = () =>
  IconTemplate({ icon: IconPlus, size: "small" });

export const IconMinusDefault = () => IconTemplate({ icon: IconMinus });

export const IconMinusMedium = () =>
  IconTemplate({ icon: IconMinus, size: "medium" });

export const IconMinusSmall = () =>
  IconTemplate({ icon: IconMinus, size: "small" });

export const IconCheckmarkFatDefault = () =>
  IconTemplate({ icon: IconCheckmarkFat, size: "large" });

export const IconCheckmarkFatMedium = () =>
  IconTemplate({ icon: IconCheckmarkFat, size: "medium" });

export const IconCheckmarkFatSmall = () =>
  IconTemplate({ icon: IconCheckmarkFat, size: "small" });
