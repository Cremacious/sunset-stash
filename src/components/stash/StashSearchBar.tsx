'use client';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
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
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string | undefined) => void;
  onTypeChange: (value: string | undefined) => void;
  onSortChange: (value: string) => void;
  onClearFilters: () => void;
}

const StashSearchBar = ({
  availableCategories,
  availableTypes,
  selectedCategory,
  selectedType,
  selectedSort,
  searchTerm,
  onSearchChange,
  onCategoryChange,
  onTypeChange,
  onSortChange,
  onClearFilters,
}: StashSearchBarProps) => {
  const router = useRouter();

  const hasActiveFilters =
    searchTerm || selectedCategory || selectedType || selectedSort !== 'newest';

  return (
    <div className=" rounded-lg p-4 shadow-sm border-b-4 border-b-purple-300 bg-gradient-to-br from-orange-50 via-pink-100 to-blue-200 relative">
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
        <div className="flex-shrink-0">
          <Button
            size="sm"
            onClick={() => router.push('/stash/new')}
            className="w-full md:w-auto h-9 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm"
          >
            <Plus className="w-4 h-4 mr-1" />
            <div className="mt-1">Add Item</div>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 flex-1">
          <div className="relative w-full sm:w-64 lg:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              className="pl-10 pr-8 h-9 bg-white border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Search strains..."
              value={searchTerm || ''}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 flex-1">
            <Select
              value={selectedCategory || 'all'}
              onValueChange={(value) =>
                onCategoryChange(value === 'all' ? undefined : value)
              }
            >
              <SelectTrigger className="h-9 w-full sm:min-w-[140px] bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
                <div className="flex items-center">
                  <Filter className="w-3 h-3 mr-1 text-gray-500" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {availableCategories
                  .filter((category) => category && category.trim() !== '')
                  .map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedType || 'all'}
              onValueChange={(value) =>
                onTypeChange(value === 'all' ? undefined : value)
              }
            >
              <SelectTrigger className="h-9 w-full sm:min-w-[110px] bg-white border-gray-300 rounded-md text-sm hover:border-purple-400 focus:ring-1 focus:ring-purple-500">
                <div className="flex items-center">
                  <Filter className="w-3 h-3 mr-1 text-gray-500" />
                  <SelectValue placeholder="Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {availableTypes
                  .filter((type) => type && type.trim() !== '')
                  .map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedSort || 'newest'}
              onValueChange={onSortChange}
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

            {hasActiveFilters && (
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

      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-1 mt-3 pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-500 mr-1">Filters:</span>
          {searchTerm && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-purple-100 text-purple-700">
              &quot;{searchTerm}&quot;
              <button
                onClick={() => onSearchChange('')}
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
                onClick={() => onCategoryChange(undefined)}
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
                onClick={() => onTypeChange(undefined)}
                className="ml-1 text-green-500 hover:text-green-700"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StashSearchBar;
