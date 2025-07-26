import type { Metadata } from 'next';


import { getAuthenticatedUser } from '@/lib/auth-server-';

export const metadata: Metadata = {
  title: 'Dashboard - Sunset Stash',
  description: 'Your cannabis journey dashboard',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getAuthenticatedUser();

  return <div className="container mx-auto px-2">{children}</div>;
}
