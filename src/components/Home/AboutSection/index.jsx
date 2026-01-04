import { Heading } from "../../Heading";

export const AboutSection = () => {
  return (
    <div>
      <Heading
        title="GIỮ HỒN VIỆT TRONG TỪNG KHOẢNH KHẮC"
        subtitle="Nơi những giá trị Việt được cảm nhận bằng cảm xúc và ký ức."
        description="Giữ hồn Việt không chỉ là bảo tồn truyền thống, mà là thổi vào đó hơi thở của thời đại mới. "
      />

      <div className="mt-6 flex items-center justify-between">
        <div className="flex w-[650px] flex-col gap-y-8 text-center leading-[35px] text-[#c2c2c2]">
          <p className="text-primary text-center text-3xl">"CHO ĐỜI ĐẸP HƠN"</p>
          <p>
            Khởi nghiệp tại Pháp và trở về Việt Nam từ những năm 1990, ông Trần
            Anh Dũng – nhà sáng lập NSG – đã đặt nền móng cho hành trình phát
            triển bền vững trong lĩnh vực F&B, với chuỗi Nhà hàng Hải sản Ngọc
            Sương trải dài khắp Việt Nam.
          </p>
          <p>
            Mang triết lý “Cho đời đẹp hơn”, ông dành trọn đam mê để sáng tạo và
            gìn giữ hồn Việt trong từng trải nghiệm ẩm thực.
          </p>
          <p>
            Với ông, mỗi món ăn là một câu chuyện, mỗi không gian là một cảm
            xúc.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary w-[150px] p-2 text-[14px] font-semibold text-white shadow-[0_14px_6px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_8px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_8px_4px_rgba(0,0,0,0.3)]">
              XEM THÊM
            </button>
          </div>
        </div>
        <div className="relative h-[600px] w-[580px] overflow-hidden">
          <img
            src="/images/chairman.png"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="bg-tertiary/90 absolute right-0 bottom-0 left-0 p-6 text-white">
            <p className="mb-2 italic">
              "Mỗi món ăn là một câu chuyện, mỗi không gian là một cảm xúc."
            </p>
            <p className="text-right">- Ông Trần Anh Dũng, Nhà sáng lập NSG-</p>
          </div>
        </div>
      </div>

      {/* COLUM 2 */}
      <div className="mt-10 flex items-center justify-between">
        <div className="relative h-[600px] w-[580px] overflow-hidden">
          <img
            src="/images/cook.png"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="bg-tertiary/90 absolute right-0 bottom-0 left-0 p-6 text-white">
            <p className="italic">
              Ông Trần Anh Dũng cùng đầu bếp đang nấu ăn tại Resort Ngọc Sương
            </p>
          </div>
        </div>
        <div className="flex w-[650px] flex-col gap-y-8 text-center leading-[35px] text-[#c2c2c2]">
          <div className="text-primary flex flex-col items-center gap-y-4 text-3xl">
            <p>TÔN VINH GIÁ TRỊ CỦA</p>
            <p>ẨM THỰC VIỆT NAM</p>
          </div>
          <p>
            Xây dựng thương hiệu mang các giá trị văn hóa Việt Nam từ nguyên vật
            liệu, không gian, chất liệu, món ăn, phong cách...
          </p>
          <p>
            Kết hợp với ẩm thực thế giới tại thị trường nội địa để nhắm vào
            khách hàng địa phương. Nhưng sẽ thuần Việt khi đưa ra thị trường
            Quốc Tế nhằm khẳng định giá trị ẩm thực Việt Nam
          </p>
          <div className="flex justify-center">
            <button className="bg-primary w-[150px] p-2 text-[14px] font-semibold text-white shadow-[0_14px_6px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_8px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_8px_4px_rgba(0,0,0,0.3)]">
              XEM THÊM
            </button>
          </div>
        </div>
      </div>

      {/* COLUMN 3 */}
      <div className="mt-10 flex items-center justify-between">
        <div className="flex w-[650px] flex-col gap-y-8 text-center leading-[35px] text-[#c2c2c2]">
          <div className="text-primary flex flex-col items-center gap-y-4 text-3xl">
            <p>ĐỜI SỐNG HIỆN ĐẠI GIỮA</p>
            <p>THIÊN NHIÊN HOANG DÃ</p>
          </div>
          <p>
            Với dự án Khu Du Lịch Sinh Thái Ngọc Sương đã thay đổi bộ mặt của
            ngành du lịch tại Cam Ranh từ những năm 1990.
          </p>
          <p>
            Từ một bán đảo hoang sơ, chưa có lối đi vào và điều kiện cơ sở hạ
            tầng còn sơ khai, Vịnh Cam Ranh ngày nay đã phát triển, trở thành
            một trong những điểm đến để du lịch và nghỉ dưỡng lý tưởng cho nhiều
            du khách trong nước và cả nước ngoài.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary w-[150px] p-2 text-[14px] font-semibold text-white shadow-[0_14px_6px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_8px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_8px_4px_rgba(0,0,0,0.3)]">
              XEM THÊM
            </button>
          </div>
        </div>
        <div className="relative h-[600px] w-[580px] overflow-hidden">
          <img
            src="/images/map.png"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="bg-tertiary/90 absolute right-0 bottom-0 left-0 p-6 text-white">
            <p className="italic">
              Resort Ngọc Sương khi nhìn từ trên cao với thiết kế sang trọng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
