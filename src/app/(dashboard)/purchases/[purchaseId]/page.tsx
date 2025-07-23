import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Edit, Container, DollarSign } from 'lucide-react';
import StashItemListCard from '@/components/stash/StashItemListCard';
import { getPurchaseById } from '@/lib/actions/purchase.actions';

const PurchaseDetailsPage = async ({
  params,
}: {
  params: Promise<{ purchaseId: string }>;
}) => {
  const { purchaseId } = await params;

  const { purchase } = await getPurchaseById(purchaseId);

  if (!purchase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full">
          <div className="p-6 text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Purchase Not Found
            </h1>
            <p className="text-gray-600 mb-4">
              The purchase you are looking for does not exist.
            </p>
            <Button asChild>
              <Link href="/purchases">Back to Purchases</Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="">
        <Button
          className="glassCard text-white font-bold"
          variant="ghost"
          size="sm"
          asChild
        >
          <Link href="/purchases">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Purchases
          </Link>
        </Button>
      </div>

      <div className="bg-white rounded-xl border-b-6 border-b-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="bg-purple-100 p-4 border-b border-purple-300">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl md:ml-4 fugaz-font">
              {purchase.dispensary}
            </p>

            <p className="text-sm ">
              Added: {new Date(purchase.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center flex items-center justify-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Total Amount
                </h4>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-green-600 text-center">
                    ${purchase.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center flex items-center justify-center">
                  <Container className="w-5 h-5 mr-2 text-blue-600" />
                  Items Purchased
                </h4>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-blue-600 text-center">
                    {purchase.items.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {purchase.notes && (
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-gray-800">
                    Purchase Notes
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-gray-800 font-medium">{purchase.notes}</p>
              </div>
            </div>
          )}

          {purchase.items.length > 0 && (
            <div className="bg-purple-100 rounded-lg p-4 border border-purple-300 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-1 ml-2">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    Items in this Purchase
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {purchase.items.map((item) => (
                      <StashItemListCard
                        key={item.id}
                        stashItem={{
                          ...item,
                          dateAdded: purchase.date,
                          userId: '',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end ">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/purchases/${purchaseId}/edit`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetailsPage;
