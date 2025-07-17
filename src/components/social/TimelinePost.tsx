import { Button } from '../ui/button';
import { Post } from '@/lib/types/social.types';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { MessageCircle, Heart } from 'lucide-react';

const TimelinePost = ({ post }: { post: Post }) => {
  // Generate initials from author name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <div className="bg-white rounded-xl border-b-6 border-b-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header Section */}
      <div className="bg-blue-50 p-4 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
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
            className="bg-blue-100 text-blue-700 border-blue-300 font-medium"
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
                Strains:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.stashItems.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-sm"
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
            <div className="relative">
              <MessageCircle className="text-purple-600" size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg px-3 py-2">
              <Heart fill="red" size={30} className="text-red-500" />
            </button>
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
