import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getPostById } from '@/lib/actions/post.actions';
import Link from 'next/link';
import { ArrowLeft, Edit3, Heart, MessageCircle } from 'lucide-react';
import { areUsersFriends } from '@/lib/actions/friend.actions';
import CommentForm from '@/components/social/CommentForm';
import CommentCard from '@/components/social/CommentCard';

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  const isFriend = await areUsersFriends(post.userId);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="">
        <Button
          className="glassCard text-white font-bold"
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

      <div className="bg-white rounded-xl border-b-6 border-b-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="bg-blue-50 p-4 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">
                  {getInitials(post.author)}
                </span>
              </div>
              <div>
                <p className="font-bold text-gray-800">{post.author}</p>
                <p className="text-xs text-gray-600">
                  {post.createdAt instanceof Date
                    ? post.createdAt.toLocaleDateString()
                    : new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-700 border-blue-300 font-medium"
            >
              {post.activity}
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>

          {post.stashItems && post.stashItems.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Strains:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.stashItems.map((item, index) => (
                  <Badge
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-sm"
                  >
                    {item.stashItem.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {post.stashItems && post.stashItems.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Strain Details
              </h3>
              <div className="space-y-4">
                {post.stashItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🌸</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">
                          {item.stashItem.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.stashItem.category} • {item.stashItem.amount}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-white p-3 rounded border">
                        <p className="text-gray-600 text-xs mb-1">THC</p>
                        <p className="font-bold text-gray-800">
                          {item.stashItem.thc}%
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-gray-600 text-xs mb-1">CBD</p>
                        <p className="font-bold text-gray-800">
                          {item.stashItem.cbd}%
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-gray-600 text-xs mb-1">Type</p>
                        <p className="font-bold text-gray-800">
                          {item.stashItem.type}
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-gray-600 text-xs mb-1">Lineage</p>
                        <p className="font-bold text-gray-800 text-xs">
                          {item.stashItem.lineage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <MessageCircle className="text-purple-600" size={30} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg px-3 py-2">
                <Heart fill="red" size={30} className="text-red-500" />
              </button>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-300 hover:bg-purple-50"
                asChild
              >
                <Link href={`/social/${post.id}/edit`}>
                  <Edit3 className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-xl border-b-6 border-b-purple-500 shadow-lg overflow-hidden">
        <div className="p-4 space-y-4">
          {/* Add Comment Form */}
          {isFriend && <CommentForm postId={post.id} />}

          {/* No Comments Message */}

          {post}
          <div className="text-center py-8">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No comments yet.</p>
          </div>

          {/* Future Comments Would Go Here */}

          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
