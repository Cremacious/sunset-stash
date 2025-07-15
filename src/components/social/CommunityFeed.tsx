import PostListCard from './PostListCard';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/types/social.types';
import { SmilePlus } from 'lucide-react';
import Link from 'next/link';

const CommunityFeed = ({ posts }: { posts: Post[] }) => {
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) {
    return (
      <Card className="bg-white shadow-xl border-0 h-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
            <div className="flex items-center">Community Feed</div>
            <Button variant="outline" size="sm">
              View Feed
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center py-12">
          <div className="flex justify-center items-center mt-6">
            <SmilePlus className="text-purple-600" size={100} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 my-2">
            Your have no friends added
          </h3>
          <p className="text-gray-600 mb-6">
            Start building your community by adding friends to see their posts!
          </p>
          <Button asChild>
            <Link href="/friends/new">Add Your First Friend</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">Community Feed</div>
          <Button variant="outline" size="sm">
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
