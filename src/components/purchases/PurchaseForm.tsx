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

  const categories = [
    'Flower',
    'Concentrate',
    'Edibles',
    'Vape',
    'Tincture',
    'Topical',
    'Other',
  ];

  const types = ['Indica', 'Sativa', 'Hybrid', 'CBD', 'THC', 'Other'];

  const totalPrice = fields.reduce((sum, _, index) => {
    const price = form.watch(`items.${index}.price`);
    const numericPrice =
      typeof price === 'number' ? price : parseFloat(price) || 0;
    return sum + numericPrice;
  }, 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl pt-4 p-2 md:p-6">
          <h1 className="text-3xl font-bold text-gray-800 ml-2 mt-2 mb-8">
            Add Purchase
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-xl p-2 md:p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Purchase Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="dispensary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dispensary Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter dispensary name"
                            className="bg-white"
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
                        <FormLabel>Purchase Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  'w-full pl-3 text-left font-normal',
                                  'bg-white border-gray-300 text-gray-900', // Override colors
                                  'hover:bg-gray-50 hover:text-gray-900', // Override hover
                                  'focus:ring-gray-500 focus:border-gray-500', // Override focus
                                  !field.value && 'text-gray-500' // Muted text color
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
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
                    <FormItem className="mt-4">
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any notes about this purchase"
                          className="bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Any additional notes about this purchase
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-xl  p-2 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Items Purchased
                  </h2>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addItem}
                    className=""
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </div>

                <div className="space-y-6">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6 relative"
                    >
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(index)}
                          className="absolute top-2 right-2"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <FormField
                          control={form.control}
                          name={`items.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Strain Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter strain name"
                                  className=""
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
                              <FormLabel>Category</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="">
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((category) => (
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

                        <FormField
                          control={form.control}
                          name={`items.${index}.type`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {types.map((type) => (
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

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <FormField
                          control={form.control}
                          name={`items.${index}.amount`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., 3.5g"
                                  className=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`items.${index}.price`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  className=""
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
                              <FormLabel>THC %</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.1"
                                  placeholder="0.0"
                                  className=""
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
                              <FormLabel>CBD %</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.1"
                                  placeholder="0.0"
                                  className=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <FormField
                          control={form.control}
                          name={`items.${index}.lineage`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Lineage</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Parent strains"
                                  className=""
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
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
                            <FormItem className="flex flex-row items-center space-x-4 space-y-0 rounded-md border p-4">
                              <FormControl className="flex items-center justify-center">
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="w-6 h-6"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none flex flex-col items-center">
                                <Container className="w-8 h-8 text-purple-600" />
                                <FormLabel className="font-bold">
                                  Add to Stash
                                </FormLabel>
                                <FormDescription className="text-center">
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
                            <FormLabel>Notes</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your thoughts on this strain..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Share your experiences, effects, taste, aroma, or
                              any other notes
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border ">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      Total:
                    </span>

                    <span className="text-2xl font-bold text-orange-600">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 py-4 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/purchases')}
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
                    <Sun className="animate-spin text-yellow-300" />
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
  );
}
