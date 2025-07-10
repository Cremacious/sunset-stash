import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TimelinePost from '@/components/social/TimelinePost';
// import RecentFriendCard from '@/components/social/RecentFriendCard';
import FindFriends from '@/components/social/FindFriends';
import Link from 'next/link';
import { getUserPosts } from '@/lib/actions/post.actions';
import { Post } from '@/lib/types/social.types';
import { MessageSquare } from 'lucide-react';
import RecentFriends from '@/components/social/RecentFriends';

const SocialPage = async () => {
  const socialPosts = await getUserPosts();

  // Define the type for what getUserPosts actually returns
  type PostWithStashItems = {
    id: string;
    author: string;
    activity: string;
    content: string;
    createdAt: Date;
    userId: string;
    stashItems: Array<{
      postId: string;
      stashItemId: string;
      stashItem: {
        id: string;
        name: string;
        category: string;
        type: string;
        amount: string;
        thc: number;
        cbd: number;
        lineage: string;
        notes: string;
        dateAdded: Date;
        userId: string;
      };
    }>;
  };

  // Mock friends data
  const friends = [
    {
      id: '1',
      name: 'Jake Rodriguez',
      email: 'jake.r@email.com',
      createdAt: '2025-01-13',
    },
    {
      id: '2',
      name: 'Jake Rodriguez',
      email: 'jake.r@email.com',
      createdAt: '2025-01-13',
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* left Column - Timeline */}
        <div className="lg:col-span-2 space-y-6 md:p-6 p-2 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
          {/* Timeline Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <Button asChild>
                <Link href="/social/new-post">Create New Post</Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Select>
                  <SelectTrigger className="w-32 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Posts</SelectItem>
                    <SelectItem value="user">Your Posts</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Timeline Posts */}
          <div className="space-y-4">
            {socialPosts && socialPosts.length > 0 ? (
              socialPosts.map((post: PostWithStashItems) => (
                <TimelinePost
                  key={post.id}
                  post={
                    {
                      ...post,
                      comments: [], // Add empty comments array since we're not loading comments yet
                      createdAt: post.createdAt.toISOString(), // Convert Date to string
                      stashItems: post.stashItems.map((si) => ({
                        ...si.stashItem,
                        dateAdded: si.stashItem.dateAdded
                          .toISOString()
                          .split('T')[0],
                      })),
                    } as Post
                  }
                />
              ))
            ) : (
              <div className="bg-white p-12 flex flex-col justify-center items-center rounded-lg shadow-md">
                <MessageSquare className="text-purple-500 w-24 h-full mb-4" />
                <p className="text-center">
                  You have no posts yet. Create your first post!
                </p>
              </div>
            )}
          </div>

          {/* Load More */}
          {socialPosts && socialPosts.length > 0 && (
            <div className="text-center">
              <Button className="px-8">Load More Posts</Button>
            </div>
          )}
        </div>

        <div className="space-y-4 ">
          <RecentFriends friends={friends} />

          <div className="md:p-6 p-2 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl">
            <FindFriends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
