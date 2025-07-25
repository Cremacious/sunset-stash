import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getPostById } from '@/lib/actions/post.actions';
import Link from 'next/link';
import { ArrowLeft, Edit, MessageCircle } from 'lucide-react';
import { areUsersFriends } from '@/lib/actions/friend.actions';
import CommentForm from '@/components/social/CommentForm';
import { Comment } from '@/lib/types/post.types';
import StashItemListCard from '@/components/stash/StashItemListCard';
import { getAuthenticatedUser } from '@/lib/server-utils';
import CommentSection from '@/components/social/CommentSection';

const PostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const result = await getPostById(postId);

  if (!result.success || !result.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-6 text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Post Not Found
            </h1>
            <p className="text-gray-600 mb-4">
              {result.error || 'The post you are looking for does not exist.'}
            </p>
            <Button asChild>
              <Link href="/social">Back to Social Feed</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const post = result.data;
  const comments: Comment[] = post.comments;
  const sessionUser = await getAuthenticatedUser();
  const sessionUserId = sessionUser.user?.id;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  const isFriend = await areUsersFriends(post.userId);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Button
          className="bg-gradient-to-br from-pink-50 via-blue-100 to-purple-200 border-0 border-b-4 border-b-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl text-purple-700 font-bold"
          variant="ghost"
          size="sm"
          asChild
        >
          <Link href="/social">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Posts
          </Link>
        </Button>
      </div>

      <div className="bg-gradient-to-br from-pink-50 via-blue-100 to-purple-200 border-0 border-b-4 border-b-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-xl min-h-[110px] w-full relative">
        <div className="flex items-center justify-between p-3 pb-2 relative">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center shadow-md">
              <span className="text-purple-700 font-bold text-lg">
                {getInitials(post.author)}
              </span>
            </div>
            <div>
              <p className="font-bold text-xl permanent-marker-font text-purple-900">
                {post.author}
              </p>
              <p className="text-xs text-gray-600">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Badge
            variant="outline"
            className="bg-orange-100/80 text-orange-700 border-orange-200 font-medium"
          >
            {post.activity}
          </Badge>
        </div>
        <div className="pb-4 px-4">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/30">
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>

          {post.stashItems && post.stashItems.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-purple-700">
                  Strains:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.stashItems.map((item, index) => (
                  <Badge
                    key={index}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-sm"
                  >
                    {item.stashItem.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {post.stashItems && post.stashItems.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 permanent-marker-font">
                Strain Details
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.stashItems.map((item, index) => (
                    <StashItemListCard
                      key={index}
                      stashItem={{
                        ...item.stashItem,
                        dateAdded:
                          item.stashItem.dateAdded instanceof Date
                            ? item.stashItem.dateAdded.toISOString()
                            : item.stashItem.dateAdded,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between rounded-lg p-3 mt-2">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <MessageCircle className="text-purple-600" size={30} />
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {comments.length}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-300 hover:bg-purple-50"
                asChild
              >
                <Link href={`/social/${post.id}/edit`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 via-blue-100 to-purple-200 border-0 border-b-4 border-b-purple-300 shadow-xl overflow-hidden rounded-xl">
        <div className="p-4 space-y-4">
          {isFriend && <CommentForm postId={post.id} />}
          <CommentSection
            comments={comments}
            sessionUserId={sessionUserId}
            postId={post.id}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
