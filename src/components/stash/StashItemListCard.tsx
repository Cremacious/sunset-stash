import { StashItem } from '@/lib/types';
import { Badge } from '../ui/badge';

const StashItemListCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <div
      key={stashItem.id}
      className="p-4 space-y-2 rounded-lg border border-gray-200 hover:shadow-md"
    >
      <h4 className="font-semibold text-gray-800">{stashItem.name}</h4>
      <div className="space-x-2">
        <Badge className="bg-green-600">{stashItem.category}</Badge>
        <Badge className="bg-purple-500">{stashItem.type}</Badge>
        <Badge className="bg-blue-500">THC: {stashItem.thc}%</Badge>
      </div>
    </div>
  );
};

export default StashItemListCard;
