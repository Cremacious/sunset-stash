import { Purchase } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
  return (
    <Card className="bg-white shadow-xl border-none hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ">
      <CardHeader className="">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xl">🏪</span>
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-gray-800">
                {purchase.dispensary}
              </CardTitle>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">
              ${purchase.total.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 mb-1">Date</p>
            <p className="font-semibold text-gray-800">
              {new Date(purchase.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 mb-1">Items</p>
            <p className="font-semibold text-gray-800">
              {purchase.items.length}
            </p>
          </div>
        </div>

        {purchase.notes && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Notes:</p>
            <p className="text-sm text-gray-800">
              &ldquo;{purchase.notes}&rdquo;
            </p>
          </div>
        )}

        <div className="flex space-x-2 mt-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1 text-xs"
          >
            <Link href={`/purchases/${purchase.id}/edit`}>Edit</Link>
          </Button>
          <Button asChild size="sm" className="flex-1 text-xs">
            <Link href={`/purchases/${purchase.id}`}>View</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;
