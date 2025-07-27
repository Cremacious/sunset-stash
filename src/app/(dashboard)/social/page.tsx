'use client';
import { useEffect, useState } from 'react';
import TimelineFeed from '@/components/social/TimelineFeed';
import FriendRequestDialog from '@/components/social/FriendRequestDialog';
import RecentFriends from '@/components/social/RecentFriends';
import { getAllTimelinePosts } from '@/lib/actions/post.actions';
import {
  getUserFriendRequests,
  getAllUserFriends,
} from '@/lib/actions/friend.actions';
import { useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import FindFriendDialog from '@/components/social/FindFriendDialog';
import UserImage from '@/components/social/UserImage';
import UserStats from '@/components/social/UserStats';
import {
  PendingFriendship,
  Friend,
  PostWithStashItems,
} from '@/lib/types/social.types';
import { Sun } from 'lucide-react';
import Link from 'next/link';

export default function SocialPage() {
  const { data: session } = useSession();
  const currentUser = session?.user;
  const [posts, setPosts] = useState<PostWithStashItems[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [friendRequests, setFriendRequests] = useState<PendingFriendship[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { posts = [], currentUserId = '' } = await getAllTimelinePosts();
      setPosts(posts);
      setCurrentUserId(currentUserId ?? '');
      const friendRequestsResult = await getUserFriendRequests();
      setFriendRequests(
        friendRequestsResult.success && Array.isArray(friendRequestsResult.data)
          ? friendRequestsResult.data
          : []
      );
      const friendsResult = await getAllUserFriends();
      setFriends(
        friendsResult.success && Array.isArray(friendsResult.data)
          ? friendsResult.data
          : []
      );
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleRequestUpdate = async () => {
    setLoading(true);
    const friendRequestsResult = await getUserFriendRequests();
    setFriendRequests(
      friendRequestsResult.success && Array.isArray(friendRequestsResult.data)
        ? friendRequestsResult.data
        : []
    );
    const friendsResult = await getAllUserFriends();
    setFriends(
      friendsResult.success && Array.isArray(friendsResult.data)
        ? friendsResult.data
        : []
    );
    setLoading(false);
  };

  // Only count posts created by the current user
  const userPostsCount = posts.filter(
    (post) => post.userId === currentUser?.id
  ).length;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="glassCard">
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 ">
                  <UserImage name={currentUser?.name ?? 'Unknown User'} />

                  <Link
                    href={`/profile/${currentUser?.id}`}
                    className="font-bold text-2xl hover:underline fugaz-font text-slate-800 truncate md:max-w-[270px] max-w-[250px]"
                  >
                    {currentUser?.name}
                  </Link>
                </div>
              </div>

              <UserStats
                userPostsCount={userPostsCount}
                friends={friends}
                friendRequests={friendRequests}
              />
              <div className=" flex justify-around">
                <FindFriendDialog>
                  <Button variant={'outline'} size={'sm'} className="">
                    Find Friends
                  </Button>
                </FindFriendDialog>
                <div className="">
                  <FriendRequestDialog
                    friendRequests={friendRequests}
                    onRequestUpdate={handleRequestUpdate}
                  />
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="flex glassCard h-[300px] justify-center items-center ">
              <Sun className="w-12 h-12 animate-spin text-yellow-400" />
            </div>
          ) : (
            <RecentFriends friends={friends} />
          )}
        </div>
        <div className="md:col-span-2 space-y-6 glassCard relative">
          {loading ? (
            <div className="absolute inset-0 flex justify-center items-center">
              <Sun className="w-24 h-24 animate-spin text-yellow-400" />
            </div>
          ) : (
            <TimelineFeed posts={posts} currentUserId={currentUserId ?? ''} />
          )}
        </div>
      </div>
    </div>
  );
}
