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
        activity: parsedData.activity,
        content: parsedData.content,
        userId: existingUser.id,
        author: existingUser.id,
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

export async function getUserPost() {
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
    const posts = await prisma.post.findMany({
      where: { author: existingUser.id },
      include: {
        stashItems: true,
      },
    });
    return {
      success: true,
      data: posts,
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Failed to retrieve posts' };
  }
}
