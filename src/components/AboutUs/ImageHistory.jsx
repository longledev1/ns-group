export const ImageHistory = () => {
  return (
    <div className="font-montserrat mt-[-81px] flex flex-col-reverse items-center justify-between gap-8 lg:mt-[-81px] lg:flex-row lg:gap-10">
      <div className="w-full px-4 text-center text-[14px] leading-relaxed font-light italic md:px-10 lg:ml-[120px] lg:w-1/2 lg:max-w-xl lg:px-0 lg:text-left lg:text-[15px]">
        Trại Mát Ngọc Sương - tại Ba Ngòi, Cam Ranh - là cái nôi nuôi dưỡng tình
        yêu dành cho ẩm thực. Món ăn dân dã, nụ cười niềm nở của chủ nhà cộng
        với không khí gia đình ấm áp, nơi đây từng là điểm thu hút rất nhiều
        thực khách địa phương và khách du lịch.
      </div>

      <div className="relative w-full overflow-hidden lg:w-1/2">
        <img
          src="/images/ongTranTuong1.avif"
          className="h-full w-full object-cover"
          alt="Trại Mát Ngọc Sương"
        />
        <div className="bg-tertiary/90 absolute right-0 bottom-0 left-0 p-4 font-sans text-xs text-white md:p-6 md:text-sm">
          <p className="text-center md:text-left">
            Ảnh chụp ông Trần Tương (phải) và du khách người Hàn Quốc
          </p>
        </div>
      </div>
    </div>
  );
};
