// src/lib/validators/post.validator.ts
import { z } from 'zod';

export const postFormSchema = z.object({
  activity: z.string().optional(),
  content: z
    .string()
    .min(1, 'Please write some content')
    .max(1000, 'Content too long'),
  stashItemIds: z.array(z.string()).optional(),
});

export type PostFormData = z.infer<typeof postFormSchema>;
