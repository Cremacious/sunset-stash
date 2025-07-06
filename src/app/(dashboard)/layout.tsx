import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Sunset Stash',
  description: 'Your cannabis journey dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto px-2">{children}</div>;
}
