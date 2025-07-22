// lib/actions/friend.actions.ts
'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function sendFriendRequest(friendId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }

    const currentUserId = session.user.id;

    if (currentUserId === friendId) {
      return {
        success: false,
        error: 'Cannot send friend request to yourself',
      };
    }

    const existingFriendship = await prisma.friendship.findFirst({
      where: {
        OR: [
          { userId: currentUserId, friendId: friendId },
          { userId: friendId, friendId: currentUserId },
        ],
      },
    });

    if (existingFriendship) {
      return {
        success: false,
        error:
          existingFriendship.status === 'friends'
            ? 'Already friends'
            : 'Friend request already sent',
      };
    }

    await prisma.friendship.create({
      data: {
        userId: currentUserId,
        friendId: friendId,
        status: 'pending',
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending friend request:', error);
    return { success: false, error: 'Failed to send friend request' };
  }
}

export async function removeFriend(friendId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }

    const currentUserId = session.user.id;

    await prisma.friendship.deleteMany({
      where: {
        OR: [
          { userId: currentUserId, friendId: friendId },
          { userId: friendId, friendId: currentUserId },
        ],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error removing friend:', error);
    return { success: false, error: 'Failed to remove friend' };
  }
}

// export async function getUserFriendRequests() {
//   try {
//     const session = await auth.api.getSession({
//       headers: await headers(),
//     });

//     if (!session?.user?.id) {
//       return { success: false, error: 'Not authenticated' };
//     }

//     const userFriendRequests = await prisma.friendRequest
//   } catch (error) {}
// }
