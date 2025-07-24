import { PostWithStashItems } from '@/lib/types/social.types';
import { Badge } from '../ui/badge';

const PostListCard = ({ post }: { post: PostWithStashItems }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-l-blue-600 border-l-6 hover:shadow-md">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">JS</span>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{post.author}</p>
          <p className="text-xs text-gray-600">
            {typeof post.createdAt === 'string'
              ? post.createdAt
              : post.createdAt.toLocaleString()}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
      <div className="mt-2 flex space-x-2">
        <Badge
          variant="outline"
          className="text-xs font-bold bg-blue-50 text-blue-700 border-blue-200"
        >
          {post.activity}
        </Badge>

        {post.stashItems && post.stashItems.length > 0 && (
          <Badge className="text-xs bg-blue-500">
            {(post.stashItems?.length ?? 0)} Stash Items
          </Badge>
        )}
      </div>
    </div>
  );
};

export default PostListCard;
