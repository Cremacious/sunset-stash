'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Friend {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: 'online' | 'offline';
  joinDate: string;
  recentActivity: string;
  mutualFriends: number;
  favoriteStrain?: string;
}

const FriendsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchEmail, setSearchEmail] = useState('');

  // Mock friends data
  const friends: Friend[] = [
    {
      id: 1,
      name: 'Sarah Martinez',
      email: 'sarah.m@example.com',
      avatar: '👩‍🦰',
      status: 'online',
      joinDate: 'January 2024',
      recentActivity: 'Posted about Blue Dream 2 hours ago',
      mutualFriends: 5,
      favoriteStrain: 'Blue Dream',
    },
    {
      id: 2,
      name: 'Mike Davidson',
      email: 'mike.d@example.com',
      avatar: '👨‍🦲',
      status: 'online',
      joinDate: 'March 2024',
      recentActivity: 'Added Durban Poison to stash yesterday',
      mutualFriends: 3,
      favoriteStrain: 'Durban Poison',
    },
    {
      id: 3,
      name: 'Alex Kim',
      email: 'alex.k@example.com',
      avatar: '🧑‍🦱',
      status: 'offline',
      joinDate: 'December 2023',
      recentActivity: 'Purchased from Jungle Boys 3 days ago',
      mutualFriends: 8,
      favoriteStrain: 'Mimosa',
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      email: 'emma.r@example.com',
      avatar: '👩‍🦳',
      status: 'offline',
      joinDate: 'February 2024',
      recentActivity: 'Shared Gorilla Glue review 1 week ago',
      mutualFriends: 2,
      favoriteStrain: 'Gorilla Glue',
    },
    {
      id: 5,
      name: 'Jordan Taylor',
      email: 'jordan.t@example.com',
      avatar: '👨‍🦱',
      status: 'online',
      joinDate: 'November 2023',
      recentActivity: 'Updated stash collection 2 days ago',
      mutualFriends: 6,
      favoriteStrain: 'OG Kush',
    },
    {
      id: 6,
      name: 'Casey Johnson',
      email: 'casey.j@example.com',
      avatar: '👩‍🦲',
      status: 'offline',
      joinDate: 'April 2024',
      recentActivity: 'Posted workout session 4 days ago',
      mutualFriends: 1,
      favoriteStrain: 'Green Crack',
    },
  ];

  // Filter friends based on search terms
  const filteredFriends = friends.filter((friend) => {
    const matchesName = friend.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesEmail = friend.email
      .toLowerCase()
      .includes(searchEmail.toLowerCase());
    return matchesName && matchesEmail;
  });

  const onlineFriends = filteredFriends.filter(
    (friend) => friend.status === 'online'
  );


  return (
    <div className="space-y-8 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl mb-6">
          <span className="text-4xl">👥</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Your Friends
        </h1>
        <p className="text-gray-600 text-lg">
          Connect with your cannabis community 🌿
        </p>
      </div>

      {/* Search and Add Friend */}
      <div className="space-y-4">
        <div className="w-full">
          <Button
            onClick={() => router.push('/friends/add')}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span className="text-xl mr-2">➕</span>
            Add New Friend
          </Button>
        </div>

        {/* Search Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Search by name
            </label>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white"
              placeholder="Search friends by name..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Search by email
            </label>
            <Input
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="bg-white"
              placeholder="Search by email address..."
            />
          </div>
        </div>
      </div>

      {/* Friends Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {onlineFriends.length}
            </div>
            <p className="text-sm text-gray-600">Online Now</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {friends.length}
            </div>
            <p className="text-sm text-gray-600">Total Friends</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {friends.reduce((sum, friend) => sum + friend.mutualFriends, 0)}
            </div>
            <p className="text-sm text-gray-600">Mutual Connections</p>
          </CardContent>
        </Card>
      </div>

      {/* Online Friends Section */}
      {onlineFriends.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            Friends ({onlineFriends.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onlineFriends.map((friend) => (
              <Card
                key={friend.id}
                className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                        {friend.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-800">
                        {friend.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {friend.email}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">
                      Recent Activity:
                    </p>
                    <p className="text-sm text-gray-800">
                      {friend.recentActivity}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <p className="text-blue-600 font-semibold">
                        {friend.mutualFriends}
                      </p>
                      <p className="text-blue-600">Mutual</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-center">
                      <p className="text-green-600 font-semibold">🌿</p>
                      <p className="text-green-600">{friend.favoriteStrain}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => router.push(`/friends/${friend.id}`)}
                    >
                      View Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                    >
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredFriends.length === 0 && (searchTerm || searchEmail) && (
        <Card className="bg-white shadow-xl border-0">
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No friends found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or add new friends to your
              network.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSearchEmail('');
              }}
              variant="outline"
              className="mr-3"
            >
              Clear Search
            </Button>
            <Button
              onClick={() => router.push('/friends/add')}
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white"
            >
              Add Friends
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FriendsPage;
