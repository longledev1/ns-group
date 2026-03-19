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
        <img
          loading="lazy"
          src="/images/fnb/sgm/Container.svg"
          className="w-155"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSGM;
