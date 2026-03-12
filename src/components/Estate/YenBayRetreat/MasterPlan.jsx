import React, { useEffect, useMemo, useState } from "react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MasterPlan = () => {
  const images = useMemo(
    () => [
      {
        src: "/images/masterplan1.png",
        caption: "PHƯƠNG ÁN QUY HOẠCH TỔNG MẶT BẰNG SỬ DỤNG ĐẤT (1)",
      },
      {
        src: "/images/masterplan2.png",
        caption: "PHƯƠNG ÁN QUY HOẠCH TỔNG MẶT BẰNG SỬ DỤNG ĐẤT (2)",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(null); // null = đóng lightbox
  const [isExpanded, setIsExpanded] = useState(false); // Quản lý trạng thái đóng/mở text

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
    <div className="flex flex-col gap-y-10 md:gap-y-[50px]">
      <p className="font-heading text-center text-3xl font-bold text-[#1E421E] md:text-5xl">
        TẦM NHÌN QUY HOẠCH
      </p>

      {/* KHỐI TEXT CÓ TÍNH NĂNG XEM THÊM */}
      {/* KHỐI TEXT CÓ TÍNH NĂNG XEM THÊM THEO ĐOẠN */}
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 md:px-0">
        <div className="font-montserrat flex flex-col gap-y-6 text-left text-[14px] leading-relaxed transition-all duration-300 md:gap-y-8 md:text-center md:text-base">
          {/* Đoạn 1: Luôn luôn hiển thị */}
          <p>
            Các phân khu chức năng được sắp xếp rõ ràng, liên kết chặt chẽ thông
            qua hệ thống giao thông nội khu và không gian mở, tạo nên sự thuận
            tiện trong di chuyển cũng như trải nghiệm sống và nghỉ dưỡng. Mỗi
            khu vực đều được nghiên cứu kỹ lưỡng về mật độ xây dựng, tầm nhìn,
            hướng tiếp cận và mối quan hệ với cảnh quan xung quanh, nhằm mang
            lại sự riêng tư nhưng vẫn kết nối trong một tổng thể thống nhất.
          </p>

          {/* Đoạn 2: Ẩn trên Mobile (nếu chưa mở), nhưng luôn hiện trên Desktop (md:block) */}
          <p className={`${!isExpanded ? "hidden md:block" : "block"}`}>
            Bên cạnh đó, dự án chú trọng phát triển hệ thống tiện ích đồng bộ,
            cảnh quan xanh và không gian sinh hoạt cộng đồng, góp phần nâng cao
            chất lượng sống và giá trị lâu dài cho toàn khu. Tầm nhìn quy hoạch
            không chỉ hướng đến một dự án hoàn chỉnh về mặt hình thái, mà còn
            kiến tạo một môi trường sống và nghỉ dưỡng bền vững, đẳng cấp và
            giàu trải nghiệm theo thời gian.
          </p>
        </div>

        {/* Nút Xem Thêm: Căn trái (self-start) trên mobile, ẩn trên Desktop (md:hidden) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-montserrat mt-3 self-start text-sm font-semibold text-[#1E421E] underline md:hidden"
        >
          {isExpanded ? "Rút gọn" : "Xem thêm..."}
        </button>
      </div>
      {/* 1. KHỐI MOBILE: DÙNG SWIPER (Ẩn trên Desktop) */}
      <div className="block w-full overflow-hidden px-4 md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.15} // Lộ 15% slide kế tiếp
          grabCursor={true}
          className="w-full pb-2"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={`mobile-${idx}`}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col gap-y-3 transition-all duration-500 ease-out ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full cursor-pointer border-[1.5px] border-[#1E421E] object-cover"
                    onClick={() => openLightbox(idx)} // Click để mở Lightbox
                  />
                  <p className="font-montserrat text-center text-[12px] font-light">
                    {img.caption}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. KHỐI DESKTOP: DÙNG GRID (Ẩn trên Mobile) */}
      <div className="hidden grid-cols-2 gap-x-10 md:grid">
        {images.map((img, idx) => {
          return (
            <div key={`desktop-${idx}`} className="flex flex-col gap-y-4">
              <img
                src={img.src}
                alt={img.caption}
                // Xóa cứng w-[900px] và dùng w-full để co giãn theo cột
                className="h-full w-full cursor-pointer border-2 border-[#1E421E] object-cover transition-opacity hover:opacity-90"
                onClick={() => openLightbox(idx)} // Click để mở Lightbox
              />
              <p className="font-montserrat text-center text-sm font-light">
                {img.caption}
              </p>
            </div>
          );
        })}
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
              src={images[activeIndex].src}
              alt=""
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            {images[activeIndex].caption ? (
              <p className="mt-4 text-center text-sm font-semibold text-white md:text-base">
                {images[activeIndex].caption}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterPlan;
