import { StashItem } from '@/lib/types';
import { Badge } from '../ui/badge';

const StashItemListCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <div
      key={stashItem.id}
      className="p-4 space-y-2 rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg"
    >
      <h4 className="font-semibold text-gray-800">{stashItem.name}</h4>
      <div className="space-x-2">
        <Badge className="bg-purple-500">{stashItem.type}</Badge>
        <Badge className="bg-purple-500">{stashItem.thc}</Badge>
        <Badge className="bg-purple-500">{stashItem.category}</Badge>
      </div>
    </div>
  );
};

export default StashItemListCard;
