import PostListCard from './PostListCard';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/types/social.types';

const CommunityFeed = ({ posts }: { posts: Post[] }) => {
  const latestPosts = posts.slice(0, 3);
  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">Community Feed</div>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => router.push('/social')}
          >
            View Feed
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <PostListCard key={post.id} post={post} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityFeed;
