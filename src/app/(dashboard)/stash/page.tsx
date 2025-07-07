import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import StashCard from '@/components/stash/StashCard';
import StashAnalytics from '@/components/stash/StashAnalytics';
import NoStashFound from '@/components/stash/NoStashFound';

const StashPage = () => {
  // Mock data for demonstration
  const stashItems = [
    {
      id: 1,
      name: 'Blue Dream',
      category: 'Flower',
      type: 'Hybrid',
      amount: '3.5g',
      thc: 18,
      cbd: 1,
      lineage: 'Blueberry x Haze',
      notes: 'Perfect for creativity and relaxation',
      dateAdded: '2025-01-05',
    },
    {
      id: 2,
      name: 'OG Kush',
      category: 'Flower',
      type: 'Indica',
      amount: '1g',
      thc: 22,
      cbd: 0.5,
      lineage: 'Chemdawg x Hindu Kush',
      notes: 'Great for stress relief and sleep',
      dateAdded: '2025-01-10',
    },
    {
      id: 3,
      name: 'Sour Diesel',
      category: 'Concentrate',
      type: 'Sativa',
      amount: '0.5g',
      thc: 25,
      cbd: 0.2,
      lineage: 'Chemdawg x Super Skunk',
      notes: 'Energizing and uplifting effects',
      dateAdded: '2025-01-15',
    },
  ];

  return (
    <div className="space-y-8 ">
      <div className="space-y-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center">
          <Button className="w-full md:w-auto" asChild>
            <Link href="/stash/new">Add New</Link>
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
        {stashItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default StashPage;
