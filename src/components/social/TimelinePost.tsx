import { Button } from '../ui/button';
import { PostWithStashItems } from '@/lib/types/social.types';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const TimelinePost = ({ post }: { post: PostWithStashItems }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-200 border-0 border-b-4 border-b-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[110px] w-full relative">
      <div className="flex items-center justify-between p-3 pb-2 relative">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center shadow-md">
            <span className="text-purple-700 font-bold text-lg">
              {getInitials(post.author)}
            </span>
          </div>
          <div>
            <Link
              href={`/profile/${post.userId}`}
              className="font-bold text-xl hover:underline permanent-marker-font"
            >
              {post.author}
            </Link>
            <p className="text-xs text-gray-600">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Badge
          variant="outline"
          className="bg-orange-100/80 text-orange-700 border-orange-200 font-medium"
        >
          {post.activity}
        </Badge>
      </div>
      <div className="pb-4 px-4">
        <div className="bg-white backdrop-blur-sm rounded-lg p-4 mb-4 border border-blue-100">
          <p className="text-gray-800 leading-relaxed">{post.content}</p>
        </div>
        {post.stashItems && post.stashItems.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-purple-700">
                Strains:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.stashItems
                .filter((item) => item.stashItem && item.stashItem.name)
                .map((item) => (
                  <Badge
                    key={item.stashItemId}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-sm"
                  >
                    {item.stashItem.name}
                  </Badge>
                ))}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between  rounded-lg p-3  mt-2">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <MessageCircle className="text-purple-600" size={30} />
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {post.comments?.length ?? 0}
              </span>
            </div>
          </div>
          <Button asChild className="">
            <Link href={`/social/${post.id}`}>View Post</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimelinePost;
