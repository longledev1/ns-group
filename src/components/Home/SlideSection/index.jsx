import { Heading } from "../../Heading";
import { useState } from "react";
// import css
import "./slideup.css";
const slides = [
  {
    image: "/images/exotel.jpg",
    title: "EXOTEL YEN BAY",
    desc: `
Nằm e ấp bên những triền núi xanh và mặt biển trong veo của vịnh Cam Ranh, Exotel Yến Bay hiện lên như một viên ngọc quý giữa bãi tắm Ngọc Sương thanh bình. Nơi đây sở hữu cảnh quan độc nhất vô nhị, tạo nên bởi những khối đá hoa cương điêu khắc bởi thiên nhiên, đổ bóng xuống mặt vịnh nước trong xanh.

Không gian nghỉ dưỡng yên bình, khám phá thiên nhiên,bồi dưỡng sức khỏe và tinh thần.
`,
  },
  {
    image: "/images/retreat.png",
    title: "YEN BAY RETREAT",
    desc: `
Lối vào khu nghỉ dưỡng được ví như “con đường dẫn lên thiên đường” – uốn lượn giữa một bên là vách núi hùng vĩ, một bên là biển xanh bất tận. Mỗi khoảnh khắc đi qua cung đường ấy đều như lạc bước vào một bức tranh thủy mặc sống động, khiến bất kỳ ai cũng phải say mê.

Yen Bay Retreat không chỉ là nơi dừng chân, mà còn là hành trình đưa du khách chạm đến chuẩn mực nghỉ dưỡng đẳng cấp – nơi thiên nhiên, kiến trúc và cảm xúc hòa quyện, tạo nên một kỳ nghỉ trọn vẹn và khó quên.
`,
  },
];
export const SlideSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Heading
        title="DẤU ẤN TRÊN HÀNH TRÌNH"
        subtitle="Mỗi dự án là một câu chuyện, một hành trình kiến tạo giá trị bền vững."
        description="Mỗi công trình là một dấu ấn được khắc ghi trên hành trình phát triển — minh chứng cho tinh thần sáng tạo và giá trị bền vững của Ngọc Sương Group "
      />
      {/* SLIDE */}
      <div className="relative h-150 w-full overflow-hidden">
        {/* Images */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"} `}
          />
        ))}

        {/* Content */}
        <div className="relative flex h-full justify-end">
          <div
            key={index}
            className="flex h-full max-w-[400px] flex-col justify-center gap-4 bg-black/80 p-6 text-white"
          >
            <h2 className="text-2xl leading-tight font-bold whitespace-pre-line">
              {slides[index].title}
            </h2>

            <p className="leading-7 whitespace-pre-wrap text-white/90">
              {slides[index].desc}
            </p>

            <button className="bg-CTA mt-2 w-[150px] p-2 text-[14px] font-semibold shadow-[0_14px_6px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_8px_rgba(0,0,0,0.45)] active:translate-y-1 active:shadow-[0_8px_4px_rgba(0,0,0,0.3)]">
              XEM THÊM
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
