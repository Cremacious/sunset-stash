import { DollarSign, ShoppingCart, Star, TrendingUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { getCategoryIcon } from '@/lib/utils';

const ExamplePurchases = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">
        Log Purchases and Save Favorites
      </h2>

      {/* Main Feature Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Purchase Form Preview */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-gray-800 text-xl">
              Easy Purchase Logging
            </CardTitle>
            <CardDescription className="text-gray-600">
              Log every detail of your dispensary visits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Dispensary:</span>
                <span className="text-gray-800 font-semibold">Trulieve</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Date:</span>
                <span className="text-gray-800 font-semibold">
                  Jan 15, 2025
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total:</span>
                <span className="text-green-600 font-bold">$89.50</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <p className="text-gray-600 text-sm">Items:</p>
                <div className="ml-4 space-y-1">
                  <p className="text-gray-800 text-sm">
                    • Blue Dream (3.5g) - $45.00
                  </p>
                  <p className="text-gray-800 text-sm">
                    • CBD Tincture (30ml) - $44.50
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Preview */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-gray-800 text-xl">
              Spending Analytics
            </CardTitle>
            <CardDescription className="text-gray-600">
              See where your money goes and track your habits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Monthly Spending</p>
                <p className="text-gray-800 font-bold text-lg">$340.25</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Total Purchases</p>
                <p className="text-gray-800 font-bold text-lg">12</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Favorite Category</p>
                <p className="text-gray-800 font-bold text-sm">Flower</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Top Dispensary</p>
                <p className="text-gray-800 font-bold text-sm">Trulieve</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Example Stash Item and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Example Stash Item */}

        <Card className="bg-white shadow-xl border border-b-purple-600 border-b-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center">
                  <Image
                    width={40}
                    height={40}
                    src={getCategoryIcon('Flower')}
                    alt="Flower"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-800 mt-1">
                    Sour Diesel
                  </CardTitle>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 text-center">
            <div className="bg-green-100 p-2 rounded-lg">
              <p className="mb-1 text-gray-600 text-center">Category</p>
              <p className="text-center font-bold">Flower</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-purple-100 p-2 rounded-lg">
                <p className="text-gray-600 mb-1 text-center">Type</p>
                <p className="font-bold text-center">Sativa</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <p className="text-gray-600 mb-1 text-center">THC</p>
                <p className="font-bold text-center">22.3%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl border border-b-purple-600 border-b-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center">
                  <Image
                    width={40}
                    height={40}
                    src={getCategoryIcon('Flower')}
                    alt="Flower"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-gray-800 mt-1">
                    Sour Diesel
                  </CardTitle>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 text-center">
            <div className="bg-green-100 p-2 rounded-lg">
              <p className="mb-1 text-gray-600 text-center">Category</p>
              <p className="text-center font-bold">Flower</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-purple-100 p-2 rounded-lg">
                <p className="text-gray-600 mb-1 text-center">Type</p>
                <p className="font-bold text-center">Sativa</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <p className="text-gray-600 mb-1 text-center">THC</p>
                <p className="font-bold text-center">22.3%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Stash Analytics */}
        <div className="space-y-4">
          <div className="space-y-4">
            {/* Stash Count */}

            {/* Most Common Type */}
            <div className="bg-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-orange-500 rounded-full">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">Sativa</p>
                  <p className="text-xs text-gray-500">dominant</p>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm mb-2">
                Most Common Type
              </h4>
              <div className="h-2 bg-orange-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>

            {/* Most Common Category */}
            <div className="bg-blue-100 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">Flower</p>
                  <p className="text-xs text-gray-500">preferred</p>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm mb-2">
                Most Common Category
              </h4>
              <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePurchases;
