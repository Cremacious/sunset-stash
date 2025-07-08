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
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  comments: Comment[];
  createdAt: string;
};

export type Friend = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};
