import { Button } from '@/components/ui/button';
import PurchaseCard from '@/components/purchases/PurchaseCard';
import PurchaseStats from '@/components/purchases/PurchaseStats';
import NoPurchasesFound from '@/components/purchases/NoPurchasesFound';
import {
  getAvailablePurchaseDates,
  getFilteredPurchases,
} from '@/lib/actions/purchase.actions';
import PurchaseSearchBar from '@/components/purchases/PurchaseSearchBar';

const PurchasesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; year?: string }>;
}) => {
  const { month, year } = await searchParams;
  const currentDate = new Date();
  const defaultMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const defaultYear = currentDate.getFullYear().toString();

  const selectedMonth = month || defaultMonth;
  const selectedYear = year || defaultYear;

  const [purchasesResult, availableDatesResult] = await Promise.all([
    getFilteredPurchases(selectedMonth, selectedYear),
    getAvailablePurchaseDates(),
  ]);

  const purchases = purchasesResult.purchases || [];
  const availableDates =
    availableDatesResult.dates && typeof availableDatesResult.dates === 'object'
      ? availableDatesResult.dates
      : { months: [], years: [] };

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <div className="smallGlassCard">
        <PurchaseSearchBar
          availableDates={availableDates}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 glassCard ">
          <div className="flex items-center justify-between bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center ">
              <div className="ml-4">
                <h2 className=" text-xl md:text-2xl font-bold text-gray-800">
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
                {new Date(
                  parseInt(selectedYear),
                  parseInt(selectedMonth) - 1
                ).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>
          </div>

          <div className="mt-4">
            {purchases.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-purple-100 rounded-xl py-2 px-4 border border-purple-300">
                    Latest Purchases
                  </div>
                  <div className="bg-blue-100 rounded-xl py-2 px-4 border border-blue-300">
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
                    <Button className="">
                      View All {purchases.length} Purchases
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
            purchases={purchases}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasesPage;
