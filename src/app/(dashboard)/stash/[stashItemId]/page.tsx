import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Edit } from 'lucide-react';
import Image from 'next/image';
import { getStashItemById } from '@/lib/actions/stash.actions';
import { getCategoryIcon } from '@/lib/utils';
import NotFound from '@/components/NotFound';
import { getAuthenticatedUser } from '@/lib/server-utils';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Stash | Sunset Stash',
  description: 'Your stash item details',
};

const StashItemPage = async ({
  params,
}: {
  params: Promise<{ stashItemId: string }>;
}) => {
  const { stashItemId } = await params;
  const result = await getStashItemById(stashItemId);
  const stashItem = result.data;

  if (!stashItem) {
    return <NotFound message="Stash item not found." />;
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

      <div className="bg-gradient-to-br from-white via-orange-100 to-orange-200 border-0 border-b-4 border-b-orange-300 shadow-xl rounded-xl overflow-hidden">
        <div className=" p-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full shadow-md">
                <Image
                  width={35}
                  height={35}
                  src={getCategoryIcon(stashItem.category)}
                  alt={stashItem.category}
                />
              </div>
              <p className="text-slate-800 fugaz-font text-2xl md:text-3xl">
                {stashItem.name}
              </p>
            </div>
            {/* <p className="text-sm text-gray-600 fugaz-font">
              Added:{' '}
              {stashItem.dateAdded
                ? new Date(stashItem.dateAdded).toLocaleDateString()
                : 'N/A'}
            </p> */}
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-200 rounded-lg shadow-md p-4 fugaz-font border-b-yellow-300 border-b-4">
              <div className="space-y-4">
                <h4 className="font-bold text-yellow-800 text-center flex items-center justify-center">
                  Category
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-yellow-800 text-center">
                    {stashItem.category || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 via-orange-200 to-orange-200 rounded-lg shadow-md p-4 fugaz-font border-b-orange-300 border-b-4">
              <div className="space-y-4">
                <h4 className="font-bold text-orange-700 text-center flex items-center justify-center">
                  Type
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-orange-700 text-center">
                    {stashItem.type || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-200 rounded-lg shadow-md p-4 fugaz-font border-b-pink-300 border-b-4">
              <div className="space-y-4">
                <h4 className="font-bold text-pink-700 text-center flex items-center justify-center">
                  THC %
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-pink-700 text-center">
                    {stashItem.thc || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-200 via-red-200 to-red-300 rounded-lg shadow-md p-4 fugaz-font border-b-red-400 border-b-4">
              <div className="space-y-4">
                <h4 className="font-bold text-red-700 text-center flex items-center justify-center">
                  CBD %
                </h4>
                <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                  <p className="text-xl font-bold text-red-700 text-center">
                    {stashItem.cbd || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {stashItem.lineage && (
            <div className="bg-gradient-to-br from-purple-100 via-purple-200 to-purple-200 rounded-lg shadow-md p-4 fugaz-font border-b-purple-300 border-b-4 mb-4">
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
            <div className="bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-200 rounded-lg shadow-md p-4 fugaz-font border-b-indigo-300 border-b-4 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-indigo-700">Notes</h4>
                </div>
              </div>
              <div className="bg-white/70 p-3 rounded-lg border border-white/30">
                <p className="text-gray-800 font-medium">{stashItem.notes}</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-700 fugaz-font">
              Added:{' '}
              {stashItem.dateAdded
                ? new Date(stashItem.dateAdded).toLocaleDateString()
                : 'N/A'}
            </p>
            {stashItem.userId === (await getAuthenticatedUser()).user?.id && (
              <Button size="sm" asChild>
                <Link href={`/stash/${stashItem.id}/edit`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StashItemPage;
