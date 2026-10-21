import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const menuItems = [
  {
    id: 1,
    title: "Nhâm nhi",
    image: "/images/fnb/exocafe/exomenu_1.png",
    bgColor: "bg-[#C84928]", 
    description:
      "Thưởng thức trọn vẹn hương vị nhiệt đới với các dòng thức uống thanh mát, được pha chế tỉ mỉ từ trái cây tươi nguyên chất, mang lại cảm giác sảng khoái tức thì.",
  },
  {
    id: 2,
    title: "Ngọt ngào",
    image: "/images/fnb/exocafe/exomenu_2.png",
    bgColor: "bg-[#e9815e]",
    description:
      "Từng lớp bánh mềm mịn hòa quyện cùng vị ngọt thanh của kem và trái cây tươi, mang đến một trải nghiệm vị giác hoàn hảo cho buổi chiều thư thái.",
  },
  {
    id: 3,
    title: "Thanh mát",
    image: "/images/fnb/exocafe/exomenu_3.png",
    bgColor: "bg-[#ec9c83]",
    description:
      "Kem trái cây nhiệt đới mát lạnh, giữ trọn hương vị tự nhiên, là lựa chọn tuyệt vời để xua tan cái nóng và tận hưởng trọn vẹn không khí biển.",
  },
  {
    id: 4,
    title: "Kết nối",
    image: "/images/fnb/exocafe/exomenu_4.png",
    bgColor: "bg-[#9b9469]",
    description:
      "Sự kết hợp độc đáo giữa các nguyên liệu hảo hạng tạo nên thức uống có hương vị đậm đà, khó quên, đánh thức mọi giác quan của bạn.",
  },
];

const FlipCardItem = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[400px] w-full cursor-pointer [perspective:1000px] md:h-[480px] lg:h-[550px]"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(false)}
    >
    
      <div
        className={`relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ================= MẶT TRƯỚC ================= */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-md [backface-visibility:hidden] [transform:translateZ(0)]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full scale-[1.02] object-cover"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="font-montserrat absolute right-5 top-5 text-right text-xl font-light text-white md:text-2xl lg:right-6 lg:top-6 lg:text-3xl">
            {item.title}
          </div>
        </div>

        {/* ================= MẶT SAU ================= */}
        <div className={`${item.bgColor} absolute inset-0 h-full w-full rounded-2xl px-6 py-8 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-white/20 p-4">
            <h3 className=" mb-6 text-2xl font-bold tracking-wider text-white md:text-3xl">
              {item.title}
            </h3>
            <p className="font-montserrat text-sm font-light leading-relaxed text-white/90 md:text-base md:leading-8">
              {item.description}
            </p>
            <button className="font-montserrat mt-8 border-b border-[#E8DCC4] pb-1 text-sm uppercase text-[#E8DCC4] transition-all hover:border-white hover:text-white">
              Khám phá thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignatureExoCafe = () => {
  return (
    <div>
      <div className="font-oooh-baby text-5xl font-normal text-[#495045]">
        <p>Không chỉ là một quán cà phê</p>
        <p>mà đây là nơi ta đắm mình trong miền nhiệt đới</p>
      </div>

      <div className="w-full mt-[50px]">
        <div className="">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={16}
            slidesPerView={1.2}
            grabCursor={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full py-4"
          >
            {menuItems.map((item) => (
              <SwiperSlide key={item.id}>
                {/* Gọi Component con đã tạo ở trên vào đây */}
                <FlipCardItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SignatureExoCafe;