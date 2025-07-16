import { Purchase } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Calendar, Package, DollarSign, Edit, Eye } from 'lucide-react';

const PurchaseCard = ({ purchase }: { purchase: Purchase }) => {
  return (
    <Card className="border-none relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div>
              <CardTitle className="text-lg font-bold text-gray-800">
                {purchase.dispensary}
              </CardTitle>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-600">
              ${purchase.total.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              <p className="text-gray-600 font-medium">Date</p>
            </div>
            <p className="font-semibold text-gray-800">
              {new Date(purchase.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-4 h-4 text-blue-500" />
              <p className="text-gray-600 font-medium">Items</p>
            </div>
            <p className="font-semibold text-gray-800">
              {purchase.items.length}
            </p>
          </div>
        </div>

        {/* Notes Section */}
        {purchase.notes && (
          <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              <p className="text-xs text-gray-600 font-medium">Notes</p>
            </div>
            <p className="text-sm text-gray-800 italic">
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
