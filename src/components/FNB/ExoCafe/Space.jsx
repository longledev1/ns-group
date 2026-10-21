import React from "react";
const items = [
  {
    id: 1,
    image: "/images/fnb/exocafe/space_cold.png",
    text: "Không gian phòng kính có máy lạnh, yên tĩnh và mát mẻ",
  },
  {
    id: 2,
    image: "/images/fnb/exocafe/space_hot.png",
    text: "Không gian vườn cây, rợp bóng xanh, như một khu vườn nhiệt đới thu nhỏ",
  },
];
const Space = () => {
  return (
    <section className="w-full mb-[130px]">
      <div className="mb-5">
        <h2 className="font-josefin text-center text-4xl font-bold text-[#4A5D4F] lg:text-4xl">
          HAI KHÔNG GIAN
        </h2>{" "}
        <h2 className="font-josefin mt-4 text-center text-4xl font-bold text-[#4A5D4F] lg:text-4xl">
          MỘT CẢM XÚC
        </h2>
      </div>
     <div className="flex justify-center mb-[50px]">
       <p className="font-montserrat max-w-6xl mb-4 text-center leading-relaxed text-gray-700">
        <span className="font-semibold text-[#4A5D4F]">ExoCafé</span> được chia
        làm hai khu vực để chiều lòng mọi tâm trạng của bạn. Bạn có thể chọn
        phòng kính máy lạnh yên tĩnh, mát mẻ, hoặc thả mình tại khu vườn
        (garden) rợp bóng cây xanh bao quanh. Khu vườn được thiết kế mái che
        bằng những thanh gỗ mộc mạc và điểm xuyết thêm những chiếc xích đu nhỏ,
        tạo nên một góc thư giãn và lưu giữ những bức ảnh thật chill
      </p>
     </div>

        <div className="grid md:grid-cols-2 gap-6">
        
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl group"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-[280px] h-[450px] object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>

            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
              <p className="text-white text-sm md:text-base italic font-montserrat">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Space;
