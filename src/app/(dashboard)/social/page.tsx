'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import TimelinePost from '@/components/social/TimelinePost';
import RecentFriendCard from '@/components/social/RecentFriendCard';
import FindFriends from '@/components/social/FindFriends';
import Link from 'next/link';
import { getUserStashItems } from '@/lib/actions/stash.actions';
import { StashItem } from '@/lib/types/stash.types';

const SocialPage = () => {
  const router = useRouter();
  const [timelineFilter, setTimelineFilter] = useState('all'); // 'all', 'user', 'friends'
  const [stashItems, setStashItems] = useState<StashItem[]>([]);

  // Load user's stash items
  useEffect(() => {
    const loadStashItems = async () => {
      try {
        const result = await getUserStashItems();
        if (result.success && result.data) {
          // Convert Date to string for dateAdded field
          const convertedItems = result.data.map((item) => ({
            ...item,
            dateAdded: item.dateAdded.toISOString().split('T')[0], // Convert to YYYY-MM-DD format
          }));
          setStashItems(convertedItems);
        }
      } catch (error) {
        console.error('Error loading stash items:', error);
      }
    };
    loadStashItems();
  }, []);

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
    {
      id: '2',
      author: 'Billy Dee',
      activity: 'Chill Time',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    {
      id: '4',
      author: 'Billy Dee',
      activity: 'Chill Time',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
              <Button asChild>
                <Link href="/social/new-post">Create New Post</Link>
              </Button>
              <div className="flex items-center space-x-2">
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
                ))}
              </div>
            </div>
          </div>
          {/* Friend Search */}
          <div className="p-6 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl">
            <FindFriends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
