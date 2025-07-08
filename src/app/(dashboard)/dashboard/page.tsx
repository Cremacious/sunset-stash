'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import QuickActions from '@/components/dashboard/QuickActions';

const DashboardPage = () => {
  const router = useRouter();

  // Mock data for demonstration
  const recentPurchases = [
    {
      id: 1,
      dispensary: 'Trulieve',
      amount: 45.5,
      items: 2,
      date: '2025-01-05',
    },
    {
      id: 2,
      dispensary: 'Curaleaf',
      amount: 89.25,
      items: 3,
      date: '2025-01-03',
    },
    { id: 3, dispensary: 'Rise', amount: 67.8, items: 1, date: '2024-12-30' },
  ];

  const stashCount = 0; // Change this to 0 to show empty state, or any number > 0 to show stash items

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-2xl mb-6">
          <span className="text-4xl">🌺</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Welcome to Your Paradise
        </h1>
        <p className="text-gray-600 text-lg">
          Track your journey, connect with friends, and explore new strains 🌴
        </p>
      </div>

      <QuickActions />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Purchases */}
        <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💳</span>
                  Recent Purchases
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/purchases')}
                  className="text-orange-500 border-orange-200 hover:bg-orange-50"
                >
                  View All
                </Button>
              </CardTitle>
              <CardDescription>Your latest dispensary visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPurchases.map((purchase) => (
                  <div
                    key={purchase.id}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {purchase.dispensary}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {purchase.items} items • {purchase.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">
                        ${purchase.amount}
                      </p>
                    </div>
                  </div>
                ))}
                {recentPurchases.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <span className="text-4xl block mb-2">🛒</span>
                    <p>No purchases yet</p>
                    <Button
                      onClick={() => router.push('/purchases/new')}
                      className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                    >
                      Log Your First Purchase
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Recently Added Stash Items */}
        <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🏺</span>
                  Your Stash
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/stash')}
                  className="text-orange-500 border-orange-200 hover:bg-orange-50"
                >
                  View Stash
                </Button>
              </CardTitle>
              <CardDescription>Manage your cannabis collection</CardDescription>
            </CardHeader>
            <CardContent>
              {stashCount > 0 ? (
                <div className="space-y-4">
                  {/* Mock stash items for demonstration */}
                  {[...Array(stashCount)].map((_, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <h4 className="font-semibold text-gray-800">
                        Strain Name {index + 1}
                      </h4>
                      <p className="text-sm text-gray-600">Indica • 20% THC</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Added on: 2025-01-{index + 1}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4">🏺</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Your stash is empty
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start building your cannabis collection by adding your first
                    strain!
                  </p>
                  <Button
                    onClick={() => router.push('/stash/new')}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                  >
                    Add Your First Strain
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌊</span>
                  Community Feed
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/social')}
                  className="text-orange-500 border-orange-200 hover:bg-orange-50"
                >
                  View Feed
                </Button>
              </CardTitle>
              <CardDescription>See what your friends are up to</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">JS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Jake S.</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Just picked up some Blue Dream from Trulieve! Perfect for
                    movie night 🎬
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      🎬 Movie Night
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Blue Dream
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Maria R.</p>
                      <p className="text-xs text-gray-600">5 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Added Gorilla Glue to my stash! This stuff is incredible for
                    pain relief 💪
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      🏺 Stash
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Gorilla Glue
                    </span>
                  </div>
                </div>

                <div className="text-center py-4">
                  <Button
                    onClick={() => router.push('/posts/new')}
                    variant="outline"
                    className="text-orange-500 border-orange-200 hover:bg-orange-50"
                  >
                    Share Your Experience
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
