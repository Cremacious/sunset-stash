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
        <DialogFooter>
          {' '}
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

export default FindFriendDialog;
