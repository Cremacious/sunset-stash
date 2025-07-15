import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FindFriends = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="space-y-4">
        <Label htmlFor="email">Search Friends by Email</Label>
        <Input id="email" type="email" placeholder="friend@email.com" />

        <Button className="w-full">Send Friend Request</Button>
      </div>
    </div>
  );
};

export default FindFriends;
