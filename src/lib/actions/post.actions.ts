'use server';
import prisma from '@/lib/prisma';
import { postFormSchema } from '../validators/post.validator';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function createPost(data: z.infer<typeof postFormSchema>) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user.id) {
      return {
        success: false,
        error: 'User session not found. Please sign in again.',
      };
    }
    const existingUser = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }
    const parsedData = postFormSchema.parse(data);
    if (parsedData.stashItemIds && parsedData.stashItemIds.length > 0) {
      const existingStashItems = await prisma.stashItem.findMany({
        where: {
          id: { in: parsedData.stashItemIds },
          userId: existingUser.id,
        },
      });
      if (existingStashItems.length !== parsedData.stashItemIds.length) {
        return {
          success: false,
          error: 'Some selected stash items are invalid or do not exist.',
        };
      }
    }
    const post = await prisma.post.create({
      data: {
        activity: parsedData.activity ?? '',
        content: parsedData.content,
        userId: existingUser.id,
        author: existingUser.name,
      },
    });

    if (parsedData.stashItemIds && parsedData.stashItemIds.length > 0) {
      await prisma.postStashItem.createMany({
        data: parsedData.stashItemIds.map((stashItemId) => ({
          postId: post.id,
          stashItemId: stashItemId,
        })),
      });
    }
    revalidatePath('/social');
    return {
      success: true,
      message: 'Post created successfully',
    };
  } catch (error) {
    console.error('Error creating post:', error);
    return {
      success: false,
      error: 'Failed to create post. Please try again.',
    };
  }
}

export async function getAllTimelinePosts() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user.id) {
      return { posts: [], currentUserId: null };
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!currentUser) {
      return { posts: [], currentUserId: null };
    }

    const friendships = await prisma.friendship.findMany({
      where: {
        OR: [
          { userId: currentUser.id, status: 'friends' },
          { friendId: currentUser.id, status: 'friends' },
        ],
      },
    });

    const friendIds = friendships.map((friendship) =>
      friendship.userId === currentUser.id
        ? friendship.friendId
        : friendship.userId
    );

    const userAndFriendIds = [currentUser.id, ...friendIds];

    const posts = await prisma.post.findMany({
      where: {
        userId: {
          in: userAndFriendIds,
        },
      },
      include: {
        stashItems: {
          include: {
            stashItem: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        comments: {
          include: {
            user: { select: { id: true, name: true } },
            replies: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      success: true,
      posts: posts.map((post) => ({
        ...post,
        createdAt:
          post.createdAt instanceof Date
            ? post.createdAt.toISOString()
            : post.createdAt,
        stashItems: Array.isArray(post.stashItems)
          ? post.stashItems.map((item) => ({
              ...item,
              stashItem: {
                ...item.stashItem,
                dateAdded:
                  item.stashItem.dateAdded instanceof Date
                    ? item.stashItem.dateAdded.toISOString()
                    : item.stashItem.dateAdded,
              },
            }))
          : [],
        comments: Array.isArray(post.comments)
          ? post.comments.map((comment) => ({
              ...comment,
              createdAt:
                comment.createdAt instanceof Date
                  ? comment.createdAt.toISOString()
                  : comment.createdAt,
            }))
          : [],
      })),
      currentUserId: currentUser.id,
    };
  } catch (error) {
    console.error('Error fetching timeline posts:', error);
    return { posts: [], currentUserId: null };
  }
}
export async function getPostById(postId: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        stashItems: { include: { stashItem: true } },
        user: { select: { name: true, id: true } },
        comments: {
          include: {
            user: { select: { id: true, name: true } },
            replies: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!post) {
      return { success: false, error: 'Post not found', data: null };
    }

    const mappedComments = post.comments.map((comment) => ({
      id: comment.id,
      createdAt:
        comment.createdAt instanceof Date
          ? comment.createdAt.toISOString()
          : comment.createdAt,
      author: comment.author,
      content: comment.content,
      postId: comment.postId,
      parentId: comment.parentId,
      userId: comment.userId,
      replies: comment.replies,
      user: comment.user,
    }));

    return {
      success: true,
      data: {
        ...post,
        createdAt:
          post.createdAt instanceof Date
            ? post.createdAt.toISOString()
            : post.createdAt,
        comments: mappedComments,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return { success: false, error: 'Failed to fetch post', data: null };
  }
}

export async function deletePost(postId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user.id) {
      return {
        success: false,
        error: 'User session not found. Please sign in again.',
      };
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return {
        success: false,
        error: 'Post not found',
      };
    }

    if (post.userId !== session.user.id) {
      return {
        success: false,
        error: 'You do not have permission to delete this post',
      };
    }

    await prisma.post.delete({
      where: { id: postId },
    });

    revalidatePath('/social');

    return {
      success: true,
      message: 'Post deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting post:', error);
    return {
      success: false,
      error: 'Failed to delete post',
    };
  }
}

export async function getAllFriendsPosts() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user.id) {
      return { posts: [], currentUserId: null };
    }
    const friendships = await prisma.friendship.findMany({
      where: {
        OR: [
          { userId: session.user.id, status: 'friends' },
          { friendId: session.user.id, status: 'friends' },
        ],
      },
    });

    const friendIds = friendships.map((friendship) =>
      friendship.userId === session.user.id
        ? friendship.friendId
        : friendship.userId
    );

    const userAndFriendIds = [session.user.id, ...friendIds];

    const posts = await prisma.post.findMany({
      where: {
        userId: {
          in: userAndFriendIds,
        },
      },
      include: {
        stashItems: {
          include: {
            stashItem: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      success: true,
      posts: posts.map((post) => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        stashItems: post.stashItems.map((item) => ({
          ...item,
          stashItem: {
            ...item.stashItem,
            dateAdded: item.stashItem.dateAdded.toISOString(),
          },
        })),
      })),
      currentUserId: session.user.id,
    };
  } catch (error) {
    console.log(error);
    return { posts: [] };
  }
}

export async function createComment(postId: string, content: string) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }
    const currentUserId = session.user.id;

    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { userId: true },
    });
    if (!post) {
      return { success: false, error: 'Post not found' };
    }

    const isFriend = await prisma.friendship.findFirst({
      where: {
        OR: [
          { userId: currentUserId, friendId: post.userId, status: 'friends' },
          { userId: post.userId, friendId: currentUserId, status: 'friends' },
        ],
      },
    });
    if (!isFriend) {
      return { success: false, error: 'You must be friends to comment.' };
    }

    await prisma.comment.create({
      data: {
        author: session.user.name,
        content,
        postId,
        userId: currentUserId,
      },
    });
    revalidatePath(`/social/${postId}`);
    return { success: true };
  } catch (error) {
    console.error('Error creating comment:', error);
    return { success: false, error: 'Failed to create comment' };
  }
}
