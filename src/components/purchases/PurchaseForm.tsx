'use client';
import { toast } from 'sonner';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
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
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  Calendar as CalendarIcon,
  Container,
  Plus,
  Sun,
  X,
} from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  purchaseFormSchema,
  PurchaseFormData,
} from '@/lib/validators/purchase.validator';
import { createPurchase } from '@/lib/actions/purchase.actions';
import { useRouter } from 'next/navigation';
import { CATEGORIES, TYPES } from '@/lib/constants';

// TODO: Edit purchase and be able to save a stash item after the fact

// TODO: Only display add to stash if item isn't in stash already

export default function PurchaseForm() {
  const router = useRouter();
  const form = useForm<PurchaseFormData>({
    resolver: zodResolver(purchaseFormSchema),
    defaultValues: {
      dispensary: '',
      date: new Date(),
      notes: '',
      items: [
        {
          name: '',
          category: '',
          type: '',
          amount: '',
          price: 0,
          thc: 0,
          cbd: 0,
          lineage: '',
          notes: '',
          addToStash: false,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const addItem = () => {
    append({
      name: '',
      category: '',
      type: '',
      amount: '',
      price: 0,
      thc: 0,
      cbd: 0,
      lineage: '',
      notes: '',
      addToStash: false,
    });
  };

  const removeItem = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  async function onSubmit(values: PurchaseFormData) {
    try {
      console.log('Purchase form values:', values);
      const result = await createPurchase(values);

      if (result.success) {
        toast.success('Purchase saved successfully!');
        form.reset();
        router.push('/purchases');
      } else {
        toast.error(result.error || 'Failed to save purchase');
      }
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  const totalPrice = fields.reduce((sum, _, index) => {
    const price = form.watch(`items.${index}.price`);
    const numericPrice =
      typeof price === 'number' ? price : parseFloat(price) || 0;
    return sum + numericPrice;
  }, 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 border-0 border-b-4 border-b-orange-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-3xl min-h-[110px] w-full relative">
          <div className="p-2 md:p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl pl-2 pt-4 p-2 md:p-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 fugaz-font">
                      Purchase Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="dispensary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">
                            Dispensary Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter dispensary name"
                              className="bg-white/80 backdrop-blur-sm border-purple-200/50 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">
                            Purchase Date
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="secondary"
                                  className={cn(
                                    'w-full pl-3 text-left font-normal',
                                    'bg-white backdrop-blur-sm  text-gray-900 rounded-xl',
                              
                                    !field.value && 'text-gray-500'
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'PPP')
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 text-purple-600" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel className="text-gray-700 font-semibold">
                          Notes
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any notes about this purchase"
                            className="bg-white/80 backdrop-blur-sm border-purple-200/50 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl resize-none"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-600">
                          Any additional notes about this purchase
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl pl-2 pt-4 p-2 md:p-4 mt-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <h2 className="text-2xl font-bold text-slate-800 fugaz-font">
                        Items Purchased
                      </h2>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addItem}
                 
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Item
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {fields.map((field, index) => (
                      <div
                        key={field.id}
                        className="bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-2 md:p-4 pt-4 relative shadow-lg"
                      >
                        {fields.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(index)}
                            className="absolute top-4 right-4 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <FormField
                            control={form.control}
                            name={`items.${index}.name`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  Strain Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter strain name"
                                    className="bg-gray-50/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`items.${index}.category`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  Category
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="bg-gray-50/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl">
                                      <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {CATEGORIES.map((category) => (
                                      <SelectItem
                                        key={category}
                                        value={category}
                                      >
                                        {category}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`items.${index}.type`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  Type
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="bg-gray-50/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl">
                                      <SelectValue placeholder="Select type" />
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

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                          {/* <FormField
                            control={form.control}
                            name={`items.${index}.amount`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  Amount
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., 3.5g"
                                    className="bg-gray-50/50 border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          /> */}
                          <FormField
                            control={form.control}
                            name={`items.${index}.price`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  Price ($)
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    className="bg-gray-50/50 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 rounded-xl"
                                    {...field}
                                    onChange={(e) =>
                                      field.onChange(
                                        parseFloat(e.target.value) || 0
                                      )
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`items.${index}.thc`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  THC %
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.1"
                                    placeholder="0.0"
                                    className="bg-gray-50/50 border-gray-200 focus:border-red-400 focus:ring-red-400/20 rounded-xl"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`items.${index}.cbd`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  CBD %
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.1"
                                    placeholder="0.0"
                                    className="bg-gray-50/50 border-gray-200 focus:border-green-400 focus:ring-green-400/20 rounded-xl"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <FormField
                            control={form.control}
                            name={`items.${index}.lineage`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">
                                  Lineage
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Parent strains"
                                    className="bg-gray-50/50 border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription className="text-gray-600">
                                  Enter the parent strains or genetic background
                                  if known
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`items.${index}.addToStash`}
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-center space-x-4 space-y-0 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200/50 p-6">
                                <FormControl className="flex items-center justify-center">
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="w-6 h-6 border-purple-500  focus:ring-purple-900"
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none flex flex-col items-center">
                                  <Container className="w-8 h-8 text-purple-600" />
                                  <FormLabel className="font-bold text-gray-800">
                                    Add to Stash
                                  </FormLabel>
                                  <FormDescription className="text-center text-gray-600">
                                    Check the box to add this item to your stash
                                    inventory
                                  </FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name={`items.${index}.notes`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-semibold">
                                Notes
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Your thoughts on this strain..."
                                  className="bg-gray-50/50 border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl resize-none"
                                  rows={3}
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription className="text-gray-600">
                                Share your experiences, effects, taste, aroma,
                                or any other notes
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-green-100/80 rounded-2xl border border-green-300">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">
                        Total Purchase:
                      </span>
                      <span className="text-3xl font-bold text-green-900">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-4 py-6 border-t border-gray-200/50">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/purchases')}
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
                      <div className="flex items-center space-x-2">
                        <Sun className="w-4 h-4 animate-spin text-yellow-300" />
                        <span>Saving...</span>
                      </div>
                    ) : (
                      'Submit Purchase'
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
}
