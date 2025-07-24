import EditPurchaseForm from '@/components/purchases/EditPurchaseForm';
import { getPurchaseById } from '@/lib/actions/purchase.actions';

const EditPurchasePage = async ({
  params,
}: {
  params: Promise<{ purchaseId: string }>;
}) => {
  const { purchaseId } = await params;

  const data = await getPurchaseById(purchaseId);

  if (!data.purchase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Purchase not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <EditPurchaseForm purchase={data.purchase} />
    </div>
  );
};

export default EditPurchasePage;
