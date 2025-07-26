'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import PurchaseCard from '@/components/purchases/PurchaseCard';
import PurchaseStats from '@/components/purchases/PurchaseStats';
import {
  getAvailablePurchaseDates,
  getAllUserPurchases,
} from '@/lib/actions/purchase.actions';
import PurchaseSearchBar from '@/components/purchases/PurchaseSearchBar';
import { Purchase } from '@/lib/types/purchase.types';
import { CardContent, CardHeader } from '@/components/ui/card';
import { DollarSign, Sun } from 'lucide-react';

//test

const PurchasesPage = () => {
  const [allPurchases, setAllPurchases] = useState<Purchase[]>([]);
  const [availableDates, setAvailableDates] = useState<{
    months: string[];
    years: string[];
  }>({
    months: [],
    years: [],
  });
  const [loading, setLoading] = useState(true);

  const [selectedMonth, setSelectedMonth] = useState<string | undefined>();
  const [selectedYear, setSelectedYear] = useState<string | undefined>();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [purchasesResult, availableDatesResult] = await Promise.all([
          getAllUserPurchases(),
          getAvailablePurchaseDates(),
        ]);

        const purchases = purchasesResult.purchases || [];
        const dates =
          availableDatesResult.dates &&
          typeof availableDatesResult.dates === 'object'
            ? availableDatesResult.dates
            : { months: [], years: [] };

        setAllPurchases(purchases);
        setAvailableDates(dates);

        if (
          purchases.length > 0 &&
          dates.months.length > 0 &&
          dates.years.length > 0
        ) {
          const currentDate = new Date();
          const currentMonth = (currentDate.getMonth() + 1)
            .toString()
            .padStart(2, '0');
          const currentYear = currentDate.getFullYear().toString();

          const hasCurrentMonthPurchases =
            dates.months.includes(currentMonth) &&
            dates.years.includes(currentYear);

          if (hasCurrentMonthPurchases) {
            setSelectedMonth(currentMonth);
            setSelectedYear(currentYear);
          } else {
            const latestPurchase = purchases.reduce((latest, purchase) => {
              const purchaseDate = new Date(purchase.date);
              const latestDate = new Date(latest.date);
              return purchaseDate > latestDate ? purchase : latest;
            });

            const latestDate = new Date(latestPurchase.date);
            const latestMonth = (latestDate.getMonth() + 1)
              .toString()
              .padStart(2, '0');
            const latestYear = latestDate.getFullYear().toString();

            setSelectedMonth(latestMonth);
            setSelectedYear(latestYear);
          }
        }
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

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <div className="smallGlassCard">
        <PurchaseSearchBar
          availableDates={availableDates}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onMonthChange={setSelectedMonth}
          onYearChange={setSelectedYear}
          purchases={allPurchases}
          onClearFilters={() => {
            if (
              allPurchases.length > 0 &&
              availableDates.months.length > 0 &&
              availableDates.years.length > 0
            ) {
              const currentDate = new Date();
              const currentMonth = (currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0');
              const currentYear = currentDate.getFullYear().toString();

              const hasCurrentMonthPurchases =
                availableDates.months.includes(currentMonth) &&
                availableDates.years.includes(currentYear);

              if (hasCurrentMonthPurchases) {
                setSelectedMonth(currentMonth);
                setSelectedYear(currentYear);
              } else {
                const latestPurchase = allPurchases.reduce(
                  (latest, purchase) => {
                    const purchaseDate = new Date(purchase.date);
                    const latestDate = new Date(latest.date);
                    return purchaseDate > latestDate ? purchase : latest;
                  }
                );

                const latestDate = new Date(latestPurchase.date);
                const latestMonth = (latestDate.getMonth() + 1)
                  .toString()
                  .padStart(2, '0');
                const latestYear = latestDate.getFullYear().toString();

                setSelectedMonth(latestMonth);
                setSelectedYear(latestYear);
              }
            } else {
              const currentDate = new Date();
              const defaultMonth = (currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0');
              const defaultYear = currentDate.getFullYear().toString();
              setSelectedMonth(defaultMonth);
              setSelectedYear(defaultYear);
            }
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 glassCard">
          <div className="flex items-center justify-between bg-gradient-to-br from-white via-orange-50 to-orange-100 p-6 rounded-md shadow-md border-b-orange-200 border-b-4">
            <div className="flex items-center">
              <div className="md:ml-4">
                <h2 className=" font-bold 0 fugaz-font text-xl md:text-2xl ">
                  Purchase History
                </h2>
                <p className="text-gray-600 text-sm md:text-md">
                  {filteredPurchases.length} total purchases
                </p>
              </div>
            </div>
            <div className="text-right ">
              <div className="text-xs md:text-md text-gray-800">Viewing</div>
              <div className="md:text-1xl font-bold text-coral-600 ">
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

          {loading ? (
            <div className=" h-[400px] mt-4">
              <div className="animate-pulse h-full flex items-center justify-center">
                <Sun className="text-yellow-400 animate-spin" size={100} />
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {filteredPurchases.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className=" rounded-xl py-2 px-4  text-sm border-b-4 bg-gradient-to-br from-white via-orange-50 to-orange-100 border-b-orange-200">
                      Latest Purchases
                    </div>
                    <div className="text-sm rounded-xl py-2 px-4 bg-gradient-to-br from-white via-orange-50 to-orange-100 border-b-4 border-b-orange-200">
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
                <div className="glassCard h-[400px] flex flex-col items-center justify-center">
                  <CardHeader />
                  <CardContent>
                    <div className="flex flex-col items-center justify-center">
                      <DollarSign className="w-10 h-10 text-purple-500 mb-2" />
                      <span className="text-gray-800">
                        No recent purchases found.
                      </span>
                    </div>
                  </CardContent>
                </div>
              )}
            </div>
          )}
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
