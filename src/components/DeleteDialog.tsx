import { Button } from '@/components/ui/button';
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

import { deletePurchase } from '@/lib/actions/purchase.actions';
import { deleteStashItem } from '@/lib/actions/stash.actions';
import { deletePost } from '@/lib/actions/post.actions';
import { redirect } from 'next/navigation';

export function DeleteDialog({
  deleteId,
  deleteType,
}: {
  deleteId: string;
  deleteType: 'purchase' | 'stash' | 'post';
}) {
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    switch (deleteType) {
      case 'purchase':
        await deletePurchase(deleteId);
        redirect('/purchases');

      case 'stash':
        await deleteStashItem(deleteId);
        redirect('/stash');

      case 'post':
        await deletePost(deleteId);
        redirect('/social');

      default:
        break;
    }
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-red-500">Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button className="rounded-lg" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={handleDelete} className="" type="submit">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
