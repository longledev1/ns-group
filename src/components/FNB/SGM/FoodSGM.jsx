import React from "react";

const FoodSGM = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">TINH HOA VỊ GIÁC</h1>
      <div className="bg-primary mt-2 h-1 w-30 md:block md:w-45"></div>

      <div className="mt-10 mb-10 flex items-center justify-between">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Left Image Section */}
          <div className="relative h-[970px]">
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
              alt="Canapé dish"
              className="h-full w-full object-cover"
            />
            {/* Decorative elements overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col p-12">
            {/* Top Content */}
            <div>
              <h1 className="mb-4 text-5xl font-light tracking-wide lg:text-6xl">
                Canapé
              </h1>
              <div className="mb-8 text-center text-6xl font-light lg:text-7xl">
                &
              </div>
              <h2 className="mb-12 text-right text-4xl font-light tracking-wide lg:text-5xl">
                Individual
              </h2>

              <p className="mb-4 text-sm leading-8 font-light lg:text-base">
                Sự giao thoa giữa nét phóng khoáng của đại dương và sự chuẩn mực
                của ẩm thực tinh hoa. Mỗi khẩu phần là một lời khẳng định về
                đẳng cấp phục vụ, mang đến sự tiện lợi nhưng không kém phần sang
                trọng. Hãy để những hương vị nhỏ bé này mở đường cho một hành
                trình viễn du đầy cảm hứng, nơi sự tinh tế được đặt lên hàng đầu
                trong từng chi tiết.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="mt-8 flex-1">
              <div className="relative h-full overflow-hidden">
                <img
                  src="https://www.tasteofhome.com/wp-content/uploads/2025/05/Greek-Shrimp-Canapes_FT25_173406_EC_0416_3.jpg"
                  alt="Seafood dish"
                  className="h-[435px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STEP 2 */}
      <div className="mt-10 flex items-center justify-between">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Right Content Section */}
          <div className="flex flex-col p-12">
            {/* Top Content */}
            <div>
              <h1 className="mb-4 ml-[20px] text-5xl font-light tracking-wide lg:text-6xl">
                Fresh
              </h1>
              <div className="mb-8 text-center text-6xl font-light lg:text-7xl">
                &
              </div>
              <h2 className="mr-[80px] mb-12 text-right text-4xl font-light tracking-wide lg:text-5xl">
                Raw
              </h2>

              <p className="mb-4 text-sm leading-8 font-light lg:text-base">
                Tinh hoa đại dương trong từng lát cắt, là sự tôn vinh vẻ đẹp
                nguyên bản của hải sản, mang đến cảm nhận sảng khoái và sang
                trọng bậc nhất. Đây là điểm khởi đầu hoàn mỹ cho bữa tiệc thượng
                lưu bên bờ sông Sài Gòn, nơi những gì tươi ngon nhất được phục
                vụ theo cách tinh tế nhất dành riêng cho giới sành ăn.
              </p>
            </div>

            {/* Bottom Image */}
            <div className="mt-8 flex-1">
              <div className="relative -ml-[48px] h-full w-[600px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629131148968-cc429c4b0ed3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Seafood dish"
                  className="h-[435px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Left Image Section */}
          <div className="relative h-[970px] w-[590px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1708011763377-cabc5986cc55?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Canapé dish"
              className="h-full w-full object-cover"
            />
            {/* Decorative elements overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSGM;
