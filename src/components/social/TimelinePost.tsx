import { Button } from '../ui/button';
import { Post } from '@/lib/types/social.types';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const TimelinePost = ({ post }: { post: Post }) => {
  // Generate initials from author name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <div className="bg-white rounded-xl border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header Section */}
      <div className="bg-orange-50 p-4 border-b border-orange-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">
                {getInitials(post.author)}
              </span>
            </div>
            <div>
              <p className="font-bold text-gray-800">{post.author}</p>
              <p className="text-xs text-gray-600">12/12/12</p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="bg-orange-100 text-orange-700 border-orange-300 font-medium"
          >
            {post.activity}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
          <p className="text-gray-800 leading-relaxed">{post.content}</p>
        </div>

        {/* Stash Items Section */}
        {post.stashItems && post.stashItems.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                🌿 Stash Items:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.stashItems.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-green-500 hover:bg-green-600 text-white shadow-sm"
                >
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Action Bar */}
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2"
            >
              <span className="text-lg">💬</span>
              <span className="text-sm font-medium">Comments</span>
              <span className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-1">
                12
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg px-3 py-2"
            >
              <span className="text-lg">❤️</span>
              <span className="text-sm font-medium">Like</span>
            </Button>
          </div>
          <Button
            asChild
            className="bg-purple-500 hover:bg-purple-600 text-white shadow-md px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Link href={`/social/${post.id}`}>View Post</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimelinePost;
