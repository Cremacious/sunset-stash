import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import StashCard from '@/components/stash/StashCard';
import StashAnalytics from '@/components/stash/StashAnalytics';
import NoStashFound from '@/components/stash/NoStashFound';
import { getUserStashItems } from '@/lib/actions/stash.actions';

const StashPage = async () => {
  const { stashItems = [] } = await getUserStashItems();

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <div className="smallGlassCard">
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center bg-white rounded-lg p-4">
          <Button className="w-full md:w-auto" asChild>
            <Link href="/stash/new">Add New Stash Item</Link>
          </Button>

          <div className="flex space-x-2 items-center ">
            <Button variant="outline" size="sm" className="text-gray-600">
              Filter
            </Button>
            <Button variant="outline" size="sm" className="text-gray-600">
              Sort
            </Button>
            <Input className="bg-white" placeholder="Search strains..." />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Purchase Grid */}
        <div className="glassCard md:col-span-3">
          {stashItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stashItems.map((item) => (
                <StashCard key={item.id} stashItem={item} />
              ))}
            </div>
          ) : (
            <NoStashFound />
          )}
        </div>
        <StashAnalytics />
      </div>
    </div>
  );
};

export default StashPage;
