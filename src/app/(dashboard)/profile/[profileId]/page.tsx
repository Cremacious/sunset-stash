import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
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
import UserImage from '@/components/social/UserImage';

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
        <div className="bg-gradient-to-br from-white via-orange-100 to-orange-200 border-0 border-b-4 border-b-orange-300 shadow-xl rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-purple-800 mb-2 permanent-marker-font">
            Profile Not Found
          </h1>
          <p className="text-purple-600 mb-4">
            {error || 'This profile does not exist.'}
          </p>
          <Button
            asChild
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl"
          >
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
      <div>
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

      <div className="bg-gradient-to-br from-white via-orange-100 to-orange-200 border-0 border-b-4 border-b-orange-300 shadow-xl rounded-xl overflow-hidden">
        <div className=" p-6 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <UserImage name={profileUser.name} />
              <div>
                <h1 className="text-2xl md:text-3xl fugaz-font text-slate-800">
                  {profileUser.name}
                </h1>
                <p className="text-gray-600 md:text-md text-sm">
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
            <div className="rounded-lg p-4 text-center shadow-md bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border-0 border-b-4 border-b-yellow-300">
              <Leaf className="w-6 h-6 text-yellow-800 mx-auto mb-2" />
              <p className="text-2xl font-bold text-yellow-800">
                {userStats.totalStashItems}
              </p>
              <p className="text-sm text-yellow-800">Stash Items</p>
            </div>
            <div className="rounded-lg p-4 text-center shadow-md bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 border-0 border-b-4 border-b-orange-300">
              <MessageSquare className="w-6 h-6 text-orange-700 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-700">
                {userStats.totalPosts}
              </p>
              <p className="text-sm text-orange-700">Posts</p>
            </div>
            <div className="rounded-lg p-4 text-center shadow-md bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 border-0 border-b-4 border-b-pink-300">
              <ShoppingCart className="w-6 h-6 text-pink-700 mx-auto mb-2" />
              <p className="text-lg font-bold text-pink-700">
                {userStats.favoriteType}
              </p>
              <p className="text-sm text-pink-700">Favorite Type</p>
            </div>
            <div className="rounded-lg p-4 text-center shadow-md bg-gradient-to-br from-red-100 via-red-200 to-red-300 border-0 border-b-4 border-b-red-400">
              <Star className="w-6 h-6 text-red-700 mx-auto mb-2" />
              <p className="text-lg font-bold text-red-700">
                {userStats.favoriteCategory}
              </p>
              <p className="text-sm text-red-700">Favorite Category</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-indigo-100 via-indigo-100 to-indigo-200 rounded-lg p-4 border-b-indigo-300 border-b-4 border-indigo-300 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-indigo-900 flex items-center mb-4 fugaz-font">
                  <Leaf className="w-5 h-5 mr-2 text-indigo-800" />
                  Latest Stash
                </h3>
                <Button
                  variant={'outline'}
                  className="text-purple-600 border-purple-300 hover:bg-purple-50 mb-2"
                >
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
            <div className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 rounded-lg p-4 border-b-4 border-purple-400 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-purple-800 flex items-center mb-4 fugaz-font">
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-800" />
                  Recent Posts by {profileUser.name}
                </h3>
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
