import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  User,
  Leaf,
  MessageSquare,
  ArrowLeft,
  Star,
  ShoppingCart,
} from 'lucide-react';
import { sampleStashItems, samplePosts } from '@/lib/sampleData';
import StashItemListCard from '@/components/stash/StashItemListCard';
import ProfilePostsList from '@/components/social/ProfilePostsList';

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) => {
  const { profileId } = await params;

  if (profileId !== 'demo-user') {
    console.log(`Profile ID ${profileId} not found`);
  }

  // Mock user data
  const user = {
    id: 'user-1',
    name: 'Chris Johnson',
    email: 'chris@example.com',
    joinDate: new Date('2024-06-15'),
    totalStashItems: sampleStashItems.length,
    totalPosts: samplePosts.length,
    favoriteCategory: 'Flower',
    favoriteType: 'Hybrid',
  };

  // Get latest 4 stash items
  const latestStashItems = sampleStashItems.slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <div className="">
        <Button
          className="glassCard text-white font-bold"
          variant="ghost"
          size="sm"
          asChild
        >
          <Link href="/social">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Social
          </Link>
        </Button>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-xl border-b-6 border-b-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Header Section with Purple Background */}
        <div className="bg-purple-50 p-6 border-b border-purple-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">
                Member since {user.joinDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          <Button>Add Friend</Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Profile Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
              <Leaf className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">
                {user.totalStashItems}
              </p>
              <p className="text-sm text-gray-600">Stash Items</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
              <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">
                {user.totalPosts}
              </p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
              <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-green-600">
                {user.favoriteCategory}
              </p>
              <p className="text-sm text-gray-600">Favorite Category</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
              <ShoppingCart className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-orange-600">
                {user.favoriteType}
              </p>
              <p className="text-sm text-gray-600">Favorite Type</p>
            </div>
          </div>

          {/* Latest Stash Items */}
          <div className="space-y-4">
            <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
              <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                <Leaf className="w-5 h-5 mr-2 text-purple-600" />
                Latest Stash Items
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {latestStashItems.map((item) => (
                  <StashItemListCard
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
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
              <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                Recent Posts
              </h3>

              <ProfilePostsList
                posts={samplePosts.map((post) => ({
                  ...post,
                  createdAt:
                    typeof post.createdAt === 'string'
                      ? post.createdAt
                      : post.createdAt.toISOString(),
                  stashItems: post.stashItems.map((si) => ({
                    ...si.stashItem,
                    dateAdded:
                      typeof si.stashItem.dateAdded === 'string'
                        ? si.stashItem.dateAdded
                        : si.stashItem.dateAdded.toISOString(),
                  })),
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
