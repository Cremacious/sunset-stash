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
import { editStashItem } from '@/lib/actions/stash.actions';
import { useRouter } from 'next/navigation';
import { Sun } from 'lucide-react';
import { TYPES, CATEGORIES } from '@/lib/constants';
import { StashItem } from '@/lib/types';
import { DeleteDialog } from '../DeleteDialog';

const EditStashForm = ({ stashItem }: { stashItem: StashItem }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof stashFormSchema>>({
    resolver: zodResolver(stashFormSchema),
    defaultValues: {
      name: stashItem.name,
      category: stashItem.category,
      type: stashItem.type,
      thc: stashItem.thc,
      cbd: stashItem.cbd,
      lineage: stashItem.lineage,
      notes: stashItem.notes,
    },
  });

  async function onSubmit(values: z.infer<typeof stashFormSchema>) {
    const response = await editStashItem(stashItem.id, values);
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
    <div className=" flex items-center justify-center py-10">
      <div className="max-w-3xl w-full mx-auto">
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 border-0 border-b-4 border-b-orange-300 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl min-h-[110px] w-full relative">
          <div className="p-2 md:p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl pl-2 pt-4 p-2 md:p-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 fugaz-font">
                      Edit Stash Item
                    </h2>
                  </div>
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

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 space-y-4 mt-6">
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
                          Enter the parent strains or genetic background if
                          known
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
                          <Textarea
                            placeholder=""
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Share Your experiences, effects, taste, aroma, or any
                          other notes about this strain.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-row gap-3 pt-4 border-t border-gray-200">
                  <DeleteDialog
                    deleteType={'stash'}
                    deleteId={stashItem.id}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/stash')}
                    className="flex-1 bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl py-3"
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={!form.formState.isDirty || isSubmitting}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl py-3 shadow-lg"
                  >
                    {isSubmitting ? (
                      <Sun className="w-4 h-4 animate-spin text-yellow-300" />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStashForm;
