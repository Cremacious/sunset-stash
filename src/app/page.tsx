import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Features from '@/components/homepage/Features';
import Logo from '../../public/sunset-stash-logo.png';
import Image from 'next/image';

import 'aos/dist/aos.css';
import ExamplePurchases from '@/components/homepage/ExamplePurchases';
import SocialPostExample from '@/components/homepage/SocialPostExample';
import Join from '@/components/homepage/Join';

// import Navbar from '@/components/header/Navbar';

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen space-y-4">
        <section className="relative pb-20 px-4 ">
          <div className="max-w-6xl mx-auto text-center ">
            <div className="">
              <div className="flex justify-center mb-8 ">
                <Image
                  src={Logo}
                  alt="Sunset Stash Logo"
                  width={300}
                  height={300}
                  className=""
                />
              </div>
              <h1 className="text-5xl fugaz-font md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Sunset Stash
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Your ultimate companion for tracking Florida medical marijuana
                purchases, discovering favorites, and connecting with the
                friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Features />

        <ExamplePurchases />

        <SocialPostExample />

        <Join />
      </div>
    </>
  );
};

export default Home;
