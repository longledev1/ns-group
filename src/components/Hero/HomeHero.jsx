const HomeHeroContent = ({ title, subtitle }) => {
  return (
    <div className="relative z-10 flex h-[725px] items-end">
      <div className="container pb-14 text-right">
        <p className="font-art text-[80px] italic">{subtitle}</p>
        <h1 className="mt-[-35px] text-[70px] font-bold">{title}</h1>
      </div>
    </div>
  );
};
export default HomeHeroContent;
