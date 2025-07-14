import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import NoStashFound from './NoStashFound';
import { StashItem } from '@/lib/types';

const RecentStashItems = ({ stashItems }: { stashItems: StashItem[] }) => {
  const latestStashItems = stashItems.slice(0, 5);

  return (
    <Card className="bg-white shadow-xl border-0 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🏺</span>
            Your Stash
          </div>
          <Button
            variant="outline"
            size="sm"
            // onClick={() => router.push('/stash')}
            className="text-orange-500 border-orange-200 hover:bg-orange-50"
          >
            View Stash
          </Button>
        </CardTitle>
        <CardDescription>Manage your cannabis collection</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stashItems && stashItems.length > 0 ? (
            latestStashItems.map((item, index) => (
              <div
                key={item.id ?? index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <h4 className="font-semibold text-gray-800">
                  {item.name ?? `Strain Name ${index + 1}`}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.type ?? 'Indica'} •{' '}
                  {item.thc ? `${item.thc}% THC` : '20% THC'}
                </p>
              </div>
            ))
          ) : (
            <NoStashFound />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

{
  /* <div
  key={index}
  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
>
  <h4 className="font-semibold text-gray-800">Strain Name {index + 1}</h4>
  <p className="text-sm text-gray-600">Indica • 20% THC</p>
  <p className="text-xs text-gray-500 mt-1">Added on: 2025-01-{index + 1}</p>
</div>; */
}

export default RecentStashItems;
