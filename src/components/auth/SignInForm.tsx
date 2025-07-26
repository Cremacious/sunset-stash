'use client';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInSchema } from '@/lib/validators/auth.validator';
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      const response = await signIn.email({
        email: values.email,
        password: values.password,
      });
      console.log('Sign in response:', response);
      if (response.error) {
        toast.error(
          response.error.message ||
            response.error.statusText ||
            'An error occurred'
        );
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isSubmitting} className="w-full mt-4" type="submit">
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
