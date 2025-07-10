import PurchaseForm from '@/components/purchases/PurchaseForm';


const NewPurchasePage = () => {
  return (
    <div className="relative w-full flex justify-center py-6 px-1">
      <div className="max-w-4xl mx-auto space-y-6 bg-white shadow-xl rounded-xl p-2 md:p-6">
        <PurchaseForm />
      </div>
    </div>
  );
};

export default NewPurchasePage;
