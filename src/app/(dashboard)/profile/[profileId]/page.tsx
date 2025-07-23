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
import StashItemListCard from '@/components/stash/StashItemListCard';
import ProfilePostsList from '@/components/social/ProfilePostsList';
import FriendButton from '@/components/profile/FriendButton';
import {
  getProfileData,
  getUserStats,
  getProfileStashItems,
  getProfilePosts,
} from '@/lib/actions/profile.actions';
import { ProfilePost } from '@/lib/types/profile.types';

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) => {
  const { profileId } = await params;

  const [profileResult, statsResult, stashItemsResult, postsResult] =
    await Promise.all([
      getProfileData(profileId),
      getUserStats(profileId),
      getProfileStashItems(profileId, 4),
      getProfilePosts(profileId),
    ]);

  const {
    success,
    profileUser,
    currentUserId,
    isOwnProfile,
    friendshipStatus,
    error,
  } = profileResult;

  if (!success || !profileUser) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Profile Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            {error || 'This profile does not exist.'}
          </p>
          <Button asChild>
            <Link href="/social">Back to Social</Link>
          </Button>
        </div>
      </div>
    );
  }

  const userStats = statsResult.stats;
  const latestStashItems = stashItemsResult.stashItems;
  const userPostsRaw = postsResult.posts;

  const userPosts: ProfilePost[] = userPostsRaw.map((post) => ({
    id: post.id,
    author: post.author,
    activity: post.activity,
    content: post.content,
    stashItems: post.stashItems,
    createdAt: post.createdAt,
    userId: post.userId,
  }));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
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

      <div className="bg-white rounded-xl border-b-6 border-b-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="bg-purple-50 p-6 border-b border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {profileUser.name}
                </h1>
                <p className="text-gray-600">
                  Member since{' '}
                  {new Date(profileUser.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <FriendButton
              profileUserId={profileUser.id}
              currentUserId={currentUserId}
              isOwnProfile={isOwnProfile}
              friendshipStatus={friendshipStatus}
            />
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
              <Leaf className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">
                {userStats.totalStashItems}
              </p>
              <p className="text-sm text-gray-600">Stash Items</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
              <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">
                {userStats.totalPosts}
              </p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
              <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-green-600">
                {userStats.favoriteCategory}
              </p>
              <p className="text-sm text-gray-600">Favorite Category</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
              <ShoppingCart className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-orange-600">
                {userStats.favoriteType}
              </p>
              <p className="text-sm text-gray-600">Favorite Type</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                  <Leaf className="w-5 h-5 mr-2 text-purple-600" />
                  Latest Stash Items
                </h3>
                <Button variant={'outline'}>
                  <Link href={`/profile/${profileId}/stash`}>View All</Link>
                </Button>
              </div>
              {latestStashItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestStashItems.map((item) => (
                    <StashItemListCard key={item.id} stashItem={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Leaf className="w-12 h-12 mx-auto mb-2 text-purple-500" />
                  <p>No stash items yet</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  Recent Posts ({userStats.totalPosts} total)
                </h3>
                <Button
                  asChild
                  variant={'outline'}
                  className="mb-4 text-blue-600 border-blue-600 hover:text-blue-600"
                >
                  <Link href={`/profile/${profileId}/posts`}>View All</Link>
                </Button>
              </div>
              <ProfilePostsList posts={userPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
