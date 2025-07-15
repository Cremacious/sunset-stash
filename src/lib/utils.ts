import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import flowerIcon from '@/assets/icons/flower.png';
import vapeIcon from '@/assets/icons/vape.png';
import concentrateIcon from '@/assets/icons/concentrate.png';
import edibleIcon from '@/assets/icons/edible.png';
import topicalIcon from '@/assets/icons/topical.png';
import defaultIcon from '@/assets/icons/default.png';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryIcon(category: string | null | undefined): string {
  switch (category) {
    case 'flower':
      return flowerIcon.src || flowerIcon.toString();
    case 'vape':
      return vapeIcon.src || vapeIcon.toString();
    case 'concentrate':
      return concentrateIcon.src || concentrateIcon.toString();
    case 'edible':
      return edibleIcon.src || edibleIcon.toString();
    case 'topical':
      return topicalIcon.src || topicalIcon.toString();
    default:
      return defaultIcon.src || defaultIcon.toString();
  }
}
