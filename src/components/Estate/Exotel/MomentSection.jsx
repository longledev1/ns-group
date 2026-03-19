import React, { useState, useEffect } from "react";

// 1. Dữ liệu giả lập
const galleryData = {
  outdoor: [
    { src: "/images/estate/exotel/moment1.webp" },
    {
      src: "https://images.unsplash.com/photo-1522850067562-a4c60453058d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "/images/nature5.png",
    },
    {
      src: "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://www.visitvictoria.com/-/media/atdw/great-ocean-road/see-and-do/outdoor-and-adventure/cycling/4b17d863e0ee20f4ec48dd2e85d551f6_1600x1200.jpeg?ts=20250828310733",
    },
    {
      src: "https://images.unsplash.com/photo-1631635589499-afd87d52bf64?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1679242158095-5404d2e7bc16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  cruise: [
    { src: "/images/estate/exotel/moment2.webp" },
    {
      src: "https://images.unsplash.com/photo-1550524587-01b38c780bfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://www.aman.com/sites/default/files/styles/featured_cards_extra_large/public/2025-07/amanoi_vietnam_-_experience_catamaran_at_sunrise.jpg?itok=qaY8IKiM",
    },
    {
      src: "https://images.unsplash.com/photo-1682604099871-e35e10ac4f0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1637872598896-1758e12c25a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  energy: [
    { src: "/images/estate/exotel/moment3.webp" },
    {
      src: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1630595633877-9918ee257288?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  food: [
    { src: "/images/estate/exotel/moment4.webp" },
    {
      src: "https://product.hstatic.net/200000294188/product/mien-xao-cua_cae208a7e22a41fc9cba5d124b97e1cb_05ba15ad0e1d407db2d4729d884e2331_master.png",
    },
    {
      src: "https://file.hstatic.net/200000318501/file/cha-gio-hai-san_jpg_771f1faf64cc426a8ee0282405e26bf3_grande.jpg",
    },
    {
      src: "https://fujifoods.vn/wp-content/uploads/2021/10/vem-xanh-sot-kem-nam-1.jpg",
    },
    {
      src: "https://file.hstatic.net/200000391061/article/mot-so-mon-an-chua-dau-hong-sieu-toc-ban-khong-nen-bo-qua4_2f049042660940cea509b82f8b924ab9_1024x1024.jpg",
    },
    {
      src: "https://product.hstatic.net/200000626331/product/grilled-lobster-with-garlic-butter_b1b2dcf8ed514c38b9299e90347cccad_master.png",
    },
    {
      src: "https://file.hstatic.net/200000441267/article/tom-hap-nuo-dua_bddee54f8bda479abaa54648e5149607.jpg",
    },
    {
      src: "https://i-giadinh.vnecdn.net/2022/12/29/Buoc-4-Thanh-pham-4-1690-1672298342.jpg",
    },
    {
      src: "https://amthuchailuaq3.com/upload/product/603005460842.jpg",
    },
  ],
  lounge: [
    { src: "/images/estate/exotel/moment5.webp" },
    {
      src: "https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=800&auto=format&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  fishing: [
    { src: "/images/estate/exotel/moment6.webp" },
    {
      src: "https://statics.vinpearl.com/cau-ca-phu-quoc-1_1630808479.jpg",
    },
    {
      src: "https://blog.premierresidencesphuquoc.com/wp-content/uploads/2024/12/cau-ca-phu-quoc-9.webp",
    },
    {
      src: "/images/fishing.png",
    },
    {
      src: "https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const MomentsSection = () => {
  const [lightboxData, setLightboxData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const openGallery = (galleryKey, startIndex = 0) => {
    if (galleryData[galleryKey]) {
      setLightboxData(galleryData[galleryKey]);
      setActiveIndex(startIndex);
    }
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    setLightboxData([]);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? lightboxData.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === lightboxData.length - 1 ? 0 : prev + 1));
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
    <div className="text-primary mt-8 md:mt-16 lg:mt-[130px]">
      <div className="mb-8 flex flex-col text-6xl">
        <h2 className="font-heading text-center">TRỌN VẸN</h2>
        <h2 className="font-heading mt-[10px] text-center font-bold">
          TỪNG KHOẢNH KHẮC
        </h2>
        <div className="mt-8 text-base">
          <p className="font-montserrat mb-4 text-center leading-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>
        </div>
      </div>
      {/* ROW 1 */}
      <div className="mb-[40px] grid grid-cols-12">
        <div className="col-span-7">
          {/* Nhấn vào ảnh để mở Lightbox - Outdoor */}
          <div
            className="group relative mb-5 w-full max-w-[740px] cursor-pointer overflow-hidden"
            onClick={() => openGallery("outdoor")}
          >
            <img
              loading="lazy"
              src="/images/estate/exotel/moment1.webp"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              alt="Hoạt động ngoài trời"
            />
            {/* Lớp phủ mờ khi hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="font-montserrat translate-y-4 font-semibold text-white opacity-0 drop-shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                KHÁM PHÁ BỘ SƯU TẬP ẢNH
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-heading text-2xl font-semibold">
              HOẠT ĐỘNG NGOÀI TRỜI
            </p>
            <hr className="mb-2 w-[400px]" />
            <p className="font-montserrat max-w-[740px] text-base leading-[30px]">
              Những cung đường dạo bộ và hoạt động ngoài trời giữa thiên nhiên
              xanh mát, nơi YenBay mở ra không gian khám phá trọn vẹn và gần
              gũi.
            </p>
          </div>
        </div>

        <div className="col-span-5">
          {/* Nhấn vào ảnh để mở Lightbox - Cruise */}
          <div
            className="group relative mb-5 h-[378px] w-full max-w-[740px] cursor-pointer overflow-hidden"
            onClick={() => openGallery("cruise")}
          >
            <img
              loading="lazy"
              src="/images/estate/exotel/moment2.webp"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              alt="Du thuyền trên vịnh Cam Ranh"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="font-montserrat translate-y-4 font-semibold text-white opacity-0 drop-shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                KHÁM PHÁ BỘ SƯU TẬP ẢNH
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-heading text-2xl font-semibold">
              DU THUYỀN TRÊN VỊNH CAM RANH
            </p>
            <hr className="mb-2 w-[400px]" />
            <p className="font-montserrat max-w-[740px] text-base leading-[30px]">
              Trải nghiệm vịnh Cam Ranh thơ mộng trên những Du thuyền hiện đại,
              sang trọng...
            </p>
          </div>
        </div>
      </div>
      {/* ROW 2 */}
      <div className="mb-[40px] flex items-center gap-x-8">
        <div className="w-full">
          {/* Nhấn vào ảnh để mở Lightbox - Energy */}
          <div
            className="group relative mb-5 h-[566px] w-full cursor-pointer overflow-hidden"
            onClick={() => openGallery("energy")}
          >
            <img
              loading="lazy"
              src="/images/estate/exotel/moment3.webp"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              alt="Tái tạo năng lượng"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="font-montserrat translate-y-4 font-semibold text-white opacity-0 drop-shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                KHÁM PHÁ BỘ SƯU TẬP ẢNH
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-heading text-2xl font-semibold">
              TÁI TẠO NĂNG LƯỢNG
            </p>
            <hr className="mb-2 w-[350px]" />
            <p className="font-montserrat text-base leading-[30px]">
              Những cung đường dạo bộ và hoạt động ngoài trời giữa thiên nhiên
              xanh mát, nơi YenBay mở ra không gian khám phá trọn vẹn và gần
              gũi.
            </p>
          </div>
        </div>

        <div className="w-full">
          {/* Nhấn vào ảnh để mở Lightbox - Food */}
          <div
            className="group relative mb-5 h-[566px] w-full cursor-pointer overflow-hidden"
            onClick={() => openGallery("food")}
          >
            <img
              loading="lazy"
              src="/images/estate/exotel/moment4.webp"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              alt="Ẩm thực YenBay"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="font-montserrat translate-y-4 font-semibold text-white opacity-0 drop-shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                KHÁM PHÁ BỘ SƯU TẬP ẢNH
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-heading text-2xl font-semibold">
              ẨM THỰC YENBAY
            </p>
            <hr className="mb-2 w-[350px]" />
            <p className="font-montserrat text-base leading-[30px]">
              Tinh hoa ẩm thực biển và hương vị Việt được gìn giữ trong từng món
              ăn, góp phần tạo nên dấu ấn riêng của YenBay.
            </p>
          </div>
        </div>

        <div className="w-full">
          {/* Nhấn vào ảnh để mở Lightbox - Lounge */}
          <div
            className="group relative mb-5 h-[566px] w-full cursor-pointer overflow-hidden"
            onClick={() => openGallery("lounge")}
          >
            <img
              loading="lazy"
              src="/images/estate/exotel/moment5.webp"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              alt="Lounge & Bar"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="font-montserrat translate-y-4 font-semibold text-white opacity-0 drop-shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                KHÁM PHÁ BỘ SƯU TẬP ẢNH
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="font-heading text-2xl font-semibold">LOUNGE & BAR</p>
            <hr className="mb-2 w-[350px]" />
            <p className="font-montserrat text-base leading-[30px]">
              Khi hoàng hôn buông xuống, không gian bar trở thành điểm hẹn thư
              giãn, nơi câu chuyện và cảm xúc hòa vào nhịp sống chậm của YenBay.
            </p>
          </div>
        </div>
      </div>
      {/* ROW 3 */}
      {/* ROW 3 */}
      <div className="flex items-center gap-x-12">
        {" "}
        {/* Đổi justify-between thành gap-x-12 để tạo khoảng cách cố định */}
        {/* Cột 1: Chứa ảnh (khoảng 60% chiều rộng) */}
        <div
          className="group relative mb-5 w-[60%] cursor-pointer overflow-hidden"
          onClick={() => openGallery("fishing")}
        >
          <img
            loading="lazy"
            src="/images/estate/exotel/moment6.webp"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            alt="Câu cá"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
            <span className="font-montserrat translate-y-4 font-semibold text-white opacity-0 drop-shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              KHÁM PHÁ BỘ SƯU TẬP ẢNH
            </span>
          </div>
        </div>
        {/* Cột 2: Chứa Text (khoảng 40% chiều rộng) */}
        <div className="flex w-[40%] flex-col gap-y-2">
          <p className="font-heading text-right text-2xl font-semibold">
            CÂU CÁ
          </p>
          <div className="flex justify-end">
            <hr className="mb-2 w-full max-w-[350px]" />{" "}
            {/* Đảm bảo hr không vượt quá bề ngang */}
          </div>
          <p className="font-montserrat text-right text-base leading-[30px]">
            Giữa khung cảnh thiên nhiên rộng mở và bầu không khí yên bình, mỗi
            vòng golf tại YenBay không chỉ là một hoạt động thể thao mà còn là
            hành trình tận hưởng sự tĩnh tại. Những thảm cỏ xanh mướt trải dài
            hòa cùng gió biển dịu nhẹ tạo nên một không gian thư thái, nơi từng
            cú đánh trở thành khoảnh khắc chậm rãi và đầy tập trung
          </p>
        </div>
      </div>
      {/* =========================================
          KHU VỰC LIGHTBOX CÓ THUMBNAIL 
          ========================================= */}
      {activeIndex !== null && lightboxData.length > 0 && (
        <div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Nút Đóng */}
          <button
            className="absolute top-4 right-4 z-50 p-2 text-4xl text-white/60 transition-colors hover:text-white md:top-6 md:right-8"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {/* Cụm chứa Ảnh Lớn & Nút Chuyển */}
          <div className="relative flex w-full max-w-6xl items-center justify-center px-2 md:px-12">
            {/* Nút Prev */}
            {lightboxData.length > 1 && (
              <button
                className="absolute left-0 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 md:left-4"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
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
            )}

            {/* Ảnh Lớn Hiện Tại */}
            <div
              className="flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={activeIndex}
                src={lightboxData[activeIndex].src}
                // Giảm max-h xuống 65vh để chừa chỗ cho dải ảnh nhỏ bên dưới
                className="animate-fade-in max-h-[65vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Nút Next */}
            {lightboxData.length > 1 && (
              <button
                className="absolute right-0 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 md:right-4"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
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
            )}
          </div>

          {/* DẢI THUMBNAIL (ẢNH NHỎ) BÊN DƯỚI */}
          {lightboxData.length > 1 && (
            <div
              className="scrollbar-hide mt-10 flex w-full flex-wrap"
              onClick={(e) => e.stopPropagation()} // Chặn click lan ra ngoài làm đóng lightbox
            >
              <div className="mx-auto flex gap-3">
                {lightboxData.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md transition-all duration-300 md:h-20 md:w-32 ${
                      activeIndex === idx
                        ? "scale-105 opacity-100 ring-2 ring-white ring-offset-2 ring-offset-black"
                        : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MomentsSection;
