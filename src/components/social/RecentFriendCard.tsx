import { Button } from '../ui/button';
import { Friend } from '@/lib/types/social.types';
import Link from 'next/link';
import UserImage from './UserImage';

const RecentFriendCard = ({ friend }: { friend: Friend }) => {
  return (
    <div className="flex items-center space-x-3 p-3  border-b-blue-200 border-b-3 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
      <UserImage name={friend.name} />
      <div className="flex-1 min-w-0">
        <p className=" font-semibold text-gray-900 fugaz-font truncate md:max-w-[180px] max-w-[250px] mt-2">
          {friend.name}
        </p>
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
