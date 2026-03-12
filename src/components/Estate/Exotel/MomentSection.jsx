const MomentsSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#fdfbf7] px-6 py-20 md:px-16">
      {/* Element sao biển góc phải - Đặt absolute */}
      <div className="pointer-events-none absolute top-0 right-0 w-48 md:w-72 lg:w-[22rem]">
        <img
          src="/images/seashells.png" // Nhớ thay đường dẫn ảnh thực tế của bạn
          alt="Decor sao biển"
          className="h-auto w-full object-contain opacity-90"
        />
      </div>

      {/* Phần nội dung chính */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
        {/* Tiêu đề */}
        <h2 className="font-serif text-3xl leading-tight tracking-wider text-[#413931] uppercase md:text-5xl lg:text-[3.5rem]">
          <span className="mb-2 block">Trọn Vẹn</span>
          <span className="block">Từng Khoảnh Khắc</span>
        </h2>

        {/* Đoạn text mô tả */}
        <p className="mx-auto max-w-3xl font-sans text-sm leading-relaxed text-[#655d54] md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
          consectetur hic neque accusantium. Rem delectus blanditiis provident
          ipsam cumque, unde alias! Voluptatem laboriosam aliquam tempore rerum
          laudantium vel laborum? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ex nam consectetur hic neque accusantium. Rem
          delectus blanditiis provident ipsam cumque, unde alias!
        </p>
      </div>
    </section>
  );
};

export default MomentsSection;
