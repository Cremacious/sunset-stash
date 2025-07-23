'use client';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, X, Calendar, Filter } from 'lucide-react';

interface PurchaseSearchBarProps {
  availableDates: { months: string[]; years: string[] };
  selectedMonth?: string;
  selectedYear?: string;
  onMonthChange: (month: string | undefined) => void;
  onYearChange: (year: string | undefined) => void;
  onClearFilters: () => void;
  purchases?: Array<{ date: string | Date }>; // Add purchases prop to find latest date
}

const PurchaseSearchBar = ({
  availableDates,
  selectedMonth,
  selectedYear,
  onMonthChange,
  onYearChange,
  onClearFilters,
}: PurchaseSearchBarProps) => {
  const router = useRouter();

  const hasActiveFilters = selectedMonth || selectedYear;

  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear().toString();
  const isCurrentMonthYear =
    selectedMonth === currentMonth && selectedYear === currentYear;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm relative border-b-4 border-b-purple-500">
      <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
        <div className="flex-shrink-0">
          <Button
            size="sm"
            onClick={() => router.push('/purchases/new')}
            className="h-9 px-4 w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Purchase
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 md:flex-shrink-0">
          <Select
            value={selectedMonth || 'all'}
            onValueChange={(value) =>
              onMonthChange(value === 'all' ? undefined : value)
            }
          >
            <SelectTrigger className="h-18 w-full sm:w-40 bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1 text-gray-500" />
                <SelectValue placeholder="Month" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Months</SelectItem>
              {availableDates.months.map((month) => (
                <SelectItem key={month} value={month}>
                  {new Date(2024, parseInt(month) - 1).toLocaleString(
                    'default',
                    { month: 'long' }
                  )}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedYear || 'all'}
            onValueChange={(value) =>
              onYearChange(value === 'all' ? undefined : value)
            }
          >
            <SelectTrigger className="h-9 w-full sm:w-40 bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
              <div className="flex items-center">
                <Filter className="w-3 h-3 mr-1 text-gray-500" />
                <SelectValue placeholder="Year" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {availableDates.years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && !isCurrentMonthYear && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="h-9 px-3 text-xs border-gray-300 hover:bg-gray-50 flex-shrink-0"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseSearchBar;
