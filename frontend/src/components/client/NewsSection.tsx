import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsCard from "./NewsCard";

const newsList = [
  {
    image: "/image/news1.jpg",
    category: "Điện tử",
    comments: 3,
    readTime: 3,
    title: "Revolutionizing Electronics, Redefining Possibilities",
    description: "iPad Pro is the fastest device of its kind...",
  },
  {
    image: "/image/news2.jpg",
    category: "Điện tử",
    comments: 0,
    readTime: 4,
    title: "10 Ideas to Create the Man Cave You’ve Always Wanted",
    description: "These ideas should help you get started...",
  },
];

const NewsSection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-red-500 font-bold">ĐỌC TIN TỨC MỚI NHẤT</p>
            <h2 className="text-3xl font-bold">Tin Tức Mới Nhất</h2>
          </div>
          <Button variant="default" className="bg-yellow-400 text-black flex items-center gap-2 hover:bg-black hover:text-white">
            Xem Tất Cả <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
          {newsList.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
