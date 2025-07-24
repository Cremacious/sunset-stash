import TimelineFeed from '@/components/social/TimelineFeed';
import FindFriends from '@/components/social/FindFriends';
import FriendRequestDialog from '@/components/social/FriendRequestDialog';
import RecentFriends from '@/components/social/RecentFriends';
import UserImage from '@/components/social/UserImage';
import { getAllTimelinePosts } from '@/lib/actions/post.actions';
import {
  getUserFriendRequests,
  getAllUserFriends,
} from '@/lib/actions/friend.actions';
import Link from 'next/link';

const SocialPage = async () => {
  const { posts = [], currentUserId } = await getAllTimelinePosts();
  const friendRequestsResult = await getUserFriendRequests();
  const friendsResult = await getAllUserFriends();

  const userPostsCount = posts.length;

  const friendRequests =
    friendRequestsResult.success && Array.isArray(friendRequestsResult.data)
      ? friendRequestsResult.data
      : [];
  const friends =
    friendsResult.success && Array.isArray(friendsResult.data)
      ? friendsResult.data
      : [];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="glassCard">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <UserImage />
                  <div>
                    <Link
                      className="text-3xl permanent-marker-font text-purple-800"
                      href={`/profile/${currentUserId}`}
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-orange-50 rounded-lg border-b-2 border-b-orange-500">
                  <p className="text-2xl font-bold text-orange-600">
                    {userPostsCount}
                  </p>
                  <p className="text-xs text-gray-600">Total</p>
                  <p className="text-xs text-gray-600">Posts</p>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg border-b-2 border-b-red-500">
                  <p className="text-2xl font-bold text-red-600">
                    {friends.length}
                  </p>
                  <p className="text-xs text-gray-600">Total</p>
                  <p className="text-xs text-gray-600">Friends</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border-b-2 border-b-blue-500">
                  <p className="text-2xl font-bold text-blue-600">
                    {friendRequests.length}
                  </p>
                  <p className="text-xs text-gray-600">Friend Requests</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-center">
                  <FriendRequestDialog friendRequests={friendRequests} />
                </div>
              </div>
            </div>
          </div>
          <RecentFriends friends={friends} />
          <div className="glassCard">
            <FindFriends />
          </div>
        </div>
        <div className="md:col-span-2 space-y-6 glassCard">
          <TimelineFeed posts={posts} currentUserId={currentUserId ?? ''} />
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
