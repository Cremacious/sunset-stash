'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';
import { postFormSchema } from '@/lib/validators/post.validator';
import { useRouter } from 'next/navigation';
import { editPost } from '@/lib/actions/post.actions';
import { Container, Sun } from 'lucide-react';
import { PostWithStashItems } from '@/lib/types/social.types';
import { StashItem } from '@/lib/types/stash.types';
import { Label } from '../ui/label';

type EditPostFormProps = {
  post: PostWithStashItems;
  stashItems: StashItem[];
};

const EditPostForm = ({ post, stashItems }: EditPostFormProps) => {
  const router = useRouter();

  const initialSelected: StashItem[] =
    post.stashItems?.map((item) => ({
      ...item.stashItem,
      dateAdded:
        typeof item.stashItem.dateAdded === 'string'
          ? item.stashItem.dateAdded
          : item.stashItem.dateAdded.toISOString(),
    })) ?? [];

  const [selectedStashItems, setSelectedStashItems] =
    useState<StashItem[]>(initialSelected);
  const [showStashSelector, setShowStashSelector] = useState(false);

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      activity: post.activity || '',
      content: post.content || '',
      stashItemIds: initialSelected.map((item) => item.id),
    },
  });

  useEffect(() => {
    form.setValue(
      'stashItemIds',
      selectedStashItems.map((item) => item.id)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStashItems]);

  async function onSubmit(values: z.infer<typeof postFormSchema>) {
    try {
      const response = await editPost(post.id, {
        ...values,
        stashItemIds: selectedStashItems.map((item) => item.id),
      });
      if (response.success) {
        router.push('/social');
        toast.success('Post edited successfully!');
      } else {
        toast.error(response.error || 'Failed to edit post. Please try again.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  const handleRemoveStashItem = (item: StashItem) => {
    setSelectedStashItems((prev) =>
      prev.filter((selected) => selected.id !== item.id)
    );
  };

  const handleAddStashItem = (item: StashItem) => {
    setSelectedStashItems((prev) => [...prev, item]);
  };

  const { isSubmitting } = form.formState;

  const availableStashItems = stashItems.filter(
    (item) => !selectedStashItems.some((selected) => selected.id === item.id)
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share your thoughts</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium text-gray-700">
            Include strains from your stash
          </Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowStashSelector(!showStashSelector)}
            className="text-purple-600 border-purple-300 hover:bg-purple-50"
          >
            {showStashSelector ? 'Hide Stash' : 'Browse Stash'}
          </Button>
        </div>

        {selectedStashItems.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700">
              Selected Strains:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedStashItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h5 className="font-semibold text-gray-800">
                          {item.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {item.category} • THC: {item.thc}%
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStashItem(item)}
                      className="text-purple-500 hover:text-purple-700 hover:bg-purple-50"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showStashSelector && (
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Choose from your stash:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto justify-items-center">
              {availableStashItems.length > 0 ? (
                availableStashItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-3 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white text-sm"></span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-800">
                          {item.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {item.category} • THC: {item.thc}%
                        </p>
                      </div>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="text-purple-500 border-purple-300 hover:bg-purple-50"
                        onClick={() => handleAddStashItem(item)}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col justify-center items-center py-8">
                  <Container className="text-purple-500 w-24 h-24 mb-4" />
                  <p className="text-center">You have no stash items yet.</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/social')}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button disabled={isSubmitting} type="submit" className="flex-1 ">
            {isSubmitting ? (
              <Sun className="animate-spin text-yellow-300" />
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditPostForm;
