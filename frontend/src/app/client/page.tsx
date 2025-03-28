import React from "react";
import ProductCard from "@/components/client/ProductCard";  // Đã sửa đường dẫn
import BannerSection from "@/components/client/Banner";
import products from "@/data/products";
import BlockSupportSection from "@/components/client/BlockSupportSection";
import NewsSection from "@/components/client/NewsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto pb-6 z-10">
      <BannerSection />

      <section className="container mx-auto mt-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-red-500 font-bold">KHUYẾN MÃI LỚN</p>
            <h2 className="text-3xl font-bold">SALE</h2>
          </div>
          <Button variant="default" className="bg-yellow-400 text-black flex items-center gap-2 hover:bg-black hover:text-white">
            Xem Tất Cả <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-red-500 font-bold">KHUYẾN MÃI LỚN</p>
            <h2 className="text-3xl font-bold">SẢN PHẨM NỔI BẬT</h2>
          </div>
          <Button variant="default" className="bg-yellow-400 text-black flex items-center gap-2 hover:bg-black hover:text-white">
            Xem Tất Cả <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section className=" mx-auto mt-10">
        <BlockSupportSection />
      </section>
      <section className=" mx-auto mt-10">
        <NewsSection />
      </section>
    </div>
  );
};

export default HomePage;
