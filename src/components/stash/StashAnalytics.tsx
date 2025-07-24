import { TrendingUp, Star, Container } from 'lucide-react';
import { StashItem } from '@/lib/types/stash.types';

interface StashAnalyticsProps {
  stashItems: StashItem[];
}

const StashAnalytics = ({ stashItems }: StashAnalyticsProps) => {
  const categoryStats = stashItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const typeStats = stashItems.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalItems = stashItems.length;

  const topCategory = Object.entries(categoryStats).sort(
    ([, a], [, b]) => b - a
  )[0];
  const topType = Object.entries(typeStats).sort(([, a], [, b]) => b - a)[0];

  const categoryPercentage = topCategory
    ? (topCategory[1] / totalItems) * 100
    : 0;
  const typePercentage = topType ? (topType[1] / totalItems) * 100 : 0;

  return (
    <div className="">
      <div className="flex flex-col gap-4 glassCard">
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
            <p className="text-xl font-bold text-gray-800">{totalItems}</p>
          </div>
        </div>
        <div className="bg-red-100 rounded-xl p-6 border-b-red-500 border-b-4 border-red-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-500 rounded-full">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800">
                {topType ? topType[0] : 'None'}
              </p>
              <p className="text-sm text-gray-500">
                {topType ? 'dominant' : 'Add more items'}
              </p>
            </div>
          </div>
          <h4 className="font-semibold text-gray-800 text-sm">
            Most Common Type
          </h4>
          <div className="mt-2 h-2 bg-red-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-300"
              style={{ width: `${typePercentage}%` }}
            ></div>
          </div>
          {topType && (
            <p className="text-xs text-gray-600 mt-1">
              {topType[1]} of {totalItems} items ({Math.round(typePercentage)}%)
            </p>
          )}
        </div>
        <div className="bg-blue-100 rounded-xl p-6 border-b-4 border-b-blue-500 border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500 rounded-full">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800">
                {topCategory ? topCategory[0] : 'None'}
              </p>
              <p className="text-sm text-gray-500">
                {topCategory ? 'preferred' : 'Add more items'}
              </p>
            </div>
          </div>
          <h4 className="font-semibold text-gray-800 text-sm">
            Most Common Category
          </h4>
          <div className="mt-2 h-2 bg-blue-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${categoryPercentage}%` }}
            ></div>
          </div>
          {topCategory && (
            <p className="text-xs text-gray-600 mt-1">
              {topCategory[1]} of {totalItems} items (
              {Math.round(categoryPercentage)}%)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StashAnalytics;
