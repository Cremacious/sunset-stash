'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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

interface StashItem {
  id: number;
  name: string;
  type: string;
  thc: number;
  cbd: number;
  category: string;
  notes: string;
}

const EditPostPage = () => {
  const router = useRouter();
  const [selectedStashItems, setSelectedStashItems] = useState<StashItem[]>([]);
  const [postText, setPostText] = useState('');
  const [activity, setActivity] = useState('');
  const [showStashSelector, setShowStashSelector] = useState(false);

  // Mock stash data
  const stashItems = [
    {
      id: 1,
      name: 'Blue Dream',
      type: 'flower',
      thc: 22,
      cbd: 0.5,
      category: 'Hybrid',
      notes: 'Perfect for creativity and relaxation',
    },
    {
      id: 2,
      name: 'Girl Scout Cookies',
      type: 'flower',
      thc: 25,
      cbd: 0.3,
      category: 'Hybrid',
      notes: 'Great for evening use',
    },
    {
      id: 3,
      name: 'Jack Herer',
      type: 'vape',
      thc: 78,
      cbd: 1.2,
      category: 'Sativa',
      notes: 'Energizing morning strain',
    },
    {
      id: 4,
      name: 'OG Kush Live Rosin',
      type: 'concentrate',
      thc: 85,
      cbd: 0.8,
      category: 'Indica',
      notes: 'Premium quality, amazing flavor',
    },
    {
      id: 5,
      name: 'Durban Poison',
      type: 'vape',
      thc: 82,
      cbd: 0.2,
      category: 'Sativa',
      notes: 'Perfect pre-workout strain',
    },
  ];

  const activities = [
    { value: 'chill', label: 'Chill Time', icon: '😌' },
    { value: 'workout', label: 'Workout', icon: '💪' },
    { value: 'movie', label: 'Movie Night', icon: '🎬' },
    { value: 'munchies', label: 'Munchies', icon: '🍿' },
    { value: 'creative', label: 'Creative Time', icon: '🎨' },
    { value: 'social', label: 'Hanging Out', icon: '👥' },
    { value: 'nature', label: 'Nature Walk', icon: '🌲' },
    { value: 'gaming', label: 'Gaming', icon: '🎮' },
    { value: 'music', label: 'Listening to Music', icon: '🎵' },
    { value: 'reading', label: 'Reading', icon: '📚' },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'flower':
        return '🌸';
      case 'vape':
        return '💨';
      case 'concentrate':
        return '🧪';
      default:
        return '🌿';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'flower':
        return 'from-green-500 to-emerald-600';
      case 'vape':
        return 'from-blue-500 to-cyan-600';
      case 'concentrate':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const toggleStashItem = (item: StashItem) => {
    setSelectedStashItems((prev) => {
      const isSelected = prev.find((selected) => selected.id === item.id);
      if (isSelected) {
        return prev.filter((selected) => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleSubmit = () => {
    // Handle post submission
    console.log({
      text: postText,
      activity,
      stashItems: selectedStashItems,
    });
    router.push('/social');
  };

  return (
    <div className="space-y-8 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl flex justify-center py-6 px-1">
      {/* Header */}

      {/* Post Form */}
      <Card className="bg-white shadow-xl border-0 max-w-4xl w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Create New Post
          </CardTitle>
          <CardDescription>
            Share what you&apos;re doing and what strains you&apos;re enjoying
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Activity Selection */}
          <div className="space-y-2">
            <Label
              htmlFor="activity"
              className="text-sm font-medium text-gray-700"
            >
              What are you doing?
            </Label>
            <Select value={activity} onValueChange={setActivity}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select an activity" />
              </SelectTrigger>
              <SelectContent>
                {activities.map((act) => (
                  <SelectItem key={act.value} value={act.value}>
                    <div className="flex items-center space-x-2">
                      <span>{act.icon}</span>
                      <span>{act.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Post Text */}
          <div className="space-y-2">
            <Label
              htmlFor="postText"
              className="text-sm font-medium text-gray-700"
            >
              Share your thoughts
            </Label>
            <textarea
              id="postText"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="What's on your mind? How are you feeling? What strain are you enjoying?"
            />
          </div>

          {/* Stash Item Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-gray-700">
                Include strains from your stash
              </Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowStashSelector(!showStashSelector)}
                className="text-orange-600 border-orange-300 hover:bg-orange-50"
              >
                {showStashSelector ? 'Hide Stash' : 'Browse Stash'}
              </Button>
            </div>

            {/* Selected Stash Items */}
            {selectedStashItems.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700">
                  Selected Strains:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedStashItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${getTypeColor(
                              item.type
                            )} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white text-sm">
                              {getTypeIcon(item.type)}
                            </span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800">
                              {item.name}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {item.category} • THC: {item.thc}%
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleStashItem(item)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stash Item Browser */}
            {showStashSelector && (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Choose from your stash:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                  {stashItems
                    .filter(
                      (item) =>
                        !selectedStashItems.find(
                          (selected) => selected.id === item.id
                        )
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleStashItem(item)}
                        className="bg-white rounded-lg p-3 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${getTypeColor(
                              item.type
                            )} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white text-sm">
                              {getTypeIcon(item.type)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800">
                              {item.name}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {item.category} • THC: {item.thc}%
                            </p>
                          </div>
                          <div className="text-orange-500">+</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/social')}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!postText.trim() || !activity}
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Share Post
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditPostPage;
