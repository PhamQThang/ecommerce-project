import { ReactNode } from 'react';
import ClientNavbar from '@/components/ClientNavbar';

export const metadata = {
  title: 'Ecommerce Client',
  description: 'Explore our products',
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ClientNavbar />
      <main>{children}</main>
    </div>
  );
}