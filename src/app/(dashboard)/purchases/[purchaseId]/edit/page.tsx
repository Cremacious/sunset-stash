import NotFound from '@/components/NotFound';
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
    return <NotFound message="Sorry, we could not find that purchase." />;
  }

  return (
    <div className="min-h-screen">
      <EditPurchaseForm purchase={data.purchase} />
    </div>
  );
};

export default EditPurchasePage;
