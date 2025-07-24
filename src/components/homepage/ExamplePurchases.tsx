import {
  Container,
  DollarSign,
  ShoppingCart,
  Star,
  TrendingUp,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import StashItemListCard from '../stash/StashItemListCard';

const samplestash1 = {
  id: 'stash-1',
  name: 'Sour Diesel',
  category: 'Flower',
  type: 'Sativa',
  amount: '3.5g',
  thc: 19,
  cbd: 0.5,
  lineage: 'Blueberry x Haze',
  notes:
    'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
  dateAdded: '2025-01-15T00:00:00.000Z',
  userId: 'user-1',
};

const samplestash2 = {
  id: 'stash-1',
  name: 'Gary Payton',
  category: 'Vape',
  type: 'Hybrid',
  amount: '3.5g',
  thc: 22.5,
  cbd: 0.5,
  lineage: 'Blueberry x Haze',
  notes:
    'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
  dateAdded: '2025-01-15T00:00:00.000Z',
  userId: 'user-1',
};

const samplestash3 = {
  id: 'stash-1',
  name: "Mack's Chocolate",
  category: 'Edibles',
  type: 'Hybrid',
  amount: '3.5g',
  thc: 10,
  cbd: 0.5,
  lineage: 'Blueberry x Haze',
  notes:
    'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
  dateAdded: '2025-01-15T00:00:00.000Z',
  userId: 'user-1',
};

const samplestash4 = {
  id: 'stash-1',
  name: 'Girl Scout Cookies',
  category: 'Concentrate',
  type: 'Indica',
  amount: '3.5g',
  thc: 24,
  cbd: 0.5,
  lineage: 'Blueberry x Haze',
  notes:
    'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
  dateAdded: '2025-01-15T00:00:00.000Z',
  userId: 'user-1',
};

const ExamplePurchases = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">
        Log Purchases and Save Favorites
      </h2>
      <p className="text-xl md:text-2xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
        Keep your favorite strains stashed away, and see which are your
        favorites
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-gray-800 text-sm">Monthly Spending</p>
                <p className="text-gray-800 font-bold text-lg">$340.25</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-gray-800 text-sm">Total Purchases</p>
                <p className="text-gray-800 font-bold text-lg">12</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-3 text-center">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-gray-800 text-sm">Favorite Category</p>
                <p className="text-gray-800 font-bold text-sm">Flower</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3 text-center">
                <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-gray-800 text-sm">Top Dispensary</p>
                <p className="text-gray-800 font-bold text-sm">Trulieve</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-2">
          <StashItemListCard stashItem={samplestash1} />
          <StashItemListCard stashItem={samplestash2} />
          <StashItemListCard stashItem={samplestash3} />
          <StashItemListCard stashItem={samplestash4} />
        </div>

        <div className="space-y-4 mt-4">
          <div className="space-y-4">
            <div className="bg-orange-100 rounded-xl p-4 border-orange-200 hover:shadow-md transition-all duration-300 border-b-orange-500 border-b-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500 rounded-full">
                    <Container className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Stash Count
                  </h4>
                </div>
                <p className="text-xl font-bold text-gray-800">27</p>
              </div>
            </div>

            <div className="bg-red-100 rounded-xl p-4 border-b-4 border-b-red-500 border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-red-500 rounded-full">
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
              <div className="h-2 bg-red-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>

            <div className="bg-blue-100 rounded-xl p-4 border-b-4 border-b-blue-500 hover:shadow-lg transition-all duration-300">
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
