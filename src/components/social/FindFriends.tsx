'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { sendFriendRequestByEmail } from '@/lib/actions/friend.actions';

const FindFriends = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendRequest = async () => {
    setIsLoading(true);
    const response = await sendFriendRequestByEmail(email);
    if (response.success) {
      setStatus('Friend request sent!');
      setEmail('');
      setIsLoading(false);
    } else {
      setStatus(response.error || 'Error sending request');
    }
  };

  return (
    <div className="">
      <div className="space-y-4">
        <Label htmlFor="email" className="fugaz-font text-slate-800 text-lg">
          Search Friends by Email
        </Label>
        <Input
          id="email"
          type="email"
          className="bg-white"
          placeholder="friend@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isLoading ? (
          <Button className="w-full" disabled>
            Sending...
          </Button>
        ) : (
          <Button className="w-full" onClick={handleSendRequest}>
            Send Friend Request
          </Button>
        )}
        {status && (
          <div className="text-sm py-2 bg-purple-50 border-purple-500 rounded-lg text-center mt-2">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindFriends;
