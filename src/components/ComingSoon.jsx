import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      // TODO: Thay thế đường dẫn ảnh nền dưới đây bằng một bức ảnh thật đẹp của dự án (VD: ảnh render resort hoặc phong cảnh)
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Lớp phủ đen mờ (Overlay) kết hợp blur nhẹ để làm nổi bật nội dung chữ */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center text-white">
        {/* Tiêu đề */}
        <h1 className="font-heading mb-4 text-4xl font-bold tracking-widest text-[#E8DCC4] uppercase md:text-5xl lg:text-6xl">
          Tuyệt tác đang kiến tạo
        </h1>

        {/* Lời tựa */}
        <p className="font-montserrat mb-10 text-[14px] leading-relaxed font-light text-white/90 md:text-base lg:text-lg">
          Chúng tôi đang chăm chút từng chi tiết để mang đến cho bạn những trải
          nghiệm hoàn mỹ và đẳng cấp nhất. Thông tin chi tiết về phân khu này sẽ
          sớm được công bố trong thời gian tới.
        </p>

        {/* Nút quay lại */}
        {/* Nếu dùng react-router-dom, thay <a> thành <Link to="/"> */}
        <Link
          to="/"
          className="font-montserrat mb-16 flex items-center gap-x-2 border border-[#E8DCC4] bg-transparent px-8 py-3 text-sm font-semibold tracking-wider text-[#E8DCC4] uppercase transition-all hover:bg-[#E8DCC4] hover:text-black md:px-10 md:py-4 md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Trở về trang chủ
        </Link>

        {/* Thông tin liên hệ */}
        <div className="font-montserrat flex flex-col items-center gap-y-3 text-[13px] font-light text-white/80 md:text-[15px]">
          <p className="tracking-wide">
            Nếu bạn cần hỗ trợ thêm thông tin, Quý khách vui lòng liên hệ:
          </p>

          <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-6">
            <a
              href="tel:0778727894"
              className="transition-colors hover:text-[#E8DCC4]"
            >
              <span className="tracking-wider">Hotline:</span>{" "}
              <span className="font-medium">0778.727.894</span>
            </a>

            <span className="hidden md:block">|</span>

            <a
              href="mailto:nsgroup@gmail.com"
              className="transition-colors hover:text-[#E8DCC4]"
            >
              <span className="tracking-wider">Email:</span>{" "}
              <span className="font-medium">nsgroup@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
