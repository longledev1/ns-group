import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VacationSlide = () => {
  const CULINARY_PROJECTS = [
    {
      id: 1,
      title: "ẨM THỰC TẠI VỊNH YẾN",
      description: [
        "Sẽ thật thiếu sót nếu rời xa phố hội mà không được thưởng thức những hương vị ẩm thực trọn vẹn. Tại Yến Bay, du khách được Ngọc Sương phục vụ chu đáo từ các món miền biển dân dã của Trại Mát đến những quà ngon ba miền tại quán Chợ Cũ...",
        "Khi chiều buông, Yến Bay trở nên lãng mạn với ánh hoàng hôn phủ nhẹ trên mặt vịnh. Du khách có thể tản bộ thư giãn, hít thở gió biển mát lành và lưu lại những khoảnh khắc đáng nhớ. Một trải nghiệm trọn vẹn cho cả gia đình trong không gian bình yên và tinh tế.",
      ],
      image: "/images/traimat.png",
      logo: null,
    },
    {
      id: 2,
      title: "Nhà hàng Saigon Marina",
      description: [
        "Phát triển từ thương hiệu Ngọc Sương, Saigon Marina hướng đến trải nghiệm ẩm thực hải sản cao cấp, nguyên liệu tuyển chọn, không gian du thuyền sang trọng và sự riêng tư tinh tế cùng tồn tại – dành cho những cuộc chiêu đãi, gặp gỡ và kết nối mang dấu ấn cá nhân.",
        "Saigon Marina không chỉ là nơi thưởng thức hải sản, mà còn là điểm đến thể hiện phong cách sống thượng lưu giữa lòng thành phố. Từng chi tiết từ ánh sáng, cách bài trí cho đến dịch vụ đều được chăm chút để tạo nên một hành trình ẩm thực trọn vẹn, nơi khách hàng có thể tận hưởng sự thư thái, đẳng cấp và cảm giác được phục vụ như một vị khách danh giá.",
      ],
      image: "/images/sgm_background.svg",
      logo: null,
    },
    {
      id: 3,
      title: "Quán ăn Trại Mát",
      description: [
        "Trại Mát là mô hình nhà hàng chất lượng 2* kết hợp trạm dừng chân, đặt trên các tuyến đường du lịch, phục vụ khách vãng lai với các món ăn hải sản dân dã, cơm Việt và bầu không khí yên tĩnh, thư giãn.",
        "Trở về quá khứ, Trại Mát từng là thương hiệu khởi nguồn để xây dựng nên chuỗi nhà hàng Ngọc Sương rất thành công. Thương hiệu Trại Mát hiện đại kế thừa những giá trị ẩm thực xưa cũ, đi sâu vào lòng người, được lồng trong bối cảnh hiện đại, vòm lá ấn tượng nhưng chất liệu kiến tạo lại đậm chất văn hóa Viêt Nam như mây tre, lá dừa,hồ sen...",
      ],
      image: "/images/traimat_background.png",
      logo: null,
    },
    {
      id: 4,
      title: "ExoCafé",
      description: [
        "ExoCafe là mô hình nước giải khát kết hợp bánh ngọt mang phong cách miền nhiệt đới, thể hiện trong nguyên liệu/thành phần của các món bánh và nước uống kết hợp với không gian của quán",
        "Không gian hướng về thiên nhiên với nhiều mảng cây xanh, mang nét bụi bặm của đá granit tại Vịnh Yến, sự ấm cúng của gỗ tự nhiên trong nội thất và những mảng màu rực rỡ của tranh treo trên tường để tạo điểm nhấn.",
        "Với quầy bar mở, có ghế ngồi, khách hàng có thể tương tác với bartender và thợ bánh khi họ làm việc từ đó tạo sự kết nối thú vị khi tìm hiểu về sản phẩm",
      ],
      image: "/images/exocafe_background.png",
      logo: null,
    },
    {
      id: 5,
      title: "Nhà hàng Yến",
      description: [
        "Nhà hàng Yến Bay tuyển chọn những món ăn đặc sắc nhất của Chef Dũng trong suốt sự nghiệp xây dựng và phát triển thương hiệu của ông. Không gian ấm cúng và thân thiện, hứa hẹn sẽ mang đến cho các thực khách một bữa ăn thật trọn vẹn. ",
        "Mang không gian biển đảo Yến Bay về thành phố, vẫn giữ nét ẩm thực của Ngọc Sương Lê Quý Đôn. Phong cách là sự kết hợp giữa Á và Âu pha lẫn chút không khí biển đảo với nhạc máy êm ả tạo không khí relax và đôi khi liên hoan bùng cháy hơn. Không gian được bố trí hai phần: một nửa phòng lạnh và một nửa ngoài trời kết hợp với hồ nước Lagoon theo mẫu mã hồ bơi FOH Cam Ranh.",
      ],
      image: "/images/yen_background.png",
      logo: null,
    },
    {
      id: 6,
      title: "KingClam Grill & Bar",
      description: [
        "Lấy cảm hứng bếp show, trình diễn chế biến bên bếp lửa hồng , vừa hiện đại vừa tạo sự thích thú cho khách hàng khi đi theo lối dẫn chung của khung vực Saigon Promenade",
        "Không chỉ dừng lại ở việc thưởng thức món ăn, KingClam Grill & Bar còn mang đến một hành trình trải nghiệm trọn vẹn, nơi hương thơm từ bếp nướng hòa cùng ánh lửa rực tạo nên bầu không khí sống động và đầy cuốn hút. Từng bước chân của thực khách như được dẫn dắt qua một “sân khấu ẩm thực” độc đáo, nơi sự tinh tế trong không gian, âm thanh và nhịp điệu phục vụ cùng kết hợp để tạo nên cảm giác vừa thư giãn, vừa đẳng cấp, đúng chất của một điểm hẹn sang trọng giữa Saigon Promenade.",
      ],
      image: "/images/kingclam_background.png",
      logo: null,
    },
  ];

  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* 1. LAYOUT MOBILE: CARD STYLE (Chỉ hiện trên Mobile) */}
      {/* ======================================================== */}
      <div className="block w-full px-4 md:hidden">
        {/* Để class swiper-mobile-custom để dễ tuỳ chỉnh màu chấm tròn trong CSS nếu cần */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.15} // Lộ 15% slide tiếp theo để mời gọi vuốt
          grabCursor={true}
          className="swiper-mobile-custom w-full pb-12" // pb-12 để chừa khoảng trống cho dấu chấm tròn Pagination
        >
          {CULINARY_PROJECTS.map((project) => (
            <SwiperSlide key={`mobile-${project.id}`} className="!h-auto">
              {/* Thẻ Card: Bo tròn góc, nền nâu */}
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#3A332B] shadow-lg">
                {/* Nửa trên: Hình ảnh */}
                <div className="relative h-[240px] w-full shrink-0">
                  <img
                    src={project.image}
                    className="h-full w-full object-cover"
                    alt={project.title}
                  />
                  {/* Nếu có logo, hiển thị logo nổi đè lên góc trái ảnh */}
                  {project.logo && (
                    <div className="absolute top-4 left-4 rounded-lg bg-black/40 p-2 backdrop-blur-sm">
                      <img
                        src={project.logo}
                        className="h-8 w-auto object-contain"
                        alt="Logo"
                      />
                    </div>
                  )}
                </div>

                {/* Nửa dưới: Chữ */}
                <div className="flex flex-1 flex-col p-6 text-white">
                  <h2 className="font-heading mb-3 text-2xl font-bold tracking-wider">
                    {project.title}
                  </h2>
                  <div className="font-montserrat line-clamp-4 text-[13px] leading-relaxed text-white/80">
                    {Array.isArray(project.description)
                      ? project.description[0]
                      : project.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ======================================================== */}
      {/* 2. LAYOUT DESKTOP: BẢN GỐC (Chỉ hiện trên Tablet & PC) */}
      {/* ======================================================== */}
      <div className="hidden w-full md:block">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-culinary",
            prevEl: ".prev-culinary",
          }}
          loop={true}
          grabCursor={true}
          className="h-[600px] w-full shadow-xl"
        >
          {CULINARY_PROJECTS.map((project) => (
            <SwiperSlide key={`desktop-${project.id}`} className="!h-auto">
              <div className="flex h-full w-full flex-row items-stretch overflow-hidden bg-[#3A332B]">
                {/* ẢNH TRÁI */}
                <div className="h-full w-1/2 lg:w-[45%]">
                  <img
                    src={project.image}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    alt={project.title}
                  />
                </div>

                {/* CHỮ PHẢI */}
                <div className="flex flex-1 flex-col justify-between p-12 text-white lg:p-16">
                  <div className="flex flex-col">
                    {project.logo && (
                      <img
                        src={project.logo}
                        className="mb-8 h-24 w-auto self-start object-contain lg:h-32"
                        alt="Logo"
                      />
                    )}

                    <h2 className="font-heading mb-8 text-3xl font-bold tracking-wider lg:text-4xl">
                      {project.title}
                    </h2>

                    <div className="font-montserrat space-y-6 text-base leading-8 text-white/90">
                      {Array.isArray(project.description) ? (
                        project.description.map((para, index) => (
                          <p key={index}>{para}</p>
                        ))
                      ) : (
                        <p className="whitespace-pre-line">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Nút Điều Hướng */}
                  <div className="flex gap-x-4 self-end">
                    <button className="prev-culinary flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white/10 active:scale-95">
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
                    <button className="next-culinary flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white/10 active:scale-95">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VacationSlide;
