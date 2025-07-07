'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useState, use } from 'react';

interface PostPageProps {
  params: Promise<{
    postId: string;
  }>;
}

interface Comment {
  id: number;
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
}

const PostPage = ({ params }: PostPageProps) => {
  const router = useRouter();
  const { postId } = use(params);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: 'Mike D.',
      avatar: '👨‍🦲',
      text: 'Looks amazing! I love Blue Dream for creative sessions too. Perfect choice for a Marvel marathon! 🎬',
      timestamp: '1 hour ago',
      likes: 4,
    },
    {
      id: 2,
      user: 'Alex K.',
      avatar: '🧑‍🦱',
      text: 'Trulieve has been killing it with their Blue Dream lately. What was the THC on this batch?',
      timestamp: '45 minutes ago',
      likes: 2,
    },
    {
      id: 3,
      user: 'Emma R.',
      avatar: '👩‍🦳',
      text: 'This strain is perfect for movie nights! Have you tried their Gorilla Glue? Similar vibes 🌿',
      timestamp: '30 minutes ago',
      likes: 1,
    },
  ]);

  // Mock post data - in real app, this would come from API based on postId
  const post = {
    id: postId,
    user: 'Sarah M.',
    avatar: '👩‍🦰',
    activity: 'Movie Night',
    date: '2 hours ago',
    text: 'Just picked up some Blue Dream from Trulieve! Perfect for tonight&apos;s Marvel marathon 🎬✨ This strain always puts me in the perfect headspace for long movie sessions. The creativity boost is amazing and it doesn&apos;t make me too sleepy. Definitely one of my go-to strains for entertainment!',
    strains: [
      {
        id: 1,
        name: 'Blue Dream',
        type: 'Flower',
        thc: '22%',
        cbd: '0.5%',
        category: 'Hybrid',
        dispensary: 'Trulieve',
        size: '3.5g',
        lineage: 'Blueberry x Haze',
      },
    ],
    likes: 15,
    totalComments: comments.length,
  };

  const getActivityIcon = (activity: string) => {
    switch (activity.toLowerCase()) {
      case 'movie night':
        return '🎬';
      case 'workout':
        return '💪';
      case 'chill time':
        return '😌';
      case 'munchies':
        return '🍿';
      default:
        return '🌿';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'flower':
        return 'from-green-500 to-emerald-600';
      case 'vape cart':
        return 'from-blue-500 to-cyan-600';
      case 'concentrate':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'flower':
        return '🌸';
      case 'vape cart':
        return '💨';
      case 'concentrate':
        return '🧪';
      default:
        return '🌿';
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        user: 'You',
        avatar: '😊',
        text: newComment,
        timestamp: 'Just now',
        likes: 0,
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleLikeComment = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  return (
    <div className="space-y-8 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl md:p-6 px-1 py-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          onClick={() => router.push('/social')}
          className="bg-white/50 backdrop-blur-sm"
        >
          ← Back to Feed
        </Button>
        <h1 className="text-2xl font-bold text-gray-800">Post Details</h1>
      </div>

      {/* Main Post */}
      <Card className="bg-white shadow-xl border-0 max-w-4xl mx-auto">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                {post.avatar}
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {post.user}
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{getActivityIcon(post.activity)}</span>
                  <span>{post.activity}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Post Text */}
          <div className="text-gray-800 leading-relaxed text-lg">
            {post.text}
          </div>

          {/* Strain Information */}
          <div className="space-y-4">
            {post.strains.map((strain) => (
              <div
                key={strain.id}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(
                      strain.type
                    )} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-xl">
                      {getTypeIcon(strain.type)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {strain.name}
                    </h3>
                    <p className="text-gray-600">
                      {strain.type} • {strain.dispensary} • {strain.size}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <p className="text-gray-600 text-sm mb-1">THC</p>
                    <p className="font-bold text-gray-800">{strain.thc}</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-gray-600 text-sm mb-1">CBD</p>
                    <p className="font-bold text-gray-800">{strain.cbd}</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-gray-600 text-sm mb-1">Category</p>
                    <p className="font-bold text-gray-800">{strain.category}</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-gray-600 text-sm mb-1">Lineage</p>
                    <p className="font-bold text-gray-800 text-xs">
                      {strain.lineage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Post Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex space-x-6">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-600 hover:text-orange-600"
              >
                <span className="mr-2 text-xl">👍</span>
                {post.likes} Likes
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-600 hover:text-orange-600"
              >
                <span className="mr-2 text-xl">💬</span>
                {post.totalComments} Comments
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-600 hover:text-orange-600"
              >
                <span className="mr-2 text-xl">↗️</span>
                Share
              </Button>
            </div>
            <div className="flex justify-end px-6">
              <Button>Edit Post</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card className="bg-white shadow-xl border-0 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-3">💬</span>
            Comments ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Comment */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-lg">
                😊
              </div>
              <div className="flex-1 space-y-3">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Add a comment..."
                  rows={3}
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white"
                  >
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg">
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800">
                        {comment.user}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {comment.text}
                    </p>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikeComment(comment.id)}
                        className="text-gray-600 hover:text-orange-600 p-0 h-auto"
                      >
                        <span className="mr-1">👍</span>
                        {comment.likes > 0 && comment.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-orange-600 p-0 h-auto"
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Comments */}
          {comments.length > 0 && (
            <div className="text-center pt-4">
              <Button
                variant="outline"
                className="text-gray-600 border-gray-300"
              >
                Load More Comments
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPage;
