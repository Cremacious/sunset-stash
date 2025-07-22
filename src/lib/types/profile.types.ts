export interface ProfileUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface UserStats {
  totalStashItems: number;
  totalPosts: number;
  favoriteCategory: string;
  favoriteType: string;
  recentActivity: number;
  memberSince: Date;
}

export interface ProfileStashItem {
  id: string;
  name: string;
  category: string;
  type: string;
  amount: string;
  thc: number;
  cbd: number;
  lineage: string;
  notes: string;
  dateAdded: string;
  userId: string;
}

export interface ProfilePostStashItem {
  postId: string;
  stashItemId: string;
  stashItem: ProfileStashItem;
}

export interface ProfilePost {
  id: string;
  author: string;
  activity: string;
  content: string;
  createdAt: string;
  userId: string;
  stashItems: ProfilePostStashItem[];
}

export interface ProfileData {
  success: boolean;
  profileUser: ProfileUser | null;
  currentUserId: string | null;
  isOwnProfile: boolean;
  friendshipStatus: 'none' | 'pending' | 'friends' | 'blocked';
  error?: string;
}

export interface StatsResult {
  success: boolean;
  stats: UserStats;
}

export interface StashItemsResult {
  success: boolean;
  stashItems: ProfileStashItem[];
}

export interface PostsResult {
  success: boolean;
  posts: ProfilePost[];
}