const AboutKingClam = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-y-[40px]">
        <div className="text-4xl font-bold text-gray-800">
          <h2>ĂN CHUẨN VỊ </h2> <br />
          <h2 className="mt-[-20px]">UỐNG CHUẨN GU</h2>
        </div>
        <p className="w-[800px] border-l-2 border-orange-400 pl-4 leading-loose">
          Donec nunc nunc vitae vestibulum. Pulvinar turpis sed diam semper nisi
          ligula. Et imperdiet varius parturient at. Pretium facilisis integer
          faucibus euismod. Donec nunc nunc vitae vestibulum. Pulvinar turpis
          sed diam semper nisi ligula. Et imperdiet varius parturient at.
          Pretium facilisis integer faucibus euismod.Donec nunc nunc vitae
          vestibulum. Pulvinar turpis sed diam semper nisi ligula. Et imperdiet
          varius parturient at. Pretium facilisis integer faucibus euismod.
        </p>
        <img
          loading="lazy"
          src="/images/fnb/kingclam/kingClam_signature.svg"
          className="w-40"
          alt=""
        />
      </div>
      <div>
        <img
          loading="lazy"
          src="/images/fnb/kingclam/kingClam_about.webp"
          className="w-[500px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutKingClam;
