
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
    return {
      success: true,
      purchases: purchases.map((purchase) => ({
        ...purchase,
        date: purchase.date.toISOString(),
        createdAt: purchase.createdAt.toISOString(),
        items: purchase.items.map((item) => ({
          ...item,
          purchaseId: purchase.id,
        })),
      })),
    };
  } catch (error) {
    console.error('Error fetching user purchases:', error);
    return { success: false, error: 'Failed to fetch user purchases' };
  }
}

export async function getFilteredPurchases(month?: string, year?: string) {
  const currentDate = new Date();
  const filterMonth =
    month || (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const filterYear = year || currentDate.getFullYear().toString();

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }
    const purchases = await prisma.purchase.findMany({
      where: {
        userId: session.user.id,
        date: {
          gte: new Date(`${filterYear}-${filterMonth}-01`),
          lt: new Date(`${filterYear}-${parseInt(filterMonth) + 1}-01`),
        },
      },
      include: { items: true },
      orderBy: { date: 'desc' },
    });

    return {
      success: true,
      purchases: purchases.map((purchase) => ({
        ...purchase,
        date: purchase.date.toISOString(),
        createdAt: purchase.createdAt.toISOString(),
        items: purchase.items.map((item) => ({
          ...item,
          purchaseId: purchase.id,
        })),
      })),
    };
  } catch (error) {
    console.log(error);
    return { success: false, purchases: [] };
  }
}

export async function getAvailablePurchaseDates() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }
    const dates = await prisma.purchase.findMany({
      where: { userId: session.user.id },
      select: { date: true },
      distinct: ['date'],
    });

    const months = [
      ...new Set(
        dates.map((d) => (d.date.getMonth() + 1).toString().padStart(2, '0'))
      ),
    ];

    const years = [
      ...new Set(dates.map((d) => d.date.getFullYear().toString())),
    ];

    return {
      success: true,
      dates: { months: months.sort(), years: years.sort().reverse() },
    };
  } catch (error) {
    console.log(error);
    return { success: false, dates: { months: [], years: [] } };
  }
}

export async function getPurchaseById(purchaseId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId, userId: session.user.id },
      include: { items: true },
    });

    if (!purchase) {
      return { success: false, error: 'Purchase not found' };
    }

    return {
      success: true,
      purchase: {
        ...purchase,
        date: purchase.date.toISOString(),
        createdAt: purchase.createdAt.toISOString(),
        items: purchase.items.map((item) => ({
          ...item,
          purchaseId: purchase.id,
        })),
      },
    };
  } catch (error) {
    console.error('Error fetching purchase:', error);
    return { success: false, error: 'Failed to fetch purchase' };
  }
}

export async function deletePurchase(purchaseId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId, userId: session.user.id },
    });

    if (!purchase) {
      return { success: false, error: 'Purchase not found' };
    }

    await prisma.purchase.delete({ where: { id: purchaseId } });
    revalidatePath('/purchases');
    return { success: true, message: 'Purchase deleted successfully' };
  } catch (error) {
    console.error('Error deleting purchase:', error);
    return { success: false, error: 'Failed to delete purchase' };
  }
}

export async function editPurchase(
  purchaseId: string,
  data: z.infer<typeof purchaseFormSchema>
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return { success: false, error: 'Please sign in again.' };
    }

    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId, userId: session.user.id },
      include: { items: true },
    });

    if (!purchase) {
      return { success: false, error: 'Purchase not found' };
    }

    const parsedData = purchaseFormSchema.parse(data);


    await prisma.purchaseItem.deleteMany({
      where: { purchaseId: purchase.id },
    });

   
    const total = parsedData.items.reduce((sum, item) => sum + item.price, 0);

    await prisma.purchase.update({
      where: { id: purchaseId, userId: session.user.id },
      data: {
        dispensary: parsedData.dispensary,
        date: parsedData.date,
        total: total,
        notes: parsedData.notes || '',
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
    });

    revalidatePath('/purchases');
    return { success: true, message: 'Purchase updated successfully' };
  } catch (error) {
    console.error('Error editing purchase:', error);
    return { success: false, error: 'Failed to edit purchase' };
  }
}
