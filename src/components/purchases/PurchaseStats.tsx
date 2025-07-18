import { Purchase } from '@/lib/types';
import { ShoppingCart, DollarSign, Calculator } from 'lucide-react';
import { calculateAveragePurchase, calculateMonthlyTotal } from '@/lib/utils';

const PurchaseStats = ({ purchases }: { purchases: Purchase[] }) => {
  const monthlyTotal = calculateMonthlyTotal(purchases);
  const averagePurchase = calculateAveragePurchase(purchases);
  return (
    <div className="">
      <div className="flex flex-col gap-4 glassCard">
        {/* Total Purchases */}
        <div className=" bg-orange-100 rounded-xl p-4 border border-orange-200 ">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-full">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Total Purchases
                </h4>
              </div>
              <p className="text-xl font-bold text-gray-800">
                {purchases.length}
              </p>
            </div>
          </div>
        </div>

        {/* Total This Month */}
        <div className="bg-green-100 rounded-xl p-4 border border-green-200 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500 rounded-full">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">
                Total This Month
              </h4>
            </div>
            <p className="text-xl font-bold text-gray-800">${monthlyTotal}</p>
          </div>
        </div>

        {/* Average Purchase */}
        <div className="bg-purple-100 rounded-xl p-4 border border-indigo-200 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500 rounded-full">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">
                Avg Purchase
              </h4>
            </div>
            <p className="text-xl font-bold text-gray-800">
              ${averagePurchase}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseStats;
