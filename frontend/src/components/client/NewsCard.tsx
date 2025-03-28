import { ArrowRight, MessageCircle, Clock, Tag } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  comments: number;
  readTime: number;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, category, comments, readTime, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 bg-white shadow-lg rounded-lg p-4">
      {/* Ảnh bên trái */}
      <img src={image} alt={title} className="rounded-lg aspect-[6/5] w-full md:w-[300px] object-cover" />
      
      {/* Nội dung bên phải */}
      <div className="flex-1">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Tag className="w-4 h-4" /> {category}
          <MessageCircle className="w-4 h-4" /> {comments} Bình luận
          <Clock className="w-4 h-4" /> {readTime} Min Read
        </div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <a href="#" className="text-red-500 flex items-center gap-1 mt-2">
          Đọc ngay <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
