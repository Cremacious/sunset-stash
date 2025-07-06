'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewStashItemPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    type: '',
    size: '',
    thcPercentage: '',
    cbdPercentage: '',
    lineage: '',
    thoughts: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Mock submission - in real app this would save to database
    console.log('Submitting stash item:', formData);
    router.push('/stash');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-2xl mb-6">
          <span className="text-4xl">🌿</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          Add New Strain
        </h1>
        <p className="text-gray-600 text-lg">
          Track your new cannabis addition to your stash 🏺
        </p>
      </div>

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
          {/* Basic Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strain Name */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Strain Name *
              </Label>
              <Input
                id="name"
                placeholder="e.g., Blue Dream, OG Kush"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label
                htmlFor="category"
                className="text-sm font-semibold text-gray-700"
              >
                Category *
              </Label>
              <Select
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-green-500 focus:ring-green-500">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flower">🌸 Flower</SelectItem>
                  <SelectItem value="concentrate">🍯 Concentrate</SelectItem>
                  <SelectItem value="edible">🍪 Edible</SelectItem>
                  <SelectItem value="vape">💨 Vape Cartridge</SelectItem>
                  <SelectItem value="topical">🧴 Topical</SelectItem>
                  <SelectItem value="tincture">💧 Tincture</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type */}
            <div className="space-y-2">
              <Label
                htmlFor="type"
                className="text-sm font-semibold text-gray-700"
              >
                Type *
              </Label>
              <Select
                onValueChange={(value) => handleInputChange('type', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-green-500 focus:ring-green-500">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indica">🌙 Indica</SelectItem>
                  <SelectItem value="sativa">☀️ Sativa</SelectItem>
                  <SelectItem value="hybrid">🌅 Hybrid</SelectItem>
                  <SelectItem value="cbd">💚 CBD-Dominant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Size/Amount */}
            <div className="space-y-2">
              <Label
                htmlFor="size"
                className="text-sm font-semibold text-gray-700"
              >
                Size/Amount *
              </Label>
              <Select
                onValueChange={(value) => handleInputChange('size', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-green-500 focus:ring-green-500">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5g">0.5g</SelectItem>
                  <SelectItem value="1g">1g</SelectItem>
                  <SelectItem value="2g">2g</SelectItem>
                  <SelectItem value="3.5g">3.5g (Eighth)</SelectItem>
                  <SelectItem value="7g">7g (Quarter)</SelectItem>
                  <SelectItem value="14g">14g (Half Oz)</SelectItem>
                  <SelectItem value="28g">28g (Oz)</SelectItem>
                  <SelectItem value="custom">Custom Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* THC Percentage */}
            <div className="space-y-2">
              <Label
                htmlFor="thc"
                className="text-sm font-semibold text-gray-700"
              >
                THC Percentage
              </Label>
              <div className="relative">
                <Input
                  id="thc"
                  type="number"
                  placeholder="20"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.thcPercentage}
                  onChange={(e) =>
                    handleInputChange('thcPercentage', e.target.value)
                  }
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500 pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  %
                </span>
              </div>
            </div>

            {/* CBD Percentage */}
            <div className="space-y-2">
              <Label
                htmlFor="cbd"
                className="text-sm font-semibold text-gray-700"
              >
                CBD Percentage
              </Label>
              <div className="relative">
                <Input
                  id="cbd"
                  type="number"
                  placeholder="1.2"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.cbdPercentage}
                  onChange={(e) =>
                    handleInputChange('cbdPercentage', e.target.value)
                  }
                  className="border-gray-200 focus:border-green-500 focus:ring-green-500 pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Lineage */}
          <div className="space-y-2">
            <Label
              htmlFor="lineage"
              className="text-sm font-semibold text-gray-700"
            >
              Lineage/Genetics
            </Label>
            <Input
              id="lineage"
              placeholder="e.g., Blueberry × Haze, OG Kush × Girl Scout Cookies"
              value={formData.lineage}
              onChange={(e) => handleInputChange('lineage', e.target.value)}
              className="border-gray-200 focus:border-green-500 focus:ring-green-500"
            />
            <p className="text-xs text-gray-500">
              Enter the parent strains or genetic background if known
            </p>
          </div>

          {/* Overall Thoughts */}
          <div className="space-y-2">
            <Label
              htmlFor="thoughts"
              className="text-sm font-semibold text-gray-700"
            >
              Your Overall Thoughts *
            </Label>
            <textarea
              id="thoughts"
              rows={4}
              placeholder="Share your experience, effects, taste, aroma, or any other notes about this strain..."
              value={formData.thoughts}
              onChange={(e) => handleInputChange('thoughts', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none resize-none"
            />
            <p className="text-xs text-gray-500">
              Describe the effects, taste, aroma, or any other observations
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="flex-1 text-gray-600 border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
            >
              Add to Stash
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default NewStashItemPage;
