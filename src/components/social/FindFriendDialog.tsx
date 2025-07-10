import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import FindFriends from './FindFriends';
import { ReactNode } from 'react';

const FindFriendDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Find Friends</DialogTitle>
        <FindFriends />
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
        <DialogFooter>
          {' '}
          <DialogClose asChild>
            <Button type="button" className="w-1/2 mx-auto">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FindFriendDialog;
