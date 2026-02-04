import React from "react";

const SpaceSGM = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold"> TUYỆT TÁC VIỄN DU</h1>
      <div className="bg-primary mt-2 h-1 w-30 md:block md:w-45"></div>
      <div className="mt-10 grid grid-cols-3 gap-y-5">
        <div className="relative h-100 w-100 overflow-hidden">
          <img
            src="/images/space1.svg"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-2 text-white">
            <p className="text-center italic">
              Nội thất độc đáo với bàn ăn hình thoi
            </p>
          </div>
        </div>
        <div className="relative h-100 w-100 overflow-hidden">
          <img
            src="/images/space2.svg"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-2 text-white">
            <p className="text-center italic">Phòng VIP - Phong cách Rivia</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mt-4 text-center leading-8">
            Mỗi không gian tại Saigon Marina đều sở hữu một linh hồn riêng biệt.
            Từ phòng VIP Monaco xa hoa đến phong cách Rivia lịch lãm, chúng tôi
            kiến tạo những điểm chạm thị giác độc bản để tôn vinh đẳng cấp của
            chủ nhân bữa tiệc. Dù là một buổi tối lãng mạn bên khung cửa hướng
            biển hay một cuộc họp đối tác chiến lược, sự riêng tư và tinh tế
            luôn được đặt lên hàng đầu.
          </p>
        </div>
        {/* STEP 2 */}
        <div className="relative h-100 w-100 overflow-hidden">
          <img
            src="/images/space3.svg"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-2 text-white">
            <p className="text-center italic">Phòng VIP - Phong cách Monaco</p>
          </div>
        </div>
        <div className="relative h-100 w-100 overflow-hidden">
          <img
            src="/images/space4.svg"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-2 text-white">
            <p className="text-center italic">
              Hành lang - với cảnh biển theo lối đi
            </p>
          </div>
        </div>{" "}
        <div className="relative h-100 overflow-hidden">
          <img
            src="/images/space5.avif"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-2 text-white">
            <p className="text-center italic">
              Không gian bếp sạch sẽ - cao cấp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceSGM;
