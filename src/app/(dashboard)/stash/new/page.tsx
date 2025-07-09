'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import StashForm from '@/components/stash/StashForm';

const NewStashItemPage = () => {
  return (
    <div className="bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl py-6 px-1">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Form Card */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
              <span className="text-2xl mr-3">📝</span>
              Strain Details
            </CardTitle>
            <CardDescription>
              Fill in the details about your new strain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <StashForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewStashItemPage;
