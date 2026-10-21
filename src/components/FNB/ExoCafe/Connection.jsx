import React from "react";

const Connection = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex justify-between mb-[30px]">
        <div>
          <h2 className="font-josefin text-4xl font-bold text-[#C84928] lg:text-4xl">
            TRẢI NGHIỆM GẮN KẾT
          </h2>
          <p className="font-josefin mt-1 text-2xl font-light text-[#495045]">
            Bếp Show & Quầy Bar Mở
          </p>
        </div>
        <div className="max-w-xl mt-[-10px] text-base text-gray-700 leading-relaxed">
          <p className="font-montserrat">
            Tại exocafé, khoảng cách giữa bạn và những người thợ tài hoa được
            xóa nhòa hoàn toàn. Ngồi lại bên quầy bar mộc mạc, bạn sẽ được tận
            mắt thầy nhịp điệu tỉ mỉ của việc tạo hình bánh, châm từng giọt cà
            phê hay đơn giản là nhận lấy nụ cười ấm áp từ những người tạo ra
            chúng.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <img src="/images/fnb/exocafe/connect_1.png" alt="" className="object-cover" />
        <img src="/images/fnb/exocafe/connect_2.png" alt="" className="object-cover mt-[60px]" />
        <img src="/images/fnb/exocafe/connect_3.png" alt="" className="object-cover mt-[120px]" />
      </div>
    </div>
  );
};

export default Connection;
