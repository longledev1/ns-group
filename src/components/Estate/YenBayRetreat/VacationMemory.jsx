import React, { useState } from "react";

const VacationMemory = () => {
  // Khai báo state để quản lý việc mở rộng/thu gọn text
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12 px-4 md:mt-20 md:px-0">
      {/* ================= SECTION 1 ================= */}
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-8">
        {/* Cột Chữ */}
        <div className="flex flex-col justify-center lg:col-span-5 lg:mt-20">
          <p className="font-heading text-primary text-2xl font-bold md:text-3xl">
            KHOẢNH KHẮC TÁI TẠO
          </p>
          <p className="font-montserrat my-6 text-[14px] leading-relaxed font-light md:text-[15px] md:leading-[30px] lg:my-10">
            Việc chăm sóc sức khỏe với nước biển, nước khoáng nóng, tắm suối,
            đắp muối bọt và rong biển tái tạo, sẽ giúp phục hồi cơ thể thêm năng
            lượng. Địa điểm lý tưởng để checkin trên cầu Ánh trắng, hoặc ghi
            hình với giọng ca của mình để làm kỉ niệm khó quên. Dành thời gian
            để chăm sóc sắc đẹp, thể hình, tập thêm bài nhảy thể dục, yoga trên
            mặt nước,...
          </p>
          <p className="font-montserrat text-sm font-normal italic md:text-base">
            Open Daily: 7:00am - 4:00pm
          </p>
        </div>

        {/* Khối 2 Ảnh */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:grid-cols-7 lg:gap-x-8">
          <div className="lg:col-span-4">
            <img
              loading="lazy"
              src="/images/estate/yenbay/vaca2.webp"
              className="h-[250px] w-full rounded-lg object-cover md:h-[400px] lg:mt-16 lg:h-full lg:rounded-none"
              alt="Khoảnh khắc 1"
            />
          </div>
          <div className="lg:col-span-3">
            <img
              loading="lazy"
              src="/images/estate/yenbay/vaca1.webp"
              className="h-[250px] w-full rounded-lg object-cover md:h-[400px] lg:h-full lg:rounded-none"
              alt="Khoảnh khắc 2"
            />
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="mt-16 mb-16 lg:mt-50 lg:mb-20">
        <div className="mb-10 grid grid-cols-1 items-center gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          {/* Cột Ảnh 1 */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <img
              loading="lazy"
              src="/images/estate/yenbay/vaca3.webp"
              className="h-[250px] w-full rounded-lg object-cover md:h-[350px] lg:h-[440px] lg:rounded-none"
              alt="Hòa mình thiên nhiên"
            />
          </div>

          {/* Cột Chữ CÓ TÍNH NĂNG XEM THÊM */}
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
            <p className="font-heading text-primary text-right text-2xl font-bold md:text-3xl">
              HÒA MÌNH CÙNG THIÊN NHIÊN
            </p>

            {/* Bọc 2 đoạn văn vào 1 thẻ div. 
                Dùng line-clamp-4 nếu chưa expand (chỉ trên mobile). 
                Lên máy tính (lg:line-clamp-none) luôn luôn hiện đủ. */}
            <div
              className={`mt-6 transition-all duration-300 lg:mt-10 ${
                !isExpanded ? "line-clamp-4 lg:line-clamp-none" : ""
              }`}
            >
              <p className="font-montserrat text-right text-[14px] leading-relaxed md:text-[15px] md:leading-[30px]">
                Sẽ thật thiếu sót nếu rời xa phố hội mà không được thưởng thức
                những hương vị ẩm thực trọn vẹn. Tại Yến Bay, du khách được Ngọc
                Sương phục vụ chu đáo từ các món miền biển dân dã của Trại Mát
                đến những quà ngon ba miền tại quán Chợ Cũ. Suốt ngày, bạn có
                thể nhâm nhi cà phê, bánh hay thưởng thức trà chiều tại ExoCafe,
                trong khi các bé vui đùa an toàn tại hồ bơi sinh học tự nhiên
                hoặc ngâm mình trong vịnh êm đềm.
              </p>
              <p className="font-montserrat mt-4 text-right text-[14px] leading-relaxed md:text-[15px] md:leading-[30px] lg:mt-8">
                Ngọc Sương phục vụ chu đáo từ các món miền biển dân dã của Trại
                Mát đến những quà ngon ba miền tại quán Chợ Cũ. Suốt ngày, bạn
                có thể nhâm nhi cà phê, bánh hay thưởng thức trà chiều tại
                ExoCafe, trong khi các bé vui đùa an toàn tại hồ bơi sinh học tự
                nhiên hoặc ngâm mình trong vịnh êm đềm.
              </p>
            </div>

            {/* Nút Xem Thêm: Chỉ hiện trên mobile/tablet (lg:hidden), ép nằm bên phải (self-end) */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="font-montserrat mt-2 self-end text-sm font-semibold text-[#1E421E] underline lg:hidden"
            >
              {isExpanded ? "Rút gọn" : "Xem thêm..."}
            </button>
          </div>
        </div>

        {/* Khối 2 Ảnh Nằm Ngang Cuối Cùng */}
        <div className="flex flex-col gap-4 md:flex-row lg:gap-x-5">
          <img
            loading="lazy"
            src="/images/estate/yenbay/vaca4.webp"
            className="h-[200px] w-full rounded-lg object-cover md:h-[300px] md:w-1/2 lg:h-full lg:rounded-none"
            alt="Biển xanh"
          />
          <img
            loading="lazy"
            src="/images/estate/yenbay/vaca5.webp"
            className="h-[200px] w-full rounded-lg object-cover md:h-[300px] md:w-1/2 lg:h-full lg:rounded-none"
            alt="Rừng nhiệt đới"
          />
        </div>
      </div>
    </div>
  );
};

export default VacationMemory;
