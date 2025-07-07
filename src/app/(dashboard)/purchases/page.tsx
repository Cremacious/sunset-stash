'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PurchaseListCard from '@/components/purchases/PurchaseListCard';
import ConnectWithFriends from '@/components/social/ConnectWithFriends';

const PurchasesPage = () => {
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [searchTerm] = useState('');

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
      items: [
        {
          id: 1,
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Shared with friends!',
          dateAdded: '2025-01-14',
        },
      ],
      total: 52.0,
      timeAgo: '1 day ago',
      notes: 'Shared with friends!',
      createdAt: '2025-01-14T10:00:00Z',
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
      items: [
        {
          id: 1,
          name: 'Live Rosin Cart',
          category: 'vape',
          type: 'vape',
          amount: '1g',
          price: 68.0,
          thc: 80,
          cbd: 0.2,
          lineage: '',
          notes: '',
          dateAdded: '2025-01-13',
        },
      ],
      total: 68.0,
      timeAgo: '2 days ago',
      notes: '',
      createdAt: '2025-01-13T11:30:00Z',
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
      items: [
        {
          id: 1,
          name: 'RSO Capsules',
          category: 'edible',
          type: 'edible',
          amount: '10ct',
          price: 45.0,
          thc: 50,
          cbd: 1.0,
          lineage: '',
          notes: 'Great for pain relief.',
          dateAdded: '2025-01-12',
        },
      ],
      total: 45.0,
      timeAgo: '3 days ago',
      notes: 'Great for pain relief.',
      createdAt: '2025-01-12T09:15:00Z',
    },
  ];

  // Mock purchase data
  const purchases = [
    {
      id: 1,
      dispensary: 'Trulieve',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: 1,
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          dateAdded: '2025-01-14',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
    },
    {
      id: 2,
      dispensary: 'poop',
      date: '2025-01-14',
      total: 52.0,
      items: [
        {
          id: 1,
          name: 'Wedding Cake',
          category: 'flower',
          type: 'flower',
          amount: '1g',
          price: 52.0,
          thc: 20,
          cbd: 0.1,
          lineage: 'Triangle Kush x Animal Mints',
          notes: 'Great quality and service!',
          dateAdded: '2025-01-14',
        },
      ],
      notes: 'Great quality and service!',
      createdAt: '2025-01-14T10:00:00Z',
    },
  ];

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

  return (
    <div className="space-y-6">
      <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-center ">
          <Button className="w-full md:w-auto" asChild>
            <Link href="/purchases/new">Add New Purchase</Link>
          </Button>

          <div className="flex space-x-2 items-center ">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-32 h-9 text-sm bg-white">
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
              <SelectTrigger className="w-25 h-9 text-sm bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
            {/* <Input className="bg-white" placeholder="Search strains..." /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
            <p className="text-lg font-bold text-gray-900">
              {purchases.length}
            </p>
            <p className="text-xs text-gray-500">Total Purchases</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
            <p className="text-lg font-bold text-gray-900">
              ${purchases.length}
            </p>
            <p className="text-xs text-gray-500">Total This Month</p>
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
                purchases.reduce((sum, p) => sum + p.total, 0) /
                purchases.length
              ).toFixed(0)}
            </p>
            <p className="text-xs text-gray-500">Avg Purchase</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="lg:col-span-2 space-y-3 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-6 pt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Your Purchases
            </h2>
            <span className="text-sm text-gray-500">
              {filteredPurchases.length} purchases
            </span>
          </div>
          <div className="space-y-4">
            {filteredPurchases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6">
                {filteredPurchases.map((purchase) => (
                  <PurchaseListCard key={purchase.id} purchase={purchase} />
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
                <Button onClick={() => router.push('/purchases/new')} size="sm">
                  Add Purchase
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-3 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
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
              <PurchaseListCard key={purchase.id} purchase={purchase} />
            ))}
            <ConnectWithFriends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasesPage;
