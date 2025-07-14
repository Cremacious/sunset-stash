import { Post } from '@/lib/types';
import { Badge } from '../ui/badge';

const PostListCard = ({ post }: { post: Post }) => {
  return (
    <div className="p-4  rounded-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">JS</span>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{post.author}</p>
          <p className="text-xs text-gray-600">{post.createdAt}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
      <div className="mt-2 flex space-x-2">
        <Badge
          variant="outline"
          className="text-xs bg-purple-50 text-purple-700 border-purple-200"
        >
          {post.activity}
        </Badge>
        <Badge className="text-xs bg-blue-500">
          {post.stashItems.length} Stash Items
        </Badge>
      </div>
    </div>
  );
};

export default PostListCard;
