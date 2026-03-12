import React from "react";

const MenuKingClam = () => {
  const menuCategories = [
    {
      title: "STEAKS",
      items: [
        { name: "Ribeye Steak", price: "$12" },
        { name: "Ney York Strip", price: "$14" },
        { name: "Filet Mignon", price: "$20" },
        { name: "T-Bone Steak", price: "$22" },
        { name: "Porterhouse Steak", price: "$17" },
      ],
    },
    {
      title: "CHICKEN DISHES",
      items: [
        { name: "BBQ", price: "$11" },
        { name: "Honey Garlic Chicken Wings", price: "$19" },
        { name: "Chicken Skewer with Vegetables", price: "$12" },
        { name: "Lemon Herb Chicken Breasts", price: "$14" },
        { name: "Spicy Marinated Chicken Thighs", price: "$11" },
      ],
    },
  ];
  return (
    <div className="">
      <div className="mx-auto -mt-[80px]">
        {/* Tiêu đề chính */}
        <h2 className="mb-16 text-center text-3xl tracking-[0.2em] text-[#1a1a1a] uppercase md:text-3xl">
          Hương vị từ lửa hồng
        </h2>

        {/* Lưới Menu */}
        <div className="flex justify-center">
          {" "}
          {/* Thêm padding horizontal để không bị dính lề trên mobile */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {[...menuCategories, ...menuCategories].map((category, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-md p-7 text-white shadow-xl transition-transform hover:scale-[1.01]"
              >
                {/* LAYER 1: Ảnh nền */}
                <div
                  className="absolute inset-0 z-0 scale-105 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80')",
                  }}
                ></div>

                {/* LAYER 2: Lớp phủ Kính mờ (Backdrop Blur) */}
                <div className="absolute inset-0 z-0 bg-black/55 backdrop-blur-lg"></div>

                {/* LAYER 3: Nội dung Menu (Kích thước vừa vặn) */}
                <div className="relative z-10 w-full">
                  {/* Tiêu đề: text-2xl nhìn sẽ bề thế hơn */}
                  <h3 className="mb-5 text-center font-sans text-2xl font-black tracking-tighter uppercase italic">
                    {category.title}
                  </h3>

                  {/* Khoảng cách các dòng: space-y-3 giúp menu không bị nén quá mức */}
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li
                        key={i}
                        className="group flex cursor-pointer items-end justify-between pb-1.5 transition-colors hover:border-white/40"
                      >
                        {/* Font chữ text-sm/base là cỡ chuẩn để đọc thoải mái */}
                        <span className="text-sm font-medium tracking-wide uppercase md:text-base">
                          {item.name}
                        </span>
                        <span className="font-serif text-base font-bold md:text-lg">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuKingClam;
