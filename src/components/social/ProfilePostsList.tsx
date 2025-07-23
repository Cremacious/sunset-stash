'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import TimelinePost from './TimelinePost';
import { ProfilePost } from '@/lib/types/profile.types';

interface ProfilePostsListProps {
  posts: ProfilePost[];
}

const ProfilePostsList = ({ posts }: ProfilePostsListProps) => {
  const [displayedPosts, setDisplayedPosts] = useState<ProfilePost[]>(posts.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(5);
  const [loading, setLoading] = useState(false);

  const hasMorePosts = currentIndex < posts.length;

  const loadMorePosts = () => {
    setLoading(true);
    
    setTimeout(() => {
      const nextPosts = posts.slice(0, currentIndex + 5);
      setDisplayedPosts(nextPosts);
      setCurrentIndex(currentIndex + 5);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="space-y-4">
      {displayedPosts.length > 0 ? (
        <>
          {displayedPosts.map((post) => (
            <TimelinePost
              key={post.id}
              post={{
                ...post,
                createdAt: new Date(post.createdAt),
                stashItems: post.stashItems
                  ?.filter(item => item.stashItem)
                  .map(item => ({
                    ...item,
                    stashItem: {
                      ...item.stashItem,
                      dateAdded: new Date(item.stashItem.dateAdded),
                    },
                  })) || []
              }}
            />
          ))}
          
          {hasMorePosts && (
            <div className="text-center pt-4">
              <Button 
                onClick={loadMorePosts}
                disabled={loading}
                className="px-8 bg-purple-600 hover:bg-purple-700 text-white"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading...
                  </div>
                ) : (
                  `Load More Posts (${posts.length - currentIndex} remaining)`
                )}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="p-12 flex flex-col justify-center items-center ">
          <MessageSquare className="text-blue-500 w-16 h-16 mb-4" />
         
          <p className="text-center text-gray-600 mb-4">
            This user hasn&apos;t shared any posts yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePostsList;