export const ImageHistory = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="ml-[120px] max-w-xl text-left text-[18px] leading-[32px] italic">
        Trại Mát Ngọc Sương - tại Ba Ngòi, Cam Ranh - là cái nôi nuôi dưỡng tình
        yêu dành cho ẩm thực. Món ăn dân dã, nụ cười niềm nở của chủ nhà cộng
        với không khí gia đình ấm áp, nơi đây từng là điểm thu hút rất nhiều
        thực khách địa phương và khách du lịch.
      </div>
      <div className="relative h-full w-full overflow-hidden">
        <img
          src="/images/ongTranTuong1.avif"
          className="h-full w-full object-cover"
          alt=""
        />
        <div className="bg-tertiary/90 text-CTA absolute right-0 bottom-0 left-0 p-6">
          <p className="italic">
            Ảnh chụp ông Trần Tương (phải) và du khách người Hàn Quốc
          </p>
        </div>
      </div>
    </div>
  );
};
