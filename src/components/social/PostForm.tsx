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
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';
import { postFormSchema } from '@/lib/validators/post.validator';
import { useState } from 'react';
import { StashItem } from '@/lib/types';
import { Label } from '../ui/label';
import { useRouter } from 'next/navigation';
import { createPost } from '@/lib/actions/post.actions';

import { Container, Sun } from 'lucide-react';

const PostForm = ({ stashItems }: { stashItems: StashItem[] }) => {
  const [selectedStashItems, setSelectedStashItems] = useState<StashItem[]>([]);
  const [showStashSelector, setShowStashSelector] = useState(false);
  const [stashSearch, setStashSearch] = useState('');
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
      const response = await createPost(postData);
      if (response.success) {
        router.push('/social');
        toast.success('Post created successfully!');
      } else {
        toast.error('Failed to create post. Please try again.');
      }
    } catch (error) {
      console.log('Error creating post:', error);
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
  };

  const { isSubmitting } = form.formState;

  // Sort and filter stash items for selector
  const sortedStashItems = [...stashItems].sort((a, b) => {
    const dateA = new Date(a.dateAdded).getTime();
    const dateB = new Date(b.dateAdded).getTime();
    return dateB - dateA;
  });
  const filteredStashItems = sortedStashItems.filter(
    (item) =>
      item.name.toLowerCase().includes(stashSearch.toLowerCase()) &&
      !selectedStashItems.some((selected) => selected.id === item.id)
  );

  return (
    <div className="flex items-center justify-center py-10 ">
      <div className="max-w-3xl w-full mx-auto">
        <div className="bg-gradient-to-br from-orange-50 via-pink-100 to-blue-200 border-0 border-b-4 border-b-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl min-h-[110px] w-full relative">
          <div className="p-2 md:p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl pl-2 pt-4 p-2 md:p-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <h2 className="text-2xl font-bold text-purple-800 permanent-marker-font">
                      Create Post
                    </h2>
                  </div>
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
                  <div className="mt-4"></div>
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
                  <div className="mt-4"></div>
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
                  <div className="mt-4"></div>
                  {selectedStashItems.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-700">
                        Selected Strains:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedStashItems.map((item) => (
                          <div
                            key={item.id}
                            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200 min-h-[80px] flex items-center justify-between"
                          >
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
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-4"></div>
                  {showStashSelector && (
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">
                        Choose from your stash:
                      </h4>
                      <div className="flex items-center gap-2 mb-4">
                        <input
                          type="text"
                          value={stashSearch}
                          onChange={(e) => setStashSearch(e.target.value)}
                          placeholder="Search by name..."
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full max-w-xs text-sm"
                        />
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="text-gray-600 border-gray-300"
                          onClick={() => setStashSearch('')}
                        >
                          Clear
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto justify-items-center">
                        {filteredStashItems.length > 0 ? (
                          filteredStashItems.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => toggleStashItem(item)}
                              className="bg-white rounded-lg p-3 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all duration-200 w-full min-h-[80px] flex items-center"
                            >
                              <div className="flex items-center space-x-3 w-full">
                                <div className="w-8 h-8 bg-gradient-to-r rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm"></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-semibold text-gray-800 truncate">
                                    {item.name}
                                  </h5>
                                  <p className="text-sm text-gray-600 truncate">
                                    {item.category} • THC: {item.thc}%
                                  </p>
                                </div>
                                <div className="text-purple-500">+</div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full flex flex-col justify-center items-center py-8">
                            <p className="text-center">
                              <Container className="text-purple-500 w-24 h-24 mb-4" />
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/social')}
                    className="flex-1 bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl py-3"
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={!form.formState.isDirty || isSubmitting}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl py-3 shadow-lg"
                  >
                    {isSubmitting ? (
                      <Sun className="w-4 h-4 animate-spin text-yellow-300" />
                    ) : (
                      'Create Post'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostForm;
