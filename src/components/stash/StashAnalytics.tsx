import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, TrendingUp, Star } from 'lucide-react';

const StashAnalytics = () => {
  return (
    <div className="glassCard">
      <Card className="bg-white shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 text-center">
            Stash Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stash Count */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-500 rounded-full">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">21</p>
                    <p className="text-sm text-gray-500">items</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Stash Count
                </h4>
                <div className="mt-2 h-2 bg-purple-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Most Common Type */}
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-500 rounded-full">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">Indica</p>
                    <p className="text-sm text-gray-500">dominant</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Most Common Type
                </h4>
                <div className="mt-2 h-2 bg-orange-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Most Common Category */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500 rounded-full">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">Flower</p>
                    <p className="text-sm text-gray-500">preferred</p>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  Most Common Category
                </h4>
                <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StashAnalytics;
