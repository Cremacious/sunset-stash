import { Purchase } from '@/lib/types';
import {
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Store,
  Calculator,
} from 'lucide-react';

const PurchaseStats = ({ purchases }: { purchases: Purchase[] }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 glassCard">
        {/* Total Purchases */}
        <div className="relative overflow-hidden bg-blue-100 rounded-xl p-4 border border-blue-200 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-full">
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
        <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-200 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 rounded-full">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Total This Month
                </h4>
              </div>
              <p className="text-xl font-bold text-gray-800">
                ${purchases.length}
              </p>
            </div>
          </div>
        </div>

        {/* All Time Spent */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500 rounded-full">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  All Time Spent
                </h4>
              </div>
              <p className="text-xl font-bold text-gray-800">
                ${purchases.reduce((sum, p) => sum + p.total, 0).toFixed(0)}
              </p>
            </div>
          </div>
        </div>

        {/* Dispensaries */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-orange-200 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-full">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Dispensaries
                </h4>
              </div>
              <p className="text-xl font-bold text-gray-800">
                {[...new Set(purchases.map((p) => p.dispensary))].length}
              </p>
            </div>
          </div>
        </div>

        {/* Average Purchase */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <div className="relative z-10">
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
                $
                {(
                  purchases.reduce((sum, p) => sum + p.total, 0) /
                  purchases.length
                ).toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseStats;
