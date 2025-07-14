import PostListCard from './PostListCard';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CommunityFeed = () => {
  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">Community Feed</div>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => router.push('/social')}
          >
            View Feed
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <PostListCard />
          <PostListCard />
          <PostListCard />

          {/* <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">JS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Jake S.</p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Just picked up some Blue Dream from Trulieve! Perfect for movie
              night 🎬
            </p>
            <div className="mt-2 flex space-x-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                🎬 Movie Night
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Blue Dream
              </span>
            </div>
          </div> */}

          {/* <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">MR</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Maria R.</p>
                <p className="text-xs text-gray-600">5 hours ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Added Gorilla Glue to my stash! This stuff is incredible for pain
              relief 💪
            </p>
            <div className="mt-2 flex space-x-2">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                🏺 Stash
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Gorilla Glue
              </span>
            </div>
          </div> */}

          {/* <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">MR</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Maria R.</p>
                <p className="text-xs text-gray-600">5 hours ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Added Gorilla Glue to my stash! This stuff is incredible for pain
              relief 💪
            </p>
            <div className="mt-2 flex space-x-2">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                🏺 Stash
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Gorilla Glue
              </span>
            </div>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityFeed;
