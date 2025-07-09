import { Button } from '../ui/button';
import { Post } from '@/lib/types/social.types';
import { Badge } from '../ui/badge';

const TimelinePost = ({ post }: { post: Post }) => {
  // Generate initials from author name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">
              {getInitials(post.author)}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-2 flex-wrap">
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                {post.author}
              </p>
              <Badge
                variant="outline"
                className="text-xs bg-purple-50 text-purple-700 border-purple-200"
              >
                {post.activity}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 ml-4">
          <p className="text-xs text-gray-500 whitespace-nowrap">
            {post.createdAt}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
          {post.content}
        </p>
      </div>

      {post.stashItems && post.stashItems.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {post.stashItems.map((item, index) => (
              <Badge key={index} className="text-xs bg-blue-500">
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Bottom border */}
      <div className="border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between">
          {/* Comments Button - Bottom Left */}
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 px-2 py-1 h-auto"
          >
            <span>💬</span>
            <span className="hidden sm:inline">Comments</span>
            <span className="sm:hidden">{post.comments.length}</span>
          </Button>

          {/* View Post Button - Bottom Right */}
          <Button className="text-xs sm:text-sm hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700">
            View Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimelinePost;
