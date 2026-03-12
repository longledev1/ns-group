export const Heading = ({ title, description }) => {
  return (
    // Mobile & Tablet: Xếp dọc, cách nhau bằng gap-y-4. Desktop (lg): Xếp ngang, canh giữa 2 bên
    <div className="mb-8 flex flex-col gap-y-4 md:mb-10 lg:mb-12 lg:flex-row lg:justify-between">
      {/* Cụm Tiêu đề + Đường gạch ngang */}
      <div className="flex items-center gap-x-3 md:gap-x-4">
        {/* Đường gạch ngang: scale độ dài và độ dày theo màn hình. shrink-0 giúp nó không bị bóp méo khi text dài */}
        <div className="bg-primary h-1.5 w-16 shrink-0 md:h-2 md:w-24 lg:w-45"></div>

        {/* Font size: Mobile 22px, Tablet 28px, Desktop 34px */}
        <h2 className="text-primary font-heading text-[22px] leading-tight font-bold uppercase md:text-[28px] lg:text-[34px]">
          {title}
        </h2>
      </div>

      {/* Cụm Description (Không ẩn nữa) */}
      {description && (
        <div className="font-montserrat w-full text-[14px] leading-relaxed text-[#a09494] md:text-[14px] lg:w-[650px] lg:text-left">
          {description}
        </div>
      )}
    </div>
  );
};
