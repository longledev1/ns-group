// Nhớ import Swiper nhé
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Mình tạo 1 mảng data ảnh để code gọn hơn, tái sử dụng cho cả 2 khối Mobile và Desktop
const timelineImages = [
  { src: "/images/aboutpage/about_2.webp", alt: "Nhà hàng Ngọc Sương 1" },
  { src: "/images/aboutpage/about_3.webp", alt: "Nhà hàng Ngọc Sương 2" },
  { src: "/images/aboutpage/about_4.webp", alt: "Resort Ngọc Sương" },
  { src: "/images/aboutpage/about_5.webp", alt: "Nhà hàng Ngọc Sương 4" },
];

export const ImageTimeLine = () => {
  return (
    <div className="w-full">
      {/* 1. KHỐI MOBILE & TABLET: DÙNG SWIPER (Ẩn trên Desktop) */}
      <div className="block w-full pb-4 lg:hidden">
        <Swiper
          spaceBetween={16} // Khoảng cách giữa các ảnh (tương đương gap-4)
          slidesPerView={1.15} // Hiển thị 1 ảnh rưỡi để user biết có thể vuốt tiếp (tương đương w-[85vw])
          breakpoints={{
            // Cấu hình riêng cho Tablet
            768: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
          }}
          grabCursor={true}
          className="w-full"
        >
          {timelineImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[300px] w-full md:h-[400px]">
                <img
                  loading="lazy"
                  src={item.src}
                  className="h-full w-full object-cover"
                  alt={item.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. KHỐI DESKTOP: XẾP DỌC BÌNH THƯỜNG (Ẩn trên Mobile/Tablet) */}
      <div className="hidden lg:flex lg:flex-col lg:gap-y-10">
        {timelineImages.map((item, index) => (
          <div key={index} className="h-[500px] w-full lg:max-w-[550px]">
            <img
              src={item.src}
              className="h-full w-full object-cover"
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
