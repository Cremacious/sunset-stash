'use client';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import EditCommentCard from './EditCommentCard';
import { Comment } from '@/lib/types/post.types';
import { editComment } from '@/lib/actions/post.actions';

const CommentSection = ({
  comments,
  sessionUserId,
  postId,
}: {
  comments: Comment[];
  sessionUserId?: string;
  postId: string;
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [localComments, setLocalComments] = useState<Comment[]>(comments);

  useEffect(() => {
    setLocalComments(comments);
  }, [comments]);

  const handleEdit = (comment: Comment) => {
    setEditingId(comment.id);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleSave = async (commentId: string, newContent: string) => {
    setIsSaving(true);
    try {
      const result = await editComment({
        commentId,
        content: newContent,
        postId,
      });
      if (result.success) {
        setLocalComments((prev) =>
          prev.map((c) =>
            c.id === commentId ? { ...c, content: newContent } : c
          )
        );
        setEditingId(null);
      } else {
        alert(result.error || 'Failed to update comment');
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      {localComments.length === 0 ? (
        <div className="text-center py-8 text-gray-800 fugaz-font">
          No comments yet.
        </div>
      ) : (
        localComments.map((comment) =>
          editingId === comment.id ? (
            <EditCommentCard
              key={comment.id}
              comment={comment}
              onSave={(content) => handleSave(comment.id, content)}
              onCancel={handleCancel}
              isSaving={isSaving}
            />
          ) : (
            <CommentCard
              key={comment.id}
              comment={comment}
              sessionUserId={sessionUserId}
              onEdit={handleEdit}
            />
          )
        )
      )}
    </div>
  );
};

export default CommentSection;
