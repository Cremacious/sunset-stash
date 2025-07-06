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
    <main className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-blue-600 relative overflow-hidden">
      {/* Tropical background with floating elements */}
      <div className="absolute inset-0">
        {/* Sun */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full blur-sm opacity-80 animate-pulse"></div>
        {/* Palm trees silhouettes */}
        <div className="absolute bottom-0 left-0 w-32 h-64 bg-black/20 transform rotate-12 origin-bottom"></div>
        <div className="absolute bottom-0 right-20 w-24 h-48 bg-black/15 transform -rotate-6 origin-bottom"></div>
        {/* Ocean waves */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-teal-600/40 to-transparent"></div>
        {/* Floating tropical elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-yellow-300 opacity-60 animate-bounce">🌺</div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 text-pink-300 opacity-70 animate-pulse">🌴</div>
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 text-orange-300 opacity-50 animate-bounce">🥥</div>
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 py-6 md:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🌅</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                Sunset Stash
              </h1>
              <p className="text-xs text-white/80 hidden sm:block">Florida Cannabis Community</p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => router.push('/sign-in')}
              className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push('/sign-up')}
              className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-orange-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

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
            Connect with Florida&apos;s medical community. Share your journey, discover strains, and track your wellness path 🌴
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
                  Curate your favorite strains with detailed reviews, effects, and personal notes. Share discoveries with friends.
                </p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-green-800">Blue Dream</span>
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
                  Create posts about your sessions, tag activities like movie nights or workouts, and connect with the community.
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
                  Log dispensary visits with detailed product info, track spending, and analyze your purchasing patterns.
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
                  Follow friends, discover new strains through recommendations, and build meaningful connections.
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
        {/* Palm trees silhouettes */}
        <div className="absolute bottom-0 left-0 w-32 h-64 bg-black/20 transform rotate-12 origin-bottom"></div>
        <div className="absolute bottom-0 right-20 w-24 h-48 bg-black/15 transform -rotate-6 origin-bottom"></div>
        {/* Ocean waves */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-teal-600/40 to-transparent"></div>
        {/* Floating tropical elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-yellow-300 opacity-60 animate-bounce">🌺</div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 text-pink-300 opacity-70 animate-pulse">🌴</div>
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 text-orange-300 opacity-50 animate-bounce">🥥</div>
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 py-6 md:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🌅</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                Sunset Stash
              </h1>
              <p className="text-xs text-white/80 hidden sm:block">Florida Cannabis Community</p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => router.push('/sign-in')}
              className="px-3 py-2 md:px-4 md:py-2 text-sm text-white border border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push('/sign-up')}
              className="px-3 py-2 md:px-4 md:py-2 text-sm bg-white text-orange-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Share Your
            <span className="block bg-gradient-to-r from-[#f7c062] to-white bg-clip-text text-transparent">
              Cannabis Journey
            </span>
            With Friends
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Build your personal stash, track purchases, and connect with the
            Florida medical community through social posts and strain reviews �
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

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Connect, Share & Track
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stash Building */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#f7c062] to-[#3e9495] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏺</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Personal Stash
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Curate your favorite strains with detailed reviews and share
                them with friends
              </p>
            </div>

            {/* Social Posts */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3e9495] to-[#116a7e] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Social Posts
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Share your experiences, activities, and strain reviews with the
                community
              </p>
            </div>

            {/* Purchase Tracking */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#116a7e] to-[#f7c062] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">�</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Track Purchases
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Log dispensary visits and spending to stay within your budget
              </p>
            </div>

            {/* Community */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#f7c062] to-[#116a7e] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">�</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Community
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Connect with other Florida patients and discover new strains
                together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stash Building Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-[#116a7e]/20 to-[#3e9495]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your Dream Stash
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Create a personalized collection of your favorite strains and
              share your discoveries with friends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    My Stash Collection
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Your personal strain library
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#f7c062]/20 to-[#3e9495]/20 rounded-lg p-4 border border-[#f7c062]/30">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-white font-semibold">Blue Dream</h5>
                        <span className="text-[#f7c062] text-sm">⭐ 4.8</span>
                      </div>
                      <p className="text-white/70 text-sm mb-2">
                        Hybrid • THC: 18-24%
                      </p>
                      <p className="text-white/80 text-sm">
                        &quot;Perfect for creativity and relaxation...&quot;
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#3e9495]/20 to-[#116a7e]/20 rounded-lg p-4 border border-[#3e9495]/30">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-white font-semibold">
                          Granddaddy Purple
                        </h5>
                        <span className="text-[#f7c062] text-sm">⭐ 5.0</span>
                      </div>
                      <p className="text-white/70 text-sm mb-2">
                        Indica • THC: 17-23%
                      </p>
                      <p className="text-white/80 text-sm">
                        &quot;Amazing for sleep and pain relief...&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#f7c062] rounded-full flex items-center justify-center">
                  <span className="text-[#116a7e] text-xl">🌿</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Rate & Review Strains
                  </h4>
                  <p className="text-white/80">
                    Share detailed reviews with effects, taste, and personal
                    notes
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#3e9495] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Track Your Favorites
                  </h4>
                  <p className="text-white/80">
                    Build a personal database of strains that work best for you
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#116a7e] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">�</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Share with Community
                  </h4>
                  <p className="text-white/80">
                    Let friends discover great strains through your
                    recommendations
                  </p>
                </div>
              </div>

              <button
                onClick={() => router.push('/sign-up')}
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#f7c062] to-[#3e9495] text-[#116a7e] font-bold rounded-xl hover:from-[#f7c062]/90 hover:to-[#3e9495]/90 transition-all duration-200 shadow-xl"
              >
                Start Building Your Stash
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Posts Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Share Your Cannabis Story
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Create engaging posts about your experiences and connect with the
              Florida medical community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#f7c062] rounded-full flex items-center justify-center">
                      <span className="text-[#116a7e] font-bold">JS</span>
                    </div>
                    <div>
                      <CardTitle className="text-white text-base">
                        Jake S.
                      </CardTitle>
                      <CardDescription className="text-white/70 text-sm">
                        2 hours ago
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-white">
                      Just tried Blue Dream for movie night 🎬
                    </p>
                    <div className="bg-gradient-to-r from-[#3e9495]/20 to-[#116a7e]/20 rounded-lg p-3 border border-[#3e9495]/30">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">
                          Blue Dream Cart
                        </span>
                        <span className="text-[#f7c062] text-sm">⭐ 4.5</span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Activity: Movie Night 🍿
                      </p>
                    </div>
                    <p className="text-white/80 text-sm">
                      Perfect balance of relaxation and focus. Great for
                      watching sci-fi!
                    </p>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span>❤️ 12</span>
                      <span>💬 5</span>
                      <span>🔄 3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-6">
                Create Custom Posts
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-[#f7c062] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🍿</span>
                  </div>
                  <h5 className="text-white font-semibold mb-1">Movie Night</h5>
                  <p className="text-white/70 text-xs">
                    Share your cinema sessions
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-[#3e9495] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏃</span>
                  </div>
                  <h5 className="text-white font-semibold mb-1">Workout</h5>
                  <p className="text-white/70 text-xs">Track active sessions</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-[#116a7e] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h5 className="text-white font-semibold mb-1">Creative</h5>
                  <p className="text-white/70 text-xs">Art & music sessions</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-[#f7c062] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">😴</span>
                  </div>
                  <h5 className="text-white font-semibold mb-1">Sleep</h5>
                  <p className="text-white/70 text-xs">Bedtime routines</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#f7c062] rounded-full flex items-center justify-center">
                    <span className="text-[#116a7e] text-sm">✨</span>
                  </div>
                  <p className="text-white/90">
                    Tag strains from your stash or purchases
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#3e9495] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📝</span>
                  </div>
                  <p className="text-white/90">
                    Write detailed experience notes
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#116a7e] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👥</span>
                  </div>
                  <p className="text-white/90">
                    Get feedback from friends and community
                  </p>
                </div>
              </div>

              <button
                onClick={() => router.push('/sign-up')}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#3e9495] to-[#116a7e] text-white font-bold rounded-xl hover:from-[#3e9495]/90 hover:to-[#116a7e]/90 transition-all duration-200 shadow-xl"
              >
                Start Sharing Your Story
              </button>
            </div>
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
                  Join thousands of Florida medical patients sharing their cannabis journey in our tropical community
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
                    <div className="text-2xl font-bold text-orange-600">2,847</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15,293</div>
                    <div className="text-sm text-gray-600">Strain Reviews</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">8,156</div>
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
                  <p className="text-xs text-white/80">Florida Cannabis Community</p>
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
    </main>
  );
}
