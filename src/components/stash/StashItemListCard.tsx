import { StashItem } from '@/lib/types';

const StashItemListCard = ({ stashItem }: { stashItem: StashItem }) => {
  return (
    <div
      key={stashItem.id}
      className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <h4 className="font-semibold text-gray-800">{stashItem.name}</h4>
      <p className="text-sm text-gray-600">
        {stashItem.type ?? 'Indica'} •{' '}
        {stashItem.thc ? `${stashItem.thc}% THC` : '20% THC'}
      </p>
    </div>
  );
};

export default StashItemListCard;
