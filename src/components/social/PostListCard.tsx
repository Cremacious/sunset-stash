import { PostWithStashItems } from '@/lib/types/social.types';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
};

const PostListCard = ({ post }: { post: PostWithStashItems }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-200 border-0 border-b-4 border-b-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[90px] w-full relative p-4">
      <Link href={`/social/${post.id}`}>
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-md">
            <span className="text-purple-700 font-bold text-base">
              {getInitials(post.author)}
            </span>
          </div>
          <div>
            <p className="font-bold text-lg permanent-marker-font text-slate-800">
              {post.author}
            </p>
            <p className="text-xs text-gray-600">
              {typeof post.createdAt === 'string'
                ? post.createdAt
                : post.createdAt.toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="text-gray-800 leading-relaxed line-clamp-2 mb-2">
          {post.content}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="bg-orange-100/80 text-orange-700 border-orange-200 font-medium text-xs"
          >
            {post.activity}
          </Badge>

          {post.stashItems && post.stashItems.length > 0 && (
            <Badge className="bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-sm text-xs">
              {post.stashItems?.length ?? 0} Stash Items
            </Badge>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PostListCard;
