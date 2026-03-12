const EstateHeroContent = ({ subtitle, title }) => {
  if (title !== "Exotel") {
    return (
      <div className="relative z-10 flex h-[500px] items-end md:h-[725px]">
        <div className="container px-4 pb-10 text-right md:px-0 md:pb-14">
          <h1 className="font-rische mb-6 text-[35px] leading-tight sm:text-[45px] md:mb-[40px] md:text-[70px]">
            {title}
          </h1>

          <div className="mb-8 flex justify-end md:mb-[50px]">
            <p className="font-montserrat max-w-full text-sm leading-relaxed md:max-w-[750px] md:text-base">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <EstateHero title={title} subtitle={subtitle} />;
};
const EstateHero = ({ title, subtitle }) => {
  return (
    <div className="relative bottom-[30px] z-10 flex h-[500px] items-center items-end md:h-[725px]">
      <div className="container text-right">
        {/* Title: Giảm từ 70px xuống 40px trên mobile để không bị tràn dòng */}
        <div className="mb-[-80px] flex flex-col items-start">
          <h1 className="font-rische leading-tightsm:text-[45px] mb-[-50px] text-[35px] md:text-[70px]">
            {title}
          </h1>
          <p className="font-rische leading-tightsm:text-[45px] text-[35px] md:text-[70px]">
            Yen Bay
          </p>{" "}
          <p className="font-montserrat leading-relaxed font-normal text-[14sapx] uppercase md:text-[18px]">
            CAM RANH | VIETNAM
          </p>
        </div>

        {/* Subtitle: Căn chỉnh lại độ rộng và font size */}
        <div className="mb-8 flex justify-end md:mb-[50px]">
          <p
            className="font-montserrat max-w-full text-sm leading-relaxed md:max-w-[750px] md:text-base"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </div>
  );
};

export default EstateHeroContent;
