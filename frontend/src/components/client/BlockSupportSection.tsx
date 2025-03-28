import { Truck, Headphones, Gift, Wallet } from "lucide-react";

export default function BlockSupportSection() {
  const items = [
    {
      icon: <Truck className="w-8 h-8 text-yellow-400 transition-transform group-hover:rotate-180" />,
      title: "Miễn Phí Giao Hàng",
      desc: "Từ Đơn Hàng Trên 1,000,000 đ",
    },
    {
      icon: <Headphones className="w-8 h-8 text-yellow-400 transition-transform group-hover:rotate-180" />,
      title: "Hỗ Trợ 24/7",
      desc: "Nhận Hỗ Trợ Trực Tuyến 24/7",
    },
    {
      icon: <Wallet className="w-8 h-8 text-yellow-400 transition-transform group-hover:rotate-180" />,
      title: "Hoàn Tiền",
      desc: "Hoàn Trả Trong Vòng 15 Ngày",
    },
    {
      icon: <Gift className="w-10 h-10 text-yellow-400 transition-transform group-hover:rotate-180" />,
      title: "Mã Quà Tặng",
      desc: "Nhận Mã Khuyến Mãi",
    },
  ];

  return (
    <div className="bg-red-500 text-white py-10">
      <div className="container mx-auto flex justify-center items-center gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center gap-3 transition-all duration-300 ${
              index !== items.length - 1 ? "border-r border-gray-300 pr-10" : ""
            }`}
          >
            {item.icon}
            <div>
              <h3 className="text-[24px] font-semibold">{item.title}</h3>
              <p className="text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
