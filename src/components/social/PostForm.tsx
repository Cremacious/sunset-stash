'use client';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { postFormSchema } from '@/lib/validators/post.validator';
import { useState } from 'react';
import { StashItem } from '@/lib/types';
import { Label } from '../ui/label';
import { useRouter } from 'next/navigation';
import { createPost } from '@/lib/actions/post.actions';

const PostForm = ({ stashItems }: { stashItems: StashItem[] }) => {
  const [selectedStashItems, setSelectedStashItems] = useState<StashItem[]>([]);
  const [showStashSelector, setShowStashSelector] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      activity: '',
      content: '',
      stashItemIds: [],
    },
  });

  async function onSubmit(values: z.infer<typeof postFormSchema>) {
    try {
      const stashItemIds = selectedStashItems.map((item) => item.id);

      const postData = {
        activity: values.activity,
        content: values.content,
        stashItemIds: stashItemIds,
      };
      console.log('Submitting:', postData);
      const response = await createPost(postData);
      if (response.success) {
        toast.success('Post created successfully!');
      } else {
        toast.error('Failed to create post. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }
  const toggleStashItem = (item: StashItem) => {
    setSelectedStashItems((prev) => {
      const isSelected = prev.find((selected) => selected.id === item.id);
      if (isSelected) {
        return prev.filter((selected) => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
    console.log(selectedStashItems);
  };

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
              <FormLabel>What are you doing?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Activity" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>

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
                      onClick={() => toggleStashItem(item)}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto">
              {stashItems
                .filter(
                  (item) =>
                    !selectedStashItems.find(
                      (selected) => selected.id === item.id
                    )
                )
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleStashItem(item)}
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
                      <div className="text-purple-500">+</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* <Button type="submit">Submit</Button> */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/social')}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button type="submit" className="flex-1 ">
            Share Post
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default PostForm;
