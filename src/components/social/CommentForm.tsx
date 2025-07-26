'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { createComment } from '@/lib/actions/post.actions';
import { toast } from 'sonner';
import { Sun } from 'lucide-react';

const CommentForm = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await createComment(postId, comment);
      if (response.success) {
        toast.success('Comment added successfully!');
        setComment('');
      } else {
        toast.error('Failed to add comment.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex space-x-3">
        <div className="flex-1 space-y-3">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Add a comment..."
            rows={3}
          />
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              className="bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Sun className="animate-spin text-yellow-400" size={18} />
              ) : (
                <div>Post Comment</div>
              )}
             
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
