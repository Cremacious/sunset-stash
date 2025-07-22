// components/profile/FriendButton.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { sendFriendRequest, removeFriend } from '@/lib/actions/friend.actions';
import { UserPlus, Users, Clock, Sun } from 'lucide-react';

interface FriendButtonProps {
  profileUserId: string;
  currentUserId: string | null;
  isOwnProfile: boolean;
  friendshipStatus: 'none' | 'pending' | 'friends' | 'blocked';
}

const FriendButton = ({
  profileUserId,
  currentUserId,
  isOwnProfile,
  friendshipStatus,
}: FriendButtonProps) => {
  const [status, setStatus] = useState(friendshipStatus);
  const [loading, setLoading] = useState(false);

  if (isOwnProfile || !currentUserId) {
    return null;
  }

  const handleFriendAction = async () => {
    setLoading(true);

    try {
      if (status === 'none' || status === 'blocked') {
        const result = await sendFriendRequest(profileUserId);
        if (result.success) {
          setStatus('pending');
        } else {
          alert(result.error);
        }
      } else if (status === 'friends' || status === 'pending') {
        const result = await removeFriend(profileUserId);
        if (result.success) {
          setStatus('none');
        } else {
          alert(result.error);
        }
      }
    } catch (error) {
      console.error('Friend action error:', error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case 'friends':
        return {
          text: 'Friends',
          icon: <Users className="w-4 h-4 mr-2" />,
          variant: 'default' as const,
          className: 'bg-green-600 hover:bg-green-700 font-bold',
        };
      case 'pending':
        return {
          text: 'Request Sent',
          icon: <Clock className="w-4 h-4 mr-2" />,
          variant: 'outline' as const,
          className: 'border-purple-300 text-purple-600 hover:bg-purple-50',
        };
      default:
        return {
          text: 'Add Friend',
          icon: <UserPlus className="w-4 h-4 mr-2" />,
          variant: 'default' as const,
          className: 'bg-purple-600 hover:bg-purple-700',
        };
    }
  };

  const buttonConfig = getButtonContent();

  return (
    <Button
      onClick={handleFriendAction}
      disabled={loading}
      variant={buttonConfig.variant}
      className={buttonConfig.className}
    >
      {loading ? (
        <>
          <Sun className="w-4 h-4 mr-2 text-orange-400 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {buttonConfig.icon}
          {buttonConfig.text}
        </>
      )}
    </Button>
  );
};

export default FriendButton;
