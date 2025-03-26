import { ReactNode } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export const metadata = {
  title: 'Ecommerce Admin',
  description: 'Admin dashboard',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}