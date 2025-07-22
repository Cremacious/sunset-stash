// lib/actions/friend.actions.ts
'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function getAllUserFriends() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }

    const currentUserId = session.user.id;

    const friendships = await prisma.friendship.findMany({
      where: {
        OR: [
          { userId: currentUserId, status: 'friends' },
          { friendId: currentUserId, status: 'friends' },
        ],
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        friend: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Transform the data to return the actual friend (not the current user)
    const friends = friendships.map((friendship) => {
      const friend =
        friendship.userId === currentUserId
          ? friendship.friend
          : friendship.user;

      return {
        id: friend.id,
        name: friend.name,
        email: friend.email,
        friendshipId: friendship.id,
        createdAt: friendship.createdAt.toISOString(),
      };
    });

    return { success: true, data: friends };
  } catch (error) {
    console.error('Error fetching friends:', error);
    return { success: false, error: 'Failed to fetch friends' };
  }
}

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

export async function getUserFriendRequests() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }
    const currentUserId = session.user.id;
    const friendRequests = await prisma.friendship.findMany({
      where: {
        friendId: currentUserId,
        status: 'pending',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return { success: true, data: friendRequests };
  } catch (error) {
    console.error('Error fetching friend requests:', error);
    return { success: false, error: 'Failed to fetch friend requests' };
  }
}

export async function acceptFriendRequest(friendshipId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }

    const currentUserId = session.user.id;

    const friendship = await prisma.friendship.update({
      where: {
        id: friendshipId,
        friendId: currentUserId,
      },
      data: {
        status: 'friends',
      },
    });

    return { success: true, data: friendship };
  } catch (error) {
    console.error('Error accepting friend request:', error);
    return { success: false, error: 'Failed to accept friend request' };
  }
}

export async function declineFriendRequest(friendshipId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return { success: false, error: 'Not authenticated' };
    }

    const currentUserId = session.user.id;

    await prisma.friendship.delete({
      where: {
        id: friendshipId,
        friendId: currentUserId,
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Error declining friend request:', error);
    return { success: false, error: 'Failed to decline friend request' };
  }
}
