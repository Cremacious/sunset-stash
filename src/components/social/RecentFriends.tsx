import { Button } from '../ui/button';
import RecentFriendCard from './RecentFriendCard';
import type { Friend } from '../../lib/types/social.types';

const RecentFriends = ({ friends }: { friends: Friend[] }) => {
  return (
    <div className="md:p-6 p-2 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
      <div className="bg-white rounded-lg border border-gray-200 px-2 py-4 md:p-6 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            Recent Friends
          </h2>
          <Button variant="outline" size="sm" className="text-xs">
            View All
          </Button>
        </div>

        <div className="space-y-2">
          {friends.length > 0 ? (
            friends
              .slice(0, 3)
              .map((friend: Friend) => (
                <RecentFriendCard key={friend.id} friend={friend} />
              ))
          ) : (
            <div className="flex justify-center items-center text-center">
              No friends yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentFriends;
