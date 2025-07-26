'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import {
  acceptFriendRequest,
  declineFriendRequest,
} from '@/lib/actions/friend.actions';
import { PendingFriendship } from '@/lib/types/social.types';

const FriendRequestDialog = ({
  friendRequests: initialRequests,
  onRequestUpdate,
}: {
  friendRequests: PendingFriendship[];
  onRequestUpdate?: () => void;
}) => {
  const [processing, setProcessing] = useState<string | null>(null);
  const [friendRequests, setFriendRequests] = useState(initialRequests);

  const handleAccept = async (friendshipId: string) => {
    setProcessing(friendshipId);
    setFriendRequests((prev) => prev.filter((req) => req.id !== friendshipId));
    try {
      const result = await acceptFriendRequest(friendshipId);
      if (result.success) {
        onRequestUpdate?.();
      } else {
        setFriendRequests((prev) => [
          ...prev,
          initialRequests.find((req) => req.id === friendshipId)!,
        ]);
        console.error('Error accepting friend request:', result.error);
      }
    } finally {
      setProcessing(null);
    }
  };

  const handleDecline = async (friendshipId: string) => {
    setProcessing(friendshipId);
    setFriendRequests((prev) => prev.filter((req) => req.id !== friendshipId));
    try {
      const result = await declineFriendRequest(friendshipId);
      if (result.success) {
        onRequestUpdate?.();
      } else {
        setFriendRequests((prev) => [
          ...prev,
          initialRequests.find((req) => req.id === friendshipId)!,
        ]);
        console.error('Error declining friend request:', result.error);
      }
    } finally {
      setProcessing(null);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm" variant="outline" className="text-xs">
          View Friend Requests
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Friend Requests ({friendRequests.length})</DialogTitle>
          <DialogDescription>
            Manage your pending friend requests
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {friendRequests.length > 0 ? (
            <div className="space-y-3">
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col md:flex-row items-center justify-between p-3 bg-gray-50 rounded-lg w-full max-w-full overflow-hidden"
                >
                  <div className="flex flex-col w-full md:w-auto min-w-0">
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {request.user.name}
                    </span>
                    <span className="text-xs text-gray-500 break-all truncate max-w-[180px] md:max-w-[240px]">
                      {request.user.email}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto mt-2 md:mt-0">
                    <Button
                      size="sm"
                      onClick={() => handleAccept(request.id)}
                      disabled={processing === request.id}
                      className="w-full md:w-auto"
                    >
                      {processing === request.id ? 'Processing...' : 'Accept'}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDecline(request.id)}
                      disabled={processing === request.id}
                      className="w-full md:w-auto"
                    >
                      {processing === request.id ? 'Processing...' : 'Decline'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-500">
                No pending friend requests
              </p>
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'} type="button" className="w-1/2 mx-auto">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FriendRequestDialog;
