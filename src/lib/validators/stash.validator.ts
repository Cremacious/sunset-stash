import { z } from 'zod';

export const stashFormSchema = z.object({
  name: z.string().min(2).max(100),
  category: z.string().optional(),
  type: z.string().optional(),
  amount: z.string().min(1, 'Amount is required'),
  thc: z.number().optional(),
  cbd: z.number().optional(),
  lineage: z.string().optional(),
  notes: z.string().optional(),
});
