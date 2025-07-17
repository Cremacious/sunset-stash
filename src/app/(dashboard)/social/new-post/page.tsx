import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PostForm from '@/components/social/PostForm';
import { getUserStashItems } from '@/lib/actions/stash.actions';

const NewPostPage = async () => {
  const { stashItems = [] } = await getUserStashItems();

  return (
    <div className="relative w-full flex justify-center py-6 px-1">
      <Card className="bg-white shadow-xl border-0 max-w-4xl w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Create New Post
          </CardTitle>
          <CardDescription>
            Share what you&apos;re doing and what strains you&apos;re enjoying
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <PostForm stashItems={stashItems} />
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPostPage;
