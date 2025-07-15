import { StashItem } from '@/lib/types';

const StashItemListCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <div
      key={stashItem.id}
      className="p-4 space-y-2 rounded-lg border border-gray-200 hover:shadow-md"
    >
      <h4 className="font-bold text-gray-800 text-center mb-4">
        {stashItem.name}
      </h4>
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
    </div>
  );
};

export default StashItemListCard;
