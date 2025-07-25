'use client';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useEffect } from 'react';
import AOS from 'aos';

const exampleComment = {
  id: 'comment-1',
  author: 'Jane Doe',
  content: 'Love this strain too!',
  createdAt: new Date('2025-01-16T12:00:00.000Z'),
  userId: 'user-2',
};

const examplePost = {
  id: 'post-1',
  author: 'Chris Johnson',
  activity: 'Relaxing after work',
  content:
    'Just tried Blue Dream for the first time and wow! Perfect for a creative afternoon. The sweet berry flavor is amazing and the effects are exactly what I was looking for.',
  createdAt: new Date('2025-01-15T00:00:00.000Z'),
  userId: 'user-1',
  stashItems: [
    {
      postId: 'post-1',
      stashItemId: 'stash-1',
      stashItem: {
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
        dateAdded: new Date('2025-01-15T00:00:00.000Z'),
        userId: 'user-1',
      },
    },
  ],
  comments: Array(7).fill(exampleComment),
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

const SocialPostExample = () => {
  const post = examplePost;

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
        <div className="md:order-1 max-md:text-center">
          <h2 className="text-3xl font-bold fugaz-font text-white text-center mb-12 drop-shadow-lg">
            Create Posts To Show Your Friends What You&apos;re Up To
          </h2>
          <p className="text-xl md:text-2xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
            Create a post to show off your status and activities, along with
            what strains you&apos;re enjoying at the time.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 via-blue-100 to-purple-200 border-0 border-b-4 border-b-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[110px] w-full relative">
          <div className="flex items-center justify-between p-3 pb-2 relative">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center shadow-md">
                <span className="text-purple-700 font-bold text-lg">
                  {getInitials(post.author)}
                </span>
              </div>
              <div>
                <div className="font-bold text-xl hover:underline permanent-marker-font">
                  {post.author}
                </div>
                <p className="text-xs text-gray-600">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <Badge
              variant="outline"
              className="bg-orange-100/80 text-orange-700 border-orange-200 font-medium"
            >
              {post.activity}
            </Badge>
          </div>
          <div className="pb-4 px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/30">
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>
            {post.stashItems && post.stashItems.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-purple-700">
                    Strains:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.stashItems
                    .filter((item) => item.stashItem && item.stashItem.name)
                    .map((item) => (
                      <Badge
                        key={item.stashItemId}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-sm"
                      >
                        {item.stashItem.name}
                      </Badge>
                    ))}
                </div>
              </div>
            )}
            <div className="flex items-center justify-between  rounded-lg p-3  mt-2">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <MessageCircle className="text-purple-600" size={30} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {post.comments.length}
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="bg-purple-500 hover:bg-purple-600 text-white shadow-md px-4 py-2 rounded-lg text-sm font-medium"
              >
                <span>View Post</span>
              </Button>
            </div>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default SocialPostExample;
