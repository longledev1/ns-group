import { Heading } from "../../Heading";

export const CultureSection = () => {
  return (
    <div>
      <Heading
        title="GIÁ TRỊ CHÚNG TÔI TẠO RA"
        subtitle="Sự giao thoa giữa hương vị và không gian"
        description="Chúng tôi kiến tạo hai không gian song hành — nơi ẩm thực tinh tế và
        nơi an cư đẳng cấp cùng hòa quyện."
      />

      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2">
        {/* CARD 1 */}
        <div className="group relative cursor-pointer overflow-hidden">
          <img
            src="/images/restaurant.jpg"
            alt="Culture 1"
            className="h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-[1.02]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 lg:group-hover:opacity-10" />

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-xl font-bold text-white transition-all duration-300 lg:text-[30px] lg:group-hover:scale-95 lg:group-hover:opacity-0">
            <p>NƠI ẨM THỰC</p>
            <p className="mt-2 lg:mt-4">GẶP GỠ NGHỆ THUẬT</p>
          </div>

          {/* Bottom content */}
          <div className="bg-tertiary absolute right-0 bottom-0 left-0 translate-y-0 p-4 text-white opacity-100 transition-all duration-300 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <h3 className="font-heading mb-2 text-base lg:text-lg">
              Nơi ẩm thực gặp gỡ nghệ thuật
            </h3>
            <p className="mb-2 text-sm lg:text-[14px]">
              Từng chi tiết được chăm chút, từng hương vị được nâng niu — nơi ẩm
              thực gặp gỡ nghệ thuật, tạo nên trải nghiệm khó quên.
            </p>
            <div className="flex justify-end">
              <button className="text-CTA cursor-pointer italic hover:underline">
                KHÁM PHÁ KHÔNG GIAN FNB →
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="group relative cursor-pointer overflow-hidden">
          <img
            src="/images/villa2.png"
            alt="Culture 2"
            className="h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 lg:group-hover:opacity-10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-xl font-bold text-white transition-all duration-300 lg:text-[30px] lg:group-hover:scale-95 lg:group-hover:opacity-0">
            <p>NƠI KHÔNG GIAN</p>
            <p className="mt-2 lg:mt-4">GẶP GỠ CẢM XÚC</p>
          </div>

          <div className="bg-tertiary absolute right-0 bottom-0 left-0 translate-y-0 p-4 text-white opacity-100 transition-all duration-300 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <h3 className="font-heading mb-2 text-base lg:text-lg">
              Nơi không gian gặp gỡ cảm xúc
            </h3>
            <p className="mb-2 text-sm lg:text-[14px]">
              Không gian không chỉ để nhìn ngắm, mà để cảm nhận — nơi không gian
              gặp gỡ cảm xúc, nơi mọi khoảnh khắc đều mang một sắc thái riêng.
            </p>
            <div className="flex justify-end">
              <button className="text-CTA cursor-pointer italic hover:underline">
                KHÁM PHÁ KHÔNG GIAN NGHỈ DƯỠNG →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
