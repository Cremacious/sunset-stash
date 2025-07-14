import QuickActions from '@/components/dashboard/QuickActions';
import RecentPurchases from '@/components/purchases/RecentPurchases';
import CommunityFeed from '@/components/social/CommunityFeed';
import { StashItem } from '@/lib/types';
import RecentStashItems from '@/components/stash/RecentStashItems';

const DashboardPage = () => {
  const purchases = [
    {
      id: '1',
      dispensary: 'Trulieve',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '1-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '1',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
    {
      id: '2',
      dispensary: 'poop',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '2-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '2',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
    {
      id: '3',
      dispensary: 'poop',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '2-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '2',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
    {
      id: '4',
      dispensary: 'poop',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '2-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '2',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
    {
      id: '6',
      dispensary: 'poop',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '2-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '2',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
  ];

  const stashItems: StashItem[] = [
    {
      id: 'cmcv9xa0y0001tpcx8w76dg1k',
      name: 'Kiki',
      category: 'Hybrid',
      type: 'Flower',
      amount: '3.5g',
      thc: 22.5,
      cbd: 0.5,
      lineage: 'Blueberry x Haze',
      notes:
        'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
      dateAdded: '2025-01-15',
      userId: 'user-1',
    },
    {
      id: 'stash-2',
      name: 'OG Kush',
      category: 'Indica',
      type: 'Flower',
      amount: '7g',
      thc: 25.0,
      cbd: 0.1,
      lineage: 'Chemdawg x Lemon Thai x Pakistani Kush',
      notes:
        'Heavy hitting indica perfect for evening use. Helps with sleep and pain relief. Strong earthy and pine flavors.',
      dateAdded: '2025-01-12',
      userId: 'user-1',
    },
    {
      id: 'stash-3',
      name: 'Green Crack',
      category: 'Sativa',
      type: 'Flower',
      amount: '1g',
      thc: 20.8,
      cbd: 0.2,
      lineage: 'Skunk #1 x Sweet Leaf Indica',
      notes:
        'Energizing sativa great for daytime use. Provides focus and creativity boost. Citrusy and fruity taste profile.',
      dateAdded: '2025-01-10',
      userId: 'user-1',
    },
    {
      id: 'stash-4',
      name: 'Gorilla Glue #4',
      category: 'Hybrid',
      type: 'Concentrate',
      amount: '1g',
      thc: 28.5,
      cbd: 0.3,
      lineage: 'Chem Sister x Sour Dubb x Chocolate Diesel',
      notes:
        'Potent hybrid concentrate with strong couch-lock effects. Excellent for pain management and stress relief.',
      dateAdded: '2025-01-08',
      userId: 'user-1',
    },
    {
      id: 'stash-5',
      name: 'Purple Haze',
      category: 'Sativa',
      type: 'Vape',
      amount: '0.5g',
      thc: 19.2,
      cbd: 0.8,
      lineage: 'Purple Thai x Haze',
      notes:
        'Classic sativa in vape form. Uplifting and euphoric effects with sweet berry flavors. Great for social situations.',
      dateAdded: '2025-01-05',
      userId: 'user-1',
    },
    {
      id: 'stash-6',
      name: 'White Widow',
      category: 'Hybrid',
      type: 'Flower',
      amount: '3.5g',
      thc: 23.1,
      cbd: 0.4,
      lineage: 'Brazilian Sativa x South Indian Indica',
      notes:
        'Balanced hybrid with resin-covered buds. Provides both mental clarity and physical relaxation. Woody and spicy taste.',
      dateAdded: '2025-01-03',
      userId: 'user-1',
    },
    {
      id: 'stash-7',
      name: 'Northern Lights',
      category: 'Indica',
      type: 'Edible',
      amount: '10mg x 10',
      thc: 15.0,
      cbd: 2.5,
      lineage: 'Afghani x Thai',
      notes:
        'Classic indica in gummy form. Perfect for nighttime use and sleep aid. Sweet fruity flavor with long-lasting effects.',
      dateAdded: '2025-01-01',
      userId: 'user-1',
    },
    {
      id: 'stash-8',
      name: 'Sour Diesel',
      category: 'Sativa',
      type: 'Flower',
      amount: '7g',
      thc: 21.7,
      cbd: 0.3,
      lineage: 'Chemdawg 91 x Super Skunk',
      notes:
        'Energizing sativa with diesel-like aroma. Great for daytime productivity and mood enhancement. Pungent and skunky.',
      dateAdded: '2024-12-28',
      userId: 'user-1',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="glassCard">
        <QuickActions />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="glassCard">
          <RecentPurchases purchases={purchases} />
        </div>
        <div className="glassCard">
          <RecentStashItems stashItems={stashItems} />
        </div>
        <div className="glassCard">
          <CommunityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
