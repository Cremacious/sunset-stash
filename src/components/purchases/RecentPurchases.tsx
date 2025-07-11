import { Button } from '../ui/button';
import PurchaseListCard from './PurchaseListCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Purchase } from '@/lib/types';

const RecentPurchases = ({ purchases }: { purchases: Purchase[] }) => {
  return (
    <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3">💳</span>
              Recent Purchases
            </div>
            <Button
              variant="outline"
              size="sm"
              //   onClick={() => router.push('/purchases')}
              className="text-orange-500 border-orange-200 hover:bg-orange-50"
            >
              View All
            </Button>
          </CardTitle>
          <CardDescription>Your latest dispensary visits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchases.map((purchase) => (
              <PurchaseListCard key={purchase.id} purchase={purchase} />
              // <div
              //   key={purchase.id}
              //   className="flex justify-between items-center p-4 bg-gray-500 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              // >
              //   <div>
              //     <h4 className="font-semibold text-gray-800">
              //       {purchase.dispensary}
              //     </h4>
              //     <p className="text-sm text-gray-600">
              //       {purchase.items} items • {purchase.date}
              //     </p>
              //   </div>
              //   <div className="text-right">
              //     <p className="font-bold text-green-600">
              //       ${purchase.amount}
              //     </p>
              //   </div>
              // </div>
            ))}
            {/* {recentPurchases.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <span className="text-4xl block mb-2">🛒</span>
                    <p>No purchases yet</p>
                    <Button
                      onClick={() => router.push('/purchases/new')}
                      className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                    >
                      Log Your First Purchase
                    </Button>
                  </div>
                )} */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentPurchases;
