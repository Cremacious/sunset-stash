import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Logo from '../../public/sunset-stash-logo.png';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Title */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Image
                className="rounded-full"
                src={Logo}
                alt="Sunset Stash Logo"
                height={350}
                width={350}
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Sunset Stash
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Your Cannabis Social Paradise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Track purchases, curate your stash, and connect with
              Florida&apos;s medical cannabis community 🌴
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-md sm:max-w-none mx-auto">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-2xl transform hover:scale-105">
                🚀 Start Your Journey
              </button>
              <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/30">
                🌊 Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Showcase */}
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Everything You Need in One Place
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive cannabis management for the modern patient
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Purchase Tracking Feature */}
            <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
              <Card className="bg-white shadow-xl border-0 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">💰</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Purchase Tracking
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Log every dispensary visit
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Track dispensary visits with detailed product info, pricing,
                    payment methods, and spending analytics.
                  </p>

                  {/* Mock Purchase Form Preview */}
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-semibold text-orange-800">
                            Trulieve
                          </h5>
                          <p className="text-sm text-orange-600">
                            3 items • Jan 5, 2025
                          </p>
                        </div>
                        <span className="font-bold text-orange-600">
                          $89.25
                        </span>
                      </div>
                      <div className="text-xs text-orange-700">
                        Blue Dream (3.5g) • OG Kush (1g) • Vape Cart
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-semibold text-blue-800">
                            Curaleaf
                          </h5>
                          <p className="text-sm text-blue-600">
                            2 items • Jan 3, 2025
                          </p>
                        </div>
                        <span className="font-bold text-blue-600">$67.80</span>
                      </div>
                      <div className="text-xs text-blue-700">
                        Gorilla Glue (7g) • THC Gummies
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Monthly Total:</span>
                      <span className="font-bold text-gray-700">$157.05</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Auto-calculate totals • Track payment methods
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stash Management Feature */}
            <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
              <Card className="bg-white shadow-xl border-0 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">🏺</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Personal Stash
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Curate your cannabis collection
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Build your strain library with detailed profiles, THC/CBD
                    levels, lineage tracking, and personal notes.
                  </p>

                  {/* Mock Stash Items */}
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-green-800">
                            Blue Dream
                          </h5>
                          <p className="text-sm text-green-600">
                            Hybrid • THC: 22% • CBD: 0.5%
                          </p>
                          <p className="text-xs text-green-500">
                            Blueberry x Haze
                          </p>
                        </div>
                        <span className="text-green-600 text-2xl">🌸</span>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-purple-800">
                            OG Kush
                          </h5>
                          <p className="text-sm text-purple-600">
                            Indica • THC: 25% • CBD: 0.1%
                          </p>
                          <p className="text-xs text-purple-500">
                            Great for relaxation
                          </p>
                        </div>
                        <span className="text-purple-600 text-2xl">🍯</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Track effects • Add personal notes • Share with posts
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Features */}
            <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-6">
              <Card className="bg-white shadow-xl border-0 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl">📱</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Social Posts
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Share your cannabis journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Create posts about your experiences, tag activities, link
                    stash items, and connect with the community.
                  </p>

                  {/* Mock Social Posts */}
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-semibold">
                            SM
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-blue-800 text-sm">
                              Sarah M.
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              🎬 Movie Night
                            </span>
                          </div>
                          <p className="text-sm text-blue-700">
                            Perfect strain for Marvel marathon! Blue Dream hits
                            different 🎬
                          </p>
                          <div className="mt-1">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              🌸 Blue Dream
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-semibold">
                            JD
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-green-800 text-sm">
                              Jake D.
                            </span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              💪 Workout
                            </span>
                          </div>
                          <p className="text-sm text-green-700">
                            Morning yoga session with some energizing Sativa 🧘‍♂️
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      Tag activities • Link stash items • Connect with friends
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-8">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  How Sunset Stash Works
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Simple steps to manage your cannabis journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Track Your Purchases
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Log every dispensary visit with detailed product
                      information, pricing, and payment methods. Build a
                      complete purchase history.
                    </p>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-sm text-purple-700">
                        📍 Dispensary • 💰 Price • 💳 Payment • 📦 Products
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Build Your Stash
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Add strains to your personal collection with detailed
                      profiles, THC/CBD levels, lineage, and personal reviews.
                    </p>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-sm text-green-700">
                        🌿 Strain Info • 🧬 THC/CBD • 📝 Notes • 🧪 Lineage
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Share & Connect
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Create posts about your experiences, tag activities, link
                      your stash items, and connect with Florida&apos;s
                      community.
                    </p>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm text-blue-700">
                        📱 Posts • 👥 Friends • 🎯 Activities • 🔗 Stash Links
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase to Stash to Social Flow */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h5 className="text-lg font-semibold text-gray-800 text-center mb-6">
                    Seamless Integration Between Features
                  </h5>
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex items-center space-x-2 text-center">
                      <span className="text-2xl">💰</span>
                      <span className="text-sm text-gray-600">
                        Log Purchase
                      </span>
                    </div>
                    <div className="text-gray-400">→</div>
                    <div className="flex items-center space-x-2 text-center">
                      <span className="text-2xl">🏺</span>
                      <span className="text-sm text-gray-600">
                        Add to Stash
                      </span>
                    </div>
                    <div className="text-gray-400">→</div>
                    <div className="flex items-center space-x-2 text-center">
                      <span className="text-2xl">📱</span>
                      <span className="text-sm text-gray-600">
                        Share Experience
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-8">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join Florida&apos;s premier medical cannabis community and
                  take control of your wellness journey today.
                </p>

                {/* Features Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <span className="text-2xl block mb-2">💰</span>
                    <h4 className="font-semibold text-orange-800">
                      Track Spending
                    </h4>
                    <p className="text-sm text-orange-600">
                      Monitor your cannabis budget
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-2xl block mb-2">🏺</span>
                    <h4 className="font-semibold text-green-800">
                      Manage Stash
                    </h4>
                    <p className="text-sm text-green-600">
                      Organize your collection
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-2xl block mb-2">📱</span>
                    <h4 className="font-semibold text-blue-800">
                      Connect & Share
                    </h4>
                    <p className="text-sm text-blue-600">Join the community</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg transform hover:scale-105">
                    🚀 Sign Up Free
                  </button>
                  <button className="px-8 py-4 border-2 border-purple-300 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-200">
                    📖 Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
