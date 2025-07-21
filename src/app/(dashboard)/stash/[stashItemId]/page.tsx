import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, Edit } from 'lucide-react';
import { getStashItemById } from '@/lib/actions/stash.actions';
import { getCategoryIcon } from '@/lib/utils';
import Image from 'next/image';

const StashItemPage = async ({
  params,
}: {
  params: Promise<{ stashItemId: string }>;
}) => {
  const { stashItemId } = await params;

  const result = await getStashItemById(stashItemId);
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
      <div className="">
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

      {/* Main Stash Item Card - Matching Post Design with Purple Theme */}
      <div className="bg-white rounded-xl border-b-6 border-b-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Header Section - Purple Theme */}
        <div className="bg-purple-50 p-4 border-b border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                width={50}
                height={50}
                src={getCategoryIcon(stashItem.category)}
                alt={stashItem.category}
              />

              <div>
                <p className="font-bold text-xl">{stashItem.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Basic Info Grid - Category and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center">
                  Category
                </h4>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-purple-600 text-center">
                    {stashItem.category}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-100 rounded-lg p-4 border border-orange-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center">Type</h4>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-orange-600 text-center">
                    {stashItem.type}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 rounded-lg p-4 border border-red-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center">THC %</h4>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-red-600 text-center">
                    {stashItem.thc}%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-center">CBD %</h4>

                <div className="bg-white p-3 rounded-lg border">
                  <p className="text-xl font-bold text-green-600 text-center">
                    {stashItem.cbd}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {stashItem.lineage && (
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="ml-2">
                  <h4 className="text-lg font-bold text-gray-800">Genetics</h4>
                  <p className="text-gray-600 text-sm">
                    Parent strains or genetic background
                  </p>
                </div>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="text-gray-800 font-medium">{stashItem.lineage}</p>
              </div>
            </div>
          )}

          {stashItem.notes && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-1 ml-2">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Your Experience
                  </h4>
                  <div className="bg-white p-3 rounded border">
                    <p className="text-gray-800 font-medium">
                      {stashItem.notes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600 mt-1">
                  Added {new Date(stashItem.dateAdded).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-300 hover:bg-purple-50"
                asChild
              >
                <Link href={`/stash/${stashItemId}/edit`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StashItemPage;
