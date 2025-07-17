import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TimelinePost from '@/components/social/TimelinePost';
import FindFriends from '@/components/social/FindFriends';
import Link from 'next/link';
// import { getUserPosts } from '@/lib/actions/post.actions';
import { Post } from '@/lib/types/social.types';
import { MessageSquare } from 'lucide-react';
import RecentFriends from '@/components/social/RecentFriends';
import { samplePosts } from '@/lib/sampleData';
import UserImage from '@/components/social/UserImage';

const SocialPage = async () => {
  // const socialPosts = await getUserPosts();
  const socialPosts = samplePosts;

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
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="glassCard">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <UserImage />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">
                      User Name
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">
                    {socialPosts.length}
                  </p>
                  <p className="text-xs text-gray-600">Posts</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">5</p>
                  <p className="text-xs text-gray-600">Friends</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-xs text-gray-600">Requests</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs"
                  >
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <RecentFriends friends={friends} />

          <div className="glassCard">
            <FindFriends />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 glassCard">
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
                      comments: [],
                      createdAt: post.createdAt.toISOString(),
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
              <div className="bg-white p-12 flex flex-col justify-center items-center rounded-lg shadow-md min-h-screen">
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
      </div>
    </div>
  );
};

export default SocialPage;
