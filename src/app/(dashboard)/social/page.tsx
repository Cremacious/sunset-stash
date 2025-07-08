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
import TimelinePost from '@/components/social/TimelinePost';
import RecentFriendCard from '@/components/social/RecentFriendCard';

const SocialPage = () => {
  const router = useRouter();

  const [searchEmail, setSearchEmail] = useState('');
  const [timelineFilter, setTimelineFilter] = useState('all'); // 'all', 'user', 'friends'

  // Mock friends data
  const friends = [
    {
      id: '1',
      name: 'Jake Rodriguez',
      email: 'jake.r@email.com',
      createdAt: '2025-01-13',
    },
    {
      id: '1',
      name: 'Jake Rodriguez',
      email: 'jake.r@email.com',
      createdAt: '2025-01-13',
    },
  ];

  // Mock social posts data
  const socialPosts = [
    {
      id: '1',
      author: 'Billy Dee',
      activity: 'Chill Time',
      content: 'Watched a movie with the boys',
      stashItems: [
        {
          id: '43',
          name: 'Blue Dream',
          category: 'flower',
          type: 'bud',
          amount: '3.5g',
          thc: 21.5,
          cbd: 0.5,
          lineage: 'Blueberry x Haze',
          notes: 'Smooth and relaxing',
          dateAdded: '2025-01-15',
          userId: 'user-1',
        },
      ],
      comments: [],
      createdAt: '2025-01-15T12:00:00Z',
      userId: 'user-1',
    },
  ];

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
            {socialPosts.map((post) => (
              <TimelinePost key={post.id} post={post} />
              // <div
              //   key={post.id}
              //   className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all"
              // >
              //   <div className="flex items-start space-x-3">
              //     <div
              //       className={`w-10 h-10 bg-gradient-to-r ${post.author.color} rounded-full flex items-center justify-center flex-shrink-0`}
              //     >
              //       <span className="text-white font-semibold text-sm">
              //         {post.author.avatar}
              //       </span>
              //     </div>
              //     <div className="flex-1 min-w-0">
              //       <div className="flex items-center space-x-2 mb-1">
              //         <p className="text-sm font-semibold text-gray-900">
              //           {post.author.name}
              //         </p>
              //         <span className="text-lg">{getPostIcon(post.type)}</span>
              //         <p className="text-xs text-gray-500">{post.timeAgo}</p>
              //       </div>

              //       <p className="text-gray-800 mb-2">{post.content}</p>

              //       {renderPostContent(post)}

              //       <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-100">
              //         <Button
              //           variant="ghost"
              //           size="sm"
              //           onClick={() => handleLikePost(post.id)}
              //           className={`flex items-center space-x-1 text-xs ${
              //             post.liked
              //               ? 'text-red-600 hover:text-red-700'
              //               : 'text-gray-500 hover:text-red-600'
              //           }`}
              //         >
              //           <span>{post.liked ? '❤️' : '🤍'}</span>
              //           <span>{post.likes}</span>
              //         </Button>
              //         <Button
              //           variant="ghost"
              //           size="sm"
              //           className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600"
              //         >
              //           <span>💬</span>
              //           <span>{post.comments}</span>
              //         </Button>
              //         <Button
              //           variant="ghost"
              //           size="sm"
              //           className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600"
              //         >
              //           <span>🔄</span>
              //           <span>Share</span>
              //         </Button>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button className="px-8">Load More Posts</Button>
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
                  <RecentFriendCard key={friend.id} friend={friend} />
                  // <div
                  //   key={friend.id}
                  //   className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  // >
                  //   <div
                  //     className={`w-10 h-10 bg-gradient-to-r ${friend.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  //   >
                  //     <span className="text-white font-semibold text-sm">
                  //       {friend.avatar}
                  //     </span>
                  //   </div>
                  //   <div className="flex-1 min-w-0">
                  //     <p className="text-sm font-semibold text-gray-900">
                  //       {friend.name}
                  //     </p>
                  //     <div className="flex items-center space-x-2">
                  //       <div
                  //         className={`w-2 h-2 rounded-full ${
                  //           friend.status === 'online'
                  //             ? 'bg-green-500'
                  //             : 'bg-gray-400'
                  //         }`}
                  //       />
                  //       <p className="text-xs text-gray-500">
                  //         {friend.lastActivity}
                  //       </p>
                  //     </div>
                  //   </div>
                  //   <Button size="sm" variant="outline" className="text-xs">
                  //     View
                  //   </Button>
                  // </div>
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
                  />
                </div>
                <Button
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
