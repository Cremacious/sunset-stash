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
import { getOptionalUser } from '@/lib/server-utils';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Sign In | Sunset Stash',
  description: 'Sign in to your Sunset Stash account',
};

export default async function SignInPage() {
  const user = await getOptionalUser();
  if (user) {
    redirect('/dashboard');
  }
  return (
    <div className=" flex justify-center px-4 mt-4">
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-100 shadow-2xl border-0 overflow-hidden border-b-4 border-b-orange-400">
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
              <SignInForm />
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-slate-800 mb-2">
                  Don&apos;t have an account?{' '}
                </p>
                <Link className="text-purple-800" href={'/sign-up'}>
                  Sign up here
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
