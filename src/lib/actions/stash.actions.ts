'use server';
import prisma from '@/lib/prisma';
import { stashFormSchema } from '../validators/stash.validator';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function createStashItem(data: z.infer<typeof stashFormSchema>) {
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
    const parsedData = stashFormSchema.parse(data);
    await prisma.stashItem.create({
      data: {
        ...parsedData,
        userId: existingUser.id,
      },
    });
    revalidatePath('/stash');
    return {
      success: true,
      message: 'Stash item created successfully',
    };
  } catch (error) {
    console.error('Error creating stash item:', error);
    return {
      success: false,
      error: 'Failed to create stash item. Please try again.',
    };
  }
}

export async function getUserStashItems() {
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
    const stashItems = await prisma.stashItem.findMany({
      where: { userId: existingUser.id },
    });
    return {
      success: true,
      stashItems: stashItems.map((item) => ({
        ...item,
        dateAdded: item.dateAdded.toISOString(),
      })),
    };
  } catch (error) {
    console.error('Error fetching stash items:', error);
    return {
      success: false,
      error: 'Failed to fetch stash items. Please try again.',
    };
  }
}

export async function getStashItemById(stashItemId: string) {
  try {
    const stashItem = await prisma.stashItem.findUnique({
      where: {
        id: stashItemId,
      },
    });
    if (!stashItem) {
      return {
        success: false,
        error: 'Post not found',
        data: null,
      };
    }
    return {
      success: true,
      data: stashItem,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      success: false,
      error: 'Failed to fetch post',
      data: null,
    };
  }
}
