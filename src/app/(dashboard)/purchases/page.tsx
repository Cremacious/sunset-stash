import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import PurchaseCard from '@/components/purchases/PurchaseCard';
import PurchaseStats from '@/components/purchases/PurchaseStats';
import NoPurchasesFound from '@/components/purchases/NoPurchasesFound';
import { getAllUserPurchases } from '@/lib/actions/purchase.actions';

const PurchasesPage = async () => {
  const { purchases = [] } = await getAllUserPurchases();

  // const purchases = [];

  const selectedMonth = 'Jan';
  const selectedYear = '2025';

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <div className="smallGlassCard">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Button className="w-full md:w-auto" asChild>
              <Link href="/purchases/new">Add New Purchase</Link>
            </Button>

            <div className="flex items-center space-x-2">
              <div className="mt-4">Filter by:</div>
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-xs  mb-1">Month</div>
                  <Select
                    value={selectedMonth}
                    // onValueChange={setSelectedMonth}
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
                  <Select value={selectedYear}>
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
                {/* {selectedMonth}/{selectedYear} */}
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
                    <PurchaseCard
                      key={purchase.id}
                      purchase={{
                        ...purchase,
                        date:
                          typeof purchase.date === 'object' &&
                          purchase.date instanceof Date
                            ? purchase.date.toISOString()
                            : purchase.date,
                        createdAt:
                          typeof purchase.createdAt === 'object' &&
                          purchase.createdAt instanceof Date
                            ? purchase.createdAt.toISOString()
                            : purchase.createdAt,
                      }}
                    />
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
            purchases={purchases.map((purchase) => ({
              ...purchase,
              date:
                typeof purchase.date === 'object' &&
                purchase.date instanceof Date
                  ? purchase.date.toISOString()
                  : purchase.date,
              createdAt:
                typeof purchase.createdAt === 'object' &&
                purchase.createdAt instanceof Date
                  ? purchase.createdAt.toISOString()
                  : purchase.createdAt,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasesPage;
