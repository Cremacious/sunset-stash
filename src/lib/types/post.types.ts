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
  createdAt: string | Date;
  author: string;
  content: string;
  postId: string;
  parentId: string | null;
  userId: string;
  replies?: Comment[];
  user?: {
    name: string;
    id: string;
  };
};

export type PostStashItem = {
  postId: string;
  stashItemId: string;
  post: Post;
  stashItem: StashItem;
};
