'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import PurchaseCard from '@/components/purchases/PurchaseCard';
import PurchaseStats from '@/components/purchases/PurchaseStats';
import NoPurchasesFound from '@/components/purchases/NoPurchasesFound';
import {
  getAvailablePurchaseDates,
  getAllUserPurchases,
} from '@/lib/actions/purchase.actions';
import PurchaseSearchBar from '@/components/purchases/PurchaseSearchBar';
import { Purchase } from '@/lib/types/purchase.types'; 

const PurchasesPage = () => {
  const [allPurchases, setAllPurchases] = useState<Purchase[]>([]);
  const [availableDates, setAvailableDates] = useState<{ months: string[]; years: string[] }>({
    months: [],
    years: [],
  });
  const [loading, setLoading] = useState(true);


  const [selectedMonth, setSelectedMonth] = useState<string | undefined>();
  const [selectedYear, setSelectedYear] = useState<string | undefined>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const currentDate = new Date();
        const defaultMonth = (currentDate.getMonth() + 1)
          .toString()
          .padStart(2, '0');
        const defaultYear = currentDate.getFullYear().toString();

        setSelectedMonth(defaultMonth);
        setSelectedYear(defaultYear);

        const [purchasesResult, availableDatesResult] = await Promise.all([
          getAllUserPurchases(), 
          getAvailablePurchaseDates(),
        ]);

        setAllPurchases(purchasesResult.purchases || []);
        setAvailableDates(
          availableDatesResult.dates &&
            typeof availableDatesResult.dates === 'object'
            ? availableDatesResult.dates
            : { months: [], years: [] }
        );
      } catch (error) {
        console.error('Failed to load purchases:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredPurchases = allPurchases.filter((purchase) => {
    const purchaseDate = new Date(purchase.date);
    const purchaseMonth = (purchaseDate.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const purchaseYear = purchaseDate.getFullYear().toString();

    const monthMatches = !selectedMonth || purchaseMonth === selectedMonth;
    const yearMatches = !selectedYear || purchaseYear === selectedYear;

    return monthMatches && yearMatches;
  });

  if (loading) {
    return (
      <div className="space-y-4 max-w-7xl mx-auto">
        <div className="smallGlassCard">
          <div className="animate-pulse h-20 bg-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glassCard md:col-span-3">
            <div className="animate-pulse h-64 bg-gray-200 rounded"></div>
          </div>
          <div className="animate-pulse h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <div className="smallGlassCard">
        <PurchaseSearchBar
          availableDates={availableDates}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onMonthChange={setSelectedMonth}
          onYearChange={setSelectedYear}
          onClearFilters={() => {
            const currentDate = new Date();
            const defaultMonth = (currentDate.getMonth() + 1)
              .toString()
              .padStart(2, '0');
            const defaultYear = currentDate.getFullYear().toString();
            setSelectedMonth(defaultMonth);
            setSelectedYear(defaultYear);
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 glassCard">
          <div className="flex items-center justify-between bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center">
              <div className="ml-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Purchase History
                </h2>
                <p className="text-gray-600">
                  {filteredPurchases.length} total purchases
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Viewing</div>
              <div className="text-2xl font-bold text-coral-600">
                {selectedMonth && selectedYear
                  ? new Date(
                      parseInt(selectedYear),
                      parseInt(selectedMonth) - 1
                    ).toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })
                  : 'All Time'}
              </div>
            </div>
          </div>

          <div className="mt-4">
            {filteredPurchases.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-purple-100 rounded-xl py-2 px-4 border border-purple-300">
                    Latest Purchases
                  </div>
                  <div className="bg-blue-100 rounded-xl py-2 px-4 border border-blue-300">
                    Showing {Math.min(filteredPurchases.length, 9)} of{' '}
                    {filteredPurchases.length}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPurchases.slice(0, 9).map((purchase) => (
                    <PurchaseCard key={purchase.id} purchase={purchase} />
                  ))}
                </div>

                {filteredPurchases.length > 9 && (
                  <div className="text-center pt-6">
                    <Button>
                      View All {filteredPurchases.length} Purchases
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <NoPurchasesFound />
            )}
          </div>
        </div>
        <div className="md:col-span-1">
          <PurchaseStats
            purchases={filteredPurchases}
            selectedMonth={selectedMonth || ''}
            selectedYear={selectedYear || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasesPage;
