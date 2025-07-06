'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const StashItemPage = () => {
  const router = useRouter();

  // Mock stash item data - in real app this would come from params and database
  const stashItem = {
    id: 1,
    name: 'Blue Dream',
    category: 'Flower',
    type: 'Hybrid',
    thc: 18,
    cbd: 1,
    amount: '3.5g',
    rating: 4.8,
    lineage: 'Blueberry × Haze',
    dispensary: 'Trulieve',
    price: 45.5,
    dateAdded: '2025-01-05',
    lastUsed: '2025-01-10',
    totalUses: 12,
    effects: ['Creative', 'Relaxed', 'Happy', 'Euphoric'],
    flavors: ['Sweet', 'Berry', 'Citrus'],
    notes:
      'Perfect for creativity and relaxation. The berry flavor is really prominent and the effects are well-balanced. Great for afternoon use when I want to be productive but chill.',
    images: ['/placeholder-strain1.jpg', '/placeholder-strain2.jpg'],
  };

  // Mock comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      user: {
        name: 'Jake S.',
        avatar: 'JS',
        color: 'from-blue-400 to-purple-500',
      },
      content:
        'Yooo I love Blue Dream! Got some from Curaleaf last week and it was fire 🔥',
      timestamp: '2 hours ago',
      likes: 3,
    },
    {
      id: 2,
      user: {
        name: 'Maria R.',
        avatar: 'MR',
        color: 'from-green-400 to-emerald-500',
      },
      content:
        'This is one of my favorites too! Perfect for creative sessions. The taste is incredible.',
      timestamp: '4 hours ago',
      likes: 5,
    },
    {
      id: 3,
      user: {
        name: 'Alex T.',
        avatar: 'AT',
        color: 'from-pink-400 to-red-500',
      },
      content:
        'Been wanting to try this strain! How does it compare to Green Crack for energy?',
      timestamp: '1 day ago',
      likes: 1,
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: {
          name: 'You',
          avatar: 'YU',
          color: 'from-orange-400 to-pink-500',
        },
        content: newComment,
        timestamp: 'Just now',
        likes: 0,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'indica':
        return 'from-purple-400 to-indigo-500';
      case 'sativa':
        return 'from-green-400 to-emerald-500';
      case 'hybrid':
        return 'from-orange-400 to-pink-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'indica':
        return '🌙';
      case 'sativa':
        return '☀️';
      case 'hybrid':
        return '🌅';
      default:
        return '🌿';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="text-gray-600"
        >
          ← Back to Stash
        </Button>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="outline" size="sm">
            Share
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Strain Header Card */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(
                      stashItem.type
                    )} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-3xl">
                      {getTypeIcon(stashItem.type)}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {stashItem.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {stashItem.type} • {stashItem.category} •{' '}
                      {stashItem.amount}
                    </CardDescription>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 text-lg">
                        ⭐ {stashItem.rating}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({stashItem.totalUses} uses)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">
                    ${stashItem.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    From {stashItem.dispensary}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Potency & Details */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-2xl mr-3">🧪</span>
                Potency & Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-2xl font-bold text-green-700">
                    {stashItem.thc}%
                  </p>
                  <p className="text-sm text-green-600">THC</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">
                    {stashItem.cbd}%
                  </p>
                  <p className="text-sm text-blue-600">CBD</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm font-bold text-purple-700">
                    {stashItem.type}
                  </p>
                  <p className="text-xs text-purple-600">Type</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm font-bold text-orange-700">
                    {stashItem.category}
                  </p>
                  <p className="text-xs text-orange-600">Category</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Lineage/Genetics
                  </h4>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {stashItem.lineage}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Effects</h4>
                  <div className="flex flex-wrap gap-2">
                    {stashItem.effects.map((effect, index) => (
                      <span
                        key={index}
                        className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Flavors & Aroma
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stashItem.flavors.map((flavor, index) => (
                      <span
                        key={index}
                        className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Notes */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-2xl mr-3">📝</span>
                Your Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;{stashItem.notes}&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Usage History */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Usage History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-xl font-bold text-blue-700">
                    {stashItem.totalUses}
                  </p>
                  <p className="text-sm text-blue-600">Total Uses</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-bold text-green-700">
                    {stashItem.lastUsed}
                  </p>
                  <p className="text-xs text-green-600">Last Used</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-bold text-purple-700">
                    {stashItem.dateAdded}
                  </p>
                  <p className="text-xs text-purple-600">Added to Stash</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Comments Section */}
        <div className="space-y-6">
          {/* Quick Actions */}
          {/* <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                Log Usage
              </Button>
              <Button variant="outline" className="w-full">
                Update Rating
              </Button>
              <Button variant="outline" className="w-full">
                Add Photos
              </Button>
            </CardContent>
          </Card> */}

          {/* Friends Comments */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                <span className="text-xl mr-2">💬</span>
                Friends Comments
              </CardTitle>
              <CardDescription>
                See what your friends think about this strain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Comment */}
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-semibold">YU</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="Share your thoughts..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="border-gray-200 focus:border-green-500"
                    />
                    <Button
                      onClick={handleAddComment}
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                      disabled={!newComment.trim()}
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${comment.user.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-xs font-semibold">
                        {comment.user.avatar}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="text-sm font-semibold text-gray-800">
                          {comment.user.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {comment.timestamp}
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {comment.content}
                      </p>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-500">
                          <span>❤️</span>
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-xs text-gray-500 hover:text-blue-500">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {comments.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <span className="text-3xl block mb-2">💬</span>
                  <p className="text-sm">No comments yet</p>
                  <p className="text-xs">
                    Be the first to share your thoughts!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StashItemPage;
