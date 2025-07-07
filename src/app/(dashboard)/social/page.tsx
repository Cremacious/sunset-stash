'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const SocialPage = () => {
  const router = useRouter();

  // Mock data for demonstration
  const posts = [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: '👩‍🦰',
      activity: 'Movie Night',
      date: '2 hours ago',
      text: "Just picked up some Blue Dream from Trulieve! Perfect for tonight's Marvel marathon 🎬✨",
      strain: 'Blue Dream',
      thc: '22%',
      cbd: '0.5%',
      type: 'Flower',
      dispensary: 'Trulieve',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      user: 'Mike D.',
      avatar: '👨‍🦲',
      activity: 'Workout',
      date: '4 hours ago',
      text: 'Pre-workout with some Durban Poison! Ready to crush this leg day 💪',
      strain: 'Durban Poison',
      thc: '18%',
      cbd: '1%',
      type: 'Vape Cart',
      dispensary: 'Curaleaf',
      likes: 8,
      comments: 1,
    },
    {
      id: 3,
      user: 'Alex K.',
      avatar: '🧑‍🦱',
      activity: 'Chill Time',
      date: '6 hours ago',
      text: 'Loving this new live rosin from Jungle Boys. The terp profile is incredible! 🌿',
      strain: 'Mimosa',
      thc: '78%',
      cbd: '0.2%',
      type: 'Live Rosin',
      dispensary: 'Jungle Boys',
      likes: 15,
      comments: 5,
    },
  ];

  const getActivityIcon = (activity: string): string => {
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

  interface TypeColorMap {
    [key: string]: string;
  }

  const getTypeColor = (type: string): string => {
    const typeColorMap: TypeColorMap = {
      flower: 'from-green-500 to-emerald-600',
      'vape cart': 'from-blue-500 to-cyan-600',
      'live rosin': 'from-purple-500 to-pink-600',
      concentrate: 'from-amber-500 to-orange-600',
    };
    return typeColorMap[type.toLowerCase()] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-8  bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6 ">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl mb-6">
          <span className="text-4xl">🌐</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Social Feed
        </h1>
        <p className="text-gray-600 text-lg">
          See what your friends are enjoying 🌿
        </p>
      </div>

      {/* Create Post Button */}
      <div className="w-full">
        <Button
          onClick={() => router.push('/social/new-post')}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <span className="text-xl mr-2">✍️</span>
          Share Your Experience
        </Button>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center">
        <div className="flex space-x-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="text-gray-600">
            All Activities
          </Button>
          <Button variant="outline" size="sm" className="text-gray-600">
            Friends Only
          </Button>
        </div>
        <Input className="bg-white flex-1" placeholder="Search posts..." />
      </div>

      {/* Posts Feed */}
      <div className="space-y-6 gap-4 grid md:grid-cols-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    {post.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">
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

            <CardContent className="space-y-4">
              {/* Post Text */}
              <p className="text-gray-800 leading-relaxed">{post.text}</p>

              {/* Strain Info Card */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${getTypeColor(
                      post.type
                    )} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-sm font-bold">
                      {post.type === 'Flower'
                        ? '🌸'
                        : post.type === 'Vape Cart'
                        ? '💨'
                        : '🧪'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{post.strain}</h4>
                    <p className="text-sm text-gray-600">
                      {post.type} • {post.dispensary}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-2 rounded border">
                    <p className="text-gray-600 mb-1">THC</p>
                    <p className="font-semibold text-gray-800">{post.thc}</p>
                  </div>
                  <div className="bg-white p-2 rounded border">
                    <p className="text-gray-600 mb-1">CBD</p>
                    <p className="font-semibold text-gray-800">{post.cbd}</p>
                  </div>
                </div>
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-orange-600"
                  >
                    <span className="mr-1">👍</span>
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-orange-600"
                  >
                    <span className="mr-1">💬</span>
                    {post.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-orange-600"
                  >
                    <span className="mr-1">↗️</span>
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button
          variant="outline"
          className="bg-white/50 backdrop-blur-sm border-orange-200/50 hover:bg-orange-100/50"
        >
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default SocialPage;
