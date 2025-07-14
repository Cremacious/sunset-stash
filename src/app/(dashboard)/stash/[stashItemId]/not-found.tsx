import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function StashItemNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            href="/stash"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Stash
          </Link>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Stash Item Not Found
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-600 text-lg">
              The stash item you&apos;re looking for doesn&apos;t exist or has
              been removed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/stash">
                <Button variant="default" className="w-full sm:w-auto">
                  View All Stash Items
                </Button>
              </Link>
              <Link href="/stash/new">
                <Button variant="outline" className="w-full sm:w-auto">
                  Add New Item
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
