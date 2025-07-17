import TimelinePost from '../social/TimelinePost';

const examplePost = {
  id: 'post-1',
  author: 'Chris Johnson',
  activity: 'Creative Time',
  content:
    'Just tried Blue Dream for the first time and wow! Perfect for a creative afternoon. The sweet berry flavor is amazing and the effects are exactly what I was looking for.',
  createdAt: '2025-01-15T00:00:00.000Z',
  userId: 'user-1',
  stashItems: [
    {
      id: 'stash-1',
      name: 'Blue Dream',
      category: 'Flower',
      type: 'Sativa',
      amount: '3.5g',
      thc: 22.5,
      cbd: 0.5,
      lineage: 'Blueberry x Haze',
      notes:
        'Perfect for creative sessions and relaxation. Great for movie nights and social activities.',
      dateAdded: '2025-01-15T00:00:00.000Z',
      userId: 'user-1',
      postId: 'post-1',
    },
  ],
  comments: [],
};

const SocialPostExample = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Create Posts To Show Your Friends What You&apos;re Up To
        </h2>
        <p className="text-xl md:text-2xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
          Create a post to show off your status and activities, along with what
          strains you&apos;re enjoying at the time.
        </p>
      </div>
      <div className="">
        <TimelinePost post={examplePost} />
      </div>
    </div>
  );
};

export default SocialPostExample;
