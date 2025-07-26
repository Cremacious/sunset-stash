'use client';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useEffect } from 'react';
import AOS from 'aos';
import UserImage from '../social/UserImage';

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
    <section
      data-aos="fade-up"
      data-aos-delay="100"
      className="py-16 px-4 mt-9"
    >
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
        <div className="md:order-1 max-md:text-center">
          <h2 className="text-3xl font-bold fugaz-font text-white text-center mb-12 drop-shadow-lg">
            Share Your Experience and Connect With Friends
          </h2>
          <p className="text-xl md:text-2xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
            Express yourself by creating posts about your current
            activities, thoughts, or experiences for your friends to see. Easily tag strains directly
            from your personal stash to showcase what you&apos;re enjoying in the moment.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-200 border-0 border-b-4 border-b-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl min-h-[110px] w-full relative">
          <div className="flex items-center justify-between p-3 pb-2 relative">
            <div className="flex items-center space-x-3">
              <UserImage name={post.author} />
              <div>
                <div className="font-bold text-xl hover:underline fugaz-font text-slate-800">
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
              className="bg-blue-100/80 text-blue-700 border-blue-200 font-medium"
            >
              {post.activity}
            </Badge>
          </div>
          <div className="pb-4 px-4">
            <div className="bg-white backdrop-blur-sm rounded-lg p-4 mb-4 border border-blue-100">
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>
            {post.stashItems && post.stashItems.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium fugaz-font text-slate-800">
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
            <div className="flex items-center justify-between rounded-lg p-3 mt-2">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <MessageCircle className="text-purple-600" size={30} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {post.comments.length}
                  </span>
                </div>
              </div>
              <Button asChild className="">
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
