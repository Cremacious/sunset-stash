import PostForm from '@/components/social/PostForm';
import { getUserStashItems } from '@/lib/actions/stash.actions';

const NewPostPage = async () => {
  const { stashItems = [] } = await getUserStashItems();

  return (
    <div>
      <PostForm stashItems={stashItems} />
    </div>
  );
};

export default NewPostPage;
