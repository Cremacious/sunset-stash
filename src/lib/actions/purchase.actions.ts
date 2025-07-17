// src/lib/actions/purchase.actions.ts
'use server';
import prisma from '@/lib/prisma';
import { purchaseFormSchema } from '../validators/purchase.validator';
import { z } from 'zod';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function createPurchase(data: z.infer<typeof purchaseFormSchema>) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }
    const parsedData = purchaseFormSchema.parse(data);
    const total = parsedData.items.reduce((sum, item) => sum + item.price, 0);

    await prisma.purchase.create({
      data: {
        dispensary: parsedData.dispensary,
        date: parsedData.date,
        total: total,
        notes: parsedData.notes || '',
        userId: session.user.id,
        items: {
          create: parsedData.items.map((item) => ({
            name: item.name,
            category: item.category,
            type: item.type || '',
            amount: item.amount || '',
            price: item.price,
            thc: item.thc || 0,
            cbd: item.cbd || 0,
            lineage: item.lineage || '',
            notes: item.notes || '',
          })),
        },
      },
      include: { items: true },
    });

    const itemsToAddToStash = parsedData.items.filter(
      (item) => item.addToStash
    );
    if (itemsToAddToStash.length > 0) {
      await prisma.stashItem.createMany({
        data: itemsToAddToStash.map((item) => ({
          name: item.name,
          category: item.category,
          type: item.type || '',
          amount: item.amount || '',
          thc: item.thc || 0,
          cbd: item.cbd || 0,
          lineage: item.lineage || '',
          notes: item.notes || '',
          userId: session.user.id,
        })),
      });
    }

    revalidatePath('/purchases');
    return { success: true, message: 'Purchase saved successfully' };
  } catch (error) {
    console.error('Error creating purchase:', error);
    return { success: false, error: 'Failed to save purchase' };
  }
}

export async function getAllUserPurchases() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }
    const purchases = await prisma.purchase.findMany({
      where: { userId: session.user.id },
      orderBy: { date: 'desc' },
      include: {
        items: true,
      },
    });
    return { success: true, purchases };
  } catch (error) {
    console.error('Error fetching user purchases:', error);
    return { success: false, error: 'Failed to fetch user purchases' };
  }
}
