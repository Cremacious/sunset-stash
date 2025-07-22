// components/profile/FriendButton.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { sendFriendRequest, removeFriend } from '@/lib/actions/friend.actions';
import { UserPlus, Users, Clock } from 'lucide-react';
// import { useRouter } from 'next/navigation';

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
  //   const router = useRouter();

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
          className: 'bg-green-600 hover:bg-green-700',
        };
      case 'pending':
        return {
          text: 'Request Sent',
          icon: <Clock className="w-4 h-4 mr-2" />,
          variant: 'outline' as const,
          className: 'border-orange-300 text-orange-600 hover:bg-orange-50',
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
          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
