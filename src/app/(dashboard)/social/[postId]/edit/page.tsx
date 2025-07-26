import EditPostForm from '@/components/social/EditPostForm';
import { getPostById } from '@/lib/actions/post.actions';
import { PostWithStashItems } from '@/lib/types/social.types';
import { getUserStashItems } from '@/lib/actions/stash.actions';
import NotFound from '@/components/NotFound';

const EditPostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const result = await getPostById(postId);
  const { stashItems = [] } = await getUserStashItems();

  if (!result.success || !result.data) {
    return <NotFound message="Post not found." />;
  }

  return (
    <div>
      <EditPostForm
        stashItems={stashItems}
        post={result.data as PostWithStashItems}
      />
    </div>
  );
};

export default EditPostPage;
