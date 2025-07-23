'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TimelinePost from '@/components/social/TimelinePost';
import FindFriends from '@/components/social/FindFriends';
import Link from 'next/link';
import { getAllTimelinePosts } from '@/lib/actions/post.actions';
import {
  getUserFriendRequests,
  getAllUserFriends,
} from '@/lib/actions/friend.actions';
import { MessageSquare } from 'lucide-react';
import RecentFriends from '@/components/social/RecentFriends';
import UserImage from '@/components/social/UserImage';
import {
  PostWithStashItems,
  PendingFriendship,
  Friend,
} from '@/lib/types/social.types';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import FriendRequestDialog from '@/components/social/FriendRequestDialog';

const SocialPage = () => {
  const [allPosts, setAllPosts] = useState<PostWithStashItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [friendRequests, setFriendRequests] = useState<PendingFriendship[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);

  const [postFilter, setPostFilter] = useState('all');
  const [postsToShow, setPostsToShow] = useState(5);

  const { user: currentUser } = useCurrentUser();

  const loadPosts = async () => {
    const { posts = [], currentUserId } = await getAllTimelinePosts();
    setAllPosts(
      posts.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
        stashItems: post.stashItems?.map((item) => ({
          ...item,
          stashItem: {
            ...item.stashItem,
            dateAdded: new Date(item.stashItem.dateAdded),
          },
        })),
      }))
    );
    setCurrentUserId(currentUserId);
  };

  const loadFriendRequests = async () => {
    const friendRequestsResult = await getUserFriendRequests();
    if (friendRequestsResult.success && friendRequestsResult.data) {
      setFriendRequests(friendRequestsResult.data);
    }
  };

  const loadFriends = async () => {
    const friendsResult = await getAllUserFriends();
    if (friendsResult.success && friendsResult.data) {
      setFriends(friendsResult.data);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await loadPosts();
        await loadFriendRequests();
        await loadFriends();
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredPosts = allPosts.filter((post) => {
    if (!currentUserId) return true;

    switch (postFilter) {
      case 'user':
        return post.userId === currentUserId;
      case 'friends':
        return post.userId !== currentUserId;
      case 'all':
      default:
        return true;
    }
  });

  const displayedPosts = filteredPosts.slice(0, postsToShow);
  const hasMorePosts = postsToShow < filteredPosts.length;

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setPostsToShow((prev) => prev + 5);
      setLoadingMore(false);
    }, 500);
  };

  const handleFilterChange = (value: string) => {
    setPostFilter(value);
    setPostsToShow(5);
  };

  const userPostsCount = allPosts.filter(
    (post) => post.userId === currentUserId
  ).length;

  const friendsPostsCount = allPosts.filter(
    (post) => post.userId !== currentUserId
  ).length;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-4">
            <div className="glassCard">
              <div className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="glassCard">
              <div className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="glassCard">
              <div className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="glassCard ">
              <div className="animate-pulse h-20 bg-gray-200 rounded-lg mb-4"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse h-48 bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="glassCard">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <UserImage />
                  <div>
                    <Link
                      className="text-2xl"
                      href={`/profile/${currentUser?.id}`}
                    >
                      {currentUser?.name}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-50 rounded-lg border-b-2 border-b-purple-500">
                  <p className="text-2xl font-bold text-purple-600 ">
                    {userPostsCount}
                  </p>
                  <p className="text-xs text-gray-600">Your Posts</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border-b-2 border-b-blue-500">
                  <p className="text-2xl font-bold text-blue-600">
                    {friends.length}
                  </p>
                  <p className="text-xs text-gray-600">Friends</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg border-b-2 border-b-green-500">
                  <p className="text-2xl font-bold text-green-600">
                    {friendRequests.length}
                  </p>
                  <p className="text-xs text-gray-600">Friend Requests</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-center">
                  <FriendRequestDialog
                    friendRequests={friendRequests}
                    onRequestUpdate={async () => {
                      await loadFriendRequests();
                      await loadFriends();
                      await loadPosts();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <RecentFriends friends={friends} />

          <div className="glassCard">
            <FindFriends />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 glassCard">
          <div className="bg-white rounded-lg p-4 border-b-4 border-b-purple-500">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/social/new-post">Create New Post</Link>
              </Button>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden sm:block">
                  Filter:
                </span>
                <Select value={postFilter} onValueChange={handleFilterChange}>
                  <SelectTrigger className="w-full sm:w-45 h-9 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      All Posts ({allPosts.length})
                    </SelectItem>
                    <SelectItem value="user">
                      Your Posts ({userPostsCount})
                    </SelectItem>
                    <SelectItem value="friends">
                      Friends Only ({friendsPostsCount})
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                Showing {displayedPosts.length} of {filteredPosts.length} posts
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {displayedPosts.length > 0 ? (
              <>
                {displayedPosts.map((post: PostWithStashItems) => (
                  <TimelinePost key={post.id} post={post} />
                ))}

                {hasMorePosts && (
                  <div className="text-center pt-6">
                    <Button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className="px-8 bg-purple-600 hover:bg-purple-700"
                    >
                      {loadingMore ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Loading...
                        </div>
                      ) : (
                        `Load More Posts (${
                          filteredPosts.length - postsToShow
                        } remaining)`
                      )}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-white/30 p-12 flex flex-col justify-center items-center shadow-md">
                <MessageSquare className="text-purple-500 w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {postFilter === 'all'
                    ? 'No posts yet'
                    : postFilter === 'user'
                    ? 'No posts from you yet'
                    : 'No posts from friends yet'}
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  {postFilter === 'all'
                    ? 'Create your first post to get started!'
                    : postFilter === 'user'
                    ? 'Share something with your friends!'
                    : 'Connect with friends to see their posts!'}
                </p>
                {postFilter === 'all' || postFilter === 'user' ? (
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/social/new-post">Create Your First Post</Link>
                  </Button>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
