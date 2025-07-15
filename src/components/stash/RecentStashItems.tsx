import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import NoStashFound from './NoStashFound';
import { StashItem } from '@/lib/types';
import StashItemListCard from './StashItemListCard';

const RecentStashItems = ({ stashItems }: { stashItems: StashItem[] }) => {
  const latestStashItems = stashItems.slice(0, 3);

  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">Latest Stash Items</div>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => router.push('/stash')}
          >
            View Stash
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stashItems && stashItems.length > 0 ? (
            latestStashItems.map((stashItem) => (
              <StashItemListCard key={stashItem.id} stashItem={stashItem} />
            ))
          ) : (
            <NoStashFound />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentStashItems;
