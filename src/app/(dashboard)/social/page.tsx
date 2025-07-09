import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TimelinePost from '@/components/social/TimelinePost';
import RecentFriendCard from '@/components/social/RecentFriendCard';
import FindFriends from '@/components/social/FindFriends';
import Link from 'next/link';
import { getUserPosts } from '@/lib/actions/post.actions';
import { Post } from '@/lib/types/social.types';

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
      id: '1',
      name: 'Jake Rodriguez',
      email: 'jake.r@email.com',
      createdAt: '2025-01-13',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* left Column - Timeline */}
        <div className="lg:col-span-2 space-y-6 p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
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
              <div className="text-center text-gray-500 py-8">
                <p>No posts yet. Create your first post!</p>
              </div>
            )}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button className="px-8">Load More Posts</Button>
          </div>
        </div>
        {/* right Column - Friends & Search */}
        <div className="space-y-6 ">
          {/* Recent Friends */}
          <div className="p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
            <div className="bg-white rounded-lg border border-gray-200 px-2 py-4 md:p-6 ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-xl mr-2">🤝</span>
                  Recent Friends
                </h2>
                <Button variant="outline" size="sm" className="text-xs">
                  View All ({friends.length})
                </Button>
              </div>

              <div className="space-y-3">
                {friends.slice(0, 3).map((friend) => (
                  <RecentFriendCard key={friend.id} friend={friend} />
                ))}
              </div>
            </div>
          </div>
          {/* Friend Search */}
          <div className="p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl">
            <FindFriends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
