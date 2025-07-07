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
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const StashPage = () => {
  const router = useRouter();

  // Mock data for demonstration
  const stashItems = [
    {
      id: 1,
      name: 'Blue Dream',
      type: 'Hybrid',
      thc: 18,
      cbd: 1,
      amount: '3.5g',
      rating: 4.8,
      notes: 'Perfect for creativity and relaxation',
      dateAdded: '2025-01-05',
      dispensary: 'Trulieve',
      price: 45.5,
      effects: ['Creative', 'Relaxed', 'Happy'],
      lastUsed: '2025-01-10',
    },
    {
      id: 2,
      name: 'Gorilla Glue #4',
      type: 'Indica',
      thc: 25,
      cbd: 0.5,
      amount: '1.8g',
      rating: 4.9,
      notes: 'Incredible for pain relief and sleep',
      dateAdded: '2025-01-03',
      dispensary: 'Curaleaf',
      price: 52.0,
      effects: ['Sleepy', 'Pain Relief', 'Relaxed'],
      lastUsed: '2025-01-09',
    },
    {
      id: 3,
      name: 'Sour Diesel',
      type: 'Sativa',
      thc: 22,
      cbd: 1.2,
      amount: '2.1g',
      rating: 4.7,
      notes: 'Great energy boost for workouts',
      dateAdded: '2024-12-30',
      dispensary: 'Rise',
      price: 48.0,
      effects: ['Energetic', 'Focused', 'Uplifted'],
      lastUsed: '2025-01-08',
    },
    {
      id: 4,
      name: 'Granddaddy Purple',
      type: 'Indica',
      thc: 20,
      cbd: 0.8,
      amount: '0.5g',
      rating: 4.6,
      notes: 'Amazing for evening relaxation',
      dateAdded: '2024-12-28',
      dispensary: 'Trulieve',
      price: 38.0,
      effects: ['Relaxed', 'Sleepy', 'Euphoric'],
      lastUsed: '2025-01-07',
    },
  ];

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
    <div className="space-y-8 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
      {/* Header */}
      {/* <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl mb-6">
          <span className="text-4xl">🏺</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Your Cannabis Stash
        </h1>
        <p className="text-gray-600 text-lg">
          Track your strains, effects, and experiences 🌿
        </p>
      </div> */}

      {/* Quick Stats */}

      {/* Quick Actions */}
      {/* <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-3">⚡</span>
            Quick Actions
          </CardTitle>
          <CardDescription>Manage your stash efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={() => router.push('/stash/new')}
              className="h-auto p-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex flex-col items-center space-y-2"
            >
              <span className="text-2xl">➕</span>
              <span className="font-medium">Add New Strain</span>
            </Button>

            <Button
              onClick={() => router.push('/stash/tracker')}
              className="h-auto p-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white flex flex-col items-center space-y-2"
            >
              <span className="text-2xl">📊</span>
              <span className="font-medium">Usage Tracker</span>
            </Button>

            <Button
              onClick={() => router.push('/stash/wishlist')}
              className="h-auto p-4 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white flex flex-col items-center space-y-2"
            >
              <span className="text-2xl">🌟</span>
              <span className="font-medium">Wishlist</span>
            </Button>
          </div>
        </CardContent>
      </Card> */}

      {/* Stash Items Grid */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center">
          <Button className="w-full md:w-auto" asChild>
            <Link href="/stash/new">Add New</Link>
          </Button>

          <div className="flex space-x-2 items-center ">
            <Button variant="outline" size="sm" className="text-gray-600">
              Filter
            </Button>
            <Button variant="outline" size="sm" className="text-gray-600">
              Sort
            </Button>
            <Input className="bg-white" placeholder="Search strains..." />
          </div>
        </div>

        {stashItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stashItems.map((item) => (
              <Card
                key={item.id}
                className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${getTypeColor(
                          item.type
                        )} rounded-full flex items-center justify-center`}
                      >
                        <span className="text-xl">
                          {getTypeIcon(item.type)}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-800">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {item.type} • {item.amount}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-600 mb-1">Category</p>
                      <p className="font-semibold text-gray-800">Concentrate</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-600 mb-1">THC</p>
                      <p className="font-semibold text-gray-800">{item.thc}%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-600 mb-1">CBD</p>
                      <p className="font-semibold text-gray-800">{item.cbd}%</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Notes:</p>
                    <p className="text-sm text-gray-800">
                      &ldquo;{item.notes}&rdquo;
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">🏺</div>
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
            </CardContent>
          </Card>
        )}
      </div>

      {/* Analytics Card */}
      <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-3">📈</span>
            Stash Analytics
          </CardTitle>
          <CardDescription>Insights about your collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-gray-800">Most Common Type</h4>
              <p className="text-sm text-gray-600">Indica (50%)</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <div className="text-2xl mb-2">💪</div>
              <h4 className="font-semibold text-gray-800">Average THC</h4>
              <p className="text-sm text-gray-600">21.25%</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-200">
              <div className="text-2xl mb-2">⭐</div>
              <h4 className="font-semibold text-gray-800">
                Most Common Category
              </h4>
              <p className="text-sm text-gray-600">Flower</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StashPage;
