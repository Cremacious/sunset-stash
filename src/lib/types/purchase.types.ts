export type Purchase = {
  id: string;
  dispensary: string;
  date: string; // Will be converted from DateTime for display
  total: number;
  items: PurchaseItem[];
  notes: string;
  createdAt: string; // Will be converted from DateTime for display
  userId: string;
};

export type PurchaseItem = {
  id: string;
  name: string;
  category: string;
  type: string;
  amount: string;
  price: number;
  thc: number;
  cbd: number;
  lineage: string;
  notes: string;
  purchaseId: string;
};
