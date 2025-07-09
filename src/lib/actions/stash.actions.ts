'use server';
import prisma from '../prisma';
import { stashFormSchema } from '../validators/stash.validator';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function createStashItem(data: z.infer<typeof stashFormSchema>) {
  try {
    const parsedData = stashFormSchema.parse(data);

    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user.id) {
      return {
        success: false,
        error: 'User session not found. Please sign in again.',
      };
    }
    const stashItem = await prisma.stashItem.create({
      data: {
        name: parsedData.name,
        category: parsedData.category,
        type: parsedData.type,
        amount: parsedData.amount,
        thc: parsedData.thc,
        cbd: parsedData.cbd,
        lineage: parsedData.lineage,
        notes: parsedData.notes,
        userId: session.user.id,
      },
    });
    return {
      success: true,
      message: 'Stash item created successfully',
      data: stashItem,
    };
  } catch (error) {
    console.error('Error creating stash item:', error);
    return {
      success: false,
      error: 'Failed to create stash item. Please try again.',
    };
  }
}
