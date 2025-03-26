import React from "react";
import ProductCard from "@/components/client/ProductCard";  // Đã sửa đường dẫn
import BannerSection from "@/components/client/Banner";
import products from "@/data/products";

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto py-6">
      <BannerSection />

      <section className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Sale</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
