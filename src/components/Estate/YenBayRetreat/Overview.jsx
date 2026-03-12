import React from "react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Overview = () => {
  // Tạo mảng ảnh để dễ dàng map ra cho cả 2 phiên bản Mobile & Desktop
  const overviewImages = [
    { src: "/images/yenbay1.svg", alt: "Yen Bay 1" },
    { src: "/images/yenbay2.svg", alt: "Yen Bay 2" },
    { src: "/images/yenbay3.svg", alt: "Yen Bay 3" },
  ];

  return (
    <div className="flex flex-col gap-y-10 text-center md:gap-y-[50px]">
      {/* Tiêu đề */}
      <p className="font-heading text-3xl font-bold text-[#1E421E] md:text-5xl">
        TỔNG QUAN DỰ ÁN
      </p>

      {/* Nội dung */}
      <div className="font-montserrat mx-auto flex max-w-4xl flex-col gap-y-6 px-4 text-[14px] leading-relaxed md:gap-y-8 md:px-0 md:text-base">
        <p>
          Vận hành bởi{" "}
          <span className="font-bold">Exotel (Ngọc Sương Group)</span> – biểu
          tượng mới của ngành hiếu khách Việt Nam – khu nghỉ dưỡng mang đến sự
          hài hòa giữa phong cách thanh lịch và vẻ đẹp nguyên sơ của thiên
          nhiên. Không gian yên bình, tách biệt khỏi phố thị, mở ra trải nghiệm
          nghỉ dưỡng thư thái tuyệt đối.
        </p>
        <p>
          Hệ thống phòng đa dạng gồm suite giữa rừng, biệt thự trên sườn đồi,
          phòng khách sạn dưới tán dừa và water villa trên mặt nước. Mỗi không
          gian đều sở hữu tầm nhìn ấn tượng hướng ra Vịnh Yến và đảo đá Thiên
          Thai.
        </p>
      </div>

      {/* 1. KHỐI MOBILE: DÙNG SWIPER (Ẩn trên màn hình từ md trở lên) */}
      <div className="block w-full px-4 md:hidden">
        <Swiper
          spaceBetween={12} // Khoảng cách giữa các ảnh
          slidesPerView={1.15} // Lòi ra 15% ảnh thứ 2 để mồi người dùng vuốt
          grabCursor={true}
          className="w-full"
        >
          {overviewImages.map((img, index) => (
            <SwiperSlide key={index}>
              {/* Cố định chiều cao ảnh trên mobile để slider đều đặn */}
              <div className="h-[350px] w-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. KHỐI DESKTOP: GRID 3 CỘT (Ẩn trên Mobile, hiện từ md trở lên) */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-x-5">
        {overviewImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
