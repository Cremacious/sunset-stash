import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import flowerIcon from '@/assets/icons/flower.png';
import vapeIcon from '@/assets/icons/vape.png';
import concentrateIcon from '@/assets/icons/concentrate.png';
import edibleIcon from '@/assets/icons/edible.png';
import topicalIcon from '@/assets/icons/topical.png';
import defaultIcon from '@/assets/icons/default.png';
import { Purchase } from '@/lib/types';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export function getCategoryIcon(category: string | null | undefined): string {
  switch (category) {
    case 'Flower':
      return flowerIcon.src || flowerIcon.toString();
    case 'Vape':
      return vapeIcon.src || vapeIcon.toString();
    case 'Concentrate':
      return concentrateIcon.src || concentrateIcon.toString();
    case 'Edibles':
      return edibleIcon.src || edibleIcon.toString();
    case 'Topical':
      return topicalIcon.src || topicalIcon.toString();
    default:
      return defaultIcon.src || defaultIcon.toString();
  }
}

export function calculateTotalSpent(purchases: Purchase[]): number {
  const total = purchases.reduce((sum, purchase) => sum + purchase.total, 0);
  return parseFloat(total.toFixed(2));
}

export function calculateMonthlyTotal(
  purchases: Purchase[],
  year?: number,
  month?: number
): number {
  const targetYear = year || new Date().getFullYear();
  const targetMonth = month || new Date().getMonth() + 1; 

  const total = purchases
    .filter((purchase) => {
      const purchaseDate = new Date(purchase.date);
      return (
        purchaseDate.getFullYear() === targetYear &&
        purchaseDate.getMonth() + 1 === targetMonth
      );
    })
    .reduce((sum, purchase) => sum + purchase.total, 0);

  return parseFloat(total.toFixed(2));
}

export function calculateAveragePurchase(purchases: Purchase[]): number {
  if (purchases.length === 0) return 0;
  const average = calculateTotalSpent(purchases) / purchases.length;
  return parseFloat(average.toFixed(2));
}

export function getPurchasesByDateRange(
  purchases: Purchase[],
  startDate: Date,
  endDate: Date
): Purchase[] {
  return purchases.filter((purchase) => {
    const purchaseDate = new Date(purchase.date);
    return purchaseDate >= startDate && purchaseDate <= endDate;
  });
}
