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
import RecentPurchases from '@/components/purchases/RecentPurchases';
import NoStashFound from '@/components/stash/NoStashFound';

const DashboardPage = () => {
  const router = useRouter();

  // Mock data for demonstration
  // const recentPurchases = [
  //   {
  //     id: 1,
  //     dispensary: 'Trulieve',
  //     amount: 45.5,
  //     items: 2,
  //     date: '2025-01-05',
  //   },
  //   {
  //     id: 2,
  //     dispensary: 'Curaleaf',
  //     amount: 89.25,
  //     items: 3,
  //     date: '2025-01-03',
  //   },
  //   { id: 3, dispensary: 'Rise', amount: 67.8, items: 1, date: '2024-12-30' },
  // ];

  const purchases = [
    {
      id: '1',
      dispensary: 'Trulieve',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '1-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '1',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
    {
      id: '2',
      dispensary: 'poop',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: '2-1',
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          purchaseId: '2',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
      userId: 'demo-user',
    },
  ];

  const stashCount = 0; // Change this to 0 to show empty state, or any number > 0 to show stash items

  return (
    <div className="space-y-8">
      <QuickActions />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Purchases */}
        <RecentPurchases purchases={purchases} />

        {/* Recently Added Stash Items */}
        <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
          <Card className="bg-white shadow-xl border-0 h-full">
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
                <NoStashFound />
                // <div className="text-center py-12">
                //   <span className="text-6xl mb-4">🏺</span>
                //   <h3 className="text-xl font-semibold text-gray-800 mb-2">
                //     Your stash is empty
                //   </h3>
                //   <p className="text-gray-600 mb-6">
                //     Start building your cannabis collection by adding your first
                //     strain!
                //   </p>
                //   <Button
                //     onClick={() => router.push('/stash/new')}
                //     className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                //   >
                //     Add Your First Strain
                //   </Button>
                // </div>
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
