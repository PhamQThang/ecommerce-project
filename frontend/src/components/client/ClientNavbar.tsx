import Link from 'next/link';

export default function ClientNavbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/client">Ecommerce Client</Link>
        <div>
          <Link href="/client/products" className="mr-4">Products</Link>
          <Link href="/client/cart" className="mr-4">Cart</Link>
          <Link href="/client/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}