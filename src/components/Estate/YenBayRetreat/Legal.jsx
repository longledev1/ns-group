import LegalSlide from "./LegalSlide";
const Legal = () => {
  return (
    <div className="flex flex-col gap-y-10 text-center md:gap-y-[50px]">
      {/* Tiêu đề: Giảm size chữ trên mobile */}
      <p className="font-cormorant text-3xl font-bold text-[#1E421E] md:text-5xl">
        PHÁP LÝ
      </p>

      {/* Nội dung: text-sm cho mobile, text-base cho desktop */}
      <div className="font-montserrat mx-auto flex text-sm leading-relaxed md:text-base">
        <p>
          <span className="font-bold">Exotel Yen Bay</span> sở hữu hệ thống pháp
          lý hoàn chỉnh và minh bạch. Mọi hạng mục triển khai đều dựa trên các
          văn bản phê duyệt chính thức, đảm bảo sự tuân thủ tuyệt đối các quy
          chuẩn quy hoạch. Chúng tôi tin rằng, một nền tảng pháp lý rõ ràng
          chính là cam kết cao nhất cho sự phát triển bền vững và uy tín của
          thương hiệu.
        </p>
      </div>

      {/* Slide hình ảnh pháp lý */}
      <LegalSlide />
    </div>
  );
};

export default Legal;
