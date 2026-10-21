import React from 'react'

const AboutExoCafe = () => {
  return (
     <section className="w-full ">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="relative">
          {/* Leaf background */}
          <img
            src="/images/fnb/exocafe/leaf.png" 
            alt="leaf"
            className="absolute -top-70 -left-40 w-[500px] opacity-30 pointer-events-none"
          />

          {/* Text content */}
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-4xl font-josefin text-center font-bold text-[#4A5D4F] mb-6">
              CHUYỆN MIỀN NHIỆT ĐỚI
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-montserrat text-center">
              <span className="font-semibold text-[#4A5D4F]">ExoCafe</span> là mô hình nước giải
              khát kết hợp bánh ngọt mang phong cách miền nhiệt đới, thể hiện
              trong nguyên liệu/thành phần của các món bánh và nước uống kết hợp
              với không gian của quán.
            </p>

            <p className="text-gray-700 leading-relaxed font-montserrat text-center">
              Không gian hướng về thiên nhiên với nhiều mảng cây xanh, mang nét
              bụi bặm của đá granit tại Vĩnh Yên, sự ấm cúng của gỗ tự nhiên trong
              nội thất và những mảng màu rực rỡ của tranh treo trên tường để tạo
              điểm nhấn.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/images/fnb/exocafe/about_exo.png" 
            alt="cafe"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutExoCafe