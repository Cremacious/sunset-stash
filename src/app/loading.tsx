import { Sun } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-svh w-screen">
      <Sun className="animate-spin text-yellow-300" size={100} />
    </div>
  );
};

export default LoadingPage;
