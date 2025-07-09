import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PostForm from '@/components/social/PostForm';

const NewPostPage = () => {
  const stashItems = [
    {
      id: '1',
      name: 'Blue Dream',
      type: 'flower',
      thc: 22,
      cbd: 0.5,
      category: 'Hybrid',
      notes: 'Perfect for creativity and relaxation',
      amount: '1',
      lineage: 'Blueberry x Haze',
      dateAdded: new Date().toISOString(),
      userId: '1',
    },
    {
      id: '2',
      name: 'Girl Scout Cookies',
      type: 'flower',
      thc: 25,
      cbd: 0.3,
      category: 'Hybrid',
      notes: 'Great for evening use',
      amount: '1',
      lineage: 'OG Kush x Durban Poison',
      dateAdded: new Date().toISOString(),
      userId: '1',
    },
    {
      id: '3',
      name: 'Jack Herer',
      type: 'vape',
      thc: 78,
      cbd: 1.2,
      category: 'Sativa',
      notes: 'Energizing morning strain',
      amount: '1',
      lineage: 'Haze x Northern Lights #5 x Shiva Skunk',
      dateAdded: new Date().toISOString(),
      userId: '1',
    },
    {
      id: '4',
      name: 'OG Kush Live Rosin',
      type: 'concentrate',
      thc: 85,
      cbd: 0.8,
      category: 'Indica',
      notes: 'Premium quality, amazing flavor',
      amount: '1',
      lineage: 'Chemdawg x Hindu Kush',
      dateAdded: new Date().toISOString(),
      userId: '1',
    },
    {
      id: '5',
      name: 'Durban Poison',
      type: 'vape',
      thc: 82,
      cbd: 0.2,
      category: 'Sativa',
      notes: 'Perfect pre-workout strain',
      amount: '1',
      lineage: 'Durban',
      dateAdded: new Date().toISOString(),
      userId: '1',
    },
  ];

  return (
    <div className="space-y-8 bg-orange-200/20 backdrop-blur-sm border border-orange-200/30 rounded-2xl shadow-xl flex justify-center py-6 px-1">
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
          <PostForm stashItems={stashItems} />
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPostPage;
