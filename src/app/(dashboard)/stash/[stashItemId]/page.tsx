import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Edit, } from 'lucide-react';
import Image from 'next/image';
import { getStashItemById } from '@/lib/actions/stash.actions';
import { getCategoryIcon } from '@/lib/utils';

const StashItemPage = async ({
  params,
}: {
  params: { stashItemId: string };
}) => {
  const result = await getStashItemById(params.stashItemId);
  const stashItem = result.data;

  if (!stashItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full">
          <div className="p-6 text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Stash Item Not Found
            </h1>
            <p className="text-gray-600 mb-4">
              The stash item you are looking for does not exist.
            </p>
            <Button asChild>
              <Link href="/stash">Back to Stash</Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Button
          className="glassCard text-white font-bold"
          variant="ghost"
          size="sm"
          asChild
        >
          <Link href="/stash">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stash
          </Link>
        </Button>
      </div>

      <div className="bg-white rounded-xl border-b-6 border-b-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="bg-purple-100 p-4 border-b border-purple-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                width={35}
                height={35}
                src={getCategoryIcon(stashItem.category)}
                alt={stashItem.category}
              />
              <p className=" text-purple-800 permanent-marker-font text-2xl md:text-3xl">
                {stashItem.name}
              </p>
            </div>
            <p className="text-sm">
              Added:{' '}
              {stashItem.dateAdded
                ? new Date(stashItem.dateAdded).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center flex items-center justify-center">
                  Category
                </h4>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-blue-600 text-center">
                    {stashItem.category || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-lg p-4 border border-orange-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center flex items-center justify-center">
                  Type
                </h4>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-orange-600 text-center">
                    {stashItem.type || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-100 rounded-lg p-4 border border-red-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center flex items-center justify-center">
                  THC %
                </h4>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-red-600 text-center">
                    {stashItem.thc || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center flex items-center justify-center">
                  CBD %
                </h4>
                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-green-600 text-center">
                    {stashItem.cbd || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {stashItem.lineage && (
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-300 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-gray-800">Lineage</h4>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-gray-800 font-medium">{stashItem.lineage}</p>
              </div>
            </div>
          )}

          {stashItem.notes && (
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-gray-800">Notes</h4>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <p className="text-gray-800 font-medium">{stashItem.notes}</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-end">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/stash/${stashItem.id}/edit`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StashItemPage;
