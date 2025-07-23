import { Button } from '../ui/button';
import PurchaseListCard from './PurchaseListCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Purchase } from '@/lib/types';
import { CircleDollarSign } from 'lucide-react';

const RecentPurchases = ({ purchases }: { purchases: Purchase[] }) => {
  const recentPurchases = purchases.slice(0, 5);

  return (
    <div>
      <div className=" h-full space-y-4">
        <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-white p-4 rounded-lg shadow-md border-b-4 border-b-orange-500">
          <div className="flex items-center fugaz-font text-2xl">Recent Purchases</div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        {recentPurchases.length === 0 ? (
          <Card className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 p-6">
            <CardHeader />
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <CircleDollarSign className="w-10 h-10 text-orange-500 mb-2" />
                <span className="text-gray-500">
                  No recent purchases found.
                </span>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
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
