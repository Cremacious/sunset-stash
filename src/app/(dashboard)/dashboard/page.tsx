import QuickActions from '@/components/dashboard/QuickActions';
import RecentPurchases from '@/components/purchases/RecentPurchases';
import CommunityFeed from '@/components/social/CommunityFeed';
import RecentStashItems from '@/components/stash/RecentStashItems';
import {
  samplePosts,
} from '@/lib/sampleData';
import { getAllUserPurchases } from '@/lib/actions/purchase.actions';
import { getUserStashItems } from '@/lib/actions/stash.actions';

const DashboardPage = async () => {
  const { purchases = [] } = await getAllUserPurchases();

  const { stashItems = [] } = await getUserStashItems();

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
