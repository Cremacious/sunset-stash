import { Sun } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl p-10">
        <Sun className="animate-spin text-yellow-300" size={100} />
      </div>
    </div>
  );
};

export default LoadingPage;
