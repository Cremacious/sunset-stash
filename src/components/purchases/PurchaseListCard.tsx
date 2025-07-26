import { Purchase } from '@/lib/types/purchase.types';
import Link from 'next/link';

const PurchaseListCard = ({ purchase }: { purchase: Purchase }) => {
 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-pink-100 border-0 border-b-4 border-b-pink-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[50px] w-full relative p-3">
      <Link className="block" href={`/purchases/${purchase.id}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex-1">
              <h3 className="font-bold text-slate-700 text-lg fugaz-font  truncate">
                {purchase.dispensary}
              </h3>
            </div>
            {/* <div className="text-center">
              <p className="font-bold text-orange-600 text-base bg-orange-100/80 rounded-lg px-3 py-1 border border-orange-200">
                ${purchase.total.toFixed(2)}
              </p>
            </div> */}
            {/* <div className="text-center">
              <p className="text-xs bg-purple-500 text-white font-bold rounded-lg px-2 py-1 shadow-sm">
                {purchase.items.length} items
              </p>
            </div> */}
            <div className="text-right">
              <p className=" text-slate-700">
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
