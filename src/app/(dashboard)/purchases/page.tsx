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
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-3 glassCard md:col-span-3">
          <div className="flex flex-col md:flex-row gap-2 p-2 md:p-4 md:justify-between items-center bg-white rounded-lg ">
            <Button className="w-full md:w-auto" asChild>
              <Link href="/purchases/new">Add New Purchase</Link>
            </Button>

            <div className="flex space-x-4 items-center ">
              <div>Search:</div>
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
            </div>
          </div>
          <div className="space-y-4">
            {purchases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {purchases.slice(0, 9).map((purchase) => (
                  // <PurchaseListCard key={purchase.id} purchase={purchase} />
                  <PurchaseCard key={purchase.id} purchase={purchase} />
                ))}
              </div>
            ) : (
              <div className="bg-white min-h-[600px] rounded-lg border border-gray-200 p-8 text-center">
                <div className="flex flex-col justify-center items-center">
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
                  >
                    Add Purchase
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <PurchaseStats purchases={purchases} />
      </div>
    </div>
  );
};

export default PurchasesPage;
