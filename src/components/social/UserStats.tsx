'use client';
import { useEffect, useState } from 'react';
import { PendingFriendship, Friend } from '@/lib/types/social.types';

interface UserStatsProps {
  userPostsCount: number;
  friends: Friend[];
  friendRequests: PendingFriendship[];
}

const UserStats = ({
  userPostsCount,
  friends,
  friendRequests,
}: UserStatsProps) => {
  const [friendCount, setFriendCount] = useState(friends.length);
  const [requestCount, setRequestCount] = useState(friendRequests.length);
  const [postsCount, setPostsCount] = useState(userPostsCount);

  useEffect(() => {
    setFriendCount(friends.length);
    setRequestCount(friendRequests.length);
    setPostsCount(userPostsCount);
  }, [friends, friendRequests, userPostsCount]);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 border-t-2 border-orange-200 pt-6 pb-2">
      <div className="text-center p-3 bg-yellow-50 rounded-lg border-b-2 border-b-yellow-500">
        <p className="text-2xl font-bold text-yellow-600">{postsCount}</p>
        <p className="text-xs text-gray-600">Total</p>
        <p className="text-xs text-gray-600">Posts</p>
      </div>
      <div className="text-center p-3 bg-orange-50 rounded-lg border-b-2 border-b-orange-500">
        <p className="text-2xl font-bold text-orange-600">{friendCount}</p>
        <p className="text-xs text-gray-600">Total</p>
        <p className="text-xs text-gray-600">Friends</p>
      </div>
      <div className="text-center p-3 bg-red-50 rounded-lg border-b-2 border-b-red-500">
        <p className="text-2xl font-bold text-red-600">{requestCount}</p>
        <p className="text-xs text-gray-600">Friend Requests</p>
      </div>
    </div>
  );
};

export default UserStats;
