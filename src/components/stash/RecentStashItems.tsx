import { Button } from '../ui/button';
import { StashItem } from '@/lib/types';
import StashItemListCard from './StashItemListCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Container } from 'lucide-react';

const RecentStashItems = ({ stashItems }: { stashItems: StashItem[] }) => {
  const latestStashItems = stashItems.slice(0, 3);

  return (
    <div className="h-full space-y-4">
      <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-white p-4 rounded-lg shadow-md border-b-4 border-b-purple-500">
        <div className="flex items-center fugaz-font text-2xl text-purple-700">
          Latest Stash Items
        </div>
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
          <Card className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 p-6">
            <CardHeader />
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <Container className="w-10 h-10 text-purple-500 mb-2" />
                <span className="text-gray-500">
                  No recent purchases found.
                </span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RecentStashItems;
