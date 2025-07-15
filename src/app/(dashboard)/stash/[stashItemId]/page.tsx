import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { getStashItemById } from '@/lib/actions/stash.actions';
// import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Edit3,
  Leaf,
  Beaker,
  Scale,
  Calendar,
  FileText,
} from 'lucide-react';

const StashItemPage = async ({
  params,
}: {
  params: Promise<{ stashItemId: string }>;
}) => {
  const { stashItemId } = await params;

  const stashItem = {
    id: stashItemId,
    name: 'Blue Dream',
    category: 'Hybrid',
    type: 'Flower',
    amount: '3.5g',
    thc: 22.5,
    cbd: 0.5,
    lineage: 'Blueberry x Haze',
    notes:
      'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones and provides an uplifting yet calming effect.',
    dateAdded: new Date('2025-01-15'),
    userId: 'user-1',
  };

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'sativa':
        return 'text-green-600 bg-green-50';
      case 'indica':
        return 'text-purple-600 bg-purple-50';
      case 'hybrid':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link href="/stash">
          <Button variant="outline" className="bg-white/50 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stash
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Stash Item Details</h1>
      </div>

      {/* Main Stash Item Card */}
      <Card className="bg-white shadow-xl border-0 max-w-4xl mx-auto">
        <div className="bg-white p-2 md:px-6">
          {/* Header with Edit Button */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {stashItem.name}
                  </h2>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                      stashItem.category
                    )}`}
                  >
                    {stashItem.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-600 bg-gray-100">
                    {stashItem.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 ml-4">
              <Link href={`/stash/${stashItemId}/edit`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
                >
                  <Edit3 className="w-4 h-4 mr-1" />
                  Edit
                </Button>
              </Link>
            </div>
          </div>

          {/* Date Added */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <Calendar className="w-4 h-4" />
            <span>Added on {formatDate(stashItem.dateAdded)}</span>
          </div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-800">Amount</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">
                {stashItem.amount}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Beaker className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-800">THC</h3>
              </div>
              <p className="text-2xl font-bold text-purple-600">
                {stashItem.thc}%
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Beaker className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">CBD</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {stashItem.cbd}%
              </p>
            </div>
          </div>

          {/* Lineage Section */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Lineage
            </h3>
            <p className="text-gray-700 text-lg">{stashItem.lineage}</p>
          </div>

          {/* Notes Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Notes
            </h3>
            <p className="text-gray-700 leading-relaxed">{stashItem.notes}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StashItemPage;
