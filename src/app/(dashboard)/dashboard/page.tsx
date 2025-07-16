import QuickActions from '@/components/dashboard/QuickActions';
import RecentPurchases from '@/components/purchases/RecentPurchases';
import CommunityFeed from '@/components/social/CommunityFeed';
import RecentStashItems from '@/components/stash/RecentStashItems';
import {
  samplePosts,
  samplePurchases,
  sampleStashItems,
} from '@/lib/sampleData';

const DashboardPage = () => {
  const purchases = samplePurchases.map((purchase) => ({
    ...purchase,
    date:
      purchase.date instanceof Date
        ? purchase.date.toISOString()
        : purchase.date,
    createdAt:
      purchase.createdAt instanceof Date
        ? purchase.createdAt.toISOString()
        : purchase.createdAt,
  }));

  const stashItems = sampleStashItems.map((item) => ({
    ...item,
    dateAdded:
      item.dateAdded instanceof Date
        ? item.dateAdded.toISOString()
        : item.dateAdded,
  }));

  const posts = samplePosts.map((post) => ({
    ...post,
    createdAt:
      post.createdAt instanceof Date
        ? post.createdAt.toISOString()
        : post.createdAt,
    stashItems: post.stashItems.map(
      (item: {
        postId: string;
        stashItemId: string;
        stashItem: {
          id: string;
          name: string;
          category: string;
          type: string;
          amount: string;
          thc: number;
          cbd: number;
          lineage: string;
          notes: string;
          dateAdded: Date;
          userId: string;
        };
      }) => ({
        ...item.stashItem,
        dateAdded:
          item.stashItem.dateAdded instanceof Date
            ? item.stashItem.dateAdded.toISOString()
            : item.stashItem.dateAdded,
      })
    ),
  }));

  // const stashItems = []
  // const purchases = []
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
          <CommunityFeed posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
