import { Purchase } from '@/lib/types/purchase.types';

const PurchaseListCard = ({ purchase }: { purchase: Purchase }) => {
  return (
    <div className="bg-white rounded-lg border-l-6 border-l-green-600 border p-4 hover:shadow-md ">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              {purchase.dispensary.toUpperCase()}
            </h3>
            <p className="text-xs text-gray-500">{purchase.createdAt}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-green-600">
            ${purchase.total.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">{purchase.items.length} items</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseListCard;
