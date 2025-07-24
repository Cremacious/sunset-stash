'use server';
import prisma from '@/lib/prisma';
import { stashFormSchema } from '../validators/stash.validator';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { getAuthenticatedUser } from '@/lib/server-utils';

export async function createStashItem(data: z.infer<typeof stashFormSchema>) {
  try {
    const { user, error } = await getAuthenticatedUser();
    if (!user) {
      return { success: false, error };
    }
    const parsedData = stashFormSchema.parse(data);
    await prisma.stashItem.create({
      data: {
        ...parsedData,
        userId: user.id,
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
    const { user, error } = await getAuthenticatedUser();
    if (!user) {
      return { success: false, error };
    }
    const stashItems = await prisma.stashItem.findMany({
      where: { userId: user.id },
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
