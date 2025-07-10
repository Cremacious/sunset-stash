// src/lib/validators/purchase.validator.ts
import { z } from 'zod';

export const purchaseItemSchema = z.object({
  name: z.string().min(1, 'Strain name is required'),
  category: z.string().min(1, 'Category is required'),
  type: z.string().min(1, 'Type is required'),
  amount: z.string().optional(),
  price: z.coerce.number().min(0, 'Price must be positive'),
  thc: z.coerce.number().min(0).max(100).optional(),
  cbd: z.coerce.number().min(0).max(100).optional(),
  lineage: z.string().optional(),
  notes: z.string().optional(),
  addToStash: z.boolean().optional(),
});

export const purchaseFormSchema = z.object({
  dispensary: z.string().min(1, 'Dispensary is required'),
  date: z.date(),
  notes: z.string().optional(),
  items: z.array(purchaseItemSchema).min(1, 'At least one item is required'),
});

export type PurchaseFormData = z.infer<typeof purchaseFormSchema>;
export type PurchaseItemData = z.infer<typeof purchaseItemSchema>;
