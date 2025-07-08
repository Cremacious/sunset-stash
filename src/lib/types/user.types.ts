// Import types
import { StashItem } from './stash.types';
import { Post, Friendship, FriendRequest } from './social.types';
import { Purchase } from './purchase.types';

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: string; // Will be converted from DateTime for display
  updatedAt: string; // Will be converted from DateTime for display
};

export type UserWithRelations = User & {
  stashItems: StashItem[];
  posts: Post[];
  purchases: Purchase[];
  friends: Friendship[];
  sentFriendRequests: FriendRequest[];
  receivedFriendRequests: FriendRequest[];
};
