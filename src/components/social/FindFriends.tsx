'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { sendFriendRequestByEmail } from '@/lib/actions/friend.actions';

const FindFriends = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSendRequest = async () => {
    const response = await sendFriendRequestByEmail(email);
    if (response.success) {
      setStatus('Friend request sent!');
      setEmail('');
    } else {
      setStatus(response.error || 'Error sending request');
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white0 to-orange-100 rounded-lg p-4 md:p-6">
      <div className="space-y-4">
        <Label htmlFor="email" className="permanent-marker-font 0 text-lg">
          Search Friends by Email
        </Label>
        <div className="border-b-2 border-b-blue-200"></div>
        <Input
          id="email"
          type="email"
          className="bg-white"
          placeholder="friend@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="w-full" onClick={handleSendRequest}>
          Send Friend Request
        </Button>
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
