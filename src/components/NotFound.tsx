import { Sun } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

interface NotFoundProps {
  message?: string;
}
const NotFound = ({ message }: NotFoundProps) => (
  <div className="mt-8 ">
    <div className="flex flex-col max-w-5xl mx-auto items-center justify-center min-h-[300px] py-12 bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-lg shadow-lg text-center border-b-4 border-b-orange-300">
      <Sun className="w-50 h-50 text-orange-400 mb-4" />
      <h2 className="text-2xl font-bold text-purple-800 fugaz-font mb-2">
        Not Found
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-md">{message}</p>
      <Button asChild>
        <Link href="/dashboard">Go To Dashboard</Link>
      </Button>
    </div>
  </div>
);

export default NotFound;
