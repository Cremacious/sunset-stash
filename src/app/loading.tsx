import { Sun } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <Sun className="animate-spin text-yellow-300" size={200} />
    </div>
  );
};

export default LoadingPage;
