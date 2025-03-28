"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ShoppingCart, Search, User, X, Menu } from "lucide-react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái menu mobile

  useEffect(() => {
    const count = localStorage.getItem("cartCount") || 0;
    setCartCount(Number(count));
  }, []);

  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-red-400 text-white text-sm py-2">
        <div className="mx-auto flex justify-end gap-4 px-4">
          <span>📞 Hotline: 1900 6868</span>
          <span>📧 support@fiximobile.com</span>
        </div>
      </div>

      {/* Header chính */}
      <div className="bg-white text-white py-2">
        <div className="mx-auto flex justify-between items-center px-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/image/logo.png" alt="Fixi Mobile" width={70} height={70} />
          </Link>

          {/* Icon menu cho mobile */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 text-black text-lg font-semibold">
            <Link href="/" className="text-[#4ED6D9]">Trang Chủ</Link>
            <Link href="/about" className="hover:underline">Giới Thiệu</Link>
            <Link href="/products" className="hover:underline">Sản Phẩm</Link>
            <Link href="/news" className="hover:underline">Tin Tức</Link>
            <Link href="/contact" className="hover:underline">Liên Hệ</Link>
          </nav>

          {/* Menu mobile dropdown */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white text-black shadow-md flex flex-col p-4 z-50">
              <Link href="/" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Trang Chủ</Link>
              <Link href="/about" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Giới Thiệu</Link>
              <Link href="/products" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Sản Phẩm</Link>
              <Link href="/news" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Tin Tức</Link>
              <Link href="/contact" className="py-2" onClick={() => setIsMenuOpen(false)}>Liên Hệ</Link>
            </div>
          )}

          {/* Thanh tìm kiếm */}
          {isSearchOpen && (
            <div className="absolute right-24 w-full max-w-[500px] flex items-center border rounded-md px-2 bg-gray-100">
              <Input type="text" placeholder="Tìm kiếm..." className="border-none bg-transparent flex-1 text-black" />
              <Button variant="ghost" size="icon"><Search className="text-gray-500" /></Button>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}><X className="text-gray-500" /></Button>
            </div>
          )}

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {!isSearchOpen && (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="text-black" />
              </Button>
            )}

            <Link href="/client/cart" className="relative">
              <ShoppingCart className="text-black" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-300 text-black text-xs font-bold rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>

            <Popover>
              <PopoverTrigger><User className="text-black" /></PopoverTrigger>
              <PopoverContent className="w-40 flex flex-col p-2 bg-white shadow-lg rounded-lg">
                <Link href="/account" className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Tài khoản</Link>
                <Link href="/orders" className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Đơn hàng</Link>
                <Link href="/logout" className="px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors">Đăng xuất</Link>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
