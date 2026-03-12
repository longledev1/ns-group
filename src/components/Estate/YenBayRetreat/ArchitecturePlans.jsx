import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useMemo, useState } from "react";

const ArchitecturePlans = () => {
  const IMAGES_PLAN = useMemo(
    () => [
      // NHÓM 1: PA I - TRƯỚC
      {
        src: "/images/plan1_1.png",
        caption: "MẶT BẰNG TRỆT",
        plan: "PHƯƠNG ÁN KIẾN TRÚC I (LỐI VÀO PHÍA TRƯỚC)",
      },
      {
        src: "/images/plan1_2.png",
        caption: "MẶT BẰNG LẦU 1",
        plan: "PHƯƠNG ÁN KIẾN TRÚC I (LỐI VÀO PHÍA TRƯỚC)",
      },
      {
        src: "/images/plan1_3.png",
        caption: "MẶT BẰNG MÁI",
        plan: "PHƯƠNG ÁN KIẾN TRÚC I (LỐI VÀO PHÍA TRƯỚC)",
      },

      // NHÓM 2: PA I - SAU
      {
        src: "/images/plan1op1_1.png",
        caption: "MẶT BẰNG TRỆT",
        plan: "PHƯƠNG ÁN KIẾN TRÚC I (LỐI VÀO PHÍA SAU)",
      },
      {
        src: "/images/plan1op1_2.png",
        caption: "MẶT BẰNG LẦU 1",
        plan: "PHƯƠNG ÁN KIẾN TRÚC I (LỐI VÀO PHÍA SAU)",
      },
      {
        src: "/images/plan1op1_3.png",
        caption: "MẶT BẰNG MÁI",
        plan: "PHƯƠNG ÁN KIẾN TRÚC I (LỐI VÀO PHÍA SAU)",
      },

      // NHÓM 3: PA II - TRƯỚC
      {
        src: "/images/plan2_1.png",
        caption: "MẶT BẰNG TRỆT",
        plan: "PHƯƠNG ÁN KIẾN TRÚC II (LỐI VÀO PHÍA TRƯỚC)",
      },
      {
        src: "/images/plan2_2.png",
        caption: "MẶT BẰNG LẦU 1",
        plan: "PHƯƠNG ÁN KIẾN TRÚC II (LỐI VÀO PHÍA TRƯỚC)",
      },
      {
        src: "/images/plan2_3.png",
        caption: "MẶT BẰNG MÁI",
        plan: "PHƯƠNG ÁN KIẾN TRÚC II (LỐI VÀO PHÍA TRƯỚC)",
      },

      // NHÓM 4: PA II - SAU
      {
        src: "/images/plan2op2_1.png",
        caption: "MẶT BẰNG TRỆT",
        plan: "PHƯƠNG ÁN KIẾN TRÚC II (LỐI VÀO PHÍA SAU)",
      },
      {
        src: "/images/plan2op2_2.png",
        caption: "MẶT BẰNG LẦU 1",
        plan: "PHƯƠNG ÁN KIẾN TRÚC II (LỐI VÀO PHÍA SAU)",
      },
      {
        src: "/images/plan2op2_3.png",
        caption: "MẶT BẰNG MÁI",
        plan: "PHƯƠNG ÁN KIẾN TRÚC II (LỐI VÀO PHÍA SAU)",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? IMAGES_PLAN.length - 1 : prev - 1));
  const goNext = () =>
    setActiveIndex((prev) => (prev === IMAGES_PLAN.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <div className="relative w-full">
      {/* 1. Background */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/images/nightresort.png"
          className="h-full w-full object-cover"
          alt="Night Resort"
        /> */}
        {/* <div className="absolute inset-0"></div> */}
      </div>

      {/* 2. Content */}
      <div className="relative z-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Box 1: Cần return trong map và fix index */}
          <div className="rounded-sm bg-white/95 p-6 text-center shadow-2xl md:p-10">
            <h3 className="font-montserrat mb-6 text-lg font-bold text-[#1E421E] uppercase md:text-xl">
              PHƯƠNG ÁN KIẾN TRÚC I - (LỐI VÀO PHÍA TRƯỚC)
            </h3>
            <Swiper
              style={{ "--swiper-pagination-color": "#1E421E" }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {IMAGES_PLAN.slice(0, 3).map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img.src}
                    className="mx-auto h-[275px] cursor-pointer border-2 border-[#1E421E]"
                    onClick={() => openLightbox(idx)} // index 0, 1, 2
                  />
                  <p className="font-montserrat mt-4 text-sm font-bold text-[#1E421E]">
                    {img.caption}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Box 2: Fix index bằng cách cộng thêm 3 */}
          <div className="rounded-sm bg-white/95 p-6 text-center shadow-2xl md:p-10">
            <h3 className="font-montserrat mb-6 text-lg font-bold text-[#1E421E] uppercase md:text-xl">
              PHƯƠNG ÁN KIẾN TRÚC I - (LỐI VÀO PHÍA SAU)
            </h3>
            <Swiper
              style={{ "--swiper-pagination-color": "#1E421E" }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {IMAGES_PLAN.slice(3, 6).map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img.src}
                    className="mx-auto h-[275px] cursor-pointer border-2 border-[#1E421E]"
                    onClick={() => openLightbox(idx + 3)} // index 3, 4, 5
                  />
                  <p className="font-montserrat mt-4 text-sm font-bold text-[#1E421E]">
                    {img.caption}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Box 3: Fix index bằng cách cộng thêm 6 */}
          <div className="rounded-sm bg-white/95 p-6 text-center shadow-2xl md:p-10">
            <h3 className="font-montserrat mb-6 text-lg font-bold text-[#1E421E] uppercase md:text-xl">
              PHƯƠNG ÁN KIẾN TRÚC II - (LỐI VÀO PHÍA TRƯỚC)
            </h3>
            <Swiper
              style={{ "--swiper-pagination-color": "#1E421E" }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {IMAGES_PLAN.slice(6, 9).map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img.src}
                    className="mx-auto h-[275px] cursor-pointer border-2 border-[#1E421E]"
                    onClick={() => openLightbox(idx + 6)} // index 6, 7, 8
                  />
                  <p className="font-montserrat mt-4 text-sm font-bold text-[#1E421E]">
                    {img.caption}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Box 4: Fix index bằng cách cộng thêm 9 */}
          <div className="rounded-sm bg-white/95 p-6 text-center shadow-2xl md:p-10">
            <h3 className="font-montserrat mb-6 text-lg font-bold text-[#1E421E] uppercase md:text-xl">
              PHƯƠNG ÁN KIẾN TRÚC II - (LỐI VÀO PHÍA SAU)
            </h3>
            <Swiper
              style={{ "--swiper-pagination-color": "#1E421E" }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {IMAGES_PLAN.slice(9, 12).map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img.src}
                    className="mx-auto h-[275px] cursor-pointer border-2 border-[#1E421E]"
                    onClick={() => openLightbox(idx + 9)} // index 9, 10, 11
                  />
                  <p className="font-montserrat mt-4 text-sm font-bold text-[#1E421E]">
                    {img.caption}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Nút Đóng (Top Right) */}
          <button
            className="absolute top-6 right-6 text-4xl text-white/70 transition-colors hover:text-white"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
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
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
          >
            →
          </button>

          {/* Khu vực nội dung chính */}
          <div
            className="flex max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hình ảnh */}
            <img
              src={IMAGES_PLAN[activeIndex].src}
              alt={IMAGES_PLAN[activeIndex].caption}
              className="max-h-[75vh] w-auto rounded-lg border border-white/10 object-contain shadow-2xl"
            />

            {/* Thông tin văn bản dưới ảnh */}
            <div className="mt-6 text-center">
              {/* Tên Phương Án (Nhỏ hơn, màu xanh thương hiệu) */}
              <p className="font-montserrat text-sm font-bold tracking-[0.2em] text-[#A5D6A7] uppercase md:text-base">
                {IMAGES_PLAN[activeIndex].plan}
              </p>

              {/* Tên Mặt Bằng (To, Trắng) */}
              <p className="font-montserrat mt-2 text-2xl font-bold tracking-widest text-white uppercase md:text-3xl">
                {IMAGES_PLAN[activeIndex].caption}
              </p>

              {/* Số thứ tự ảnh */}
              <p className="mt-4 text-[10px] text-white/30 uppercase italic">
                Ảnh {activeIndex + 1} / {IMAGES_PLAN.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitecturePlans;
