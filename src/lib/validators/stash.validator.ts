import { z } from 'zod';

export const stashFormSchema = z.object({
  name: z.string().min(2).max(100),
  category: z.string().optional(),
  type: z.string().optional(),
  amount: z.string().optional(),
  thc: z.coerce.number().optional(),
  cbd: z.coerce.number().optional(),
  lineage: z.string().optional(),
  notes: z.string().optional(),
});
