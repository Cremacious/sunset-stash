'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { use } from 'react';

interface PurchaseDetailsPageProps {
  params: Promise<{
    purchaseId: string;
  }>;
}

const PurchaseDetailsPage = ({ params }: PurchaseDetailsPageProps) => {
  const router = useRouter();
  const { purchaseId } = use(params);

  // Mock purchase data - in real app, this would come from API/database
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
      },
    ],
  };

  const getCategoryIcon = (category: string) => {
    const categoryMap: Record<string, string> = {
      flower: '🌸',
      vape: '💨',
      concentrate: '🍯',
      edible: '🍪',
      topical: '🧴',
    };
    return categoryMap[category] || '🌿';
  };

  const getStrainColor = (strain: string) => {
    const strainColors: Record<string, string> = {
      indica: 'from-purple-400 to-indigo-500',
      sativa: 'from-green-400 to-emerald-500',
      hybrid: 'from-blue-400 to-cyan-500',
    };
    return strainColors[strain] || 'from-gray-400 to-gray-500';
  };

  const handleEditPurchase = () => {
    router.push(`/purchases/${purchaseId}/edit`);
  };

  const handleAddToStash = (itemId: number) => {
    // In real app, this would add the item to stash
    console.log(`Adding item ${itemId} to stash`);
    // Update the item's addedToStash status
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back</span>
          </Button>
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🧾</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Purchase Details
            </h1>
            <p className="text-gray-600">#{purchase.receiptNumber}</p>
          </div>
        </div>
        <Button
          onClick={handleEditPurchase}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <span>✏️</span>
          <span>Edit</span>
        </Button>
      </div>

      {/* Purchase Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="text-xl mr-2">📋</span>
          Purchase Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Dispensary Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {purchase.dispensary.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {purchase.dispensary}
                    </p>
                    <p className="text-sm text-gray-600">
                      {purchase.dispensaryAddress}
                    </p>
                    <p className="text-sm text-gray-600">
                      {purchase.dispensaryPhone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Purchase Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-900">{purchase.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment:</span>
                  <span className="text-gray-900">
                    {purchase.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Budtender:</span>
                  <span className="text-gray-900">{purchase.budtender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Items:</span>
                  <span className="text-gray-900">{purchase.items.length}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Pricing Breakdown
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900">
                    ${purchase.subtotal.toFixed(2)}
                  </span>
                </div>
                {purchase.discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount:</span>
                    <span>-${purchase.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="text-gray-900">
                    +${purchase.tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Total:</span>
                    <span className="text-green-600 text-lg">
                      ${purchase.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {purchase.notes && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Notes
                </h3>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-sm text-blue-800">{purchase.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Items Purchased */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="text-xl mr-2">📦</span>
          Items Purchased
        </h2>

        <div className="space-y-4">
          {purchase.items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">
                      {getCategoryIcon(item.category)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.brand} • {item.amount}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStrainColor(
                          item.strain
                        )}`}
                      >
                        {item.strain}
                      </span>
                      <span className="text-xs text-gray-500">
                        SKU: {item.sku}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">
                    ${item.unitPrice.toFixed(2)}
                  </p>
                  {item.addedToStash ? (
                    <span className="inline-flex items-center space-x-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      <span>✓</span>
                      <span>In Stash</span>
                    </span>
                  ) : (
                    <Button
                      onClick={() => handleAddToStash(item.id)}
                      size="sm"
                      variant="outline"
                      className="text-xs text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      + Add to Stash
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Potency
                  </h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">THC:</span>
                      <span className="font-medium text-gray-900">
                        {item.thc}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CBD:</span>
                      <span className="font-medium text-gray-900">
                        {item.cbd}%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Effects
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item.effects.map((effect, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Flavors
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item.flavors.map((flavor, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="text-xl mr-2">⚡</span>
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={() => router.push('/purchases/new')}
            variant="outline"
            className="flex items-center space-x-2 h-12"
          >
            <span>🛒</span>
            <span>New Purchase</span>
          </Button>

          <Button
            onClick={() => router.push('/stash/new')}
            variant="outline"
            className="flex items-center space-x-2 h-12"
          >
            <span>🏺</span>
            <span>Add to Stash</span>
          </Button>

          <Button
            onClick={() => router.push('/reviews/new')}
            variant="outline"
            className="flex items-center space-x-2 h-12"
          >
            <span>⭐</span>
            <span>Write Review</span>
          </Button>
        </div>
      </div>

      {/* Receipt Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <span>📄</span>
            <span>View Receipt</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>📧</span>
            <span>Email Receipt</span>
          </Button>
        </div>

        <Button
          onClick={() => router.push('/purchases')}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
        >
          Back to Purchases
        </Button>
      </div>
    </div>
  );
};

export default PurchaseDetailsPage;
