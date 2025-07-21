import { StashItem } from '@/lib/types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const StashItemListCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <Link href={`/stash/${stashItem.id}`} className="block">
    <Card className="bg-white shadow-xl border-0 border-b-purple-600 border-b-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="flex items-center justify-between p-3 pb-2">
        <div className="flex items-center space-x-3">
          <Image
            width={24}
            height={24}
            src={getCategoryIcon(stashItem.category)}
            alt={stashItem.category}
          />
          <CardTitle className="text-base font-bold text-gray-800">
            {stashItem.name}
          </CardTitle>
        </div>
      </div>

      <CardContent className="px-3 pb-3 pt-0">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-100 rounded-lg p-1.5 border border-blue-200">
            <div className="text-center text-xs text-gray-600">Category</div>
            <p className="font-bold text-blue-600 text-center text-xs">
              {stashItem.category.length > 0 ? stashItem.category : 'N/A'}
            </p>
          </div>
          <div className="bg-orange-100 rounded-lg p-1.5 border border-orange-200">
            <div className="text-center text-xs text-gray-600">Type</div>
            <p className="font-bold text-orange-600 text-center text-xs">
              {stashItem.type.length > 0 ? stashItem.type : 'N/A'}
            </p>
          </div>
          <div className="bg-red-100 rounded-lg p-1.5 border border-red-200">
            <div className="text-center text-xs text-gray-600">THC %</div>
            <p className="font-bold text-red-600 text-center text-xs">
              {stashItem.thc}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
  );
};

export default StashItemListCard;
