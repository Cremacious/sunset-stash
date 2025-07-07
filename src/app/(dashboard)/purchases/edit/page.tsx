'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState, use } from 'react';

interface EditPurchasePageProps {
  params: Promise<{
    purchaseId: string;
  }>;
}

const EditPurchasePage = ({ params }: EditPurchasePageProps) => {
  const router = useRouter();
  const { purchaseId } = use(params);

  // Mock existing purchase data - in real app, this would come from API/database
  const existingPurchase = {
    id: purchaseId,
    dispensary: 'trulieve',
    date: '2025-01-15',
    paymentMethod: 'card',
    discount: 5.0,
    tax: 6.2,
    notes:
      'Used first-time patient discount. Budtender recommended Blue Dream for daytime use.',
    receiptNumber: 'TL-2025-0115-001234',
    budtender: 'Sarah M.',
    items: [
      {
        id: 1,
        name: 'Blue Dream',
        category: 'flower',
        brand: 'Trulieve',
        strain: 'hybrid',
        thc: '22.5',
        cbd: '0.8',
        amount: '3.5g',
        unitPrice: '45.5',
        sku: 'TL-BD-3.5G',
        addToStash: true,
      },
      {
        id: 2,
        name: 'Mango Cart',
        category: 'vape',
        brand: 'Trulieve',
        strain: 'hybrid',
        thc: '85.2',
        cbd: '0.1',
        amount: '0.5g',
        unitPrice: '32.0',
        sku: 'TL-MC-0.5G',
        addToStash: false,
      },
    ],
  };

  const [formData, setFormData] = useState({
    dispensary: existingPurchase.dispensary,
    date: existingPurchase.date,
    paymentMethod: existingPurchase.paymentMethod,
    discount: existingPurchase.discount,
    tax: existingPurchase.tax,
    notes: existingPurchase.notes,
    receiptNumber: existingPurchase.receiptNumber,
    budtender: existingPurchase.budtender,
  });

  const [purchaseItems, setPurchaseItems] = useState(existingPurchase.items);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const dispensaries = [
    'Trulieve',
    'Curaleaf',
    'Rise',
    'MedMen',
    'Surterra',
    'Columbia Care',
    'Fluent',
    'Harvest',
    'Liberty Health Sciences',
    'Other',
  ];

  const categories = [
    { value: 'flower', label: 'Flower', icon: '🌸' },
    { value: 'vape', label: 'Vape Cart', icon: '💨' },
    { value: 'concentrate', label: 'Concentrate', icon: '🍯' },
    { value: 'edible', label: 'Edible', icon: '🍪' },
    { value: 'topical', label: 'Topical', icon: '🧴' },
    { value: 'tincture', label: 'Tincture', icon: '💧' },
  ];

  const handleAddItem = () => {
    setPurchaseItems([
      ...purchaseItems,
      {
        id: Date.now(),
        name: '',
        category: 'flower',
        brand: '',
        strain: 'hybrid',
        thc: '',
        cbd: '',
        amount: '',
        unitPrice: '',
        sku: '',
        addToStash: false,
      },
    ]);
  };

  const handleRemoveItem = (id: number) => {
    setPurchaseItems(purchaseItems.filter((item) => item.id !== id));
  };

  const updateItem = (id: number, field: string, value: string | boolean) => {
    setPurchaseItems(
      purchaseItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return purchaseItems.reduce((sum, item) => {
      const price = parseFloat(item.unitPrice) || 0;
      return sum + price;
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = parseFloat(formData.discount.toString()) || 0;
    const tax = parseFloat(formData.tax.toString()) || 0;
    return subtotal - discount + tax;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to your API
    console.log('Updated purchase data:', { formData, purchaseItems });
    // Navigate back to purchase details
    router.push(`/purchases/${purchaseId}`);
  };

  const handleDelete = () => {
    // Here you would normally delete from your API
    console.log('Deleting purchase:', purchaseId);
    // Navigate back to purchases list
    router.push('/purchases');
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
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">✏️</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Purchase</h1>
            <p className="text-gray-600">#{formData.receiptNumber}</p>
          </div>
        </div>
        <Button
          onClick={() => setShowDeleteConfirm(true)}
          variant="outline"
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          🗑️ Delete Purchase
        </Button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Purchase?
            </h3>
            <p className="text-gray-600 mb-4">
              This action cannot be undone. This will permanently delete your
              purchase record and remove the data from our servers.
            </p>
            <div className="flex items-center justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Delete Purchase
              </Button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Purchase Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Purchase Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="dispensary">Dispensary *</Label>
              <Select
                value={formData.dispensary}
                onValueChange={(value) =>
                  setFormData({ ...formData, dispensary: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select dispensary" />
                </SelectTrigger>
                <SelectContent>
                  {dispensaries.map((dispensary) => (
                    <SelectItem
                      key={dispensary}
                      value={dispensary.toLowerCase().replace(/\s+/g, '-')}
                    >
                      {dispensary}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date">Purchase Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select
                value={formData.paymentMethod}
                onValueChange={(value) =>
                  setFormData({ ...formData, paymentMethod: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="debit">Debit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="receiptNumber">Receipt Number</Label>
              <Input
                id="receiptNumber"
                value={formData.receiptNumber}
                onChange={(e) =>
                  setFormData({ ...formData, receiptNumber: e.target.value })
                }
                placeholder="e.g., TL-2025-0115-001234"
              />
            </div>

            <div>
              <Label htmlFor="budtender">Budtender</Label>
              <Input
                id="budtender"
                value={formData.budtender}
                onChange={(e) =>
                  setFormData({ ...formData, budtender: e.target.value })
                }
                placeholder="e.g., Sarah M."
              />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Items</h2>
            <Button
              type="button"
              onClick={handleAddItem}
              variant="outline"
              size="sm"
            >
              + Add Item
            </Button>
          </div>

          <div className="space-y-4">
            {purchaseItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">
                    Item #{index + 1}
                  </span>
                  {purchaseItems.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                  <div>
                    <Label>Product Name *</Label>
                    <Input
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, 'name', e.target.value)
                      }
                      placeholder="e.g., Blue Dream"
                      required
                    />
                  </div>

                  <div>
                    <Label>Category *</Label>
                    <Select
                      value={item.category}
                      onValueChange={(value) =>
                        updateItem(item.id, 'category', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            <div className="flex items-center space-x-2">
                              <span>{cat.icon}</span>
                              <span>{cat.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Brand</Label>
                    <Input
                      value={item.brand}
                      onChange={(e) =>
                        updateItem(item.id, 'brand', e.target.value)
                      }
                      placeholder="e.g., Trulieve"
                    />
                  </div>

                  <div>
                    <Label>Strain Type</Label>
                    <Select
                      value={item.strain}
                      onValueChange={(value) =>
                        updateItem(item.id, 'strain', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select strain type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indica">Indica</SelectItem>
                        <SelectItem value="sativa">Sativa</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="cbd">CBD</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3">
                  <div>
                    <Label>THC %</Label>
                    <Input
                      value={item.thc}
                      onChange={(e) =>
                        updateItem(item.id, 'thc', e.target.value)
                      }
                      placeholder="e.g., 22.5"
                      type="number"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <Label>CBD %</Label>
                    <Input
                      value={item.cbd}
                      onChange={(e) =>
                        updateItem(item.id, 'cbd', e.target.value)
                      }
                      placeholder="e.g., 0.5"
                      type="number"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <Label>Amount *</Label>
                    <Input
                      value={item.amount}
                      onChange={(e) =>
                        updateItem(item.id, 'amount', e.target.value)
                      }
                      placeholder="e.g., 3.5g, 1ml"
                      required
                    />
                  </div>

                  <div>
                    <Label>Price *</Label>
                    <Input
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateItem(item.id, 'unitPrice', e.target.value)
                      }
                      placeholder="0.00"
                      type="number"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <Label>SKU</Label>
                    <Input
                      value={item.sku}
                      onChange={(e) =>
                        updateItem(item.id, 'sku', e.target.value)
                      }
                      placeholder="e.g., TL-BD-3.5G"
                    />
                  </div>
                </div>

                {/* Add to Stash Option */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`addToStash-${item.id}`}
                      checked={item.addToStash}
                      onChange={(e) =>
                        updateItem(item.id, 'addToStash', e.target.checked)
                      }
                      className="rounded border-green-300 text-green-600 focus:ring-green-500"
                    />
                    <label
                      htmlFor={`addToStash-${item.id}`}
                      className="text-sm font-medium text-green-800"
                    >
                      Add/Keep this item in my stash
                    </label>
                  </div>
                  <p className="text-xs text-green-600 mt-1 ml-6">
                    Update stash entry when saving changes
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Pricing Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <Label htmlFor="discount">Discount ($)</Label>
              <Input
                id="discount"
                type="number"
                step="0.01"
                value={formData.discount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    discount: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="0.00"
              />
            </div>

            <div>
              <Label htmlFor="tax">Tax ($)</Label>
              <Input
                id="tax"
                type="number"
                step="0.01"
                value={formData.tax}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tax: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="0.00"
              />
            </div>

            <div className="flex items-end">
              <div className="w-full">
                <Label>Total Amount</Label>
                <div className="text-2xl font-bold text-purple-600">
                  ${calculateTotal().toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            {formData.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount:</span>
                <span>-${formData.discount.toFixed(2)}</span>
              </div>
            )}
            {formData.tax > 0 && (
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>+${formData.tax.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <Label htmlFor="notes">Notes (Optional)</Label>
          <textarea
            id="notes"
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            placeholder="Add any notes about this purchase..."
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            rows={3}
          />
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-4">
          <h3 className="text-sm font-semibold text-purple-900 mb-2">
            ✏️ Edit Tips
          </h3>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Changes will update your purchase history and analytics</li>
            <li>• Updating stash items will sync with your stash collection</li>
            <li>• Receipt number helps track dispensary records</li>
            <li>• Add budtender names to remember good recommendations</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="px-6"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPurchasePage;
