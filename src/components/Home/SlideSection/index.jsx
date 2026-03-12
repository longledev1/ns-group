import { Heading } from "../../Heading";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

// import css
import "./slideup.css";

const slides = [
  {
    image: "/images/exotel.jpg",
    title: "EXOTEL YEN BAY",
    desc: `
Nằm e ấp bên những triền núi xanh và mặt biển trong veo của vịnh Cam Ranh, Exotel Yến Bay hiện lên như một viên ngọc quý giữa bãi tắm Ngọc Sương thanh bình. Nơi đây sở hữu cảnh quan độc nhất vô nhị, tạo nên bởi những khối đá hoa cương điêu khắc bởi thiên nhiên, đổ bóng xuống mặt vịnh nước trong xanh.

Không gian nghỉ dưỡng yên bình, khám phá thiên nhiên,bồi dưỡng sức khỏe và tinh thần.
`,
    url: "/estate/exotel-yen-bay",
  },
  {
    image: "/images/retreat.png",
    title: "YEN BAY RETREAT",
    desc: `
Lối vào khu nghỉ dưỡng được ví như “con đường dẫn lên thiên đường” – uốn lượn giữa một bên là vách núi hùng vĩ, một bên là biển xanh bất tận. Mỗi khoảnh khắc đi qua cung đường ấy đều như lạc bước vào một bức tranh thủy mặc sống động, khiến bất kỳ ai cũng phải say mê.

Yen Bay Retreat không chỉ là nơi dừng chân, mà còn là hành trình đưa du khách chạm đến chuẩn mực nghỉ dưỡng đẳng cấp – nơi thiên nhiên, kiến trúc và cảm xúc hòa quyện, tạo nên một kỳ nghỉ trọn vẹn và khó quên.
`,
    url: "/estate/yen-bay-retreat",
  },
];

export const SlideSection = () => {
  return (
    <div>
      <Heading
        title="DẤU ẤN TRÊN HÀNH TRÌNH"
        subtitle="Mỗi dự án là một câu chuyện, một hành trình kiến tạo giá trị bền vững."
        description="Mỗi công trình là một dấu ấn được khắc ghi trên hành trình phát triển — minh chứng cho tinh thần sáng tạo và giá trị bền vững của Ngọc Sương Group "
      />

      {/* SLIDE CONTAINER */}
      <div className="relative h-[550px] w-full overflow-hidden md:h-[600px] lg:h-150">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          grabCursor={true} // Hiện biểu tượng bàn tay khi di chuột vào
          className="custom-swiper h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="relative h-full w-full">
              {/* Ảnh nền */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Box nội dung */}
              <div className="absolute inset-0 flex flex-col justify-end md:flex-row md:justify-end">
                {/* Mobile: Background Gradient từ dưới lên 
                  Desktop: Background Đen trong suốt (bg-black/80)
                */}
                <div className="flex w-full flex-col justify-end gap-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 pt-32 pb-14 text-white md:h-full md:max-w-[400px] md:justify-center md:gap-4 md:bg-black/80 md:bg-none md:p-8 md:pb-8">
                  <Link
                    to={slide.url}
                    className="font-montserrat text-xl leading-tight font-bold whitespace-pre-line transition-colors hover:text-white/50 md:text-2xl"
                  >
                    {slide.title}
                  </Link>

                  <p className="font-montserrat text-[14px] leading-relaxed font-light whitespace-pre-wrap text-white/90 md:text-base">
                    {slide.desc}
                  </p>

                  <Link
                    to={slide.url}
                    className="text-CTA font-montserrat mt-2 w-fit cursor-pointer text-xs font-semibold hover:underline md:text-sm"
                  >
                    KHÁM PHÁ THÊM
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
