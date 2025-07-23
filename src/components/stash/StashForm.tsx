'use client';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { stashFormSchema } from '@/lib/validators/stash.validator';
import { createStashItem } from '@/lib/actions/stash.actions';
import { useRouter } from 'next/navigation';
import { Sun } from 'lucide-react';
import { TYPES, CATEGORIES } from '@/lib/constants';

const StashForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof stashFormSchema>>({
    resolver: zodResolver(stashFormSchema),
  });

  async function onSubmit(values: z.infer<typeof stashFormSchema>) {
    const response = await createStashItem(values);
    if (response.success) {
      toast.success('Stash item created successfully!');
      form.reset();
      router.push('/stash');
    } else {
      toast.error(
        response.message || 'Failed to create stash item. Please try again.'
      );
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto "
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Strain Name*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Blue Dream, OG Kush"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 space-y-4">
          <div className="">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="thc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>THC %</FormLabel>
                  <FormControl>
                    <Input
                      className="w-1/2"
                      placeholder="0"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="cbd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CBD %</FormLabel>
                  <FormControl>
                    <Input
                      className="w-1/2"
                      placeholder="0"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="lineage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lineage</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormDescription>
                Enter the parent strains or genetic background if known
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Overall Thoughts</FormLabel>
              <FormControl>
                <Textarea placeholder="" className="resize-none" {...field} />
              </FormControl>
              <FormDescription>
                Share Your experiences, effects, taste, aroma, or any other
                notes about this strain.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/stash')}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            disabled={!form.formState.isDirty || isSubmitting}
            type="submit"
            className="flex-1 "
          >
            {isSubmitting ? (
              <Sun className="animate-spin text-yellow-600" />
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StashForm;
