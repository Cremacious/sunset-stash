import { StashItem } from './stash.types';

export type Post = {
  id: string;
  author: string;
  activity: string;
  content: string;
  createdAt: Date;
  userId: string;
  comments: Comment[];
  stashItems: PostStashItem[];
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  postId: string;
  parentId: string | null;
  createdAt: Date;
  userId: string;
  // Add other Comment fields as needed
};

export type PostStashItem = {
  postId: string;
  stashItemId: string;
  post: Post;
  stashItem: StashItem;
};
