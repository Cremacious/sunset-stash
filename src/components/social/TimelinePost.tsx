import { Button } from '../ui/button';
import { Post } from '@/lib/types/social.types';

const TimelinePost = ({ post }: { post: Post }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
      <div className="flex items-start space-x-3">
        <div
          className={`w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white font-semibold text-sm">AVATAR</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <p className="text-sm font-semibold text-gray-900">{post.author}</p>
            <span className="text-lg">type</span>
            <p className="text-xs text-gray-500">{post.createdAt}</p>
          </div>
          <p className="text-gray-800 mb-2">{post.content}</p>
          RENDER POST CONTENT
          <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-100">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600"
            >
              <span>💬</span>
              <span>COMMENTS</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600"
            >
              <span>🔄</span>
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePost;
