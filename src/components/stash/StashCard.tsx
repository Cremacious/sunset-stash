import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { StashItem } from '@/lib/types/stash.types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';
import { Edit, Eye } from 'lucide-react';

const StashCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <Card className="bg-white shadow-xl border-0 border-b-purple-600 border-b-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 ml-4">
          <Image
            width={35}
            height={35}
            src={getCategoryIcon(stashItem.category)}
            alt={stashItem.category}
          />
          <CardTitle className="permanent-marker-font text-xl md:text-2xl font-bold text-purple-800">
            {stashItem.name}
          </CardTitle>
        </div>
      </div>

      <CardContent className="p-4 space-y-4">
        <div className="bg-blue-100 rounded-lg p-3 border border-blue-200 space-y-2">
          <div className="text-center">Category</div>
          <p className="font-bold text-blue-600 text-center">
            {stashItem.category.length > 0 ? stashItem.category : 'N/A'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-orange-100 rounded-lg p-3 border border-orange-200 space-y-2">
            <div className="text-center">Type</div>
            <p className="font-bold text-orange-600 text-center text-sm">
              {stashItem.type.length > 0 ? stashItem.type : 'N/A'}
            </p>
          </div>
          <div className="bg-red-100 rounded-lg p-3 border border-red-200 space-y-2">
            <div className="text-center">THC %</div>
            <p className="font-bold text-red-600 text-center text-sm">
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
