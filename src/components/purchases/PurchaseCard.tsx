import { Purchase } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Edit, Eye } from 'lucide-react';

const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
  return (
    <Card className="bg-gradient-to-br from-white via-pink-50 to-pink-200 border-0 border-b-4 border-b-pink-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[110px] w-full relative">
      <CardHeader className="p-3 pb-2 relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl fugaz-font truncate max-w-[190px] text-left ml-2 text-slate-800">
            {purchase.dispensary}
          </CardTitle>
          <div className="text-right">
            <p className="text-md font-bold text-green-600">
              ${purchase.total.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Total</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-3 pt-0">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-orange-100/80 rounded-lg p-2 border border-orange-200 flex flex-col items-center min-h-[48px]">
            <div className="text-center text-xs text-gray-600">Date</div>
            <p className="font-bold text-orange-600 text-center text-xs truncate w-full">
              {new Date(purchase.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="bg-blue-100/80 rounded-lg p-2 border border-blue-200 flex flex-col items-center min-h-[48px]">
            <div className="text-center text-xs text-gray-600">Items</div>
            <p className="font-bold text-blue-600 text-center text-xs truncate w-full">
              {purchase.items.length}
            </p>
          </div>
          <div className="bg-pink-100/80 rounded-lg p-2 border border-pink-200 flex flex-col items-center min-h-[48px] col-span-2">
            <div className="text-center text-xs text-gray-600">Notes</div>
            <p className="font-bold text-pink-600 text-center text-xs truncate w-full">
              {purchase.notes ? purchase.notes.slice(0, 24) : '—'}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2 w-full">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 text-purple-600 border-purple-300 hover:bg-purple-50"
            >
              <Link
                className="flex items-center justify-center gap-1"
                href={`/purchases/${purchase.id}/edit`}
              >
                <Edit className="w-3 h-3" />
                Edit
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white"
            >
              <Link
                href={`/purchases/${purchase.id}`}
                className="flex items-center justify-center gap-1"
              >
                <Eye className="w-3 h-3" />
                View
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;
