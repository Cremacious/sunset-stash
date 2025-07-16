import { CircleDollarSign, Container, SmilePlus, Pen } from 'lucide-react';
import Link from 'next/link';
import FindFriendDialog from '../social/FindFriendDialog';

const QuickActions = () => {
  return (
    <div className="bg-white rounded-lg p-4 hover:shadow-md transition-all">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href={'/purchases/new'}>
          <div className="h-auto p-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex flex-col items-center space-y-2 rounded-xl font-bold ">
            <CircleDollarSign size={40} />
            <div className="text-lg">Log Purchase</div>
          </div>
        </Link>

        <Link href={'/stash/new'}>
          <div className="h-auto p-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white flex flex-col items-center space-y-2 rounded-xl">
            <Container size={40} />
            <div className="text-lg">Add to Stash</div>
          </div>
        </Link>

        <Link href={'/social/new-post'}>
          <div className="h-auto p-4 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white flex flex-col items-center space-y-2 rounded-xl">
            <span className="text-2xl">
              <Pen size={40} />
            </span>
            <span className="font-medium">Create Post</span>
          </div>
        </Link>

        <FindFriendDialog>
          <div className="h-auto p-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white flex flex-col items-center space-y-2 rounded-xl hover:cursor-pointer">
            <span className="text-2xl">
              <SmilePlus size={40} />
            </span>
            <span className="font-medium">Find Friends</span>
          </div>
        </FindFriendDialog>
      </div>
    </div>
  );
};

export default QuickActions;
