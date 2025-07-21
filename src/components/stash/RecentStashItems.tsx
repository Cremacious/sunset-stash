import { Button } from '../ui/button';
import NoStashFound from './NoStashFound';
import { StashItem } from '@/lib/types';
import StashItemListCard from './StashItemListCard';

const RecentStashItems = ({ stashItems }: { stashItems: StashItem[] }) => {
  const latestStashItems = stashItems.slice(0, 3);

  return (
    <div className="h-full space-y-4">
      <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-white p-4 rounded-lg shadow-md ">
        <div className="flex items-center">Latest Stash Items</div>
        <Button
          variant="outline"
          size="sm"
          // onClick={() => router.push('/stash')}
        >
          View Stash
        </Button>
      </div>

      <div className="space-y-2">
        {stashItems && stashItems.length > 0 ? (
          latestStashItems.map((stashItem) => (
            <StashItemListCard key={stashItem.id} stashItem={stashItem} />
          ))
        ) : (
          <NoStashFound />
        )}
      </div>
    </div>
  );
};

export default RecentStashItems;
