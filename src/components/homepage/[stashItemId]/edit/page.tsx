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

const EditStashItemPage = () => {
  const router = useRouter();

  // Mock existing stash item data - in real app this would come from params and database
  const [formData, setFormData] = useState({
    name: 'Blue Dream',
    category: 'flower',
    type: 'hybrid',
    size: '3.5g',
    thcPercentage: '18',
    cbdPercentage: '1',
    lineage: 'Blueberry × Haze',
    thoughts:
      'Perfect for creativity and relaxation. The berry flavor is really prominent and the effects are well-balanced. Great for afternoon use when I want to be productive but chill.',
    rating: '4.8',
    dispensary: 'Trulieve',
    price: '45.50',
    effects: ['Creative', 'Relaxed', 'Happy', 'Euphoric'],
    flavors: ['Sweet', 'Berry', 'Citrus'],
  });

  const [selectedEffects, setSelectedEffects] = useState(formData.effects);
  const [selectedFlavors, setSelectedFlavors] = useState(formData.flavors);

  const availableEffects = [
    'Relaxed',
    'Happy',
    'Euphoric',
    'Uplifted',
    'Creative',
    'Focused',
    'Energetic',
    'Sleepy',
    'Hungry',
    'Giggly',
    'Talkative',
    'Pain Relief',
  ];

  const availableFlavors = [
    'Sweet',
    'Citrus',
    'Berry',
    'Pine',
    'Earthy',
    'Fruity',
    'Spicy',
    'Woody',
    'Floral',
    'Diesel',
    'Cheese',
    'Mint',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleEffect = (effect: string) => {
    setSelectedEffects((prev) =>
      prev.includes(effect)
        ? prev.filter((e) => e !== effect)
        : [...prev, effect]
    );
  };

  const toggleFlavor = (flavor: string) => {
    setSelectedFlavors((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handleSubmit = () => {
    // Mock submission - in real app this would update the database
    const updatedData = {
      ...formData,
      effects: selectedEffects,
      flavors: selectedFlavors,
    };
    console.log('Updating stash item:', updatedData);
    router.back();
  };

  const handleDelete = () => {
    // Mock deletion - in real app this would show confirmation dialog
    if (
      confirm('Are you sure you want to delete this strain from your stash?')
    ) {
      console.log('Deleting stash item');
      router.push('/stash');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-gray-600 mb-4"
          >
            ← Back
          </Button>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl mb-4">
              <span className="text-4xl">✏️</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Edit Strain
            </h1>
            <p className="text-gray-600 text-lg">
              Update your strain details and experience notes 🌿
            </p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <Card className="bg-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-3">📝</span>
            Strain Details
          </CardTitle>
          <CardDescription>
            Update your strain information and personal notes
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
                className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
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
                value={formData.category}
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-purple-500 focus:ring-purple-500">
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
                value={formData.type}
                onValueChange={(value) => handleInputChange('type', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-purple-500 focus:ring-purple-500">
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
                value={formData.size}
                onValueChange={(value) => handleInputChange('size', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-purple-500 focus:ring-purple-500">
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
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 pr-8"
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
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  %
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <Label
                htmlFor="rating"
                className="text-sm font-semibold text-gray-700"
              >
                Your Rating
              </Label>
              <Select
                value={formData.rating}
                onValueChange={(value) => handleInputChange('rating', value)}
              >
                <SelectTrigger className="border-gray-200 focus:border-purple-500 focus:ring-purple-500">
                  <SelectValue placeholder="Rate this strain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">⭐⭐⭐⭐⭐ (5.0)</SelectItem>
                  <SelectItem value="4.5">⭐⭐⭐⭐☆ (4.5)</SelectItem>
                  <SelectItem value="4">⭐⭐⭐⭐☆ (4.0)</SelectItem>
                  <SelectItem value="3.5">⭐⭐⭐☆☆ (3.5)</SelectItem>
                  <SelectItem value="3">⭐⭐⭐☆☆ (3.0)</SelectItem>
                  <SelectItem value="2.5">⭐⭐☆☆☆ (2.5)</SelectItem>
                  <SelectItem value="2">⭐⭐☆☆☆ (2.0)</SelectItem>
                  <SelectItem value="1.5">⭐☆☆☆☆ (1.5)</SelectItem>
                  <SelectItem value="1">⭐☆☆☆☆ (1.0)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dispensary */}
            <div className="space-y-2">
              <Label
                htmlFor="dispensary"
                className="text-sm font-semibold text-gray-700"
              >
                Dispensary
              </Label>
              <Input
                id="dispensary"
                placeholder="Where did you get this?"
                value={formData.dispensary}
                onChange={(e) =>
                  handleInputChange('dispensary', e.target.value)
                }
                className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
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
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Effects Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-700">
              Effects
            </Label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {availableEffects.map((effect) => (
                <button
                  key={effect}
                  type="button"
                  onClick={() => toggleEffect(effect)}
                  className={`p-2 text-sm rounded-lg border transition-all ${
                    selectedEffects.includes(effect)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {effect}
                </button>
              ))}
            </div>
          </div>

          {/* Flavors Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-700">
              Flavors & Aroma
            </Label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {availableFlavors.map((flavor) => (
                <button
                  key={flavor}
                  type="button"
                  onClick={() => toggleFlavor(flavor)}
                  className={`p-2 text-sm rounded-lg border transition-all ${
                    selectedFlavors.includes(flavor)
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
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
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-purple-500 focus:ring-purple-500 focus:outline-none resize-none"
            />
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
              onClick={handleDelete}
              variant="outline"
              className="flex-1 text-red-600 border-red-300 hover:bg-red-50"
            >
              Delete Strain
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Help Card */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-purple-800 flex items-center">
            <span className="text-xl mr-2">💡</span>
            Editing Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="text-purple-600 mt-1">📊</span>
            <p className="text-sm text-purple-700">
              <strong>Update regularly:</strong> Keep your ratings and notes
              current as your experience with the strain evolves.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-purple-600 mt-1">🏷️</span>
            <p className="text-sm text-purple-700">
              <strong>Tag effects & flavors:</strong> Select multiple options to
              help you find similar strains later.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-purple-600 mt-1">⚠️</span>
            <p className="text-sm text-purple-700">
              <strong>Deletion is permanent:</strong> Once you delete a strain,
              all usage history and comments will be lost.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditStashItemPage;
