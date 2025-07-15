import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  User,
  Leaf,
  MessageSquare,
  ArrowRight,
  Star,
  ShoppingCart,
} from 'lucide-react';
import { sampleStashItems, samplePosts } from '@/lib/sampleData';
import StashItemListCard from '@/components/stash/StashItemListCard';
import PostListCard from '@/components/social/PostListCard';

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

  // Get latest 3 stash items
  const latestStashItems = sampleStashItems.slice(0, 4);

  // Get latest 3 posts
  const latestPosts = samplePosts.slice(0, 3);

  // Format date helper
  //   const formatDate = (date: Date) => {
  //     return date.toLocaleDateString('en-US', {
  //       year: 'numeric',
  //       month: 'short',
  //       day: 'numeric',
  //     });
  //   };

  // Get category color
  //   const getCategoryColor = (category: string) => {
  //     switch (category) {
  //       case 'Flower':
  //         return 'bg-green-100 text-green-800';
  //       case 'Concentrate':
  //         return 'bg-orange-100 text-orange-800';
  //       case 'Vape':
  //         return 'bg-blue-100 text-blue-800';
  //       case 'Edibles':
  //         return 'bg-purple-100 text-purple-800';
  //       default:
  //         return 'bg-gray-100 text-gray-800';
  //     }
  //   };

  // Get type color
  //   const getTypeColor = (type: string) => {
  //     switch (type) {
  //       case 'Sativa':
  //         return 'bg-green-100 text-green-800';
  //       case 'Indica':
  //         return 'bg-purple-100 text-purple-800';
  //       case 'Hybrid':
  //         return 'bg-blue-100 text-blue-800';
  //       default:
  //         return 'bg-gray-100 text-gray-800';
  //     }
  //   };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {user.name}
                </CardTitle>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          {/* Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Leaf className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">
                {user.totalStashItems}
              </p>
              <p className="text-sm text-gray-600">Stash Items</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">
                {user.totalPosts}
              </p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-800">
                {user.favoriteCategory}
              </p>
              <p className="text-sm text-gray-600">Favorite Category</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <ShoppingCart className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-800">
                {user.favoriteType}
              </p>
              <p className="text-sm text-gray-600">Favorite Type</p>
            </div>
          </div>

          {/* Latest Stash Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-green-600" />
                Latest Stash Items
              </h3>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="/stash"
                  className="text-purple-600 hover:text-purple-700"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

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

          {/* Latest Posts */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                Latest Posts
              </h3>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="/social"
                  className="text-purple-600 hover:text-purple-700"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {latestPosts.map((post) => (
                <PostListCard
                  key={post.id}
                  post={{
                    ...post,
                    comments: [],
                    createdAt: post.createdAt.toISOString(),
                    stashItems: post.stashItems.map((si) => ({
                      ...si.stashItem,
                      dateAdded: si.stashItem.dateAdded
                        .toISOString()
                        .split('T')[0],
                    })),
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
