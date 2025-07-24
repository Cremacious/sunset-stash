import { Sun } from 'lucide-react';

const LoadingPage = () => {
  return (
   <div className="fixed inset-0 flex items-center justify-center w-full h-full">
  <Sun className="animate-spin text-yellow-300" size={200} />
</div>
  );
};

export default LoadingPage;
