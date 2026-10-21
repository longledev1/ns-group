import React from "react";
import MenuSlider from "./MenuFood";
const Tropicana = () => {
  return (
    <div className="mt-[100px]">
      <div className="mb-[30px] flex items-center justify-between text-white">
        <div>
          <h2 className="font-josefin text-4xl font-bold lg:text-4xl">
            HƯƠNG VỊ TROPICANA
          </h2>
          <div className="h-2 w-[200px] bg-white"></div>
        </div>
        <div className="mt-[-10px] max-w-xl text-base leading-relaxed">
          <p className="font-montserrat">
            Gói trọn sự tươi mới của thiên nhiên vào từng công thức. Hãy để vị
            giác của bạn được đánh thức bởi những thức uống pha chế thủ công và
            các dòng bánh ngọt đặc trưng, được chế tác tỉ mỉ từ nguồn nguyên
            liệu bản địa ngập tràn hương sắc nhiệt đới
          </p>
        </div>
      </div>
      <MenuSlider />
    </div>
  );
};

export default Tropicana;
