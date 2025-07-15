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
import {
  ShoppingCart,
  Heart,
  Users,
  TrendingUp,
  Star,
  DollarSign,
} from 'lucide-react';
import Logo from '../../public/sunset-stash-logo.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
      {/* Hero Section */}
      <section className="relative pb-20 px-4 ">
        <div className="max-w-6xl mx-auto text-center ">
          <div className="">
            {/* Logo */}
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

      {/* Features Section */}

      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Everything You Need to Track Your Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Purchase Tracking */}
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
                <ul className="space-y-2">
                  <li>• Track spending per dispensary visit</li>
                  <li>• Log product details (THC%, CBD%, lineage)</li>
                  <li>• Monitor your monthly spending</li>
                  <li>• See which dispensaries you visit most</li>
                </ul>
              </CardContent>
            </Card>

            {/* Stash Management */}
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
                <ul className="space-y-2">
                  <li>• Create entries for favorite strains</li>
                  <li>• Rate and review products</li>
                  <li>• Add from recent purchases easily</li>
                  <li>• Organize by categories and effects</li>
                </ul>
              </CardContent>
            </Card>

            {/* Social Features */}
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
                <ul className="space-y-2">
                  <li>• Share posts about your experiences</li>
                  <li>• Connect with friends and see their activities</li>
                  <li>• Comment and interact with the community</li>
                  <li>• Discover new products through friends</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purchase Tracking Examples */}
      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Track Your Purchases Like a Pro
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Purchase Form Preview */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl">
                  Easy Purchase Logging
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Log every detail of your dispensary visits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dispensary:</span>
                    <span className="text-gray-800 font-semibold">
                      Trulieve
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Date:</span>
                    <span className="text-gray-800 font-semibold">
                      Jan 15, 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-green-600 font-bold">$89.50</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-gray-600 text-sm">Items:</p>
                    <div className="ml-4 space-y-1">
                      <p className="text-gray-800 text-sm">
                        • Blue Dream (3.5g) - $45.00
                      </p>
                      <p className="text-gray-800 text-sm">
                        • CBD Tincture (30ml) - $44.50
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Preview */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-gray-800 text-xl">
                  Spending Analytics
                </CardTitle>
                <CardDescription className="text-gray-600">
                  See where your money goes and track your habits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">Monthly Spending</p>
                    <p className="text-gray-800 font-bold text-lg">$340.25</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">Total Purchases</p>
                    <p className="text-gray-800 font-bold text-lg">12</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">Favorite Category</p>
                    <p className="text-gray-800 font-bold text-sm">Flower</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">Top Dispensary</p>
                    <p className="text-gray-800 font-bold text-sm">Trulieve</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Example Purchase Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-800 font-semibold">Blue Dream</h3>
                  <span className="text-green-600 font-bold">$45.00</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Category: Flower</p>
                  <p>Type: Sativa</p>
                  <p>Amount: 3.5g</p>
                  <p>THC: 22.5% | CBD: 0.5%</p>
                  <p>Lineage: Blueberry x Haze</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-800 font-semibold">OG Kush</h3>
                  <span className="text-green-600 font-bold">$85.00</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Category: Flower</p>
                  <p>Type: Indica</p>
                  <p>Amount: 7g</p>
                  <p>THC: 25.0% | CBD: 0.1%</p>
                  <p>Lineage: Chemdawg x Lemon Thai</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-800 font-semibold">
                    Vape Cartridge
                  </h3>
                  <span className="text-green-600 font-bold">$50.75</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Category: Vape</p>
                  <p>Type: Hybrid</p>
                  <p>Amount: 1g</p>
                  <p>THC: 78.5% | CBD: 0.8%</p>
                  <p>Lineage: Gelato x Sunset Sherbet</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Join thousands of Florida medical marijuana users who trust
                Sunset Stash to track their purchases, manage their favorites,
                and connect with the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  <Link href="/sign-up">Create Account</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="/dashboard">View Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
