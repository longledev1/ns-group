import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

const LegalSlide = () => {
  // Cập nhật lại mảng MAPS để có thêm trường 'plan' và 'caption' cho Lightbox
  const MAPS = [
    {
      src: "/images/license1.png",
      caption: "Bản đồ tổ chức không gian kiến trúc cảnh quan",
      plan: "KHU BÃI LAO",
    },
    {
      src: "/images/license2.png",
      caption: "Bản đồ giới hạn khu đất (khu Bãi Lao)",
      plan: "KHU BÃI LAO",
    },
    {
      src: "/images/license3.png",
      caption: "Bản đồ quy hoạch cấp điện (khu Bãi Lao)",
      plan: "KHU BÃI LAO",
    },
    {
      src: "/images/license4.png",
      caption: "Bản đồ quy hoạch cấp nước sinh hoạt (khu Bãi Lao)",
      plan: "KHU BÃI LAO",
    },
    {
      src: "/images/license5.png",
      caption: "Bản đồ quy hoạch thoát nước sinh hoạt (khu Bãi Lao)",
      plan: "KHU BÃI LAO",
    },
    {
      src: "/images/license7.png",
      caption: "Bản đồ qui hoạch giao thông (khu Bãi Lao)",
      plan: "KHU BÃI LAO",
    },
    {
      src: "/images/license6.png",
      caption: "Bản đồ giới hạn khu đất (khu Bãi Cồn)",
      plan: "KHU BÃI CỒN",
    },
    {
      src: "/images/license8.png",
      caption: "Bản đồ địa hình khu đất (khu Bãi Cồn)",
      plan: "KHU BÃI CỒN",
    },
    {
      src: "/images/license9.png",
      caption: "Bản đồ đánh giá quỹ đất xây dựng (khu Bãi Cồn)",
      plan: "KHU BÃI CỒN",
    },
    {
      src: "/images/license10.png",
      caption: "Bản đồ đánh quy hoach cấp điện (khu Bãi Cồn)",
      plan: "KHU BÃI CỒN",
    },
    {
      src: "/images/license11.png",
      caption: "Bản đồ quy hoạch giao thông (khu Bãi Cồn)",
      plan: "KHU BÃI CỒN",
    },
    {
      src: "/images/license12.png",
      caption: "Bản đồ quy hoạch cấp nước (khu Bãi Cồn)",
      plan: "KHU BÃI CỒN",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Các hàm xử lý Lightbox
  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? MAPS.length - 1 : prev - 1));
  const goNext = () =>
    setActiveIndex((prev) => (prev === MAPS.length - 1 ? 0 : prev + 1));

  // Lắng nghe phím bấm
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="group relative mx-auto max-w-7xl">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2, slidesPerGroup: 1 },
          1024: { slidesPerView: 3, slidesPerGroup: 1 },
        }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        className="mySwiper"
      >
        {MAPS.map((map, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div
                className="cursor-pointer overflow-hidden border border-gray-200 bg-white p-2 shadow-sm transition-colors hover:border-[#1E421E]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={map.src}
                  alt={map.caption}
                  className="h-[200px] w-full object-contain md:h-[250px]"
                />
              </div>
              <p className="font-montserrat mt-6 text-center text-sm font-medium tracking-wide">
                {map.caption}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute top-1/2 -left-[52px] z-10 hidden -translate-y-1/2 rounded-full bg-[#1E421E] p-3 text-white transition-opacity hover:opacity-80 disabled:opacity-30 md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <button className="next-btn absolute top-1/2 -right-[52px] z-10 hidden -translate-y-1/2 rounded-full bg-[#1E421E] p-3 text-white transition-opacity hover:opacity-80 disabled:opacity-30 md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>

      {/* Lightbox - Style của bạn */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-4xl text-white/70 transition-colors hover:text-white"
            onClick={closeLightbox}
          >
            ×
          </button>

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            ←
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            →
          </button>

          <div
            className="flex max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={MAPS[activeIndex].src}
              alt={MAPS[activeIndex].caption}
              className="max-h-[70vh] w-auto rounded-lg border border-white/10 object-contain shadow-2xl md:max-h-[75vh]"
            />
            <div className="mt-6 text-center">
              <p className="font-montserrat text-sm font-bold tracking-[0.2em] text-[#A5D6A7] uppercase md:text-base">
                {MAPS[activeIndex].plan}
              </p>
              <p className="font-montserrat mt-2 px-4 text-xl font-bold tracking-widest text-white uppercase md:text-2xl">
                {MAPS[activeIndex].caption}
              </p>
              <p className="mt-4 text-[10px] text-white/30 uppercase italic">
                Ảnh {activeIndex + 1} / {MAPS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalSlide;
