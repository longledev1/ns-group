import { Heading } from "../../Heading";

export const CultureSection = () => {
  return (
    <div>
      <Heading
        title="GIÁ TRỊ CHÚNG TÔI TẠO RA"
        subtitle="Sự giao thoa giữa hương vị và không gian"
        description="  Chúng tôi kiến tạo hai không gian song hành — nơi ẩm thực tinh tế và
          nơi an cư đẳng cấp cùng hòa quyện."
      />
      <div className="grid grid-cols-2">
        <div className="group relative cursor-pointer overflow-hidden">
          <img
            src="/images/restaurant.jpg"
            alt="Culture 1"
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Overlay: mặc định tối 60%, hover còn 10% */}
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-10" />

          {/* Text giữa: hover thì ẩn */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[30px] font-bold text-white transition-all duration-300 group-hover:scale-95 group-hover:opacity-0">
            <p>NƠI ẨM THỰC</p>
            <p className="mt-4">GẶP GỠ NGHỆ THUẬT</p>
          </div>

          {/* Panel dưới: mặc định ẩn (opacity 0), hover thì hiện + transition */}
          <div className="bg-tertiary absolute right-0 bottom-0 left-0 translate-y-4 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="font-heading mb-2 text-lg">
              Nơi ẩm thực gặp gỡ nghệ thuật
            </h3>
            <p className="mb-2 text-[14px]">
              Từng chi tiết được chăm chút, từng hương vị được nâng niu — nơi ẩm
              thực gặp gỡ nghệ thuật, tạo nên trải nghiệm khó quên.
            </p>
            <div className="flex justify-end">
              <button className="text-primary cursor-pointer italic hover:underline">
                KHÁM PHÁ KHÔNG GIAN FNB -&gt;
              </button>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden">
          <img
            src="/images/villa2.png"
            alt="Culture 1"
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[30px] font-bold text-white transition-all duration-300 group-hover:scale-95 group-hover:opacity-0">
            <p>NƠI KHÔNG GIAN</p>
            <p className="mt-4">GẶP GỠ CẢM XÚC</p>
          </div>

          <div className="bg-tertiary absolute right-0 bottom-0 left-0 translate-y-4 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="font-heading mb-2 text-lg">
              Nơi không gian gặp gỡ cảm xúc
            </h3>
            <p className="mb-2 text-[14px]">
              Không gian không chỉ để nhìn ngắm, mà để cảm nhận — nơi không gian
              gặp gỡ cảm xúc, nơi mọi khoảnh khắc đều mang một sắc thái riêng.
            </p>
            <div className="flex justify-end">
              <button className="text-primary cursor-pointer italic hover:underline">
                KHÁM PHÁ KHÔNG GIAN NGHỈ DƯỠNG -&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
