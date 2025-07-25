import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Edit } from 'lucide-react';
import Image from 'next/image';
import { getStashItemById } from '@/lib/actions/stash.actions';
import { getCategoryIcon } from '@/lib/utils';
import { notFound } from 'next/navigation';

const StashItemPage = async ({
  params,
}: {
  params: Promise<{ stashItemId: string }>;
}) => {
  const { stashItemId } = await params;
  const result = await getStashItemById(stashItemId);
  const stashItem = result.data;

  if (!stashItem) {
    notFound();
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

      <div className="bg-gradient-to-br from-pink-50 via-blue-100 to-purple-200 border-0 border-b-4 border-b-purple-300 shadow-xl rounded-xl overflow-hidden">
        <div className=" p-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                width={35}
                height={35}
                src={getCategoryIcon(stashItem.category)}
                alt={stashItem.category}
              />
              <p className="text-slate-800 permanent-marker-font text-2xl md:text-3xl">
                {stashItem.name}
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Added:{' '}
              {stashItem.dateAdded
                ? new Date(stashItem.dateAdded).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-100/80 rounded-lg p-4 border border-orange-200 shadow-md">
              <div className="space-y-4">
                <h4 className="font-bold text-orange-700 text-center flex items-center justify-center">
                  Category
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-orange-600 text-center">
                    {stashItem.category || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100/80 rounded-lg p-4 border border-blue-200 shadow-md">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-center flex items-center justify-center">
                  Type
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-blue-600 text-center">
                    {stashItem.type || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-100/80 rounded-lg p-4 border border-red-200 shadow-md">
              <div className="space-y-4">
                <h4 className="font-bold text-red-700 text-center flex items-center justify-center">
                  THC %
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-red-600 text-center">
                    {stashItem.thc || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-100/80 rounded-lg p-4 border border-green-200 shadow-md">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 text-center flex items-center justify-center">
                  CBD %
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-green-600 text-center">
                    {stashItem.cbd || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {stashItem.lineage && (
            <div className="bg-purple-100/80 rounded-lg p-4 border border-purple-300 shadow-md mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-purple-800">Lineage</h4>
                </div>
              </div>
              <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                <p className="text-gray-800 font-medium">{stashItem.lineage}</p>
              </div>
            </div>
          )}

          {stashItem.notes && (
            <div className="bg-yellow-100/80 rounded-lg p-4 border border-yellow-300 shadow-md mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-yellow-700">Notes</h4>
                </div>
              </div>
              <div className="bg-white/70 p-3 rounded-lg border border-white/30">
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
