import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // 1. Import thêm module Navigation

// Import CSS core của Swiper
import "swiper/css";
import "swiper/css/navigation"; // 2. Import CSS cho Navigation
import { useEffect, useMemo, useState } from "react";

const ResortSlider = () => {
  // Dữ liệu ảnh cấu hình theo tỷ lệ ngang/dọc/ngang/dọc
  const slides = useMemo(
    () => [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[320px] h-[220px]", // Ngang nhỏ (Ghế ngồi ngoài trời)
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[400px] h-[600px]", // Dọc cao (Phong cảnh biển/cây)
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[420px] h-[280px]", // Ngang vừa (Kiến trúc ban đêm)
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[350px] h-[600px]", // Dọc cao (Phòng tắm thư giãn)
      },

      // --- CỤM 2 ---
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[320px] h-[220px]", // Ngang nhỏ (Hồ bơi vô cực)
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1497362943358-1e42ba6b44a3?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[400px] h-[600px]", // Dọc cao (Không gian nhà hàng sang trọng)
      },
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[420px] h-[280px]", // Ngang vừa (Phòng ngủ resort)
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1515238152737-2194146a110e?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[350px] h-[600px]", // Dọc cao (Quầy Bar/Lounge ấm cúng)
      },

      // --- CỤM 3 ---
      {
        id: 9,
        src: "https://images.unsplash.com/photo-1551882547-ff40c0d1398c?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[320px] h-[220px]", // Ngang nhỏ (Bàn ăn decor)
      },
      {
        id: 10,
        src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[400px] h-[600px]", // Dọc cao (Mặt tiền Villa)
      },
      {
        id: 11,
        src: "https://images.unsplash.com/photo-1540541338-35698064b0ba?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[420px] h-[280px]", // Ngang vừa (Món ăn Grill/Steak)
      },
      {
        id: 12,
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[350px] h-[600px]", // Dọc cao (View hoàng hôn trên biển)
      },

      // --- CỤM 4 ---
      {
        id: 13,
        src: "https://images.unsplash.com/photo-1587985824499-c4ac1890f9bb?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[320px] h-[220px]", // Ngang nhỏ (Đồ uống/Cocktail)
      },
      {
        id: 14,
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[400px] h-[600px]", // Dọc cao (Khu vực Spa)
      },
      {
        id: 15,
        src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[420px] h-[280px]", // Ngang vừa (Nhà gỗ ven biển)
      },
      {
        id: 16,
        src: "https://images.unsplash.com/photo-1604014237800-1c9102c219ed?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[350px] h-[600px]", // Dọc cao (Nội thất phòng khách)
      },

      // --- CỤM 5 ---
      {
        id: 17,
        src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[320px] h-[220px]", // Ngang nhỏ (Bếp nướng/Grill)
      },
      {
        id: 18,
        src: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[400px] h-[600px]", // Dọc cao (Lối đi ngập tràn cây xanh)
      },
      {
        id: 19,
        src: "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[420px] h-[280px]", // Ngang vừa (Không gian outdoor ban đêm)
      },
      {
        id: 20,
        src: "https://images.unsplash.com/photo-1571896349842-ed85d6811dba?q=80&w=800&auto=format&fit=crop",
        imgClass: "w-[350px] h-[600px]", // Dọc cao (Kiến trúc sảnh chính)
      },
    ],
    [],
  );
  const [activeIndex, setActiveIndex] = useState(null); // null = đóng lightbox

  // 3. Khai báo state để lưu trữ element của 2 nút bấm
  const [prevBtn, setPrevBtn] = useState(null);
  const [nextBtn, setNextBtn] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    // 4. Sửa thẻ bọc ngoài thành flex-col và min-h-screen để xếp dọc Slider và Nút
    <div className="mt-[80px] flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* KHI VỰC SLIDER */}
      <div className="w-full">
        <Swiper
          modules={[Navigation]} // 5. Khai báo module Navigation
          navigation={{
            prevEl: prevBtn, // 6. Truyền state prevBtn vào
            nextEl: nextBtn, // 7. Truyền state nextBtn vào
          }}
          slidesPerView={"auto"} // Cho phép width slide tuỳ biến
          spaceBetween={40} // Khoảng cách giữa các ảnh (gap)
          grabCursor={true} // Hiện con trỏ bàn tay khi kéo
          // TRICK TAILWIND: Ép thẻ con .swiper-wrapper căn giữa (align-items: center)
          className="w-full px-10 [&>.swiper-wrapper]:items-center"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide
              key={slide.id}
              // Bắt buộc dùng !w-auto để SwiperSlide không bị ép width mặc định
              className="!w-auto"
            >
              <div className="overflow-hidden shadow-sm">
                <img
                  onClick={() => openLightbox(idx)}
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                  className={`${slide.imgClass} cursor-pointer object-cover transition-transform duration-700 ease-in-out hover:scale-[1.03]`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* KHU VỰC NÚT ĐIỀU HƯỚNG BÊN DƯỚI */}
      <div className="mt-12 flex items-center justify-center gap-6">
        {/* Nút Prev */}
        <button
          ref={setPrevBtn} // 8. Gắn ref vào đây để bắt element
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d3832] text-[#3d3832] transition-all hover:bg-[#3d3832] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Nút Next */}
        <button
          ref={setNextBtn} // 9. Gắn ref vào đây để bắt element
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d3832] text-[#3d3832] transition-all hover:bg-[#3d3832] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-4xl text-white hover:opacity-70 md:top-6 md:right-6"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20 md:left-4 md:px-4 md:py-3"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
          >
            ←
          </button>

          {/* Next */}
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20 md:right-4 md:px-4 md:py-3"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
          >
            →
          </button>

          {/* Image Container */}
          <div
            className="w-full max-w-5xl px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slides[activeIndex].src}
              alt=""
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            {slides[activeIndex].caption ? (
              <p className="mt-4 text-center text-sm font-semibold text-white md:text-base">
                {slides[activeIndex].caption}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResortSlider;
