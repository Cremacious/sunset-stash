import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { StashItem } from '@/lib/types/stash.types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';
import { Edit, Eye } from 'lucide-react';

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
              <CardTitle className="text-lg font-bold text-gray-800 mt-1">
                {stashItem.name}
              </CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="bg-green-100 p-1 rounded-lg">
          <p className=" mb-1 text-gray-600 text-center">Category</p>
          <p className=" text-center font-bold">Concentrate</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-purple-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1 text-center">Type</p>
            <p className="font-bold text-center">{stashItem.type}</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1 text-center">THC</p>
            <p className="font-bold text-center">{stashItem.thc}%</p>
          </div>
        </div>

        <div className="flex space-x-2 mt-6">
          <Button asChild size="sm" variant="outline" className="flex-1 ">
            <Link className="flex items-center gap-2" href={''}>
              <Edit className="w-3 h-3" />
              Edit
            </Link>
          </Button>
          <Button asChild size="sm" className="flex-1 ">
            <Link
              href={`/stash/${stashItem.id}`}
              className="flex items-center gap-2"
            >
              <Eye className="w-3 h-3" />
              View
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StashCard;
