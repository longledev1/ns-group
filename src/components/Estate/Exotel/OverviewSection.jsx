import React from "react";

const OverviewSection = () => {
  return (
    <div className="text-primary grid grid-cols-2 items-center">
      <div className="w-full max-w-[433px]">
        <img
          loading="lazy"
          src="/images/estate/exotel/exotel_overview.webp"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="ml-[-88px]">
        <h2 className="font-heading mb-10 text-[60px] font-bold">
          EXOTEL YEN BAY
        </h2>
        <p className="font-montserrat mb-4 leading-[30px]">
          Vận hành bởi{" "}
          <span className="font-bold">Exotel (Ngọc Sương Group)</span> – biểu
          tượng mới của{" "}
          <span className="font-bold">ngành hiếu khách Việt Nam</span> khu nghỉ
          dưỡng mang đến sự hài hòa giữa phong cách thanh lịch và vẻ đẹp nguyên
          sơ của thiên nhiên. Không gian yên bình, tách biệt khỏi phố thị, mở ra
          trải nghiệm nghỉ dưỡng thư thái tuyệt đối.
        </p>
        <p className="font-montserrat leading-[30px]">
          Hệ thống phòng đa dạng gồm suite giữa rừng, biệt thự trên sườn đồi,
          phòng khách sạn dưới tán dừa và water villa trên mặt nước. Mỗi không
          gian đều sở hữu tầm nhìn ấn tượng hướng ra Vịnh Yến và đảo đá Thiên
          Thai.
        </p>
      </div>
    </div>
  );
};

export default OverviewSection;
