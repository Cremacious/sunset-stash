'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heart, ShoppingCart, Users } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section data-aos="fade-up" data-aos-delay="100" className="py-16 px-4">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className=" rounded-3xl">
          <h2 className="text-4xl font-bold text-white text-center mb-14 drop-shadow-lg fugaz-font">
            Everything You Need to Track Your Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="bg-gradient-to-br from-green-50 via-white to-green-100 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <CardTitle className="text-green-800 text-2xl font-bold">
                  Track Purchases
                </CardTitle>
                <CardDescription className="text-green-700">
                  Log every dispensary visit with detailed purchase information
                </CardDescription>
              </CardHeader>
              <CardContent className="text-green-900">
                <ul className="space-y-3 text-center text-base">
                  <li className="bg-green-100/80 p-3 rounded-xl shadow-sm">
                    Track spending per dispensary visit
                  </li>
                  <li className="bg-green-100/80 p-3 rounded-xl shadow-sm">
                    Monitor your monthly spending
                  </li>
                  <li className="bg-green-100/80 p-3 rounded-xl shadow-sm">
                    See which dispensaries you visit most
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 via-white to-pink-100 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Heart className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <CardTitle className="text-purple-800 text-2xl font-bold">
                  Favorite Stash
                </CardTitle>
                <CardDescription className="text-purple-700">
                  Save and organize your favorite strains and products
                </CardDescription>
              </CardHeader>
              <CardContent className="text-purple-900">
                <ul className="space-y-3 text-center text-base">
                  <li className="bg-purple-100/80 p-3 rounded-xl shadow-sm">
                    Create entries for favorite strains
                  </li>
                  <li className="bg-purple-100/80 p-3 rounded-xl shadow-sm">
                    Add from recent purchases easily
                  </li>
                  <li className="bg-purple-100/80 p-3 rounded-xl shadow-sm">
                    Create custom strain notes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 via-white to-purple-100 shadow-xl border-0 rounded-2xl hover:scale-105 transition-transform duration-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <CardTitle className="text-blue-800 text-2xl font-bold">
                  Social Community
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Connect with other Florida medical users
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-900">
                <ul className="space-y-3 text-center text-base">
                  <li className="bg-blue-100/80 p-3 rounded-xl shadow-sm">
                    Share posts about your experiences
                  </li>
                  <li className="bg-blue-100/80 p-3 rounded-xl shadow-sm">
                    Connect with friends and see their activities
                  </li>
                  <li className="bg-blue-100/80 p-3 rounded-xl shadow-sm">
                    Discover new products through friends
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
