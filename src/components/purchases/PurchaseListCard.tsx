import { Purchase } from '@/lib/types/purchase.types';
import Link from 'next/link';

const PurchaseListCard = ({ purchase }: { purchase: Purchase }) => {
  // Format the date as MM/DD/YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg border-b-4 border-b-orange-500  p-3 hover:shadow-md transition-shadow duration-200">
      <Link className="my-4" href={`/purchases/${purchase.id}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm">
                {purchase.dispensary}
              </h3>
            </div>
            <div className="text-center">
              <p className="font-bold text-green-600 text-sm">
                ${purchase.total.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-700">
                {purchase.items.length} items
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {formatDate(purchase.date)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PurchaseListCard;
