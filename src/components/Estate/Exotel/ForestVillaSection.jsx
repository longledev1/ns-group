import React from "react";

const ForestVillaSection = () => {
  return (
    <div className="text-primary mt-8 md:mt-16 lg:mt-[130px]">
      <div className="mb-5 flex gap-x-[30px]">
        <div className="">
          <img
            loading="lazy"
            className="w-full object-cover"
            src="/images/estate/exotel/forrest1.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-8 flex flex-col text-6xl">
            <h2 className="font-heading text-right font-light">
              KHI <span className="font-semibold">KHÔNG GIAN</span>
            </h2>
            <h2 className="font-heading mt-[1px] text-right font-light">
              HÒA VÀO <span className="font-semibold">CẢNH QUAN</span>
            </h2>
            <div className="mt-8 text-base">
              <p className="font-montserrat mb-4 text-right leading-[30px]">
                Những ngôi nhà gỗ xinh xắn và tiện nghi nằm đan xen giữa rặng
                dừa rợp bóng mát sẽ làm thay đổi diện mạo mới cho Bãi Lao.
              </p>{" "}
              <p className="font-montserrat text-right leading-[30px]">
                Mô hình Exotel có kiểu dáng trẻ trung, hiện đại, giá cả phù hợp
                sẽ lôi cuốn nhiều khách du lịch tìm đến. Kết hợp với cảnh quan
                thiên nhiên một cách hoàn hảo sẽ tạo thành điểm nhấn để lại
                nhiều ấn tượng cho những người từng dừng chân tại đây.
              </p>
            </div>
          </div>
          <div className="">
            <img
              className="h-[400px] w-full object-cover"
              loading="lazy"
              src="/images/estate/exotel/forrest2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          className="h-[448px] w-full object-cover"
          loading="lazy"
          src="/images/estate/exotel/forrest3.webp"
          alt=""
        />
        <img
          className="h-[448px] w-full object-cover"
          loading="lazy"
          src="/images/estate/exotel/forrest4.webp"
          alt=""
        />
        <img
          className="h-[448px] w-full object-cover"
          loading="lazy"
          src="/images/estate/exotel/forrest5.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default ForestVillaSection;
