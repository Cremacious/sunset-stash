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

export async function editStashItem(
  stashItemId: string,
  data: z.infer<typeof stashFormSchema>
) {
  try {
    const { user, error } = await getAuthenticatedUser();
    if (!user) {
      return { success: false, error };
    }

    const parsedData = stashFormSchema.parse(data);

    const updated = await prisma.stashItem.update({
      where: {
        id: stashItemId,
        userId: user.id,
      },
      data: {
        ...parsedData,
      },
    });

    revalidatePath('/stash');
    return {
      success: true,
      message: 'Stash item updated successfully',
      data: {
        ...updated,
        dateAdded: updated.dateAdded.toISOString(),
      },
    };
  } catch (error) {
    console.error('Error editing stash item:', error);
    return {
      success: false,
      error: 'Failed to edit stash item. Please try again.',
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

export async function deleteStashItem(stashItemId: string) {
  try {
    const { user, error } = await getAuthenticatedUser();
    if (!user) {
      return { success: false, error };
    }
    const stashItem = await prisma.stashItem.findUnique({
      where: { id: stashItemId, userId: user.id },
    });
    if (!stashItem) {
      return { success: false, error: 'Stash item not found' };
    }
    await prisma.stashItem.delete({
      where: { id: stashItemId },
    });
    revalidatePath('/stash');
    return { success: true, message: 'Stash item deleted successfully' };
  } catch (error) {
    console.error('Error deleting stash item:', error);
    return { success: false, error: 'Failed to delete stash item' };
  }
}
