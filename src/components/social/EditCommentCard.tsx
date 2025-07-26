'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Comment } from '@/lib/types/post.types';

const EditCommentCard = ({
  comment,
  onSave,
  onCancel,
  isSaving,
}: {
  comment: Comment;
  onSave: (content: string) => void;
  onCancel: () => void;
  isSaving?: boolean;
}) => {
  const [content, setContent] = useState(comment.content);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/30">
      <div className="flex items-center space-x-2 mb-3">
        <span className="font-semibold text-purple-900 fugaz-font">
          Edit Comment
        </span>

      </div>
      <textarea
        className="w-full rounded-lg border border-purple-200 p-2 mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isSaving}
      />
      <div className="flex gap-2 justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={onCancel}
          disabled={isSaving}
          className="border-gray-300 text-gray-700"
        >
          Cancel
        </Button>
        <Button
          size="sm"
          onClick={() => onSave(content)}
          disabled={isSaving || content.trim() === ''}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
        >
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  );
};

export default EditCommentCard;
