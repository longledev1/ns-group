const Business = () => {
  return (
    <div className="flex flex-col gap-y-10 text-center md:gap-y-[50px]">
      <div className="font-heading flex flex-col gap-y-2 text-3xl font-bold text-[#1E421E] md:text-5xl">
        <p>CHÍNH SÁCH</p>
        <p>BÁN HÀNG</p>
      </div>

      <div className="font-montserrat max-w-8xl mx-auto flex px-4 text-sm leading-relaxed md:px-0 md:text-base">
        <p>
          Chúng tôi mang đến lộ trình sở hữu bất động sản minh bạch với hồ sơ
          pháp lý hoàn thiện và sổ hồng riêng cho từng căn biệt thự. Chính sách
          thanh toán được chia thành nhiều giai đoạn linh hoạt, kết hợp cùng các
          gói hỗ trợ tài chính từ ngân hàng liên kết, giúp quý khách hàng tối ưu
          dòng tiền và an tâm tuyệt đối khi đầu tư.
        </p>
      </div>

      <div className="mb-5 flex flex-col-reverse justify-center gap-10 px-4 md:flex-row md:px-0">
        <img
          loading="lazy"
          src="/images/homepage/culture/culture2.webp"
          className="w-full max-w-[650px] border-2 border-[#1E421E] object-cover p-2"
          alt=""
        />

        {/* Danh sách: Thêm text-left trên mobile để dễ đọc */}
        <div className="font-montserrat flex flex-col gap-y-4 text-left">
          <div className="mb-2 flex flex-col gap-y-4">
            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Thanh toán 15% đến khi nhận nhà
                <span className="font-bold text-[#1E421E]">
                  {" "}
                  (khoảng 1,9 tỷ)
                </span>
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Ngân hàng hỗ trợ cho vay
                <span className="font-bold text-[#1E421E]"> 70%</span>
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                HTLS
                <span className="font-bold text-[#1E421E]">
                  {" "}
                  (0% đến 2 năm)
                </span>
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Ưu đãi chiết khấu lên đến
                <span className="font-bold text-[#1E421E]"> 17%</span>
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Ưu đãi đến{" "}
                <span className="font-bold text-[#1E421E]">1,6 tỷ/căn</span>{" "}
                (kèm điều kiện bàn giao)
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Tặng nội thất Minotti Trio armchair
                <span className="font-bold text-[#1E421E]"> đến 200 triệu</span>
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Tặng kỳ nghỉ dưỡng 5 sao đến
                <span className="font-bold text-[#1E421E]"> gần 100 triệu</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="mb-2 flex items-center gap-x-2">
              <p className="font-bold text-[#1E421E] italic underline">
                Tiến độ thanh toán chuẩn - Ưu đãi chiết khấu 5%:
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Thanh toán
                <span className="font-bold text-[#1E421E]"> 10% </span> ký HĐMB.
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Thanh toán
                <span className="font-bold text-[#1E421E]"> 3,75% / tháng</span>
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Thanh toán
                <span className="font-bold text-[#1E421E]"> 25% </span>
                khi nhận bàn giao.
              </p>
            </div>

            <div className="flex items-start gap-x-2 md:items-center">
              <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#1E421E] md:mt-0"></div>
              <p>
                Thanh toán
                <span className="font-bold text-[#1E421E]"> 5% </span>
                bàn giao GCNQSH.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
