import { Button } from '../ui/button';
import PurchaseListCard from './PurchaseListCard';
import { CardContent, CardHeader } from '@/components/ui/card';
import { Purchase } from '@/lib/types';
import { CircleDollarSign } from 'lucide-react';
import Link from 'next/link';

const RecentPurchases = ({ purchases }: { purchases: Purchase[] }) => {
  const recentPurchases = purchases.slice(0, 5);

  return (
    <div>
      <div className=" h-full space-y-4">
        <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 rounded-lg shadow-md border-b-4 border-b-orange-300">
          <div className="flex items-center permanent-marker-font text-2xl ">
            Recent Purchases
          </div>
          <Button asChild size="sm">
            <Link href="/purchases">View All</Link>
          </Button>
        </div>

        {recentPurchases.length === 0 ? (
          <div className="glassCard h-[300px] flex flex-col items-center justify-center">
            <CardHeader />
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <CircleDollarSign className="w-10 h-10 text-orange-500 mb-2" />
                <span className="text-gray-800">
                  No recent purchases found.
                </span>
              </div>
            </CardContent>
          </div>
        ) : (
          <div className="space-y-2">
            {recentPurchases.map((purchase) => (
              <PurchaseListCard key={purchase.id} purchase={purchase} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPurchases;
