import { Purchase } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Calendar, Edit, Eye, Container } from 'lucide-react';

const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
  return (
    <Card className="border-0 border-b-purple-500 border-b-6 relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div>
              <CardTitle className="text-lg font-bold line-clamp-1 text-gray-800 fugaz-font">
                {purchase.dispensary}
              </CardTitle>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">
              ${purchase.total.toFixed(2)}
            </p>
            <p className="text-md text-gray-500">Total</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex flex-col justify-between h-full">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-orange-100 p-3 rounded-lg border-orange-300 border-b-4 border-b-orange-500">
            <div className="flex justify-center mb-1">
              <Calendar className="w-7 h-7 text-orange-700" />
            </div>
            <p className=" text font-medium text-center">Date</p>
            <p className="font-semibold text-gray-800 text-lg text-center">
              {new Date(purchase.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg border-blue-300 border-b-4 border-b-blue-500">
            <div className="flex justify-center mb-1">
              <Container className="w-7 h-7 text-blue-800" />
            </div>
            <p className=" text font-medium text-center">Items</p>
            <p className="font-semibold text-gray-800 text-lg text-center">
              {purchase.items.length}
            </p>
          </div>
        </div>

        {purchase.notes && (
          <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xs text-center">Notes</p>
            </div>
            <p className="text-sm text-gray-800 italic line-clamp-2">
              &ldquo;{purchase.notes}&rdquo;
            </p>
          </div>
        )}

        <div className="flex space-x-2 mt-4">
          <Button asChild size="sm" variant="outline" className="flex-1 ">
            <Link
              href={`/purchases/${purchase.id}/edit`}
              className="flex items-center gap-2"
            >
              <Edit className="w-3 h-3" />
              Edit
            </Link>
          </Button>
          <Button asChild size="sm" className="flex-1 ">
            <Link
              href={`/purchases/${purchase.id}`}
              className="flex items-center gap-2"
            >
              <Eye className="w-3 h-3" />
              View
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;
