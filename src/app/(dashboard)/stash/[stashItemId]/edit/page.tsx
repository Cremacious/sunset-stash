;
import NotFound from '@/components/NotFound';
import EditStashForm from '@/components/stash/EditStashForm';
import { getStashItemById } from '@/lib/actions/stash.actions';
const EditStashItemPage = async ({
  params,
}: {
  params: Promise<{ stashItemId: string }>;
}) => {
  const { stashItemId } = await params;

  const stashItemResult = await getStashItemById(stashItemId);

  if (!stashItemResult.success || !stashItemResult.data) {
    return <NotFound message="Stash item not found." />;
  }

  return (
    <div>
      <EditStashForm
        stashItem={{
          ...stashItemResult.data,
          dateAdded: stashItemResult.data.dateAdded.toISOString(),
        }}
      />
    </div>
  );
};

export default EditStashItemPage;
