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
import { useState } from 'react';

const NewPurchasePage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    dispensary: '',
    date: new Date().toISOString().split('T')[0],
    paymentMethod: '',
    total: '',
    notes: '',
  });

  const [items, setItems] = useState([
    {
      id: 1,
      name: '',
      category: '',
      amount: '',
      price: '',
      thc: '',
      cbd: '',
      addToStash: false,
    },
  ]);

  const dispensaries = [
    'Trulieve',
    'Curaleaf',
    'Rise',
    'MedMen',
    'Surterra',
    'Liberty Health Sciences',
    'Fluent',
    'Columbia Care',
    'Other',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleItemChange = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: '',
        category: '',
        amount: '',
        price: '',
        thc: '',
        cbd: '',
        addToStash: false,
      },
    ]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const calculateTotal = () => {
    return items
      .reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0)
      .toFixed(2);
  };

  const handleSubmit = () => {
    // Mock submission - in real app this would save to database
    const purchaseData = {
      ...formData,
      items: items,
      calculatedTotal: calculateTotal(),
    };
    console.log('Submitting purchase:', purchaseData);

    // Add items to stash if requested
    const itemsToAddToStash = items.filter((item) => item.addToStash);
    if (itemsToAddToStash.length > 0) {
      console.log('Adding to stash:', itemsToAddToStash);
    }

    router.push('/purchases');
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-gray-600 mb-4"
          >
            ← Back
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🛒</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">New Purchase</h1>
              <p className="text-gray-600">Log your latest dispensary visit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="text-xl mr-2">📍</span>
          Purchase Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="dispensary"
              className="text-sm font-semibold text-gray-700"
            >
              Dispensary *
            </Label>
            <Select
              value={formData.dispensary}
              onValueChange={(value) => handleInputChange('dispensary', value)}
            >
              <SelectTrigger className="border-gray-200 focus:border-green-500">
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

          <div className="space-y-2">
            <Label
              htmlFor="date"
              className="text-sm font-semibold text-gray-700"
            >
              Purchase Date *
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="border-gray-200 focus:border-green-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="payment"
              className="text-sm font-semibold text-gray-700"
            >
              Payment Method
            </Label>
            <Select
              value={formData.paymentMethod}
              onValueChange={(value) =>
                handleInputChange('paymentMethod', value)
              }
            >
              <SelectTrigger className="border-gray-200 focus:border-green-500">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">💵 Cash</SelectItem>
                <SelectItem value="card">💳 Card</SelectItem>
                <SelectItem value="debit">💰 Debit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">
              Calculated Total
            </Label>
            <div className="h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 flex items-center">
              <span className="text-lg font-bold text-green-600">
                ${calculateTotal()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <Label
            htmlFor="notes"
            className="text-sm font-semibold text-gray-700"
          >
            Purchase Notes
          </Label>
          <textarea
            id="notes"
            rows={2}
            placeholder="Any notes about this purchase (discounts, recommendations, etc.)"
            value={formData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Items Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <span className="text-xl mr-2">📦</span>
            Items Purchased
          </h2>
          <Button
            onClick={addItem}
            variant="outline"
            size="sm"
            className="text-green-600 border-green-200 hover:bg-green-50"
          >
            + Add Item
          </Button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-800">Item {index + 1}</h3>
                {items.length > 1 && (
                  <Button
                    onClick={() => removeItem(index)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">
                    Product Name *
                  </Label>
                  <Input
                    placeholder="e.g., Blue Dream"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(index, 'name', e.target.value)
                    }
                    className="h-9 text-sm border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">
                    Category *
                  </Label>
                  <Select
                    value={item.category}
                    onValueChange={(value) =>
                      handleItemChange(index, 'category', value)
                    }
                  >
                    <SelectTrigger className="h-9 text-sm border-gray-200 focus:border-green-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flower">🌸 Flower</SelectItem>
                      <SelectItem value="vape">💨 Vape</SelectItem>
                      <SelectItem value="concentrate">
                        🍯 Concentrate
                      </SelectItem>
                      <SelectItem value="edible">🍪 Edible</SelectItem>
                      <SelectItem value="topical">🧴 Topical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">
                    Amount
                  </Label>
                  <Input
                    placeholder="e.g., 3.5g, 1 cart"
                    value={item.amount}
                    onChange={(e) =>
                      handleItemChange(index, 'amount', e.target.value)
                    }
                    className="h-9 text-sm border-gray-200 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">
                    Price *
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="45.50"
                      min="0"
                      step="0.01"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(index, 'price', e.target.value)
                      }
                      className="h-9 text-sm border-gray-200 focus:border-green-500 pl-7"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">
                    THC %
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="18.5"
                      min="0"
                      max="100"
                      step="0.1"
                      value={item.thc}
                      onChange={(e) =>
                        handleItemChange(index, 'thc', e.target.value)
                      }
                      className="h-9 text-sm border-gray-200 focus:border-green-500 pr-7"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                      %
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-600">
                    CBD %
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="1.2"
                      min="0"
                      max="100"
                      step="0.1"
                      value={item.cbd}
                      onChange={(e) =>
                        handleItemChange(index, 'cbd', e.target.value)
                      }
                      className="h-9 text-sm border-gray-200 focus:border-green-500 pr-7"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                      %
                    </span>
                  </div>
                </div>
              </div>

              {/* Add to Stash Option */}
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <input
                  type="checkbox"
                  id={`add-to-stash-${index}`}
                  checked={item.addToStash}
                  onChange={(e) =>
                    handleItemChange(index, 'addToStash', e.target.checked)
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-lg">
                    {getCategoryIcon(item.category)}
                  </span>
                  <Label
                    htmlFor={`add-to-stash-${index}`}
                    className="text-sm font-medium text-blue-800 cursor-pointer"
                  >
                    Add this item to my stash
                  </Label>
                </div>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  Quick Add 🏺
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="flex-1 text-gray-600 border-gray-300 hover:bg-gray-50"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
        >
          Save Purchase
        </Button>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200 p-4">
        <h3 className="text-sm font-semibold text-green-800 mb-2 flex items-center">
          <span className="text-lg mr-2">💡</span>
          Quick Tips
        </h3>
        <div className="space-y-2 text-xs text-green-700">
          <p>
            • Check &quot;Add to stash&quot; to automatically add items to your
            stash collection
          </p>
          <p>
            • THC/CBD percentages help track potency and find similar products
          </p>
          <p>
            • Use purchase notes to remember discounts, budtender
            recommendations, or special deals
          </p>
          <p>
            • Keep receipts for accurate record keeping and potential returns
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewPurchasePage;
