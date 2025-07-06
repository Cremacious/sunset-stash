'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PurchasesPage = () => {
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock friends purchase data
  const friendsPurchases = [
    {
      id: 1,
      friend: {
        name: 'Jake S.',
        avatar: 'JS',
        color: 'from-blue-400 to-purple-500',
      },
      date: '2025-01-14',
      dispensary: 'Trulieve',
      items: [{ name: 'Wedding Cake', category: 'flower', price: 52.0 }],
      total: 52.0,
      timeAgo: '1 day ago',
    },
    {
      id: 2,
      friend: {
        name: 'Maria R.',
        avatar: 'MR',
        color: 'from-green-400 to-emerald-500',
      },
      date: '2025-01-13',
      dispensary: 'Curaleaf',
      items: [{ name: 'Live Rosin Cart', category: 'vape', price: 68.0 }],
      total: 68.0,
      timeAgo: '2 days ago',
    },
    {
      id: 3,
      friend: {
        name: 'Alex T.',
        avatar: 'AT',
        color: 'from-pink-400 to-red-500',
      },
      date: '2025-01-12',
      dispensary: 'Rise',
      items: [{ name: 'RSO Capsules', category: 'edible', price: 45.0 }],
      total: 45.0,
      timeAgo: '3 days ago',
    },
  ];

  // Mock purchase data
  const purchases = [
    {
      id: 1,
      date: '2025-01-15',
      dispensary: 'Trulieve',
      items: [
        { name: 'Blue Dream', category: 'flower', amount: '3.5g', price: 45.5 },
        { name: 'Mango Cart', category: 'vape', amount: '0.5g', price: 32.0 },
      ],
      total: 77.5,
      paymentMethod: 'Card',
    },
    {
      id: 2,
      date: '2025-01-12',
      dispensary: 'Curaleaf',
      items: [
        {
          name: 'Gorilla Glue Rosin',
          category: 'concentrate',
          amount: '1g',
          price: 65.0,
        },
        {
          name: 'Pain Relief Cream',
          category: 'topical',
          amount: '30ml',
          price: 28.0,
        },
      ],
      total: 93.0,
      paymentMethod: 'Cash',
    },
    {
      id: 3,
      date: '2025-01-08',
      dispensary: 'Rise',
      items: [
        {
          name: 'Gummy Bears',
          category: 'edible',
          amount: '10-pack',
          price: 25.0,
        },
        { name: 'Sour Diesel', category: 'flower', amount: '7g', price: 89.0 },
      ],
      total: 114.0,
      paymentMethod: 'Card',
    },
    {
      id: 4,
      date: '2025-01-05',
      dispensary: 'MedMen',
      items: [
        { name: 'OG Kush Cart', category: 'vape', amount: '1g', price: 48.0 },
        {
          name: 'Purple Punch',
          category: 'flower',
          amount: '3.5g',
          price: 42.0,
        },
      ],
      total: 90.0,
      paymentMethod: 'Card',
    },
    {
      id: 5,
      date: '2024-12-28',
      dispensary: 'Trulieve',
      items: [
        {
          name: 'Live Resin',
          category: 'concentrate',
          amount: '0.5g',
          price: 38.0,
        },
        {
          name: 'Chocolate Bar',
          category: 'edible',
          amount: '100mg',
          price: 22.0,
        },
      ],
      total: 60.0,
      paymentMethod: 'Card',
    },
  ];

  // Calculate monthly spending by category
  const monthlyData = purchases
    .filter((purchase) => {
      const purchaseDate = new Date(purchase.date);
      const purchaseMonth = (purchaseDate.getMonth() + 1)
        .toString()
        .padStart(2, '0');
      const purchaseYear = purchaseDate.getFullYear().toString();
      return purchaseMonth === selectedMonth && purchaseYear === selectedYear;
    })
    .reduce((acc, purchase) => {
      purchase.items.forEach((item) => {
        acc[item.category] = (acc[item.category] || 0) + item.price;
      });
      return acc;
    }, {} as Record<string, number>);

  const categoryData = [
    {
      name: 'Flower',
      key: 'flower',
      amount: monthlyData.flower || 0,
      icon: '🌸',
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Vape',
      key: 'vape',
      amount: monthlyData.vape || 0,
      icon: '💨',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Concentrate',
      key: 'concentrate',
      amount: monthlyData.concentrate || 0,
      icon: '🍯',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Edible',
      key: 'edible',
      amount: monthlyData.edible || 0,
      icon: '🍪',
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Topical',
      key: 'topical',
      amount: monthlyData.topical || 0,
      icon: '🧴',
      color: 'from-indigo-400 to-purple-500',
    },
  ];

  const totalMonthlySpending = categoryData.reduce(
    (sum, cat) => sum + cat.amount,
    0
  );

  // Filter purchases based on search and date
  const filteredPurchases = purchases.filter((purchase) => {
    const matchesSearch =
      searchTerm === '' ||
      purchase.dispensary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.items.some((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const purchaseDate = new Date(purchase.date);
    const purchaseMonth = (purchaseDate.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const purchaseYear = purchaseDate.getFullYear().toString();
    const matchesDate =
      purchaseMonth === selectedMonth && purchaseYear === selectedYear;

    return matchesSearch && matchesDate;
  });

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

  return (
    <div className="space-y-6">
      {/* Compact Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">💳</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Purchases</h1>
            <p className="text-gray-600">
              Track spending & see friend activity
            </p>
          </div>
        </div>
        <Button
          onClick={() => router.push('/purchases/new')}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
        >
          + New Purchase
        </Button>
      </div>

      {/* Compact Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-32 h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="01">Jan</SelectItem>
            <SelectItem value="02">Feb</SelectItem>
            <SelectItem value="03">Mar</SelectItem>
            <SelectItem value="04">Apr</SelectItem>
            <SelectItem value="05">May</SelectItem>
            <SelectItem value="06">Jun</SelectItem>
            <SelectItem value="07">Jul</SelectItem>
            <SelectItem value="08">Aug</SelectItem>
            <SelectItem value="09">Sep</SelectItem>
            <SelectItem value="10">Oct</SelectItem>
            <SelectItem value="11">Nov</SelectItem>
            <SelectItem value="12">Dec</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-20 h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-48 h-9 text-sm"
        />

        <div className="ml-auto text-right">
          <p className="text-lg font-bold text-green-600">
            ${totalMonthlySpending.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">this month</p>
        </div>
      </div>

      {/* Compact Category Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {categoryData.map((category) => (
          <div
            key={category.key}
            className="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {category.name}
              </span>
            </div>
            <p className="text-lg font-bold text-gray-900">
              ${category.amount.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">
              {totalMonthlySpending > 0
                ? ((category.amount / totalMonthlySpending) * 100).toFixed(0)
                : 0}
              %
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-lg font-bold text-gray-900">{purchases.length}</p>
          <p className="text-xs text-gray-500">Total Purchases</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-lg font-bold text-gray-900">
            ${purchases.reduce((sum, p) => sum + p.total, 0).toFixed(0)}
          </p>
          <p className="text-xs text-gray-500">All Time Spent</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-lg font-bold text-gray-900">
            {[...new Set(purchases.map((p) => p.dispensary))].length}
          </p>
          <p className="text-xs text-gray-500">Dispensaries</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
          <p className="text-lg font-bold text-gray-900">
            $
            {(
              purchases.reduce((sum, p) => sum + p.total, 0) / purchases.length
            ).toFixed(0)}
          </p>
          <p className="text-xs text-gray-500">Avg Purchase</p>
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* Your Purchases - Left Column */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Your Purchases
            </h2>
            <span className="text-sm text-gray-500">
              {filteredPurchases.length} purchases
            </span>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
            {filteredPurchases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredPurchases.map((purchase) => (
                  <div
                    key={purchase.id}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {purchase.dispensary.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {purchase.dispensary}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {purchase.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">
                          ${purchase.total.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {purchase.items.length} items
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {purchase.items.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1 text-xs"
                        >
                          <span>{getCategoryIcon(item.category)}</span>
                          <span className="text-gray-700">{item.name}</span>
                          <span className="text-gray-500">${item.price}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="text-4xl mb-2">📋</div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  No purchases found
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {searchTerm
                    ? 'Try different search terms'
                    : 'No purchases this month'}
                </p>
                <Button
                  onClick={() => router.push('/purchases/new')}
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  Add Purchase
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Friends Activity - Right Column */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Friends Activity
            </h2>
            <Button variant="outline" size="sm" className="text-xs">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {friendsPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${purchase.friend.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-xs font-semibold">
                      {purchase.friend.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {purchase.friend.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {purchase.timeAgo}
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      Picked up from{' '}
                      <span className="font-medium">{purchase.dispensary}</span>
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1 text-xs">
                        <span>
                          {getCategoryIcon(purchase.items[0].category)}
                        </span>
                        <span className="text-gray-700">
                          {purchase.items[0].name}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        ${purchase.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Friends Activity CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-4 text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                Connect with Friends
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Follow friends to see their purchases and get strain
                recommendations
              </p>
              <Button
                onClick={() => router.push('/friends')}
                size="sm"
                variant="outline"
                className="text-xs"
              >
                Find Friends
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasesPage;
