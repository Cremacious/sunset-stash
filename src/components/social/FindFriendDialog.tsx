import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import FindFriends from './FindFriends';
import { ReactNode } from 'react';

const FindFriendDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="glassCard">
        <FindFriends />
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

export default FindFriendDialog;
