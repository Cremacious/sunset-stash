'use client';

import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SignInForm from '@/components/auth/SignInForm';

export default function SignInPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <CardHeader className="text-center pb-6 bg-gradient-to-r from-orange-50 to-pink-50">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🌺</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Join Paradise
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Welcome to Florida&apos;s cannabis community 🌴
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <div className="space-y-3 mb-6">
              <Button
                variant="outline"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Continue with Google
                  </span>
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 bg-black hover:bg-gray-800 border-2 border-black text-white transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="font-medium">Continue with Apple</span>
                </div>
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  Or sign in with email
                </span>
              </div>
            </div>
            <SignInForm />

            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => router.push('/sign-in')}
                  className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-colors duration-200"
                >
                  Sign in here
                </button>
              </p>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                By creating an account, you agree to our{' '}
                <span className="text-orange-600 hover:underline cursor-pointer">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="text-orange-600 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-white/90 hover:text-white font-medium hover:underline transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
          >
            <span>←</span>
            <span>Back to Paradise</span>
          </button>
        </div>
      </div>
    </div>
  );
}
