export type Purchase = {
  id: number;
  dispensary: string;
  date: string;
  total: number;
  items: PurchaseItem[];
  notes: string;
  createdAt: string;
};

export type PurchaseItem = {
  id: number;
  name: string;
  category: string;
  type: string;
  amount: string;
  price: number;
  thc: number;
  cbd: number;
  lineage: string;
  notes: string;
  dateAdded: string;
};
