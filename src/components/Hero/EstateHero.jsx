const EstateHeroContent = ({ subtitle, title }) => {
  return (
    <div className="relative z-10 flex h-[725px] items-end">
      <div className="container pb-14 text-right">
        <h1 className="font-rische mb-[40px] text-[70px]">{title}</h1>
        <div className="flex justify-end">
          <p className="max-w-[800px]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateHeroContent;
