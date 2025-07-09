// src/lib/validators/post.validator.ts
import { z } from 'zod';

export const PostFormSchema = z.object({
  activity: z.string().min(1, 'Please select an activity'),
  content: z
    .string()
    .min(1, 'Please write some content')
    .max(500, 'Content too long'),
  stashItemIds: z.array(z.string()).optional(),
});

export type PostFormData = z.infer<typeof PostFormSchema>;
