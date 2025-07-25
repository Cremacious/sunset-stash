import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SignInForm from '@/components/auth/SignInForm';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/sunset-stash-logo.png';

export default function SignInPage() {
  return (
    <div className=" flex justify-center px-4 mt-4">
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 shadow-2xl border-0 overflow-hidden">
          <CardHeader className="text-center">
            <Image
              src={logo}
              alt="Sunset Stash Logo"
              className="w-50 h-50 mx-auto round-full"
            />
            <CardTitle className="text-4xl fugaz-font text-purple-800">
              Sunset Stash
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Welcome to Florida&apos;s cannabis community
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <div className="space-y-3">
              {/* <SignInWithGoogle /> */}

              {/* <Button
                variant="outline"
                className="w-full h-12 bg-black hover:bg-gray-800 border-2 border-black text-white transition-all duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="font-medium">Continue with Apple</span>
                </div>
              </Button> */}
            </div>

            {/* <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full "></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4  text-slate-800 font-medium">
                  Or sign in with email
                </span>
              </div>
            </div> */}
            <SignInForm />

            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Don&apos;t have an account?{' '}
                <Link className="text-purple-800" href={'/sign-up'}>
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                By creating an account, you agree to our{' '}
                <span className="text-purple-800 hover:underline cursor-pointer">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="text-purple-800 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
