import EditPurchaseForm from '@/components/purchases/EditPurchaseForm';
import { getPurchaseById } from '@/lib/actions/purchase.actions';
import { notFound } from 'next/navigation';

const EditPurchasePage = async ({
  params,
}: {
  params: Promise<{ purchaseId: string }>;
}) => {
  const { purchaseId } = await params;

  const data = await getPurchaseById(purchaseId);

  if (!data.purchase) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <EditPurchaseForm purchase={data.purchase} />
    </div>
  );
};

export default EditPurchasePage;
