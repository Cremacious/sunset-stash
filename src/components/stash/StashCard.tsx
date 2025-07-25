import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { StashItem } from '@/lib/types/stash.types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';
import { Edit, Eye } from 'lucide-react';

const StashCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <Card className="bg-gradient-to-br from-purple-100 via-white to-purple-200 border-0 border-b-4 border-b-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[110px] w-full relative">
      <div className="flex items-center justify-between p-3 pb-2 relative">
        <CardTitle className="text-xl permanent-marker-font truncate max-w-[280px]  text-left">
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
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2 w-full">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 text-purple-600 border-purple-300 hover:bg-purple-50"
            >
              <Link
                className="flex items-center justify-center gap-1"
                href={`/stash/${stashItem.id}/edit`}
              >
                <Edit className="w-3 h-3" />
                Edit
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white"
            >
              <Link
                href={`/stash/${stashItem.id}`}
                className="flex items-center justify-center gap-1"
              >
                <Eye className="w-3 h-3" />
                View
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StashCard;
