'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { createComment } from '@/lib/actions/post.actions';
import { toast } from 'sonner';

const CommentForm = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState('');
  const handleSubmit = async () => {
    const response = await createComment(postId, comment);
    if (response.success) {
      toast.success('Comment added successfully!');
      setComment('');
    } else {
      toast.error('Failed to add comment.');
    }
  };
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex space-x-3">
        <div className="flex-1 space-y-3">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Add a comment..."
            rows={3}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-end">
            <Button
              onSubmit={handleSubmit}
              className="bg-purple-500 hover:bg-purple-600 text-white"
            >
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
