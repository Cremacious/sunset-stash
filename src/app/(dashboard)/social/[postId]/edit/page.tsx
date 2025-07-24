import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import EditPostForm from '@/components/social/EditPostForm';
import { getPostById } from '@/lib/actions/post.actions';
import { PostWithStashItems } from '@/lib/types/social.types';
import { getUserStashItems } from '@/lib/actions/stash.actions';

const EditPostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const result = await getPostById(postId);
  const { stashItems = [] } = await getUserStashItems();

  if (!result.success || !result.data) {
    return <div>Post not found.</div>;
  }

  // result.data is PostWithStashItems
  return (
    <div className="relative w-full flex justify-center py-6 px-1">
      <Card className="bg-white shadow-xl border-0 max-w-4xl w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Edit Post
          </CardTitle>
          <CardDescription>
            Share what you&apos;re doing and what strains you&apos;re enjoying
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <EditPostForm
            stashItems={stashItems}
            post={result.data as PostWithStashItems}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditPostPage;
