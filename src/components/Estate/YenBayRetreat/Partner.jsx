import React from "react";

const Partner = () => {
  return (
    <div className="flex flex-col gap-y-10 text-center">
      {/* Tiêu đề chung */}
      <p className="font-heading text-3xl font-bold text-[#1E421E] md:text-5xl">
        ĐỐI TÁC
      </p>

      {/* Nội dung chung */}
      <div className="font-montserrat mx-auto flex max-w-4xl px-4 text-sm leading-relaxed md:px-0 md:text-base">
        <p>
          <span className="font-bold">YenBay Retreat</span> được bảo chứng bởi
          các đối tác chiến lược hàng đầu. Chúng tôi cùng nhau kiến tạo sự duy
          mỹ trong thiết kế, sự vững chãi trong thi công và sự tinh tế trong vận
          hành để mang lại trải nghiệm độc bản cho khách hàng.
        </p>
      </div>

      {/* ========================================= */}
      {/* 1. LAYOUT MOBILE MỚI (Ẩn trên md trở lên) */}
      {/* ========================================= */}
      <div className="flex flex-col gap-y-8 px-4 md:hidden">
        {/* Ảnh */}
        <img
          src="/images/partner.svg"
          className="w-full rounded-lg object-cover shadow-sm"
          alt="Đối tác"
        />

        {/* 2 Dự án */}
        <div className="flex justify-between border-b border-[#1E421E]/20 pb-6 text-left">
          <div className="flex flex-col gap-y-1">
            <p className="text-lg font-bold text-[#1E421E]">Yen Bay Estate</p>
            <p className="font-montserrat text-[10px] font-light text-gray-600 uppercase sm:text-xs">
              EXCLUSIVE BAYVIEW VILLAS
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-right">
            <p className="text-lg font-bold text-[#1E421E]">Yen Bay Cliff</p>
            <p className="font-montserrat text-[10px] font-light text-gray-600 uppercase sm:text-xs">
              WELLNESS SPRING RETREAT
            </p>
          </div>
        </div>

        {/* Chủ đầu tư & Phát triển (ĐÃ PHÓNG TO LOGO) */}
        <div className="flex items-center justify-between border-b border-[#1E421E]/20 pb-6">
          <div className="flex w-1/2 flex-col items-center gap-y-3 border-r border-[#1E421E]/20 pr-4">
            <p className="font-bold text-[#1E421E]">Chủ đầu tư</p>
            <img
              src="/images/nscorporation.svg"
              className="h-30 w-full object-contain"
              alt="NS Corporation"
            />
          </div>
          <div className="flex w-1/2 flex-col items-center gap-y-3 pl-4">
            <p className="font-bold text-[#1E421E]">Phát triển</p>
            <img
              src="/images/exolandmark.svg"
              className="h-30 w-full object-contain"
              alt="Exo Landmark"
            />
          </div>
        </div>

        {/* Danh sách thông tin (ĐÃ CHIA 2 CỘT) */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-left">
          {/* Master Planning */}
          <div className="flex flex-col gap-y-1">
            <p className="text-xs font-bold text-[#1E421E]">MASTER PLANNING</p>
            <p className="text-[12px] font-medium">KT QUY HOẠCH</p>
            <p className="text-[12px] text-gray-600">
              KTs. Hoàng + Phúc - AA STUDIO DESIGN (Italy)
            </p>
          </div>

          {/* Architecture */}
          <div className="flex flex-col gap-y-1">
            <p className="text-xs font-bold text-[#1E421E]">ARCHITECTURE</p>
            <p className="text-[12px] font-medium">THIẾT KẾ</p>
            <p className="text-[12px] text-gray-600">
              KTs. Dũng - DD CONCEPT (England)
            </p>
          </div>

          {/* Decoration */}
          <div className="flex flex-col gap-y-1">
            <p className="text-xs font-bold text-[#1E421E]">DECORATION</p>
            <p className="text-[12px] font-medium">TRANG TRÍ</p>
            <p className="text-[12px] text-gray-600">EXORA (France)</p>
          </div>

          {/* Pools */}
          <div className="flex flex-col gap-y-1">
            <p className="text-xs font-bold text-[#1E421E]">POOLS</p>
            <p className="text-[12px] font-medium">HỒ BƠI SINH HỌC</p>
            <p className="text-[12px] text-gray-600">By BIO DESIGN (Italy)</p>
          </div>

          {/* Management */}
          <div className="flex flex-col gap-y-1">
            <p className="text-xs font-bold text-[#1E421E]">MANAGEMENT</p>
            <p className="text-[12px] font-medium">QUẢN LÝ VẬN HÀNH</p>
            <p className="text-[12px] text-gray-600">EXOTEL (NS Group)</p>
          </div>

          {/* Restaurant (Chiếm 2 cột để có không gian chứa 2 danh sách nhỏ) */}
          <div className="flex flex-col gap-y-2">
            <p className="text-xs font-bold text-[#1E421E]">RESTAURANT</p>
            <div className="flex gap-x-16 text-[12px] text-gray-600">
              <div className="flex flex-col gap-y-1">
                <p>MARINA</p>
                <p>YEN BAY</p>
                <p>CHO CU</p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p>TRAI MAT</p>
                <p>KINGCLAM</p>
                <p>EXOCAFÉ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================ */}
      {/* 2. LAYOUT DESKTOP GIỮ NGUYÊN BẢN (Ẩn trên Mobile) */}
      {/* ================================================ */}
      <div className="hidden grid-cols-12 gap-x-5 md:grid">
        <div className="col-span-5">
          <img src="/images/partner.svg" className="object-cover" alt="" />
        </div>
        <div className="col-span-7">
          <div className="flex flex-col gap-y-8">
            {/* 1 */}
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-bold">Yen Bay Estate</p>
                <p className="font-montserrat font-light uppercase">
                  EXCLUSIVE BAYVIEW VILLAS
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-bold">Yen Bay Cliff</p>
                <p className="font-montserrat font-light uppercase">
                  WELLNESS SPRING RETREAT{" "}
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex justify-center gap-x-10">
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-bold">Chủ đầu tư</p>
                <img
                  src="/images/nscorporation.svg"
                  className="relative -top-[20px]"
                  alt=""
                />
              </div>{" "}
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-bold">Phát triển</p>
                <img
                  src="/images/exolandmark.svg"
                  className="relative -top-[60px]"
                  alt=""
                />
              </div>
            </div>
            {/* 3 */}
            <div className="flex justify-center">
              <div className="relative top-[-140px] left-[50px] flex flex-col justify-center gap-y-5">
                {/* Master planning */}
                <div className="grid grid-cols-2">
                  <div className="flex justify-start">
                    <p className="font-bold">MASTER PLANNING</p>
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <p>KT QUY HOẠCH </p>
                    <p>KTs. Hoàng + Phúc - AA STUDIO DESIGN (Italy)</p>
                  </div>
                </div>
                {/* Architecture */}
                <div className="grid grid-cols-2">
                  <div className="flex justify-start">
                    <p className="font-bold">ARCHITECTURE</p>
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <p>THIẾT KẾ </p>
                    <p>KTs. Dũng - DD CONCEPT (England)</p>
                  </div>
                </div>
                {/* DECORATION */}
                <div className="grid grid-cols-2">
                  <div className="flex justify-start">
                    <p className="font-bold">DECORATION</p>
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <p>TRANG TRÍ</p>
                    <p>EXORA (France)</p>
                  </div>
                </div>
                {/* POOLS */}
                <div className="grid grid-cols-2">
                  <div className="flex justify-start">
                    <p className="font-bold">POOLS</p>
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <p>HỒ BƠI SINH HỌC</p>
                    <p>By BIO DESIGN (Italty)</p>
                  </div>
                </div>
                {/* Management */}
                <div className="grid grid-cols-2">
                  <div className="flex justify-start">
                    <p className="font-bold">MANAGEMENT</p>
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <p>QUẢN LÝ VẬN HÀNH</p>
                    <p>EXOTEL (NS Group)</p>
                  </div>
                </div>
                {/* Restaurant */}
                <div className="grid grid-cols-2">
                  <div className="flex justify-start">
                    <p className="font-bold">RESTAURANT</p>
                  </div>
                  <div className="flex gap-x-8">
                    <div className="flex flex-col items-start text-sm">
                      <p>MARINA</p>
                      <p>YEN BAY</p>
                      <p>CHO CU</p>
                    </div>{" "}
                    <div className="flex flex-col items-start text-sm">
                      <p>TRAI MAT</p>
                      <p>KINGCLAM</p>
                      <p>EXOCAFÉ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
