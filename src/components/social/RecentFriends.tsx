import { Button } from '../ui/button';
import RecentFriendCard from './RecentFriendCard';
import type { Friend } from '../../lib/types/social.types';

const RecentFriends = ({ friends }: { friends: Friend[] }) => {
  return (
    <div className="md:p-6 p-2 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
      <div className="bg-white rounded-lg border border-gray-200 px-2 py-4 md:p-6 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <span className="text-xl mr-2">🤝</span>
            Recent Friends
          </h2>
          <Button variant="outline" size="sm" className="text-xs">
            View All ({friends.length})
          </Button>
        </div>

        <div className="space-y-3">
          {friends.slice(0, 3).map((friend) => (
            <RecentFriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentFriends;
