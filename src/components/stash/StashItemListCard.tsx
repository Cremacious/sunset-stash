import { StashItem } from '@/lib/types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const StashItemListCard = ({
  stashItem,
  price,
}: {
  stashItem: StashItem;
  price?: number;
}) => {
  return (
    <Link href={`/stash/${stashItem.id}`} className="block">
      <Card className="bg-gradient-to-br from-orange-50 via-pink-100 to-blue-200 border-0 border-b-4 border-b-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[110px] w-full relative">
        {typeof price === 'number' ? (
          <div className="absolute top-2 left-3 text-sm font-bold text-green-600 bg-white/80 px-2 py-1 rounded-lg shadow z-10">
            ${price.toFixed(2)}
          </div>
        ) : null}
        <div className="flex items-center justify-between p-3 pb-2 relative">
          <CardTitle className="text-xl permanent-marker-font truncate max-w-[270px] md:max-w-[280px] text-left">
            {stashItem.name}
          </CardTitle>
          <div className="absolute top-2 right-3 w-12 h-12 rounded-full bg-white/70 flex items-center justify-center shadow-md">
            <Image
              width={35}
              height={35}
              src={getCategoryIcon(stashItem.category)}
              alt={stashItem.category}
              className="object-contain"
            />
          </div>
        </div>
        <CardContent className="px-3 pb-3 pt-0">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-orange-100/80 rounded-lg p-2 border border-orange-200 flex flex-col items-center min-h-[48px]">
              <div className="text-center text-xs text-gray-600">Category</div>
              <p className="font-bold text-orange-600 text-center text-xs truncate w-full">
                {stashItem.category.length > 0 ? stashItem.category : 'N/A'}
              </p>
            </div>
            <div className="bg-red-100/80 rounded-lg p-2 border border-red-200 flex flex-col items-center min-h-[48px]">
              <div className="text-center text-xs text-gray-600">Type</div>
              <p className="font-bold text-red-600 text-center text-xs truncate w-full">
                {stashItem.type.length > 0 ? stashItem.type : 'N/A'}
              </p>
            </div>
            <div className="bg-blue-100/80 rounded-lg p-2 border border-blue-200 flex flex-col items-center min-h-[48px]">
              <div className="text-center text-xs text-gray-600">THC %</div>
              <p className="font-bold text-blue-600 text-center text-xs truncate w-full">
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
