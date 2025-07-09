import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FindFriends = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <span className="text-xl mr-2">🔍</span>
        Find Friends
      </h2>
      <div className="space-y-2">
        <Label htmlFor="email">Search by Email</Label>
        <Input id="email" type="email" placeholder="friend@email.com" />

        <Button className="w-full">Send Friend Request</Button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          💡 <strong>Tip:</strong> Ask friends for their email to connect and
          share your cannabis journey together!
        </p>
      </div>
    </div>
  );
};

export default FindFriends;
