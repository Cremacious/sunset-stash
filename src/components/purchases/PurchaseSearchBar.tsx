'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface PurchaseFiltersProps {
  availableDates: { months: string[]; years: string[] };
  selectedMonth?: string;
  selectedYear?: string;
}

const PurchaseSearchBar = ({
  availableDates,
  selectedMonth,
  selectedYear,
}: PurchaseFiltersProps) => {
  const router = useRouter();
  const pathname = usePathname();

const updateFilters = (newMonth: string, newYear: string) => {
  const params = new URLSearchParams();
  if (newMonth) params.set('month', newMonth);
  if (newYear) params.set('year', newYear);
  
  router.push(`${pathname}?${params.toString()}`);
};

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Button className="w-full md:w-auto" asChild>
          <Link href="/purchases/new">Add New Purchase</Link>
        </Button>

        <div className="flex items-center flex-row space-x-2">
          <div className="">Filter by:</div>

          <Select
            value={selectedMonth}
            onValueChange={(month) => updateFilters(month, selectedYear || '')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {availableDates.months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedYear}
            onValueChange={(year) => updateFilters(selectedMonth || '', year)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {availableDates.years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSearchBar;
