import { Heading } from "../../Heading";

export const BrandSection = () => {
  const BRAND = [
    {
      image: "/images/yenbayBeach_logo.png",
      alt: "Yen Bay Beach Logo",
      desc: "Thương hiệu nhà hàng hải sản Yến Bay",
    },
    {
      image: "/images/sgm_logo.avif",
      alt: "SGM Logo",
      desc: "Thương hiệu nhà hàng hải sản Marina",
    },
    {
      image: "/images/traimatLogo.avif",
      alt: "Trai Mat Logo",
      desc: "Thương hiệu nhà hàng Trại Mát",
    },
    {
      image: "/images/yenLogo.avif",
      alt: "Yen Logo",
      desc: "Thương hiệu nhà hàng Yến",
    },
    {
      image: "/images/kingclamLogo.avif",
      alt: "King Clam Logo",
      desc: "Thương hiệu nhà hàng King Clam",
    },
    {
      image: "/images/chocuLogo.avif",
      alt: "Cho Cu Logo",
      desc: "Thương hiệu Chợ Cũ - Ẩm thực truyền thống Việt Nam",
    },
    {
      image: "/images/exoCafeLogo.avif",
      alt: "Exo Cafe Logo",
      desc: "Thương hiệu Cà Phê & Bánh Ngọt phong cách hiện đại",
    },
    {
      image: "/images/exoraLogo.avif",
      alt: "Exora Logo",
      desc: "Chuyên về set-up hệ thống F&B và resort. ",
    },
    {
      image: "/images/exoLogo.avif",
      alt: "Exo Logo",
      desc: "Chuyên về giám sát hoạt động của hệ thống F&B ",
    },
    {
      image: "/images/NomLogo.avif",
      alt: "Nom Logo",
      desc: "Cung cấp giải pháp về chén dĩa cho nhà hàng. Các sản phẩm gốm thủ công. ",
    },
  ];
  return (
    <div>
      <Heading
        title="HỆ THỐNG THƯƠNG HIỆU & ĐỐI TÁC"
        subtitle="Nơi NSGroup cùng các thương hiệu F&B tạo dựng giá trị chung."
        description="Mỗi thương hiệu là một dấu ấn riêng, góp phần hoàn thiện hệ sinh thái F&B cùng Ngọc Sương Group và các đối tác."
      />
      <div className="mt-15 flex flex-wrap items-center gap-x-20 gap-y-30">
        {/* hover:shadow-[0_0_30px_rgba(180,130,80,0.2)] */}
        {BRAND.map((brand, index) => (
          <div key={index} className="h-50 w-50 rounded-full">
            <img
              src={brand.image}
              alt={brand.alt}
              className="h-full w-full cursor-pointer rounded-full bg-white opacity-80 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:shadow-[0_0_30px_rgba(180,130,80,0.2)]"
            />
            <p className="mt-6 text-center text-sm text-[#c2c2c2]">
              {brand.desc}
            </p>
          </div>
        ))}
        {/* <div className="h-50 w-50 rounded-full">
          <img
            src="/images/yenbayBeach_logo.png"
            alt="Yen Bay Beach Logo"
            className="h-full w-full cursor-pointer rounded-full opacity-80 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:shadow-[0_0_30px_rgba(180,130,80,0.2)]"
          />
          <p className="mt-6 text-center text-sm text-[#c2c2c2]">
            Thương hiệu nhà hàng hải sản Yến Bay
          </p>
        </div> */}
      </div>
    </div>
  );
};
