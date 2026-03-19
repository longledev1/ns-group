import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import CSS core của Swiper
import "swiper/css";
import "swiper/css/navigation";

// Dữ liệu giả lập cho 4 mùa / thời điểm
const seasonsData = [
  {
    id: 1,
    time: "THÁNG MỘT - THÁNG BA",
    title: "GIAO MÙA NẮNG NHẸ",
    desc: "Những ngày đầu năm tại Exotel mang theo tiết trời dịu mát và ánh nắng vừa đủ để cảm nhận rõ từng chuyển động của thiên nhiên. Biển êm, gió nhẹ và không gian trong lành tạo nên một khoảng lặng hiếm có. Đây là thời điểm lý tưởng để bắt đầu hành trình nghỉ dưỡng trong sự thư thái, dạo bước giữa rừng cây và lắng nghe nhịp thở bình yên của đất trời.",
    img: "/images/estate/exotel/season1.webp",
  },
  {
    id: 2,
    time: "THÁNG TƯ - THÁNG SÁU",
    title: "MÙA NẮNG RỰC RỠ",
    desc: "Khi hạ sang, Exotel bừng lên với ánh nắng rực rỡ chiếu rọi xuống mặt biển lấp lánh. Không khí mang chút ấm áp đặc trưng của miền duyên hải, hoàn hảo cho những hoạt động ngoài trời hay những buổi chiều đắm mình trong làn nước xanh mát. Mọi khoảnh khắc đều căng tràn sức sống.",
    img: "/images/estate/exotel/season2.webp",
  },
  {
    id: 3,
    time: "THÁNG BẢY - THÁNG CHÍN",
    title: "HƯƠNG BIỂN GỌI MỜI",
    desc: "Gió biển thổi nhẹ mang theo hương vị mặn mòi của đại dương. Tiết trời mát mẻ hơn, thỉnh thoảng điểm xuyết những cơn mưa rào vội vã. Đây là lúc tuyệt vời nhất để ngồi lại ban công, nhâm nhi một tách trà ấm và ngắm nhìn cảnh biển đang chuyển mình ngoạn mục dưới bầu trời thu.",
    img: "/images/estate/exotel/season3.webp",
  },
  {
    id: 4,
    time: "THÁNG MƯỜI - THÁNG MƯỜI HAI",
    title: "BÌNH YÊN LẶNG LẼ",
    desc: "Những tháng cuối năm mang đến sự tĩnh lặng tuyệt đối. Mọi nhịp sống dường như chậm lại, nhường chỗ cho những giây phút chiêm nghiệm và tái tạo năng lượng. Exotel khoác lên mình vẻ đẹp trầm mặc, đón chờ những ai tìm kiếm sự bình yên thực sự giữa thiên nhiên nguyên sơ.",
    img: "/images/estate/exotel/season4.webp",
  },
];

const SeasonSlider = () => {
  const [prevBtn, setPrevBtn] = useState(null);
  const [nextBtn, setNextBtn] = useState(null);

  return (
    <div className="w-full overflow-hidden">
      {/* KHU VỰC SLIDER */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevBtn,
          nextEl: nextBtn,
        }}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="w-full [&_.swiper-slide]:opacity-40 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-500 max-md:[&_.swiper-slide-active]:!opacity-100 md:[&_.swiper-slide-active]:!opacity-100 md:[&_.swiper-slide-next]:!opacity-100"
      >
        {seasonsData.map((item) => (
          <SwiperSlide
            key={item.id}
            // Fix cứng width để hiển thị 2.5 slide trên Desktop và 1.2 slide trên Mobile
            className="!w-[85%] md:!w-[42%]"
          >
            <div className="flex flex-col">
              {/* Hình ảnh */}
              <img
                loading="lazy"
                src={item.img}
                alt={item.title}
                className="h-[300px] w-full object-cover md:h-[450px]"
              />

              {/* Nội dung Text */}
              <div className="mt-6 pr-4">
                <p className="font-montserrat text-sm tracking-wide text-gray-500 uppercase">
                  {item.time}
                </p>
                <h3 className="font-heading mt-2 mb-4 text-3xl text-[#3d3832]">
                  {item.title}
                </h3>
                <p className="font-montserrat text-sm leading-loose text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* KHU VỰC NÚT ĐIỀU HƯỚNG BÊN DƯỚI */}
      {/* md:pr-20 để căn giữa 2 nút với phần nội dung bên trên (bù trừ với md:pl-20 ở container) */}
      <div className="mt-12 flex justify-center gap-6 pr-4 md:pr-20">
        {/* Nút Prev */}
        <button
          ref={setPrevBtn}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-600 transition-all hover:border-[#3d3832] hover:bg-[#3d3832] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        {/* Nút Next */}
        <button
          ref={setNextBtn}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 text-gray-600 transition-all hover:border-[#3d3832] hover:bg-[#3d3832] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SeasonSlider;