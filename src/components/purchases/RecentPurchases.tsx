import Link from 'next/link';
import { Button } from '../ui/button';
import PurchaseListCard from './PurchaseListCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Purchase } from '@/lib/types';
import { CircleDollarSign } from 'lucide-react';

const RecentPurchases = ({ purchases }: { purchases: Purchase[] }) => {
  const recentPurchases = purchases.slice(0, 5);

  if (recentPurchases.length === 0) {
    return (
      <Card className="bg-white shadow-xl border-0 h-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
            <div className="flex items-center">Community Feed</div>
            <Button variant="outline" size="sm">
              View Feed
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center py-12">
          <div className="flex justify-center items-center mt-6">
            <CircleDollarSign className="text-purple-600" size={100} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 my-2">
            You have no recent purchases
          </h3>
          <p className="text-gray-600 mb-12">
            Start logging your purchases to see them here!
          </p>
          <Button asChild>
            <Link href="/purchases/new">Make a Purchase</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">Recent Purchases</div>
          <Button variant="outline" size="sm">
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
