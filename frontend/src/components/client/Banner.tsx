"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      img: "/image/banner1.jpg",
      price: "Mua chỉ với 6,000,000 đ",
      title: "Iphone 16 Pro Max 256GB VN/A",
      desc: "Iphone 16 Pro Max 256GB VN/A đang là sản phẩm khá được ưa chuộng hiện nay",
    },
    {
      img: "/image/banner2.jpg",
      price: "Ưu đãi hấp dẫn",
      title: "MacBook Air M2 2023",
      desc: "Siêu phẩm mỏng nhẹ, hiệu năng mạnh mẽ, phù hợp cho công việc và học tập",
    },
    {
      img: "/image/banner5.jpg",
      price: "Giảm ngay 2 triệu",
      title: "Samsung Galaxy S24 Ultra",
      desc: "Flagship mới nhất của Samsung với camera 200MP và pin siêu bền",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <Carousel className="w-full">
        <CarouselContent
          className="flex"
        >
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="min-w-full">
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                {/* Ảnh banner */}
                <Image
                  src={banner.img}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center object-cover"
                />
                {/* Nội dung banner */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 text-white w-[80%] sm:w-[60%]">
                  <p className="text-sm sm:text-lg font-semibold text-red-400">{banner.price}</p>
                  <h2 className="text-lg sm:text-2xl font-bold text-black">{banner.title}</h2>
                  <p className="text-xs sm:text-sm text-[#303030]">{banner.desc}</p>
                  <button className="mt-2 sm:mt-4 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg">Mua ngay →</button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút Previous */}
        <CarouselPrevious
          onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : banners.length - 1))}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-3 rounded-full shadow-lg"
        />

        {/* Nút Next */}
        <CarouselNext
          onClick={() => setActiveIndex((prev) => (prev < banners.length - 1 ? prev + 1 : 0))}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-3 rounded-full shadow-lg"
        />
      </Carousel>
    </div>
  );
};

export default BannerSection;
