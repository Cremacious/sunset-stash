'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Features from '@/components/homepage/Features';
import Logo from '../../public/sunset-stash-logo.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useSession } from '@/lib/auth-client';

import ExamplePurchases from '@/components/homepage/ExamplePurchases';
import SocialPostExample from '@/components/homepage/SocialPostExample';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const { data, isPending } = useSession();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
    if (data?.user && !isPending) {
      window.location.href = '/dashboard';
    }
  }, [data, isPending]);

  return (
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
              purchases, discovering favorites, and connecting with the friends.
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

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <Features />
      </section>

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <ExamplePurchases />
      </section>

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <SocialPostExample />
      </section>

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-blue-100 via-red-100 to-purple-100 shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl fugaz-font font-bold text-slate-800 mb-8">
                Ready to Start Your Journey?
              </h2>
              {/* <p className="text-gray-600 text-lg mb-8">Join today!</p> */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  <Link href="/sign-up">Create Account</Link>
                </Button>
                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="/dashboard">View Demo</Link>
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
