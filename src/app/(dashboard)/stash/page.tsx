import StashAnalytics from '@/components/stash/StashAnalytics';
import { getUserStashItems } from '@/lib/actions/stash.actions';
import StashSearchBar from '@/components/stash/StashSearchBar';
import StashGrid from '@/components/stash/StashGrid';

const StashPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    type?: string;
    sort?: string;
  }>;
}) => {
  const { search, category, type, sort } = await searchParams;
  const { stashItems = [] } = await getUserStashItems();

  const availableCategories = [
    ...new Set(stashItems.map((item) => item.category)),
  ];
  const availableTypes = [...new Set(stashItems.map((item) => item.type))];

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
