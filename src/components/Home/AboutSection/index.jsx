import { Heading } from "../../Heading";

export const AboutSection = () => {
  return (
    <div>
      <Heading
        title="CHUYỆN SÁNG LẬP"
        subtitle="Nơi những giá trị Việt được cảm nhận bằng cảm xúc và ký ức."
        description="Giữ hồn Việt không chỉ là bảo tồn truyền thống, mà là thổi vào đó hơi thở của thời đại mới."
      />

      {/* COLUMN 1 */}
      <div className="mt-10 flex flex-col-reverse items-center justify-between gap-y-10 lg:mt-16 lg:flex-row lg:gap-x-12">
        {/* Đổi w-[700px] thành w-full lg:w-1/2 */}
        <div className="text-primary flex w-full flex-col gap-y-6 text-center leading-[30px] lg:w-1/2 lg:leading-[35px]">
          <p className="text-primary font-heading text-center text-[24px] font-bold lg:text-[28px]">
            “ CHO ĐỜI ĐẸP HƠN ”
          </p>
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent lg:mt-[-20px]"></div>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Khởi nghiệp tại Pháp và trở về Việt Nam từ những năm 1990, ông Trần
            Anh Dũng – nhà sáng lập NSG – đã đặt nền móng cho hành trình phát
            triển bền vững trong lĩnh vực F&B, với chuỗi Nhà hàng Hải sản Ngọc
            Sương trải dài khắp Việt Nam.
          </p>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Mang triết lý “Cho đời đẹp hơn”, ông dành trọn đam mê để sáng tạo và
            gìn giữ hồn Việt trong từng trải nghiệm ẩm thực.
          </p>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Với ông, mỗi món ăn là một câu chuyện, mỗi không gian là một cảm
            xúc.
          </p>
          <div className="flex justify-center">
            <button className="font-montserrat mt-6 cursor-pointer border border-[#BFA15F] bg-transparent px-8 py-3.5 text-sm tracking-widest text-[#BFA15F] uppercase transition-all duration-500 ease-in-out hover:bg-[#BFA15F] hover:text-white lg:mt-10">
              Khám phá thêm
            </button>
          </div>
        </div>

        <div className="group relative w-full lg:w-1/2 lg:px-0">
          <div className="absolute top-6 -right-2 -z-10 hidden h-full w-full max-w-[480px] border border-[#BFA15F]/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 md:block lg:-right-6"></div>
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden shadow-2xl lg:ml-auto">
            <img
              src="/images/chairman.png"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              alt="Ông Trần Anh Dũng"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute right-0 bottom-0 left-0 p-6 text-white md:p-10">
              <p className="mb-3 font-serif text-lg leading-snug italic md:text-2xl lg:mb-5 lg:text-xl">
                "Mỗi món ăn là một câu chuyện, mỗi không gian là một cảm xúc."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-white/70"></div>
                <p className="font-montserrat text-[10px] tracking-widest text-white/90 uppercase lg:text-[11px]">
                  Ông Trần Anh Dũng - CHỦ TỊCH NSG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COLUM 2 */}
      <div className="mt-16 flex flex-col items-center justify-between gap-y-10 lg:mt-24 lg:flex-row lg:gap-x-12">
        <div className="group relative w-full lg:w-1/2 lg:px-0">
          <div className="absolute top-6 -right-2 -z-10 hidden h-full w-full max-w-[480px] border border-[#BFA15F]/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 md:block lg:-right-6"></div>
          <div className="relative aspect-[5/5] w-full max-w-[580px] overflow-hidden shadow-2xl lg:mr-auto">
            <img
              src="/images/NSMarina_2.jpg"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              alt="Nhà hàng Ngọc Sương"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute right-0 bottom-0 left-0 p-6 text-white md:p-10">
              <p className="mb-3 font-serif text-lg leading-snug italic lg:mb-5 lg:text-xl">
                Hình ảnh thực khách thưởng thức món ăn tại nhà hàng Ngọc Sương
              </p>
            </div>
          </div>
        </div>

        <div className="text-primary flex w-full flex-col gap-y-6 text-center leading-[30px] lg:w-1/2 lg:leading-[35px]">
          <div className="text-primary font-heading text-center text-[24px] font-bold lg:text-[28px]">
            <p>TÔN VINH GIÁ TRỊ CỦA</p>
            <p>ẨM THỰC VIỆT NAM</p>
          </div>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Xây dựng thương hiệu mang các giá trị văn hóa Việt Nam từ nguyên vật
            liệu, không gian, chất liệu, món ăn, phong cách...
          </p>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Kết hợp với ẩm thực thế giới tại thị trường nội địa để nhắm vào
            khách hàng địa phương. Nhưng sẽ thuần Việt khi đưa ra thị trường
            Quốc Tế nhằm khẳng định giá trị ẩm thực Việt Nam
          </p>
          <div className="flex justify-center">
            <button className="font-montserrat mt-6 cursor-pointer border border-[#BFA15F] bg-transparent px-8 py-3.5 text-sm tracking-widest text-[#BFA15F] uppercase transition-all duration-500 ease-in-out hover:bg-[#BFA15F] hover:text-white lg:mt-10">
              Khám phá thêm
            </button>
          </div>
        </div>
      </div>

      {/* COLUMN 3 */}
      <div className="mt-16 flex flex-col-reverse items-center justify-between gap-y-10 lg:mt-24 lg:flex-row lg:gap-x-12">
        <div className="text-primary flex w-full flex-col gap-y-6 text-center leading-[30px] lg:w-1/2 lg:leading-[35px]">
          <div className="text-primary font-heading text-center text-[24px] font-bold lg:text-[28px]">
            <p>ĐỜI SỐNG HIỆN ĐẠI GIỮA</p>
            <p>THIÊN NHIÊN HOANG DÃ</p>
          </div>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Với dự án Khu Du Lịch Sinh Thái Ngọc Sương đã thay đổi bộ mặt của
            ngành du lịch tại Cam Ranh từ những năm 1990.
          </p>
          <p className="font-montserrat px-4 text-[14px] leading-[26px] font-light tracking-normal lg:px-0 lg:text-[15px] lg:leading-[30px]">
            Từ một bán đảo hoang sơ, chưa có lối đi vào và điều kiện cơ sở hạ
            tầng còn sơ khai, Vịnh Cam Ranh ngày nay đã phát triển, trở thành
            một trong những điểm đến để du lịch và nghỉ dưỡng lý tưởng cho nhiều
            du khách trong nước và cả nước ngoài.
          </p>
          <div className="flex justify-center">
            <button className="font-montserrat mt-6 cursor-pointer border border-[#BFA15F] bg-transparent px-8 py-3.5 text-sm tracking-widest text-[#BFA15F] uppercase transition-all duration-500 ease-in-out hover:bg-[#BFA15F] hover:text-white lg:mt-10">
              Khám phá thêm
            </button>
          </div>
        </div>

        <div className="group relative w-full lg:w-1/2 lg:px-0">
          <div className="absolute top-6 -right-2 -z-10 hidden h-full w-full max-w-[480px] border border-[#BFA15F]/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 md:block lg:-right-6"></div>
          <div className="relative aspect-[5/5] w-full max-w-[580px] overflow-hidden shadow-2xl lg:ml-auto">
            <img
              src="/images/villa2.png"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              alt="Villa Ngọc Sương"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute right-0 bottom-0 left-0 p-6 text-white md:p-10">
              <p className="mb-3 font-serif text-lg leading-snug italic lg:mb-5 lg:text-xl">
                Hình ảnh villa nghỉ dưỡng tại Resort Ngọc Sương
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
