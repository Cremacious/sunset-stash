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
import PurchaseCard from '@/components/purchases/PurchaseCard';
import { samplePurchases } from '@/lib/sampleData';
import PurchaseStats from '@/components/purchases/PurchaseStats';

const PurchasesPage = () => {
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [searchTerm] = useState('');

  // const purchases = [
  //   {
  //     id: '1',
  //     dispensary: 'Trulieve',
  //     date: '2025-01-14',
  //     total: 52.0,
  //     items: [
  //       {
  //         id: '1-1',
  //         name: 'Wedding Cake',
  //         category: 'flower',
  //         type: 'flower',
  //         amount: '1g',
  //         price: 52.0,
  //         thc: 20,
  //         cbd: 0.1,
  //         lineage: 'Triangle Kush x Animal Mints',
  //         notes: 'Great quality and service!',
  //         purchaseId: '1',
  //       },
  //     ],
  //     notes: 'Great quality and service!',
  //     createdAt: '2025-01-14T10:00:00Z',
  //     userId: 'demo-user',
  //   },
  //   {
  //     id: '2',
  //     dispensary: 'poop',
  //     date: '2025-01-14',
  //     total: 52.0,
  //     items: [
  //       {
  //         id: '2-1',
  //         name: 'Wedding Cake',
  //         category: 'flower',
  //         type: 'flower',
  //         amount: '1g',
  //         price: 52.0,
  //         thc: 20,
  //         cbd: 0.1,
  //         lineage: 'Triangle Kush x Animal Mints',
  //         notes: 'Great quality and service!',
  //         purchaseId: '2',
  //       },
  //     ],
  //     notes: 'Great quality and service!',
  //     createdAt: '2025-01-14T10:00:00Z',
  //     userId: 'demo-user',
  //   },
  // ];

  // Ensure date and createdAt are strings for compatibility with PurchaseCard
  const purchases = samplePurchases.map((p) => ({
    ...p,
    date:
      typeof p.date === 'string' ? p.date : p.date.toISOString().split('T')[0],
    createdAt:
      typeof p.createdAt === 'string' ? p.createdAt : p.createdAt.toISOString(),
  }));

  // const purchases = [];

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        {/* Action Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 ">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1">
              <Button className="w-full md:w-auto " asChild>
                <Link href="/purchases/new">Add New Purchase</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="mt-4">Filter by:</div>
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-xs  mb-1">Month</div>
                  <Select
                    value={selectedMonth}
                    onValueChange={setSelectedMonth}
                  >
                    <SelectTrigger className="w-20 h-10">
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
                </div>
                <div className="text-center">
                  <div className="text-xs  mb-1">Year</div>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-25 h-10 ">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Purchases Section */}
          <div className="xl:col-span-3 glassCard">
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Purchase History
                  </h2>
                  <p className="text-gray-600">
                    {purchases.length} total purchases
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Viewing</div>
                <div className="text-2xl font-bold text-coral-600">
                  {selectedMonth}/{selectedYear}
                </div>
              </div>
            </div>

            <div className="p-6">
              {purchases.length > 0 ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 bg-purple-200 p-2 rounded-md">
                      <span className="text-sm font-medium text-gray-700">
                        Latest Purchases
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Showing {Math.min(purchases.length, 9)} of{' '}
                      {purchases.length}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {purchases.slice(0, 9).map((purchase) => (
                      <PurchaseCard key={purchase.id} purchase={purchase} />
                    ))}
                  </div>

                  {purchases.length > 9 && (
                    <div className="text-center pt-6">
                      <Button
                        variant="outline"
                        className="border-2 border-teal-300 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-xl"
                      >
                        🔍 View All {purchases.length} Purchases
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-6">
                    <span className="text-4xl">🏖️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    No purchases yet this month
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {searchTerm
                      ? 'Try adjusting your search filters'
                      : `Ready to start your ${selectedMonth}/${selectedYear} dispensary journey? Add your first purchase!`}
                  </p>
                  <Button
                    onClick={() => router.push('/purchases/new')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg rounded-xl shadow-lg"
                  >
                    🌟 Start Shopping
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="xl:col-span-1">
            <PurchaseStats purchases={purchases} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasesPage;
