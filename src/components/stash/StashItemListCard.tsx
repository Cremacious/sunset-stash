import { StashItem } from '@/lib/types';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StashItemListCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <Card className="bg-white border border-l-purple-600 border-l-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
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
      <CardContent className="text-center">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-green-100 p-2 rounded-lg">
            <p className=" mb-1 text-gray-600 text-center">Category</p>
            <p className=" text-center font-bold">{stashItem.category}</p>
          </div>
          <div className="bg-purple-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1 text-center">Type</p>
            <p className="font-bold text-center">{stashItem.type}</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg">
            <p className="text-gray-600 mb-1 text-center">THC</p>
            <p className="font-bold text-center">{stashItem.thc}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StashItemListCard;
