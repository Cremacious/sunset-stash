import { Button } from '../ui/button';
import PurchaseListCard from './PurchaseListCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Purchase } from '@/lib/types';

const RecentPurchases = ({ purchases }: { purchases: Purchase[] }) => {
  const recentPurchases = purchases.slice(0, 5); // Limit to 5 recent purchases
  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">Recent Purchases</div>
          <Button
            variant="outline"
            size="sm"
            //   onClick={() => router.push('/purchases')}
          >
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPurchases.map((purchase) => (
            <PurchaseListCard key={purchase.id} purchase={purchase} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPurchases;
