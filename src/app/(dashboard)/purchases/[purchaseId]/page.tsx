import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Edit, Container, DollarSign } from 'lucide-react';
import StashPurchaseCard from '@/components/stash/StashPurchaseCard';
import { getPurchaseById } from '@/lib/actions/purchase.actions';
import { notFound } from 'next/navigation';

const PurchaseDetailsPage = async ({
  params,
}: {
  params: Promise<{ purchaseId: string }>;
}) => {
  const { purchaseId } = await params;
  const { purchase } = await getPurchaseById(purchaseId);

  if (!purchase) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        <div className="mb-6 flex items-center">
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
        <Card className="bg-gradient-to-br from-white via-orange-50 to-orange-100  shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl min-h-[110px] w-full relative">
          <div className="p-6 ">
            <div className="flex items-center justify-between">
              <p className="font-bold text-3xl fugaz-font text-slate-800">
                {purchase.dispensary}
              </p>
              {/* <p className="text-sm text-gray-700 fugaz-font">
                Added: {new Date(purchase.date).toLocaleDateString()}
              </p> */}
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-yellow-100 via-yellow-100 to-yellow-200 rounded-xl p-4 border-b-4 border-b-yellow-200 shadow-sm">
                <div className="space-y-4">
                  <h4 className="font-bold text-yellow-800 text-center flex items-center justify-center fugaz-font">
                    <DollarSign className="w-5 h-5 mr-2 text-yellow-800 " />
                    Total Amount
                  </h4>
                  <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                    <p className="text-xl font-bold text-yellow-700 text-center">
                      ${purchase.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 via-orange-100 to-orange-200 rounded-xl p-4 border-b-4 border-orange-300 shadow-sm">
                <div className="space-y-4">
                  <h4 className="font-bold text-orange-700 text-center flex items-center justify-center fugaz-font">
                    <Container className="w-5 h-5 mr-2 text-orange-500" />
                    Items Purchased
                  </h4>
                  <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                    <p className="text-xl font-bold text-orange-700 text-center">
                      {purchase.items.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {purchase.notes && (
              <div className="bg-gradient-to-br from-pink-100 via-pink-100 to-pink-200 rounded-xl p-4 border-b-4 border-pink-300 mb-8 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="ml-2">
                    <h4 className="text-lg font-bold text-pink-700 fugaz-font">
                      Purchase Notes
                    </h4>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg ">
                  <p className="text-gray-800 font-medium">{purchase.notes}</p>
                </div>
              </div>
            )}
            {purchase.items.length > 0 && (
              <div className="bg-gradient-to-br from-purple-100 via-purple-100 to-purple-200 rounded-xl p-4 border-b-4 border-purple-300 mb-8 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="flex-1 ml-2">
                    <h4 className="text-lg font-bold text-purple-700 mb-4 fugaz-font">
                      Items in this Purchase
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {purchase.items.map((item) => (
                        <StashPurchaseCard
                          key={item.id}
                          price={item.price}
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
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm text-gray-700 fugaz-font">
                Added: {new Date(purchase.date).toLocaleDateString()}
              </p>
              <Button size="sm" asChild>
                <Link href={`/purchases/${purchaseId}/edit`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PurchaseDetailsPage;
