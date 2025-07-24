'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, Heart, Users } from 'lucide-react';
import Logo from '../../public/sunset-stash-logo.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import ExamplePurchases from '@/components/homepage/ExamplePurchases';
import SocialPostExample from '@/components/homepage/SocialPostExample';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen">
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Everything You Need to Track Your Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-xl">
                  Track Purchases
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Log every dispensary visit with detailed purchase information
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-2 text-center text-sm">
                  <li className="bg-green-100 p-2 rounded-lg">
                    Track spending per dispensary visit
                  </li>
                  <li className="bg-green-100 p-2 rounded-lg">
                    Monitor your monthly spending
                  </li>
                  <li className="bg-green-100 p-2 rounded-lg">
                    See which dispensaries you visit most
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-xl">
                  Favorite Stash
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Save and organize your favorite strains and products
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-2 text-center text-sm">
                  <li className="bg-purple-100 p-2 rounded-lg">
                    Create entries for favorite strains
                  </li>
                  <li className="bg-purple-100 p-2 rounded-lg">
                    Add from recent purchases easily
                  </li>
                  <li className="bg-purple-100 p-2 rounded-lg">
                    Create custom strain notes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-xl">
                  Social Community
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with other Florida medical users
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-2 text-center text-sm">
                  <li className="bg-blue-100 p-2 rounded-lg">
                    Share posts about your experiences
                  </li>
                  <li className="bg-blue-100 p-2 rounded-lg">
                    Connect with friends and see their activities
                  </li>
                  <li className="bg-blue-100 p-2 rounded-lg">
                    Discover new products through friends
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <ExamplePurchases />
      </section>

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <SocialPostExample />
      </section>

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl fugaz-font font-bold text-gray-800 mb-8">
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
