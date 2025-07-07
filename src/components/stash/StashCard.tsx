import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { StashItem } from '@/lib/types/stash.types';

const StashCard = ({ stashItem }: { stashItem: StashItem }) => {
    
  return (
    <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center`}
            >
              <span className="text-xl">icon</span>
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-gray-800">
                {stashItem.name}
              </CardTitle>
              <CardDescription className="text-sm">
                {stashItem.type} • {stashItem.amount}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 mb-1">Category</p>
            <p className="font-semibold text-gray-800">{stashItem.category}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 mb-1">THC</p>
            <p className="font-semibold text-gray-800">{stashItem.thc}%</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-gray-600 mb-1">CBD</p>
            <p className="font-semibold text-gray-800">{stashItem.cbd}%</p>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Notes:</p>
          <p className="text-sm text-gray-800">
            &ldquo;{stashItem.notes}&rdquo;
          </p>
        </div>

        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="flex-1 text-xs">
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StashCard;
