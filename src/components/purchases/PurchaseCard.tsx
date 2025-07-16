import { Purchase } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Calendar, Edit, Eye, Container } from 'lucide-react';

const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
  return (
    <Card className="border-none relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div>
              <CardTitle className="text-lg font-bold line-clamp-1 text-gray-800">
                {purchase.dispensary}
              </CardTitle>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-600">
              ${purchase.total.toFixed(2)}
            </p>
            <p className=" text-gray-500">Total</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-purple-100 p-3 rounded-lg border-purple-300">
            <div className="flex justify-center mb-1">
              <Calendar className="w-7 h-7 text-purple-500" />
            </div>
            <p className=" text font-medium text-center">Date</p>
            <p className="font-semibold text-gray-800 text-lg text-center">
              {new Date(purchase.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg border-blue-300">
            <div className="flex justify-center mb-1">
              <Container className="w-7 h-7 text-blue-800" />
            </div>
            <p className=" text font-medium text-center">Items</p>
            <p className="font-semibold text-gray-800 text-lg text-center">
              {new Date(purchase.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Notes Section */}
        {purchase.notes && (
          <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              {/* <DollarSign className="w-4 h-4 text-green-500" /> */}
              <p className="text-xs text-center">
                Notes
              </p>
            </div>
            <p className="text-sm text-gray-800 italic line-clamp-2">
              &ldquo;{purchase.notes}&rdquo;
            </p>
          </div>
        )}

        {/* Action Buttons */}
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
