import QuickActions from '@/components/dashboard/QuickActions';
import RecentPurchases from '@/components/purchases/RecentPurchases';
import CommunityFeed from '@/components/social/CommunityFeed';
import RecentStashItems from '@/components/stash/RecentStashItems';
import { getAllTimelinePosts } from '@/lib/actions/post.actions';
import { getAllUserPurchases } from '@/lib/actions/purchase.actions';
import { getUserStashItems } from '@/lib/actions/stash.actions';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Dashboard | Sunset Stash',
  description: 'Your dashboard summary',
};

const DashboardPage = async () => {
  const { purchases = [] } = await getAllUserPurchases();

  const { stashItems = [] } = await getUserStashItems();

  const { posts = [], currentUserId } = await getAllTimelinePosts();

  const friendsPosts = posts.filter((post) => post.userId !== currentUserId);

  const postsWithDates = friendsPosts.map((post) => ({
    ...post,
    createdAt: new Date(post.createdAt),
    stashItems:
      post.stashItems?.map((item) => ({
        ...item,
        stashItem: {
          ...item.stashItem,
          dateAdded: new Date(item.stashItem.dateAdded),
        },
      })) || [],
  }));

  return (
    <div className="space-y-4 h-full">
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
          <CommunityFeed posts={postsWithDates} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
