'use client';

import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Tropical background with floating elements */}

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Your Cannabis
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Social Paradise
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Connect with Florida&apos;s medical community. Share your journey,
            discover strains, and track your wellness path 🌴
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => router.push('/sign-up')}
              className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-2xl transform hover:scale-105"
            >
              🚀 Start Your Journey
            </button>
            <button className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/30">
              🌊 Explore Community
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with White Cards */}
      <section className="relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Everything You Need in Paradise
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join Florida&apos;s most vibrant cannabis community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Personal Stash Card */}
            <Card className="bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🏺</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Personal Stash
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Build your strain library
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Curate your favorite strains with detailed reviews, effects,
                  and personal notes. Share discoveries with friends.
                </p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-green-800">
                      Blue Dream
                    </span>
                    <span className="text-green-600">⭐ 4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Posts Card */}
            <Card className="bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">📱</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Social Posts
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Share your experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Create posts about your sessions, tag activities like movie
                  nights or workouts, and connect with the community.
                </p>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-800">
                    🎬 Movie Night with Sour Diesel
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Track Purchases Card */}
            <Card className="bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">💰</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Track Purchases
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Monitor your spending
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Log dispensary visits with detailed product info, track
                  spending, and analyze your purchasing patterns.
                </p>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-800">This Month:</span>
                    <span className="font-bold text-orange-600">$184.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Card */}
            <Card className="bg-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">👥</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Community
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with patients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Follow friends, discover new strains through recommendations,
                  and build meaningful connections.
                </p>
                <div className="mt-4 p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <div className="text-sm text-pink-800">
                    🌟 2,847 active members
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl">🌺</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Join Paradise?
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of Florida medical patients sharing their
                  cannabis journey in our tropical community
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <button
                  onClick={() => router.push('/sign-up')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-xl transform hover:scale-105"
                >
                  🌴 Create Account
                </button>
                <button
                  onClick={() => router.push('/sign-in')}
                  className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-300"
                >
                  Already Have Account?
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      2,847
                    </div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      15,293
                    </div>
                    <div className="text-sm text-gray-600">Strain Reviews</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      8,156
                    </div>
                    <div className="text-sm text-gray-600">Posts Shared</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🌅</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white drop-shadow-md">
                    Sunset Stash
                  </h1>
                  <p className="text-xs text-white/80">
                    Florida Cannabis Community
                  </p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-white/80 text-sm mb-2">
                  © 2025 Sunset Stash. Designed for Florida medical patients.
                </p>
                <p className="text-white/60 text-xs">
                  🌴 Your tropical cannabis paradise 🌺
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
