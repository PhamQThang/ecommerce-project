"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      img: "/image/banner1.png",
      price: "Mua chỉ với 6,000,000 đ",
      title: "Iphone 16 Pro Max 256GB VN/A",
      desc: "Iphone 16 Pro Max 256GB VN/A đang là sản phẩm khá được ưa chuộng hiện nay",
    },
    {
      img: "/image/banner2.png",
      price: "Ưu đãi hấp dẫn",
      title: "MacBook Air M2 2023",
      desc: "Siêu phẩm mỏng nhẹ, hiệu năng mạnh mẽ, phù hợp cho công việc và học tập",
    },
    {
      img: "/image/banner3.png",
      price: "Giảm ngay 2 triệu",
      title: "Samsung Galaxy S24 Ultra",
      desc: "Flagship mới nhất của Samsung với camera 200MP và pin siêu bền",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : banners.length - 1));
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Carousel className="w-full">
        <CarouselContent
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0">
              <div className="relative w-full aspect-[1200/630] overflow-hidden">
                {/* Ảnh banner */}
                <Image
                  src={banner.img}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </CarouselItem>               
          ))}
        </CarouselContent>

        {/* Nút Previous */}
        <CarouselPrevious
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-3 rounded-full shadow-lg cursor-pointer"
        />

        {/* Nút Next */}
        <CarouselNext
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black p-3 rounded-full shadow-lg cursor-pointer"
        />
      </Carousel>
    </div>
  );
};

export default BannerSection;
