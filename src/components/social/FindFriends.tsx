import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FindFriends = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="space-y-2">
        <Label htmlFor="email">Search Friends by Email</Label>
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
