const AboutSGM = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[50%]">
        <h1 className="text-center text-3xl font-bold">
          Bản Giao Hưởng Giữa Sông Nước & Ánh Sáng
        </h1>
        <p className="mt-4 text-center leading-8">
          Rời xa những ồn ào của phố thị,{" "}
          <span className="font-bold">Saigon Marina</span> mở ra một khoảng
          không gian tĩnh lặng và xa hoa, nơi ánh hoàng hôn buông xuống trên mặt
          nước hòa cùng ánh đèn lung linh của du thuyền. Đây là nơi lý tưởng để
          thưởng thức một ly vang thượng hạng, lắng nghe hơi thở của dòng sông
          và tận hưởng những khoảnh khắc thư thái tuyệt đối. Một trải nghiệm
          đẳng cấp dành riêng cho những ai tìm kiếm sự riêng tư và tinh tế.
        </p>
      </div>
      <div>
        <img src="/images/Container.svg" className="w-155" alt="" />
      </div>
    </div>
  );
};

export default AboutSGM;
<div className="flex w-[50%] justify-end">
  <div className="relative w-[400px]">
    {/* Ảnh nền */}
    <img
      src="/images/sgm2.svg"
      alt="Background"
      className="h-[600px] w-full object-cover"
    />

    {/* Ảnh đè */}
    <div className="absolute top-1/2 -left-[120px] z-10 -translate-y-1/2">
      <img
        src="/images/sgm1.svg"
        alt="Overlay"
        className="h-[350px] w-[350px] object-cover shadow-2xl"
      />
    </div>
  </div>
</div>;
