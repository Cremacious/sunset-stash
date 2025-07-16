import { TrendingUp, Star, Container } from 'lucide-react';

const StashAnalytics = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 glassCard">
        <div className=" bg-purple-100 rounded-xl p-4 border border-purple-200 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500 rounded-full">
                <Container className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">
                Stash Count
              </h4>
            </div>
            <p className="text-xl font-bold text-gray-800">12</p>
          </div>
        </div>
        <div className="bg-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
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

        <div className=" bg-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
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
  );
};

export default StashAnalytics;
