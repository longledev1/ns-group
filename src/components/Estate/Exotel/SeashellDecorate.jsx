export const SeashellDecorate = () => {
  return (
    <div className="relative mt-10">
      <div className="absolute top-0 right-0 w-48 md:w-72 lg:w-[22rem]">
        <img
          src="/images/seashells.png" // Nhớ thay đường dẫn ảnh thực tế của bạn
          alt="Decor sao biển"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
};
