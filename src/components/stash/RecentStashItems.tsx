import { Button } from '../ui/button';
import { StashItem } from '@/lib/types';
import StashItemListCard from './StashItemListCard';
import { CardContent, CardHeader } from '@/components/ui/card';
import { Container } from 'lucide-react';
import Link from 'next/link';

const RecentStashItems = ({ stashItems }: { stashItems: StashItem[] }) => {
  const latestStashItems = stashItems.slice(0, 3);

  return (
    <div className="h-full space-y-4">
      <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4 rounded-lg shadow-md border-b-4 border-b-purple-300">
        <div className="flex items-center fugaz-font font-slate-800 text-2xl">
          Latest Stash
        </div>
        <Button asChild size="sm">
          <Link href="/stash">View All</Link>
        </Button>
      </div>

      <div className="space-y-2">
        {stashItems && stashItems.length > 0 ? (
          latestStashItems.map((stashItem) => (
            <StashItemListCard key={stashItem.id} stashItem={stashItem} />
          ))
        ) : (
          <div className="glassCard h-[300px] flex flex-col items-center justify-center">
            <CardHeader />
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <Container className="w-10 h-10 text-purple-500 mb-2" />
                <span className="text-gray-800">
                  No recent purchases found.
                </span>
              </div>
            </CardContent>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentStashItems;
