import PurchaseForm from '@/components/purchases/PurchaseForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'New Purchase | Sunset Stash',
  description: 'Create a new purchase',
};

const NewPurchasePage = () => {
  return (
    <div className="min-h-screen">
      <PurchaseForm />
    </div>
  );
};

export default NewPurchasePage;
