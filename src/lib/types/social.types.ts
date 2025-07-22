// Define or import StashItems type
import { StashItem } from './stash.types';

export type Post = {
  id: string;
  author: string;
  activity: string;
  content: string;
  stashItems: StashItem[];
  comments: Comment[];
  createdAt: string;
  userId: string;
};

export type PostWithStashItems = {
  id: string;
  author: string;
  activity: string;
  content: string;
  createdAt: Date;
  userId: string;
  stashItems: Array<{
    postId: string;
    stashItemId: string;
    stashItem: {
      id: string;
      name: string;
      category: string;
      type: string;
      amount: string;
      thc: number;
      cbd: number;
      lineage: string;
      notes: string;
      dateAdded: Date;
      userId: string;
    };
  }>;
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  postId: string;
  parentId?: string;
  replies: Comment[];
  createdAt: string;
  userId: string;
};

export type FriendRequest = {
  id: string;
  senderId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
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

export type PendingFriendship = {
  id: string;
  userId: string;
  friendId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export type Friendship = {
  id: string;
  userId: string;
  friendId: string;
  createdAt: string;
  friend: {
    id: string;
    name: string;
    email: string;
  };
};

export type Friend = {
  id: string;
  name: string;
  email: string;
  friendshipId: string;
  createdAt: string;
};
