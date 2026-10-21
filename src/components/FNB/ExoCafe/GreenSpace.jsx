import React from "react";

const GreenSpace = () => {
  return (
    <section className="">
      <div className="">
        {/* TOP GRID */}
        <div className="mb-10 grid items-center gap-10 lg:grid-cols-2">
          {/* IMAGE LEFT */}
          <div>
            <img
              loading="lazy"
              src="/images/fnb/exocafe/space_1.png"
              alt=""
              className="h-[300px] w-full rounded-2xl object-cover md:h-[380px]"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="text-[#4A5D4F]">
            <h2 className="mb-6 font-josefin text-3xl leading-tight font-bold md:text-4xl text-right lg:text-5xl">
              CÁNH CỬA VÙNG <br /> XANH MÁT
            </h2>

            <p className="text-sm leading-relaxed text-gray-600 md:text-base font-montserrat text-right">
              Bước qua cánh cửa của exocafe, bạn như bỏ lại sau lưng nhịp sống
              hối hả để bước vào một thế giới thiên nhiên hài hòa. Với những
              tone màu tự nhiên, tươi mát, mộc mạc làm chủ đạo, không gian nơi
              đây mang đến cảm xúc bình yên nhẹ nhàng, đánh thức mọi giác quan
              bằng tiếng chim hót lanh lảnh, tiếng nước chảy róc rách và âm
              thanh của gió xào xạc qua từng kẽ lá.
            </p>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* IMAGE LEFT */}
          <img
            loading="lazy"
            src="/images/fnb/exocafe/space_2.png"
            alt=""
            className="h-[300px] w-full rounded-2xl object-cover md:h-[400px]"
          />

          {/* IMAGE RIGHT */}
          <img
            loading="lazy"
            src="/images/fnb/exocafe/space_3.png"
            alt=""
            className="h-[300px] w-full rounded-2xl object-cover md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GreenSpace;
