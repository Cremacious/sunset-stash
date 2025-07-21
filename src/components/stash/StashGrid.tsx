// components/stash/StashGrid.tsx - Client Component
'use client';
import { useMemo } from 'react';
import StashCard from './StashCard';
import NoStashFound from './NoStashFound';
import { StashItem } from '@/lib/types/stash.types';

interface StashGridProps {
  stashItems: StashItem[];
  searchTerm?: string;
  categoryFilter?: string;
  typeFilter?: string;
  sortBy?: string;
}

const StashGrid = ({
  stashItems,
  searchTerm,
  categoryFilter,
  typeFilter,
  sortBy = 'newest',
}: StashGridProps) => {
  const filteredAndSortedItems = useMemo(() => {
    let filtered = stashItems;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter((item) => item.type === typeFilter);
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return (
            new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
          );
        case 'newest':
          return (
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          );
        case 'name':
          return a.name.localeCompare(b.name);
        case 'thc-high':
          return parseFloat(b.thc.toString()) - parseFloat(a.thc.toString());
        case 'thc-low':
          return parseFloat(a.thc.toString()) - parseFloat(b.thc.toString());
        default:
          return 0;
      }
    });

    return sorted;
  }, [stashItems, searchTerm, categoryFilter, typeFilter, sortBy]);

  if (filteredAndSortedItems.length === 0) {
    return <NoStashFound />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredAndSortedItems.length} of {stashItems.length} items
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAndSortedItems.map((item) => (
          <StashCard key={item.id} stashItem={item} />
        ))}
      </div>
    </div>
  );
};

export default StashGrid;
