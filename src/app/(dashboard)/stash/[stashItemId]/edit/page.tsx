import {
  Card,
  CardContent,
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
    <div className="relative w-full flex justify-center py-6 px-1">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
              Strain Details
            </CardTitle>
            <CardDescription>
              Fill in the details about your new strain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <EditStashForm
              stashItem={{
                ...stashItemResult.data,
                dateAdded: stashItemResult.data.dateAdded.toISOString(),
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditStashItemPage;
