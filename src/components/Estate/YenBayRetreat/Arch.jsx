import React from "react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Giả định bạn đã import ArchitecturePlans ở trên
import ArchitecturePlans from "./ArchitecturePlans";

const Arch = () => {
  // Gom 4 ảnh vào mảng để code gọn gàng, dễ bảo trì
  const archImages = [
    "/images/estate/yenbay/arch1.webp",
    "/images/estate/yenbay/arch2.webp",
    "/images/estate/yenbay/arch3.webp",
    "/images/estate/yenbay/arch4.webp",
  ];

  return (
    <div className="flex flex-col gap-y-10 md:gap-y-[50px]">
      {/* Tiêu đề: Thêm px-4 cho mobile khỏi dính lề */}
      <p className="font-heading px-4 text-left text-3xl font-bold text-[#1E421E] md:px-0 md:text-5xl">
        KIẾN TRÚC TUYỆT MỸ
      </p>

      {/* 1. KHỐI MOBILE: SWIPER SLIDE (Hiệu ứng mờ/sáng) */}
      <div className="block w-full overflow-hidden px-4 md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.3} // Ảnh dọc nên để 1.3 là tỷ lệ đẹp nhất để mồi ảnh tiếp theo
          grabCursor={true}
          className="w-full pb-2"
        >
          {archImages.map((src, index) => (
            <SwiperSlide key={`mobile-arch-${index}`}>
              {({ isActive }) => (
                <div
                  // Fixed chiều cao ảnh trên mobile để slider vuốt mượt, không bị giật lag
                  className={`h-full w-full transition-all duration-500 ease-out ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
                  }`}
                >
                  <img
                    loading="lazy"
                    src={src}
                    className="h-full w-full rounded-lg object-cover shadow-sm"
                    alt={`Kiến trúc ${index + 1}`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. KHỐI DESKTOP/TABLET: GRID 4 CỘT */}
      {/* Trên tablet & PC tự động dàn thành 4 cột như thiết kế gốc */}
      <div className="hidden grid-cols-4 gap-x-3 px-4 md:grid md:gap-x-5 md:px-0">
        {archImages.map((src, index) => (
          // Responsive chiều cao ảnh trên các màn hình lớn nhỏ khác nhau
          <div key={`desktop-arch-${index}`} className="">
            <img
              loading="lazy"
              src={src}
              className="h-full w-full object-cover"
              alt={`Kiến trúc ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Phần Text */}
      <p className="font-montserrat mx-auto max-w-5xl px-4 text-center text-[14px] leading-relaxed md:px-0 md:text-base">
        Kiến trúc tại dự án là sự kết hợp hoàn hảo giữa thẩm mỹ đương đại và giá
        trị thiên nhiên bền vững. Chúng tôi sử dụng các vật liệu tự nhiên như
        gỗ, đá để tạo nên những 'ốc đảo' nghỉ dưỡng riêng tư, nơi mọi giới hạn
        về không gian dường như biến mất, nhường chỗ cho sự thư thái và vẻ đẹp
        tuyệt mỹ của cảnh quan nguyên sơ.
      </p>

      {/* Phần Architecture Plans */}
      {/* Mình bọc thêm 1 thẻ div có px-4 để nhỡ bên trong Component này chưa có padding mobile thì cũng không bị tràn mép */}
      <div className="px-4 md:px-0">
        <ArchitecturePlans />
      </div>
    </div>
  );
};

export default Arch;
