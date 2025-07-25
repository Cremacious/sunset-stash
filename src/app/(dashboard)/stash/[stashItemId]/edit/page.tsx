import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
    return (
      <div className="w-full flex justify-center py-6 px-1">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                Error
              </CardTitle>
              <CardDescription>
                {stashItemResult.error || 'Failed to load stash item.'}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
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
