'use client';
import { useState } from 'react';
import TimelinePost from '@/components/social/TimelinePost';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { PostWithStashItems } from '@/lib/types/social.types';

type Props = {
  posts: PostWithStashItems[];
  currentUserId: string;
};

const TimelineFeed = ({ posts, currentUserId }: Props) => {
  const [postFilter, setPostFilter] = useState('all');
  const [postsToShow, setPostsToShow] = useState(5);
  const [loadingMore, setLoadingMore] = useState(false);

  const filteredPosts = posts.filter((post) => {
    switch (postFilter) {
      case 'user':
        return post.userId === currentUserId;
      case 'friends':
        return post.userId !== currentUserId;
      case 'all':
      default:
        return true;
    }
  });

  const displayedPosts = filteredPosts.slice(0, postsToShow);
  const hasMorePosts = postsToShow < filteredPosts.length;

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setPostsToShow((prev) => prev + 5);
      setLoadingMore(false);
    }, 500);
  };

  const handleFilterChange = (value: string) => {
    setPostFilter(value);
    setPostsToShow(5);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-gradient-to-br from-pink-50 via-blue-50 to-pink-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/social/new-post">Create New Post</Link>
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:block">
              Filter:
            </span>
            <Select value={postFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-full sm:w-45 h-9 text-sm bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Posts </SelectItem>
                <SelectItem value="user">Your Posts</SelectItem>
                <SelectItem value="friends">Friends Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            Showing {displayedPosts.length} of {filteredPosts.length} posts
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {displayedPosts.length > 0 ? (
          <>
            {displayedPosts.map((post: PostWithStashItems) => (
              <TimelinePost key={post.id} post={post} />
            ))}
            {hasMorePosts && (
              <div className="text-center pt-6">
                <Button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-8 bg-purple-600 hover:bg-purple-700"
                >
                  {loadingMore ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Loading...
                    </div>
                  ) : (
                    `Load More Posts (${
                      filteredPosts.length - postsToShow
                    } remaining)`
                  )}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="p-12 flex flex-col justify-center items-center glassCard h-[500px] md:h-[600px]">
            <MessageSquare className="text-purple-500 w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {postFilter === 'all'
                ? 'No posts yet'
                : postFilter === 'user'
                ? 'No posts from you yet'
                : 'No posts from friends yet'}
            </h3>
            <p className="text-center text-gray-800 mb-4">
              {postFilter === 'all'
                ? 'Create your first post to get started!'
                : postFilter === 'user'
                ? 'Share something with your friends!'
                : 'Connect with friends to see their posts!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineFeed;
