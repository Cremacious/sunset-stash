// components/profile/FriendButton.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { sendFriendRequest, removeFriend } from '@/lib/actions/friend.actions';
import { UserPlus, Users, Clock, Sun } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
  const [showDialog, setShowDialog] = useState(false);

  if (isOwnProfile || !currentUserId) {
    return null;
  }

  const handleFriendAction = async () => {
    if (status === 'friends') {
      setShowDialog(true);
      return;
    }
    setLoading(true);
    try {
      if (status === 'none' || status === 'blocked') {
        const result = await sendFriendRequest(profileUserId);
        if (result.success) {
          setStatus('pending');
        } else {
          alert(result.error);
        }
      } else if (status === 'pending') {
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

  const handleRemoveFriend = async () => {
    setLoading(true);
    try {
      const result = await removeFriend(profileUserId);
      if (result.success) {
        setStatus('none');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Friend action error:', error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
      setShowDialog(false);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case 'friends':
        return {
          text: 'Friends',
          icon: <Users className="w-4 h-4 mr-2" />,
          variant: 'default' as const,
          className:
            'bg-green-600 hover:bg-green-700 font-bold hover:border-b-green-800 border-b-green-700 border-b-4',
        };
      case 'pending':
        return {
          text: 'Request Sent',
          icon: <Clock className="w-4 h-4 mr-2" />,
          variant: 'outline' as const,
          className:
            'text-white hover:text-white bg-orange-500 border-0 hover:bg-orange-600 hover:border-b-orange-700 border-b-orange-600 border-b-4 rounded-xl',
        };
      default:
        return {
          text: 'Add Friend',
          icon: <UserPlus className="w-4 h-4 mr-2" />,
          variant: 'default' as const,
          className:
            'bg-blue-600 hover:bg-blue-700 border-b-blue-700  hover:border-b-blue-700 ',
        };
    }
  };

  const buttonConfig = getButtonContent();

  return (
    <>
      <Button
        onClick={handleFriendAction}
        disabled={loading}
        variant={buttonConfig.variant}
        className={buttonConfig.className}
      >
        {loading ? (
          <div className="flex items-center justify-center space-x-2 px-4">
            <Sun className="w-4 h-4 text-orange-400 animate-spin" />
          </div>
        ) : (
          <>
            {buttonConfig.icon}
            {buttonConfig.text}
          </>
        )}
      </Button>
      {status === 'friends' && (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="mb-4 text-center">
                Are you sure you want to remove this friend from your friends
                list?
              </div>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="rounded-xl"
                  variant="outline"
                  onClick={() => setShowDialog(false)}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="button"
                onClick={handleRemoveFriend}
                disabled={loading}
              >
                {loading ? (
                  <Sun className="w-4 h-4 animate-spin text-orange-400" />
                ) : (
                  'Remove Friend'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default FriendButton;
