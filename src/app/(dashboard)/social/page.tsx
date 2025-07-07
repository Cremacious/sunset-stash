'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SocialPage = () => {
  const router = useRouter();

  const [searchEmail, setSearchEmail] = useState('');
  const [timelineFilter, setTimelineFilter] = useState('all'); // 'all', 'user', 'friends'

  // Mock friends data
  const friends = [
    {
      id: 1,
      name: 'Jake Rodriguez',
      email: 'jake.r@email.com',
      avatar: 'JR',
      color: 'from-blue-400 to-purple-500',
      addedDate: '2025-01-14',
      status: 'online',
      lastActivity: '2 hours ago',
      mutualFriends: 3,
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      avatar: 'MS',
      color: 'from-green-400 to-emerald-500',
      addedDate: '2025-01-13',
      status: 'offline',
      lastActivity: '1 day ago',
      mutualFriends: 7,
    },
    {
      id: 3,
      name: 'Alex Thompson',
      email: 'alex.t@email.com',
      avatar: 'AT',
      color: 'from-pink-400 to-red-500',
      addedDate: '2025-01-12',
      status: 'online',
      lastActivity: '30 minutes ago',
      mutualFriends: 2,
    },
    {
      id: 4,
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      avatar: 'SC',
      color: 'from-purple-400 to-indigo-500',
      addedDate: '2025-01-10',
      status: 'offline',
      lastActivity: '3 days ago',
      mutualFriends: 5,
    },
  ];

  // Mock social posts data
  const socialPosts = [
    {
      id: 1,
      type: 'purchase',
      author: {
        name: 'You',
        avatar: 'ME',
        color: 'from-orange-400 to-yellow-500',
        isUser: true,
      },
      timestamp: '2025-01-15T14:30:00Z',
      timeAgo: '2 hours ago',
      content: 'Just picked up some Blue Dream from Trulieve! 🌸',
      data: {
        dispensary: 'Trulieve',
        items: ['Blue Dream', 'Mango Cart'],
        total: 77.5,
      },
      likes: 8,
      comments: 3,
      liked: true,
    },
    {
      id: 2,
      type: 'review',
      author: {
        name: 'Jake Rodriguez',
        avatar: 'JR',
        color: 'from-blue-400 to-purple-500',
        isUser: false,
      },
      timestamp: '2025-01-15T10:15:00Z',
      timeAgo: '6 hours ago',
      content:
        'Wedding Cake is amazing for evening relaxation. Highly recommend! ⭐⭐⭐⭐⭐',
      data: {
        strain: 'Wedding Cake',
        rating: 5,
        effects: ['Relaxed', 'Sleepy', 'Happy'],
      },
      likes: 12,
      comments: 7,
      liked: false,
    },
    {
      id: 3,
      type: 'stash_update',
      author: {
        name: 'Maria Santos',
        avatar: 'MS',
        color: 'from-green-400 to-emerald-500',
        isUser: false,
      },
      timestamp: '2025-01-14T16:45:00Z',
      timeAgo: '1 day ago',
      content: 'Added some premium Live Rosin to my stash collection 🍯',
      data: {
        item: 'Gorilla Glue Live Rosin',
        category: 'concentrate',
        thc: 82.3,
      },
      likes: 6,
      comments: 2,
      liked: true,
    },
    {
      id: 4,
      type: 'achievement',
      author: {
        name: 'Alex Thompson',
        avatar: 'AT',
        color: 'from-pink-400 to-red-500',
        isUser: false,
      },
      timestamp: '2025-01-14T09:20:00Z',
      timeAgo: '1 day ago',
      content:
        'Unlocked Cannabis Connoisseur badge! 🏆 Tried 25 different strains this month.',
      data: {
        badge: 'Cannabis Connoisseur',
        milestone: '25 strains',
      },
      likes: 15,
      comments: 5,
      liked: false,
    },
    {
      id: 5,
      type: 'purchase',
      author: {
        name: 'Sarah Chen',
        avatar: 'SC',
        color: 'from-purple-400 to-indigo-500',
        isUser: false,
      },
      timestamp: '2025-01-13T18:30:00Z',
      timeAgo: '2 days ago',
      content:
        'First time trying RSO capsules from Rise. Excited to see how they work! 💊',
      data: {
        dispensary: 'Rise',
        items: ['RSO Capsules'],
        total: 45.0,
      },
      likes: 4,
      comments: 8,
      liked: false,
    },
  ];

  // Filter posts based on timeline filter
  const filteredPosts = socialPosts.filter((post) => {
    if (timelineFilter === 'user') return post.author.isUser;
    if (timelineFilter === 'friends') return !post.author.isUser;
    return true; // 'all'
  });

  const handleSearchFriend = () => {
    if (searchEmail.trim()) {
      console.log('Searching for friend:', searchEmail);
      // In real app, this would search for users by email
      setSearchEmail('');
    }
  };

  const handleLikePost = (postId: number) => {
    console.log('Toggling like for post:', postId);
    // In real app, this would update the like status
  };

  const getCategoryIcon = (category: string) => {
    const categoryMap: Record<string, string> = {
      flower: '🌸',
      vape: '💨',
      concentrate: '🍯',
      edible: '🍪',
      topical: '🧴',
    };
    return categoryMap[category] || '🌿';
  };

  const getPostIcon = (type: string) => {
    const typeMap: Record<string, string> = {
      purchase: '🛒',
      review: '⭐',
      stash_update: '🏺',
      achievement: '🏆',
    };
    return typeMap[type] || '📝';
  };

  const renderPostContent = (post: (typeof socialPosts)[0]) => {
    switch (post.type) {
      case 'purchase':
        if (!post.data?.total || !post.data?.items) return null;
        return (
          <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-800">
                Purchase at {post.data.dispensary}
              </span>
              <span className="text-lg font-bold text-green-600">
                ${post.data.total.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {post.data.items.map((item: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      case 'review':
        if (!post.data?.rating || !post.data?.effects) return null;
        return (
          <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200 mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-yellow-800">
                Reviewed {post.data.strain}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < (post.data?.rating || 0)
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {post.data.effects.map((effect: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800"
                >
                  {effect}
                </span>
              ))}
            </div>
          </div>
        );
      case 'stash_update':
        if (!post.data?.category || !post.data?.item) return null;
        return (
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-800">
                Added to Stash
              </span>
              <span className="text-sm text-blue-600">
                {post.data.thc}% THC
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                {getCategoryIcon(post.data.category)}
              </span>
              <span className="text-sm font-medium text-blue-800">
                {post.data.item}
              </span>
            </div>
          </div>
        );
      case 'achievement':
        if (!post.data?.badge) return null;
        return (
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-200 mt-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🏆</span>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-800">
                  {post.data.badge}
                </p>
                <p className="text-xs text-purple-600">{post.data.milestone}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* left Column - Timeline */}
        <div className="lg:col-span-2 space-y-6 p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
          {/* Timeline Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <span className="text-xl mr-2">📰</span>
                Activity Timeline
              </h2>
              <div className="flex items-center space-x-2">
                <Label htmlFor="filter" className="text-sm">
                  Show:
                </Label>
                <Select
                  value={timelineFilter}
                  onValueChange={setTimelineFilter}
                >
                  <SelectTrigger className="w-32 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Posts</SelectItem>
                    <SelectItem value="user">Your Posts</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Timeline Posts */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${post.author.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-semibold text-sm">
                      {post.author.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <span className="text-lg">{getPostIcon(post.type)}</span>
                      <p className="text-xs text-gray-500">{post.timeAgo}</p>
                    </div>

                    <p className="text-gray-800 mb-2">{post.content}</p>

                    {renderPostContent(post)}

                    <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-100">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikePost(post.id)}
                        className={`flex items-center space-x-1 text-xs ${
                          post.liked
                            ? 'text-red-600 hover:text-red-700'
                            : 'text-gray-500 hover:text-red-600'
                        }`}
                      >
                        <span>{post.liked ? '❤️' : '🤍'}</span>
                        <span>{post.likes}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600"
                      >
                        <span>💬</span>
                        <span>{post.comments}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600"
                      >
                        <span>🔄</span>
                        <span>Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button  className="px-8">
              Load More Posts
            </Button>
          </div>
        </div>
        {/* right Column - Friends & Search */}
        <div className="space-y-6 ">
          {/* Recent Friends */}
          <div className="p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl ">
            <div className="bg-white rounded-lg border border-gray-200 px-2 py-4 md:p-6 ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-xl mr-2">🤝</span>
                  Recent Friends
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/friends')}
                  className="text-xs"
                >
                  View All ({friends.length})
                </Button>
              </div>

              <div className="space-y-3">
                {friends.slice(0, 3).map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${friend.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-semibold text-sm">
                        {friend.avatar}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">
                        {friend.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            friend.status === 'online'
                              ? 'bg-green-500'
                              : 'bg-gray-400'
                          }`}
                        />
                        <p className="text-xs text-gray-500">
                          {friend.lastActivity}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Friend Search */}
          <div className="p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-xl mr-2">🔍</span>
                Find Friends
              </h2>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="email">Search by Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="friend@email.com"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === 'Enter' && handleSearchFriend()
                    }
                  />
                </div>
                <Button
                  onClick={handleSearchFriend}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  disabled={!searchEmail.trim()}
                >
                  Send Friend Request
                </Button>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> Ask friends for their email to
                  connect and share your cannabis journey together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
