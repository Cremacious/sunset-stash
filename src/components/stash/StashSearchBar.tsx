'use client';
import { Button } from '../ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { Input } from '../ui/input';
import { useState, useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, X, Filter, SortAsc } from 'lucide-react';

interface StashSearchBarProps {
  availableCategories: string[];
  availableTypes: string[];
  selectedCategory?: string;
  selectedType?: string;
  selectedSort?: string;
  searchTerm?: string;
}

const StashSearchBar = ({
  availableCategories,
  availableTypes,
  selectedCategory,
  selectedType,
  selectedSort,
  searchTerm,
}: StashSearchBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(searchTerm || '');

  const updateFilters = (filters: Record<string, string | undefined>) => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') {
        params.set(key, value);
      }
    });

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    updateFilters({
      search: value,
      category: selectedCategory,
      type: selectedType,
      sort: selectedSort,
    });
  };

  const handleClearFilters = () => {
    setSearch('');
    router.push(pathname);
  };

  const hasActiveFilters =
    search || selectedCategory || selectedType || selectedSort !== 'newest';

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative">
      {/* Main Controls - Add Item Left, Search Options Right */}
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
        {/* Add Item Button - Left Side */}
        <div className="flex-shrink-0">
          <Button
            size="sm"
            onClick={() => router.push('/stash/new')}
            disabled={isPending}
            className="h-9 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>

        {/* Search and Filters - Right Side */}
        <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 flex-1">
          {/* Search Input - Limited Width */}
          <div className="relative w-full sm:w-64 lg:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              className="pl-10 pr-8 h-9 bg-white border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Search strains..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              disabled={isPending}
            />
            {search && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-2 flex-1">
            {/* Category Filter */}
            <Select
              value={selectedCategory || 'all'}
              onValueChange={(value) =>
                updateFilters({
                  search,
                  category: value === 'all' ? undefined : value,
                  type: selectedType,
                  sort: selectedSort,
                })
              }
              disabled={isPending}
            >
              <SelectTrigger className="h-9 w-full sm:min-w-[140px] bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
                <div className="flex items-center">
                  <Filter className="w-3 h-3 mr-1 text-gray-500" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {availableCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select
              value={selectedType || 'all'}
              onValueChange={(value) =>
                updateFilters({
                  search,
                  category: selectedCategory,
                  type: value === 'all' ? undefined : value,
                  sort: selectedSort,
                })
              }
              disabled={isPending}
            >
              <SelectTrigger className="h-9 w-full sm:min-w-[110px] bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
                <div className="flex items-center">
                  <Filter className="w-3 h-3 mr-1 text-gray-500" />
                  <SelectValue placeholder="Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {availableTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Filter */}
            <Select
              value={selectedSort || 'newest'}
              onValueChange={(value) =>
                updateFilters({
                  search,
                  category: selectedCategory,
                  type: selectedType,
                  sort: value,
                })
              }
              disabled={isPending}
            >
              <SelectTrigger className="h-9 w-full sm:min-w-[110px] bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
                <div className="flex items-center">
                  <SortAsc className="w-3 h-3 mr-1 text-gray-500" />
                  <SelectValue placeholder="Sort" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="name">A-Z</SelectItem>
                <SelectItem value="thc-high">THC ↓</SelectItem>
                <SelectItem value="thc-low">THC ↑</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Button */}
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearFilters}
                disabled={isPending}
                className="h-9 px-3 text-xs border-gray-300 hover:bg-gray-50 flex-shrink-0"
              >
                <X className="w-3 h-3 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Active Filters - Compact Pills */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-1 mt-3 pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-500 mr-1">Filters:</span>
          {search && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-purple-100 text-purple-700">
              &quot;{search}&quot;
              <button
                onClick={() => handleSearchChange('')}
                className="ml-1 text-purple-500 hover:text-purple-700"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          )}
          {selectedCategory && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-700">
              {selectedCategory}
              <button
                onClick={() =>
                  updateFilters({
                    search,
                    category: undefined,
                    type: selectedType,
                    sort: selectedSort,
                  })
                }
                className="ml-1 text-blue-500 hover:text-blue-700"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          )}
          {selectedType && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
              {selectedType}
              <button
                onClick={() =>
                  updateFilters({
                    search,
                    category: selectedCategory,
                    type: undefined,
                    sort: selectedSort,
                  })
                }
                className="ml-1 text-green-500 hover:text-green-700"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Loading State */}
      {isPending && (
        <div className="absolute inset-0 bg-white/80 rounded-lg flex items-center justify-center">
          <div className="flex items-center space-x-2 text-purple-600">
            <div className="w-3 h-3 border border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-medium">Updating...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StashSearchBar;
