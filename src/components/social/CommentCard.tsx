'use client';
import { Comment } from '@/lib/types/post.types';
import { Edit } from 'lucide-react';
import { Button } from '../ui/button';
import UserImage from './UserImage';

const CommentCard = ({
  comment,
  sessionUserId,
  onEdit,
}: {
  comment: Comment;
  sessionUserId?: string;
  onEdit?: (comment: Comment) => void;
}) => {
  const formattedDate =
    typeof comment.createdAt === 'string'
      ? new Date(comment.createdAt).toLocaleDateString()
      : (comment.createdAt as Date).toLocaleDateString();

  const isOwner = sessionUserId && comment.userId === sessionUserId;

  return (
    <div className="bg-white rounded-lg p-4 border border-blue-100 relative">
      {isOwner && (
        <div className="absolute top-2 right-2">
          <Button
            size="icon"
            variant="ghost"
            className="text-purple-600 hover:bg-purple-50"
            onClick={() => onEdit && onEdit(comment)}
            aria-label="Edit Comment"
          >
            <Edit className="w-4 h-4" />
          </Button>
        </div>
      )}
      <div className="flex space-x-3">
        <UserImage name={comment.author} />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-semibold fugaz-font text-slate-800">
              {comment.author}
            </h4>
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
          <p className="text-gray-800 mb-3 leading-relaxed">
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
