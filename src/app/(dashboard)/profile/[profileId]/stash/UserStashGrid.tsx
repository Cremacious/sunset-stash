'use client';
import { useState, useMemo } from 'react';
import StashItemListCard from '@/components/stash/StashItemListCard';
import { StashItem } from '@/lib/types/stash.types';
import UserSearchBar from './UserSearchBar';

interface UserStashGridProps {
  stashItems: StashItem[];
  availableCategories: string[];
  availableTypes: string[];
}

const UserStashGrid = ({
  stashItems,
  availableCategories,
  availableTypes,
}: UserStashGridProps) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [sort, setSort] = useState('newest');

  const filteredAndSortedItems = useMemo(() => {
    let filtered = stashItems;
    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }
    if (type) {
      filtered = filtered.filter((item) => item.type === type);
    }
    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
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
  }, [stashItems, search, category, type, sort]);

  return (
    <div className="space-y-4">
      <UserSearchBar
        availableCategories={availableCategories}
        availableTypes={availableTypes}
        selectedCategory={category}
        selectedType={type}
        selectedSort={sort}
        searchTerm={search}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onTypeChange={setType}
        onSortChange={setSort}
        onClearFilters={() => {
          setSearch('');
          setCategory(undefined);
          setType(undefined);
          setSort('newest');
        }}
      />
      {filteredAndSortedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAndSortedItems.map((item) => (
            <StashItemListCard key={item.id} stashItem={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <span>No stash items found.</span>
        </div>
      )}
    </div>
  );
};

export default UserStashGrid;
