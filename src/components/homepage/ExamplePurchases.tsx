import {
  Container,
  Dna,
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
      <div className="">
        <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg fugaz-font mb-6">
          Log Purchases and Save Favorites
        </h2>
        <p className="text-xl md:text-2xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
          Keep your favorite strains stashed away, and see which are your
          favorites
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-white via-green-100 to-white shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <CardTitle className="text-slate-800 text-xl">
                Easy Purchase Logging
              </CardTitle>
              <CardDescription className="text-slate-700">
                Log every detail of your dispensary visits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br bg-white rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Dispensary:</span>
                  <span className="text-slate-900 font-semibold">Trulieve</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Date:</span>
                  <span className="text-slate-900 font-semibold">
                    Jan 15, 2025
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Total:</span>
                  <span className="text-slate-600 font-bold">$89.50</span>
                </div>
                <div className="border-t border-green-200 pt-3">
                  <p className="text-slate-700 text-sm">Items:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-slate-900 text-sm">
                      • Blue Dream (3.5g) - $45.00
                    </p>
                    <p className="text-green-900 text-sm">
                      • CBD Tincture (30ml) - $44.50
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 via-white to-blue-100 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <CardTitle className="text-slate-800 text-xl">
                Spending Analytics
              </CardTitle>
              <CardDescription className="text-slate-700">
                See where your money goes and track your habits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded-lg p-3 text-center">
                  <DollarSign className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-700 text-sm">Monthly Spending</p>
                  <p className="text-slate-900 font-bold text-lg">$340.25</p>
                </div>
                <div className="bg-orange-100 rounded-lg p-3 text-center">
                  <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-slate-700 text-sm">Total Purchases</p>
                  <p className="text-slate-900 font-bold text-lg">12</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-3 text-center">
                  <Star className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-700 text-sm">Favorite Category</p>
                  <p className="text-slate-900 font-bold text-sm">Flower</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 text-center">
                  <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-slate-700 text-sm">Top Dispensary</p>
                  <p className="text-slate-900 font-bold ">Trulieve</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-2">
            <StashItemListCard stashItem={samplestash1} />
            <StashItemListCard stashItem={samplestash2} />
            <StashItemListCard stashItem={samplestash3} />
            <StashItemListCard stashItem={samplestash4} />
          </div>

          <div className="space-y-4 mt-4 ml-6 md:ml-1">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 rounded-xl p-4 border-orange-200 hover:shadow-md transition-all duration-300 border-b-yellow-500 border-b-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500 rounded-full">
                      <Container className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm">
                      Stash Count
                    </h4>
                  </div>
                  <p className="text-xl font-bold text-orange-900">27</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200  rounded-xl p-4 border-b-4 border-b-orange-500 border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-orange-500 rounded-full">
                    <Dna className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-900">Hybrid</p>
                    <p className="text-xs text-orange-500">dominant</p>
                  </div>
                </div>
                <h4 className="font-semibold text-red-900 text-sm mb-2">
                  Most Common Type
                </h4>
                <div className="h-2 bg-orange-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 rounded-xl p-4 border-b-4 border-b-red-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-red-500 rounded-full">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-red-900">Flower</p>
                    <p className="text-xs text-red-500">preferred</p>
                  </div>
                </div>
                <h4 className="font-semibold text-red-900 text-sm mb-2">
                  Most Common Category
                </h4>
                <div className="h-2 bg-red-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePurchases;
