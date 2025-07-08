import { Button } from '../ui/button';
import { Friend } from '@/lib/types';

const RecentFriendCard = ({ friend }: { friend: Friend }) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div
        className={`w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center flex-shrink-0`}
      >
        <span className="text-white font-semibold text-sm">AVATAR</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{friend.name}</p>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full " />
        </div>
      </div>
      <Button size="sm" variant="outline" className="text-xs">
        View
      </Button>
    </div>
  );
};

export default RecentFriendCard;
