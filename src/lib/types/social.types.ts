// Define or import StashItems type
import { StashItem } from './stash.types';

export type Post = {
  id: string;
  author: string;
  activity: string;
  content: string;
  stashItems: StashItem[];
  comments: Comment[];
  createdAt: string; // Will be converted from DateTime for display
  userId: string;
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  postId: string;
  parentId?: string; // For nested comments/replies
  replies: Comment[];
  createdAt: string; // Will be converted from DateTime for display
  userId: string;
};

export type FriendRequest = {
  id: string;
  senderId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string; // Will be converted from DateTime for display
  updatedAt: string; // Will be converted from DateTime for display
  sender: {
    id: string;
    name: string;
    email: string;
  };
  receiver: {
    id: string;
    name: string;
    email: string;
  };
};

export type Friendship = {
  id: string;
  userId: string;
  friendId: string;
  createdAt: string; // Will be converted from DateTime for display
  friend: {
    id: string;
    name: string;
    email: string;
  };
};

export type Friend = {
  name: string;
};
