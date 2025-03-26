import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/products">Products</Link>
        </li>
        <li>
          <Link href="/admin/orders">Orders</Link>
        </li>
      </ul>
    </aside>
  );
}