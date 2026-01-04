import { useEffect, useMemo, useState } from "react";
import { Heading } from "../../Heading";

export const JourneySection = () => {
  const images = useMemo(
    () => [
      {
        src: "/images/ongTranTuong1.png",
        caption:
          "              Ảnh chụp ông Trần Tương (trái) và ông Trần Anh Dũng tại Trại Mát",
      },
      {
        src: "/images/ns6.jpg",
        caption: "Trại mát Ngọc Sương tại Ba Ngòi - Cam Ranh",
      },
      {
        src: "/images/ns4.jpg",
        caption: "Hình ảnh du khách tại trại mát Ngọc Sương",
      },
      {
        src: "/images/ns5.jpg",
        caption: "Hình ảnh du khách tại trại mát Ngọc Sương",
      },
      {
        src: "/images/ns2.png",
        caption: "Thực khách thưởng thức tại trại mát Ngọc Sương",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(null); // null = đóng lightbox

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
    <section>
      <Heading
        title="HÀNH TRÌNH NS GROUP"
        subtitle="Từ khởi đầu giản dị đến hành trình kiến tạo giá trị"
        description="Từ một thương hiệu gia đình, NSG lớn lên cùng thời gian – giữ trọn tinh thần Việt và không ngừng đổi mới để vươn tầm quốc tế."
      />

      <div className="mt-10">
        {/* Top content */}
        <div className="mb-6 flex items-center justify-between gap-x-20">
          <div className="text-primary text-justify leading-[30px]">
            <p>
              Ngọc Sương Group (NSG) được sáng lập bởi ông Trần Anh Dũng, người
              có hơn 40 năm kinh nghiệm trong lĩnh vực F&B tại Việt Nam và quốc
              tế. Ông là con trai của ông Trần Tương – người đặt nền móng cho
              thương hiệu Ngọc Sương từ năm{" "}
              <span className="text-CTA font-bold">1955</span>.
            </p>
            <p className="mt-4">
              Từ niềm đam mê ẩm thực, ông Dũng phát triển chuỗi nhà hàng hải sản
              tại Pháp và Việt Nam, mang đến nhiều món ăn sáng tạo được thực
              khách yêu thích.
            </p>
          </div>

          <div className="w-full">
            <img
              src="/images/ongTranTuong1.png"
              alt=""
              className="w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-[1.01]"
              onClick={() => openLightbox(0)}
            />
            <p className="mt-2 text-center italic">
              Ảnh chụp ông Trần Tương (trái) và ông Trần Anh Dũng tại Trại Mát
            </p>
          </div>
        </div>

        {/* Grid gallery */}
        <div className="grid grid-cols-4 gap-x-6 gap-y-6">
          {images.slice(1).map((img, idx) => {
            const realIndex = idx + 1; // vì slice(1)
            return (
              <img
                key={img.src}
                src={img.src}
                alt=""
                className="h-55 w-full cursor-zoom-in object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openLightbox(realIndex)}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-3xl text-white hover:opacity-70"
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

          {/* Image */}
          <div
            className="mx-4 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].src}
              alt=""
              className="max-h-[85vh] w-full rounded-lg object-contain"
            />
            {images[activeIndex].caption ? (
              <p className="mt-3 text-center text-sm text-white italic">
                {images[activeIndex].caption}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};
