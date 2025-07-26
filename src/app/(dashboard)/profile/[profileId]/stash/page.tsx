import { getStashItemsByUserId } from '@/lib/actions/stash.actions';
import UserStashGrid from './UserStashGrid';
import NotFound from '@/components/NotFound';





const UserStashPage = async ({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) => {
  const { profileId } = await params;

  if (!profileId) {
    return <NotFound message="Profile not found." />;
  }
  const { stashItems = [] } = await getStashItemsByUserId(profileId);

  const availableCategories = [
    ...new Set(stashItems.map((item) => item.category)),
  ];
  const availableTypes = [...new Set(stashItems.map((item) => item.type))];

  return (
    <div className="glassCard max-w-5xl mx-auto">
      <UserStashGrid
        stashItems={stashItems}
        availableCategories={availableCategories}
        availableTypes={availableTypes}
      />
    </div>
  );
};

export default UserStashPage;
