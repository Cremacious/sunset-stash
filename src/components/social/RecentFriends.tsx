'use client';
import { Button } from '../ui/button';
import RecentFriendCard from './RecentFriendCard';
import type { Friend } from '../../lib/types/social.types';
import { useState } from 'react';

const RecentFriends = ({ friends }: { friends: Friend[] }) => {
  const [showAllFriends, setShowAllFriends] = useState(false);
  return (
    <div className="md:p-6 p-2 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
      <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-lg px-2 py-4 md:p-6 ">
        <div className="flex items-center justify-between mb-4 border-b-2 border-orange-200 pb-2">
          <h2 className="  permanent-marker-font text-xl flex items-center">
            Recent Friends
          </h2>
          <Button
            onClick={() => setShowAllFriends(true)}
            variant="outline"
            size="sm"
            className="text-xs"
          >
            View All
          </Button>
        </div>

        <div className="space-y-2">
          {showAllFriends ? (
            <div className="grid grid-cols-1 gap-4">
              {friends.length > 0 ? (
                friends.map((friend: Friend) => (
                  <RecentFriendCard key={friend.id} friend={friend} />
                ))
              ) : (
                <div className="flex justify-center items-center text-center">
                  No friends yet
                </div>
              )}
            </div>
          ) : friends.length > 0 ? (
            friends
              .slice(0, 3)
              .map((friend: Friend) => (
                <RecentFriendCard key={friend.id} friend={friend} />
              ))
          ) : (
            <div className="flex justify-center items-center text-center permanent-marker-font ">
              No friends, yet...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentFriends;
