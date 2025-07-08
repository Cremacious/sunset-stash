'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { CircleDollarSign, Container, SmilePlus, Pen } from 'lucide-react';
import Link from 'next/link';
const QuickActions = () => {
  const router = useRouter();

  return (
    <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
      <Container />
      <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-3">⚡</span>
            Quick Actions
          </CardTitle>
          <CardDescription>
            Get started with your cannabis journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href={'/purchases/new'}>
              <div className="h-auto p-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex flex-col items-center space-y-2 rounded-xl font-bold ">
                <CircleDollarSign size={50} />
                <div className="text-lg">Log Purchase</div>
              </div>
            </Link>

            <Link href={'/stash/new'}>
              <div className="h-auto p-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white flex flex-col items-center space-y-2 rounded-xl">
                <Container size={50} />
                <div className="text-lg">New Stash Item</div>
              </div>
            </Link>

            <Link href={'/social/new-post'}>
              <div
                onClick={() => router.push('/social/new-post')}
                className="h-auto p-4 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white flex flex-col items-center space-y-2 rounded-xl"
              >
                <span className="text-2xl">
                  <Pen size={50} />
                </span>
                <span className="font-medium">Create Post</span>
              </div>
            </Link>
            <Link href={'/social/find-friends'}>
              <div className="h-auto p-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white flex flex-col items-center space-y-2 rounded-xl">
                <span className="text-2xl">
                  <SmilePlus size={50} />
                </span>
                <span className="font-medium">Find Friends</span>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
