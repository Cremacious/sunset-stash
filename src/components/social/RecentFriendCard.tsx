import { Button } from '../ui/button';
import { Friend } from '@/lib/types/social.types';
import Link from 'next/link';

const RecentFriendCard = ({ friend }: { friend: Friend }) => {
  return (
    <div className="flex items-center space-x-3 p-3  border-b-blue-300 border-b-3 bg-purple-100 rounded-lg hover:bg-blue-50 transition-colors">
      <div
        className={`w-10 h-10 bg-gradient-to-r bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0`}
      >
        <span className="text-white font-semibold text-sm">CM</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{friend.name}</p>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full " />
        </div>
      </div>
      <Link href={`/profile/${friend.id}`}>
        <Button size="sm" className="text-xs">
          View
        </Button>
      </Link>
    </div>
  );
};

export default RecentFriendCard;
