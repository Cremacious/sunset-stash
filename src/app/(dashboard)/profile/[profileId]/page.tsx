import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  User,
  Calendar,
  Leaf,
  MessageSquare,
  ArrowRight,
  Star,
  ShoppingCart,
} from 'lucide-react';
import { sampleStashItems, samplePosts } from '@/lib/sampleData';

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) => {
  const { profileId } = await params;

  if (profileId !== 'demo-user') {
    console.log(`Profile ID ${profileId} not found`);
  }

  // Mock user data
  const user = {
    id: 'user-1',
    name: 'Chris Johnson',
    email: 'chris@example.com',
    joinDate: new Date('2024-06-15'),
    totalStashItems: sampleStashItems.length,
    totalPosts: samplePosts.length,
    favoriteCategory: 'Flower',
    favoriteType: 'Hybrid',
  };

  // Get latest 3 stash items
  const latestStashItems = sampleStashItems.slice(0, 3);

  // Get latest 3 posts
  const latestPosts = samplePosts.slice(0, 3);

  // Format date helper
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Flower':
        return 'bg-green-100 text-green-800';
      case 'Concentrate':
        return 'bg-orange-100 text-orange-800';
      case 'Vape':
        return 'bg-blue-100 text-blue-800';
      case 'Edibles':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get type color
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Sativa':
        return 'bg-green-100 text-green-800';
      case 'Indica':
        return 'bg-purple-100 text-purple-800';
      case 'Hybrid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto glassCard">
      <Card className="bg-white shadow-xl border-0">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {user.name}
                </CardTitle>
                <p className="text-gray-600 flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined {formatDate(user.joinDate)}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          {/* Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Leaf className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">
                {user.totalStashItems}
              </p>
              <p className="text-sm text-gray-600">Stash Items</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">
                {user.totalPosts}
              </p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-800">
                {user.favoriteCategory}
              </p>
              <p className="text-sm text-gray-600">Favorite Category</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <ShoppingCart className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-800">
                {user.favoriteType}
              </p>
              <p className="text-sm text-gray-600">Favorite Type</p>
            </div>
          </div>

          {/* Latest Stash Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-green-600" />
                Latest Stash Items
              </h3>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/stash"
                  className="text-purple-600 hover:text-purple-700"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {latestStashItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 truncate">
                      {item.name}
                    </h4>
                    <div className="flex space-x-1">
                      <Badge
                        className={`text-xs ${getCategoryColor(item.category)}`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Type:</span>
                      <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                        {item.type}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Amount:</span>
                      <span className="font-medium">{item.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>THC:</span>
                      <span className="font-medium text-green-600">
                        {item.thc}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Added:</span>
                      <span className="text-gray-500">
                        {formatDate(item.dateAdded)}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-3 text-purple-600 hover:text-purple-700"
                    asChild
                  >
                    <Link href={`/stash/${item.id}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Posts */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                Latest Posts
              </h3>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/social"
                  className="text-purple-600 hover:text-purple-700"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {latestPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 text-blue-800 text-xs">
                        {post.activity}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-800 mb-3 line-clamp-2">
                    {post.content}
                  </p>

                  {post.stashItems.length > 0 && (
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm text-gray-600">Featured:</span>
                      {post.stashItems.map((item) => (
                        <Badge
                          key={item.stashItemId}
                          className="bg-green-100 text-green-800 text-xs"
                        >
                          {item.stashItem.name}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700"
                    asChild
                  >
                    <Link href={`/social/${post.id}`}>View Post</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Actions */}
          <div className="border-t border-gray-100 pt-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/stash/new">Add New Stash Item</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/social/new">Create Post</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/purchases/new">Log Purchase</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
