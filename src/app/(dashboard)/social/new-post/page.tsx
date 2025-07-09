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
  // Load real stash items from the database
  const result = await getUserStashItems();
  const stashItems =
    result.success && result.data
      ? result.data.map((item) => ({
          ...item,
          dateAdded: item.dateAdded.toISOString().split('T')[0], // Convert Date to string
        }))
      : [];

  return (
    <div className="space-y-8 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl flex justify-center py-6 px-1">
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
