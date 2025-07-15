import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { StashItem } from '@/lib/types/stash.types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';

const StashCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center`}
            >
              <span className="text-xl">
                <Image
                  width={75}
                  height={75}
                  src={getCategoryIcon(stashItem.category)}
                  alt={stashItem.category}
                />
              </span>
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-gray-800">
                {stashItem.name}
              </CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-green-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1">Category</p>
            <p className="font-semibold text-gray-800">{stashItem.category}</p>
          </div>
          <div className="bg-purple-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1">Type</p>
            <p className="font-semibold text-gray-800">{stashItem.type}</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1">THC</p>
            <p className="font-semibold text-gray-800">{stashItem.thc}%</p>
          </div>
        </div>

        {/* <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Notes:</p>
          <p className="text-sm text-gray-800">
            &ldquo;{stashItem.notes}&rdquo;
          </p>
        </div> */}

        <div className="flex space-x-2 mt-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1 text-xs"
          >
            <Link href={`/stash/${stashItem.id}/edit`}>Edit</Link>
          </Button>
          <Button asChild size="sm" className="flex-1 text-xs">
            <Link href={`/stash/${stashItem.id}`}>View</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StashCard;
