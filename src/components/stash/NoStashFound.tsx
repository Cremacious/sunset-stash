'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Container } from 'lucide-react';

const NoStashFound = () => {
  const router = useRouter();
  return (
    <Card className="bg-white shadow-xl border-0">
      <CardContent className="text-center py-12">
        <div className="flex justify-center">
          <Container className="text-purple-600" size={100} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 my-2">
          Your stash is empty
        </h3>
        <p className="text-gray-600 mb-6">
          Start building your cannabis collection by adding your first strain!
        </p>
        <Button onClick={() => router.push('/stash/new')}>
          Add Your First Strain
        </Button>
      </CardContent>
    </Card>
  );
};

export default NoStashFound;
