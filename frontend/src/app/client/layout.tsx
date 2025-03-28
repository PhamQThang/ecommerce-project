import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header luôn cố định trên cùng */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Nội dung có padding-top để tránh bị che khuất */}
      <main className="pt-[80px]">{children}</main>

      <Footer />
    </div>
  );
}
