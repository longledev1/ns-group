import React from "react";

const GrillBar = () => {
  return (
    <section className="">
      <div className="">
        {/* HÀNG 1: ẢNH TRÊN BÊN TRÁI & TEXT BÊN PHẢI */}
        <div className="mb-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Ảnh lớn hàng trên */}
          <div className="h-[350px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"
              alt="Kitchen Fire"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Khối văn bản */}
          <div className="px-4 text-center md:text-left lg:px-10">
            <h2 className="mb-8 text-4xl tracking-[0.2em] text-[#1a1a1a] uppercase md:text-3xl">
              GRILL & BAR
            </h2>
            <p className="text-justify text-sm leading-relaxed font-light text-gray-700 md:text-base">
              Lấy cảm hứng từ mô hình bếp mở trình diễn, nơi từng món ăn được
              chế biến trực tiếp trên ngọn lửa rực cháy. Không chỉ là thưởng
              thức, đây là trải nghiệm thị giác và hương vị hòa quyện, dẫn dắt
              thực khách khám phá không gian Saigon Promenade theo cách hiện
              đại, sống động và đầy cuốn hút.
            </p>
          </div>
        </div>

        {/* HÀNG 2: 2 ẢNH DỌC BÊN TRÁI & 1 ẢNH NGANG BÊN PHẢI */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 lg:gap-10">
          {/* Cụm 2 ảnh dọc bên trái (Chiếm 5/12 cột) */}
          <div className="grid h-[450px] grid-cols-2 gap-6 md:col-span-5">
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80"
                alt="Chef at work"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
                alt="Bar counter"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Ảnh ngang lớn bên phải (Chiếm 7/12 cột) */}
          <div className="relative h-[450px] overflow-hidden md:col-span-7">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"
              alt="Kitchen staff"
              className="h-full w-full object-cover shadow-sm"
            />
            {/* Tag nhỏ giả lập chữ trong ảnh (nếu cần) */}
            <div className="absolute top-8 right-8 text-xl font-bold tracking-tighter text-white opacity-80 md:text-2xl">
              SAVE WATER. DRINK WINE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrillBar;
