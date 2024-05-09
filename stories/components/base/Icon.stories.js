import { fn } from '@storybook/test';
import ShareIcon from '../../assets/icons/icon-share.svg?raw';
import TruckIcon from '../../assets/icons/icon-truck.svg?raw';
import CheckmarkIcon from '../../assets/icons/icon-checkmark.svg?raw';

export default {
  title: 'Components/Base/Icon',
  tags: ['autodocs'],
};

export const Share = () => {
  return `<i class="henk-icon">${ShareIcon}</i>`;
}

export const Truck = () => {
  return `<i class="henk-icon">${TruckIcon}</i>`;
}

export const Checkmark = () => {
  return `<i class="henk-icon">${CheckmarkIcon}</i>`;
}

