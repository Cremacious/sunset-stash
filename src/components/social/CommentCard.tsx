import { Comment } from '@/lib/types/post.types';

const CommentCard = ({ comment }: { comment: Comment }) => {
  const formattedDate =
    typeof comment.createdAt === 'string'
      ? new Date(comment.createdAt).toLocaleDateString()
      : (comment.createdAt as Date).toLocaleDateString();

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {comment.author[0]}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-semibold text-gray-800">{comment.author}</h4>
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
          <p className="text-gray-700 mb-3 leading-relaxed">
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;