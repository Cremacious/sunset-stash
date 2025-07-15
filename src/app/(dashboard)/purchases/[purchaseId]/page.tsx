import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  ArrowLeft,
  Edit3,
  Store,
  FileText,
  Container,
  DollarSign,
} from 'lucide-react';
import StashItemListCard from '@/components/stash/StashItemListCard';
// import { samplePurchases } from '@/lib/sampleData';

const PurchaseDetailsPage = async ({
  params,
}: {
  params: Promise<{ purchaseId: string }>;
}) => {
  const { purchaseId } = await params;

  const purchase = {
    id: purchaseId,
    date: '2025-01-15',
    dispensary: 'Trulieve',
    dispensaryAddress: '123 Main St, Orlando, FL 32801',
    dispensaryPhone: '(407) 555-0123',
    paymentMethod: 'Card',
    subtotal: 77.5,
    tax: 6.2,
    discount: 5.0,
    total: 78.7,
    receiptNumber: 'TL-2025-0115-001234',
    budtender: 'Sarah M.',
    notes:
      'Used first-time patient discount. Budtender recommended Blue Dream for daytime use.',
    items: [
      {
        id: 1,
        name: 'Blue Dream',
        category: 'flower',
        brand: 'Trulieve',
        strain: 'hybrid',
        thc: 22.5,
        cbd: 0.8,
        amount: '3.5g',
        unitPrice: 45.5,
        sku: 'TL-BD-3.5G',
        addedToStash: true,
        effects: ['Relaxed', 'Happy', 'Creative'],
        flavors: ['Berry', 'Sweet', 'Earthy'],
        type: 'flower',
        lineage: 'Blueberry x Haze',
        notes: 'Popular hybrid strain.',
        dateAdded: '2025-01-15T10:00:00Z',
        userId: 'user-123',
      },
      {
        id: 2,
        name: 'Mango Cart',
        category: 'vape',
        brand: 'Trulieve',
        strain: 'hybrid',
        thc: 85.2,
        cbd: 0.1,
        amount: '0.5g',
        unitPrice: 32.0,
        sku: 'TL-MC-0.5G',
        addedToStash: false,
        effects: ['Euphoric', 'Relaxed', 'Focused'],
        flavors: ['Mango', 'Tropical', 'Citrus'],
        type: 'vape',
        lineage: 'Unknown',
        notes: 'Tropical flavor, good for daytime.',
        dateAdded: '2025-01-15T10:00:00Z',
        userId: 'user-123',
      },
    ],
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/purchases">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Purchases
                </Link>
              </Button>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/purchases/${purchaseId}/edit`}>
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Purchase
              </Link>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          {/* Purchase Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <Store className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              {purchase.dispensary}
            </CardTitle>
            <p className="text-gray-600">{formatDate(purchase.date)}</p>
          </div>

          {/* Purchase Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">
                ${purchase.total.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Container className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">
                {purchase.items.length}
              </p>
              <p className="text-sm text-gray-600">Items</p>
            </div>
          </div>
          {/* Purchase Notes */}
          {purchase.notes && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-yellow-600" />
                Notes
              </h4>
              <p className="text-gray-700">{purchase.notes}</p>
            </div>
          )}

          {/* Items Purchased */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              Items Purchased
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {purchase.items.map((item) => (
                <StashItemListCard
                  key={item.id}
                  stashItem={{ ...item, id: String(item.id) }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseDetailsPage;
