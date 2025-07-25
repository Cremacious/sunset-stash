import PostListCard from './PostListCard';
import { Button } from '../ui/button';
import { CardContent, CardHeader } from '@/components/ui/card';
import { PostWithStashItems } from '@/lib/types/social.types';
import { SmilePlus } from 'lucide-react';
import Link from 'next/link';

const CommunityFeed = ({ posts }: { posts: PostWithStashItems[] }) => {
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      <div className=" h-full space-y-4">
        <div className="text-xl font-bold text-gray-800 flex items-center justify-between bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 rounded-lg shadow-md border-b-4 border-b-orange-300">
          <div className="flex items-center permanent-marker-font text-2xl">
            Community Feed
          </div>
          <Button asChild size="sm">
            <Link href="/social">View All</Link>
          </Button>
        </div>

        {latestPosts.length === 0 ? (
          <div className="glassCard h-[300px] flex flex-col items-center justify-center">
            <CardHeader />
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <SmilePlus className="w-10 h-10 text-blue-500 mb-2" />
                <span className="text-gray-800 text-center">
                  Your friends have no posts.
                </span>
              </div>
            </CardContent>
          </div>
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
