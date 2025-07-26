

import { getAuthenticatedUser } from '@/lib/auth-server-';




export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getAuthenticatedUser();

  return <div className="container mx-auto px-2">{children}</div>;
}
