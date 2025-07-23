import PostListCard from './PostListCard';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PostWithStashItems } from '@/lib/types/social.types';
import { SmilePlus } from 'lucide-react';

const CommunityFeed = ({ posts }: { posts: PostWithStashItems[] }) => {
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      <div className=" h-full space-y-4">
        <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-white p-4 rounded-lg shadow-md border-b-4 border-b-blue-500">
          <div className="flex items-center fugaz-font text-2xl">
            Community Feed
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        {latestPosts.length === 0 ? (
          <Card className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 p-6">
            <CardHeader />
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <SmilePlus className="w-10 h-10 text-blue-500 mb-2" />
                <span className="text-gray-500 text-center">
                  Your friends haven&apos;t made any posts.
                </span>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <PostListCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityFeed;
