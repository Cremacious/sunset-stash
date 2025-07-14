import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import StashCard from '@/components/stash/StashCard';
import StashAnalytics from '@/components/stash/StashAnalytics';
import NoStashFound from '@/components/stash/NoStashFound';
// import { getUserStashItems } from '@/lib/actions/stash.actions';
import { sampleStashItems } from '@/lib/sampleData';

// TODO: Fix type error with dateAdded
// type StashItem = {
//   id: string;
//   name: string;
//   category: string;
//   type: string;
//   amount: string;
//   thc: number;
//   cbd: number;
//   lineage: string;
//   notes: string;
//   dateAdded: string | Date;
//   userId: string;
// };

const StashPage = async () => {
  // const result = await getUserStashItems();
  // const stashItems = result.data ?? [];
  // const stashItems: StashItem[] = [
  //   {
  //     id: 'cmcv9xa0y0001tpcx8w76dg1k',
  //     name: 'Kiki',
  //     category: 'Hybrid',
  //     type: 'Flower',
  //     amount: '3.5g',
  //     thc: 22.5,
  //     cbd: 0.5,
  //     lineage: 'Blueberry x Haze',
  //     notes:
  //       'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
  //     dateAdded: '2025-01-15',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-2',
  //     name: 'OG Kush',
  //     category: 'Indica',
  //     type: 'Flower',
  //     amount: '7g',
  //     thc: 25.0,
  //     cbd: 0.1,
  //     lineage: 'Chemdawg x Lemon Thai x Pakistani Kush',
  //     notes:
  //       'Heavy hitting indica perfect for evening use. Helps with sleep and pain relief. Strong earthy and pine flavors.',
  //     dateAdded: '2025-01-12',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-3',
  //     name: 'Green Crack',
  //     category: 'Sativa',
  //     type: 'Flower',
  //     amount: '1g',
  //     thc: 20.8,
  //     cbd: 0.2,
  //     lineage: 'Skunk #1 x Sweet Leaf Indica',
  //     notes:
  //       'Energizing sativa great for daytime use. Provides focus and creativity boost. Citrusy and fruity taste profile.',
  //     dateAdded: '2025-01-10',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-4',
  //     name: 'Gorilla Glue #4',
  //     category: 'Hybrid',
  //     type: 'Concentrate',
  //     amount: '1g',
  //     thc: 28.5,
  //     cbd: 0.3,
  //     lineage: 'Chem Sister x Sour Dubb x Chocolate Diesel',
  //     notes:
  //       'Potent hybrid concentrate with strong couch-lock effects. Excellent for pain management and stress relief.',
  //     dateAdded: '2025-01-08',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-5',
  //     name: 'Purple Haze',
  //     category: 'Sativa',
  //     type: 'Vape',
  //     amount: '0.5g',
  //     thc: 19.2,
  //     cbd: 0.8,
  //     lineage: 'Purple Thai x Haze',
  //     notes:
  //       'Classic sativa in vape form. Uplifting and euphoric effects with sweet berry flavors. Great for social situations.',
  //     dateAdded: '2025-01-05',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-6',
  //     name: 'White Widow',
  //     category: 'Hybrid',
  //     type: 'Flower',
  //     amount: '3.5g',
  //     thc: 23.1,
  //     cbd: 0.4,
  //     lineage: 'Brazilian Sativa x South Indian Indica',
  //     notes:
  //       'Balanced hybrid with resin-covered buds. Provides both mental clarity and physical relaxation. Woody and spicy taste.',
  //     dateAdded: '2025-01-03',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-7',
  //     name: 'Northern Lights',
  //     category: 'Indica',
  //     type: 'Edible',
  //     amount: '10mg x 10',
  //     thc: 15.0,
  //     cbd: 2.5,
  //     lineage: 'Afghani x Thai',
  //     notes:
  //       'Classic indica in gummy form. Perfect for nighttime use and sleep aid. Sweet fruity flavor with long-lasting effects.',
  //     dateAdded: '2025-01-01',
  //     userId: 'user-1',
  //   },
  //   {
  //     id: 'stash-8',
  //     name: 'Sour Diesel',
  //     category: 'Sativa',
  //     type: 'Flower',
  //     amount: '7g',
  //     thc: 21.7,
  //     cbd: 0.3,
  //     lineage: 'Chemdawg 91 x Super Skunk',
  //     notes:
  //       'Energizing sativa with diesel-like aroma. Great for daytime productivity and mood enhancement. Pungent and skunky.',
  //     dateAdded: '2024-12-28',
  //     userId: 'user-1',
  //   },
  // ];
  const stashItems = sampleStashItems;

  return (
    <div className="space-y-4 ">
      <div className="space-y-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-2 md:p-6">
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center">
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
        {stashItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stashItems.map((item) => (
              <StashCard
                key={item.id}
                stashItem={{
                  ...item,
                  dateAdded:
                    typeof item.dateAdded === 'string'
                      ? item.dateAdded
                      : item.dateAdded.toISOString(),
                }}
              />
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
