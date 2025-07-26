'use client';
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
import AOS from 'aos';
import StashItemListCard from '../stash/StashItemListCard';
import { useEffect } from 'react';

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

// const samplestash2 = {
//   id: 'stash-1',
//   name: 'Gary Payton',
//   category: 'Vape',
//   type: 'Hybrid',
//   amount: '3.5g',
//   thc: 22.5,
//   cbd: 0.5,
//   lineage: 'Blueberry x Haze',
//   notes:
//     'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
//   dateAdded: '2025-01-15T00:00:00.000Z',
//   userId: 'user-1',
// };

// const samplestash3 = {
//   id: 'stash-1',
//   name: "Mack's Chocolate",
//   category: 'Edibles',
//   type: 'Hybrid',
//   amount: '3.5g',
//   thc: 10,
//   cbd: 0.5,
//   lineage: 'Blueberry x Haze',
//   notes:
//     'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
//   dateAdded: '2025-01-15T00:00:00.000Z',
//   userId: 'user-1',
// };

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
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="">
          <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg fugaz-font mb-6">
            Make organizing purchases a breeze
          </h2>
          <p className="text-xl md:text-2xl text-center text-white/90 mb-12 max-w-3xl mx-auto">
            Instantly visualize your monthly spending, averages,
            and most purchased categories. See which strains you love the most
            and keep your favorites stashed away!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <Card className="bg-gradient-to-br from-white via-green-100 to-white shadow-xl border-0 border-b-4 border-b-green-300 rounded-2xl  transition-all duration-300 transform hover:-translate-y-1 ">
              <CardHeader>
                <CardTitle className="text-slate-800 text-xl fugaz-font">
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
                    <span className="text-slate-900 font-semibold">
                      Trulieve
                    </span>
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

            <Card className="bg-gradient-to-br from-purple-100 via-white to-purple-200 shadow-xl border-0 border-b-4 border-b-purple-300 rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-slate-800 text-xl fugaz-font">
                  Spending Analytics
                </CardTitle>
                <CardDescription className="text-slate-700">
                  See where your money goes and track your habits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 border-b-2 border-b-green-300 rounded-lg p-3 text-center">
                    <DollarSign className="w-8 h-8 text-green-800 mx-auto mb-2" />
                    <p className="text-slate-800 fugaz-font">Monthly Spending</p>
                    <p className="text-slate-800 font-bold text-lg">$340.25</p>
                  </div>
                  <div className="bg-indigo-100 border-b-2 border-b-indigo-300  rounded-lg p-3 text-center">
                    <TrendingUp className="w-8 h-8 text-indigo-800 mx-auto mb-2" />
                    <p className="text-slate-800 fugaz-font">Total Purchases</p>
                    <p className="text-slate-800 font-bold text-lg">12</p>
                  </div>
                  <div className="bg-pink-200 border-b-2 border-b-pink-300  rounded-lg p-3 text-center">
                    <Star className="w-8 h-8 text-pink-800 mx-auto mb-2" />
                    <p className="text-slate-800 fugaz-font">Favorite Category</p>
                    <p className="text-slate-800 font-bold text-lg">Flower</p>
                  </div>
                  <div className="bg-purple-200 border-b-2 border-b-purple-300  rounded-lg p-3 text-center">
                    <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-slate-800 fugaz-font">Top Dispensary</p>
                    <p className="text-slate-800 font-bold ">Mack&apos;s</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stash Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="space-y-4">
              <StashItemListCard stashItem={samplestash1} />
              <StashItemListCard stashItem={samplestash4} />
            </div>

            <div className="space-y-4 mt-4 ml-6 md:ml-1">
              <div className="space-y-4">
                <div className=" transform hover:-translate-y-1 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 rounded-xl p-4 border-orange-200 hover:shadow-md transition-all duration-300 border-b-yellow-500 border-b-4">
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

                <div className="transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200  rounded-xl p-4 border-b-4 border-b-orange-500 border-red-200 hover:shadow-lg ">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-orange-500 rounded-full">
                      <Dna className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-orange-900">
                        Hybrid
                      </p>
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

                <div className="bg-gradient-to-br from-red-50 via-red-100 to-red-200 rounded-xl p-4 border-b-4 border-b-red-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
    </section>
  );
};

export default ExamplePurchases;
