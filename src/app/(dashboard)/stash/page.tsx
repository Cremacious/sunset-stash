'use client';
import { useEffect, useState } from 'react';
import StashAnalytics from '@/components/stash/StashAnalytics';
import { getUserStashItems } from '@/lib/actions/stash.actions';
import StashSearchBar from '@/components/stash/StashSearchBar';
import StashGrid from '@/components/stash/StashGrid';
import { StashItem } from '@/lib/types/stash.types';

const StashPage = () => {
  const [stashItems, setStashItems] = useState<StashItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Client-side filter states
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    const loadStashItems = async () => {
      try {
        const { stashItems = [] } = await getUserStashItems();
        setStashItems(stashItems);
      } catch (error) {
        console.error('Failed to load stash items:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStashItems();
  }, []);

  const availableCategories = [
    ...new Set(stashItems.map((item) => item.category)),
  ];
  const availableTypes = [...new Set(stashItems.map((item) => item.type))];

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
        <StashSearchBar
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glassCard md:col-span-3">
          <StashGrid
            stashItems={stashItems}
            searchTerm={search}
            categoryFilter={category}
            typeFilter={type}
            sortBy={sort}
          />
        </div>
        <StashAnalytics stashItems={stashItems} />
      </div>
    </div>
  );
};

export default StashPage;