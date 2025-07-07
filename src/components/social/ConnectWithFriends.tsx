import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const ConnectWithFriends = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-4 text-center">
      <div className="text-2xl mb-2">👥</div>
      <h3 className="text-sm font-semibold text-gray-800 mb-1">
        Connect with Friends
      </h3>
      <p className="text-xs text-gray-600 mb-3">
        Follow friends to see their purchases and get strain recommendations
      </p>
      <Button
        onClick={() => router.push('/friends')}
        size="sm"
        variant="outline"
        className="text-xs"
      >
        Find Friends
      </Button>
    </div>
  );
};

export default ConnectWithFriends;
