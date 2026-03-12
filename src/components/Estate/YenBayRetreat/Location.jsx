import React, { useState } from "react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Quản lý trạng thái đóng/mở text

  // Khai báo mảng 4 ảnh cho phần khung cảnh
  const locationImages = [
    "/images/locaExotel1.svg",
    "/images/locaExotel2.svg",
    "/images/locaExotel3.svg",
    "/images/locaExotel4.svg",
  ];

  return (
    <div className="flex flex-col gap-y-10 md:gap-y-[50px]">
      {/* Phần Vị trí địa lý & Bản đồ */}
      <div className="grid grid-cols-1 gap-y-8 px-4 md:grid-cols-12 md:gap-y-0 md:px-0">
        {/* Cột chữ */}
        <div className="col-span-1 flex flex-col gap-y-6 md:col-span-7 md:gap-y-[70px]">
          <p className="font-heading text-center text-3xl font-bold text-[#1E421E] md:text-left md:text-5xl">
            VỊ TRÍ ĐỊA LÝ
          </p>

          <div className="font-montserrat flex flex-col gap-y-4 text-[14px] leading-relaxed md:text-base">
            {/* Đoạn 1: Luôn luôn hiển thị */}
            <p>
              <span className="font-bold">YenBay Retreat</span> cách Thành phố
              Nha Trang 68 km về phía Nam, nằm bên Quốc lộ 1A, tọa lạc bên bờ
              Vịnh CamRanh, được xem là một trong bốn vịnh tự nhiên tốt nhất thế
              giới nơi hội tụ những điều kiện tự nhiên hết sức thuận lợi cho
              phát triển dịch vụ cảng biển và du lịch
            </p>

            {/* Đoạn 2: Ẩn trên Mobile (nếu chưa mở), luôn hiện trên Desktop (md:block) */}
            <p className={`${!isExpanded ? "hidden md:block" : "block"}`}>
              Từ TPHCM chỉ mất 4 tiếng rưỡi bằng đường cao tốc, từ cảng Cam Ranh
              có thể đi cano chỉ mất 10 phút. Hiện tại đường bộ nối liền với sân
              bay Cam Ranh mất 50 phút, nhưng dự án xây cầu nối liền 2 bán đảo
              Bắc và Nam Cam Ranh sẽ rút ngắn còn 15 phút từ sân bay quốc tế Cam
              Ranh.
            </p>

            {/* Nút Xem Thêm: Căn trái, chỉ hiện trên mobile (md:hidden) */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="self-start text-sm font-semibold text-[#1E421E] underline md:hidden"
            >
              {isExpanded ? "Rút gọn" : "Xem thêm..."}
            </button>
          </div>

          <a
            className="font-montserrat w-fit text-[13px] font-bold text-[#1E421E] underline md:text-sm"
            href="https://trienlamao.vn/du-an-360/YB360/"
            target="_blank"
            rel="noreferrer"
          >
            NHẤN ĐỂ XEM GÓC NHÌN TOÀN CẢNH DỰ ÁN
          </a>
        </div>

        {/* Cột Hình ảnh (Bản đồ) */}
        <div className="col-span-1 flex md:col-span-5 md:justify-end">
          <img
            src="/images/mapExotel.svg"
            className="h-auto w-full max-w-full cursor-pointer object-cover md:h-full md:w-[420px]"
            alt="Bản đồ"
            onClick={() => setIsOpen(true)}
          />

          {/* Lightbox / Modal */}
          {isOpen && (
            <div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              <button
                className="absolute top-4 right-4 text-4xl text-white hover:opacity-70 md:top-6 md:right-6"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ×
              </button>

              <div
                className="relative max-w-full md:max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="/images/mapExotel.svg"
                  alt="Bản đồ phóng lớn"
                  className="w-[600px] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 1. KHỐI MOBILE: Swiper Slide 4 ảnh CÓ HIỆU ỨNG MỜ */}
      <div className="block w-full overflow-hidden px-4 md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.15}
          grabCursor={true}
          className="w-full"
        >
          {locationImages.map((src, index) => (
            <SwiperSlide key={`mobile-${index}`}>
              {/* Dùng thuộc tính isActive của SwiperSlide để điều khiển class Tailwind */}
              {({ isActive }) => (
                <div
                  className={`h-[250px] w-full transition-all duration-500 ease-out ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
                  }`}
                >
                  <img
                    className="h-full w-full rounded-lg object-cover"
                    src={src}
                    alt={`Khung cảnh ${index + 1}`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. KHỐI DESKTOP: Grid 2 ảnh */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-5">
        {locationImages.slice(0, 2).map((src, index) => (
          <img
            key={`desktop-${index}`}
            className="h-[250px] w-full object-cover md:h-[400px] lg:h-[500px]"
            src={src}
            alt={`Khung cảnh ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
