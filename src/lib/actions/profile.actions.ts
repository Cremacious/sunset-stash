'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {
  ProfileData,
  StatsResult,
  StashItemsResult,
  PostsResult,
} from '@/lib/types/profile.types';

export async function getProfileData(profileId: string): Promise<ProfileData> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const profileUser = await prisma.user.findUnique({
      where: { id: profileId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!profileUser) {
      return {
        success: false,
        error: 'Profile not found',
        profileUser: null,
        currentUserId: null,
        isOwnProfile: false,
        friendshipStatus: 'none',
      };
    }

    if (!session?.user?.id) {
      return {
        success: true,
        profileUser: {
          ...profileUser,
          createdAt: profileUser.createdAt.toISOString(),
        },
        currentUserId: null,
        isOwnProfile: false,
        friendshipStatus: 'none',
      };
    }

    const currentUserId = session.user.id;
    const isOwnProfile = currentUserId === profileId;

    let friendshipStatus: 'none' | 'pending' | 'friends' | 'blocked' = 'none';

    if (!isOwnProfile) {
      const friendship = await prisma.friendship.findFirst({
        where: {
          OR: [
            { userId: currentUserId, friendId: profileId },
            { userId: profileId, friendId: currentUserId },
          ],
        },
      });

      if (friendship) {
        friendshipStatus = friendship.status as
          | 'pending'
          | 'friends'
          | 'blocked';
      }
    }

    return {
      success: true,
      profileUser: {
        ...profileUser,
        createdAt: profileUser.createdAt.toISOString(),
      },
      currentUserId,
      isOwnProfile,
      friendshipStatus,
    };
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return {
      success: false,
      error: 'Failed to fetch profile',
      profileUser: null,
      currentUserId: null,
      isOwnProfile: false,
      friendshipStatus: 'none',
    };
  }
}

export async function getUserStats(profileId: string): Promise<StatsResult> {
  try {
    const [stashItemsCount, postsCount, stashItems] = await Promise.all([
      prisma.stashItem.count({
        where: { userId: profileId },
      }),

      prisma.post.count({
        where: { userId: profileId },
      }),

      prisma.stashItem.findMany({
        where: { userId: profileId },
        select: {
          category: true,
          type: true,
        },
      }),
    ]);

    const categoryCount = stashItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const favoriteCategory =
      Object.keys(categoryCount).length > 0
        ? Object.entries(categoryCount).reduce((a, b) =>
            categoryCount[a[0]] > categoryCount[b[0]] ? a : b
          )[0]
        : 'None';

    const typeCount = stashItems.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const favoriteType =
      Object.keys(typeCount).length > 0
        ? Object.entries(typeCount).reduce((a, b) =>
            typeCount[a[0]] > typeCount[b[0]] ? a : b
          )[0]
        : 'None';

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentPostsCount = await prisma.post.count({
      where: {
        userId: profileId,
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
    });

    const user = await prisma.user.findUnique({
      where: { id: profileId },
      select: { createdAt: true },
    });

    return {
      success: true,
      stats: {
        totalStashItems: stashItemsCount,
        totalPosts: postsCount,
        favoriteCategory,
        favoriteType,
        recentActivity: recentPostsCount,
        memberSince: user?.createdAt || new Date(),
      },
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return {
      success: false,
      stats: {
        totalStashItems: 0,
        totalPosts: 0,
        favoriteCategory: 'Unknown',
        favoriteType: 'Unknown',
        recentActivity: 0,
        memberSince: new Date(),
      },
    };
  }
}

export async function getProfileStashItems(
  profileId: string,
  limit: number = 4
): Promise<StashItemsResult> {
  try {
    const stashItems = await prisma.stashItem.findMany({
      where: { userId: profileId },
      orderBy: { dateAdded: 'desc' },
      take: limit,
    });

    return {
      success: true,
      stashItems: stashItems.map((item) => ({
        ...item,
        dateAdded: item.dateAdded.toISOString(),
      })),
    };
  } catch (error) {
    console.error('Error fetching profile stash items:', error);
    return {
      success: false,
      stashItems: [],
    };
  }
}

export async function getProfilePosts(profileId: string): Promise<PostsResult> {
  try {
    const posts = await prisma.post.findMany({
      where: { userId: profileId },
      include: {
        stashItems: {
          include: {
            stashItem: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return {
      success: true,
      posts: posts.map((post) => ({
        id: post.id,
        author: post.author,
        activity: post.activity,
        content: post.content,
        createdAt: post.createdAt.toISOString(),
        userId: post.userId,
        stashItems: post.stashItems.map((item) => ({
          postId: item.postId,
          stashItemId: item.stashItemId,
          stashItem: {
            ...item.stashItem,
            dateAdded: item.stashItem.dateAdded.toISOString(),
          },
        })),
      })),
    };
  } catch (error) {
    console.error('Error fetching profile posts:', error);
    return {
      success: false,
      posts: [],
    };
  }
}
