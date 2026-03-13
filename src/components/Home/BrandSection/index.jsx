import { Heading } from "../../Heading";

export const BrandSection = () => {
  const BRAND = [
    {
      image: "/images/homepage/brand/yenbayBeach_logo.png",
      alt: "Yen Bay Beach Logo",
      desc: "Thương hiệu nhà hàng Yến Bay",
    },
    {
      image: "/images/homepage/brand/sgm_logo.avif",
      alt: "SGM Logo",
      desc: "Thương hiệu nhà hàng Marina",
    },
    {
      image: "/images/homepage/brand/traimatLogo.avif",
      alt: "Trai Mat Logo",
      desc: "Thương hiệu nhà hàng Trại Mát",
    },
    {
      image: "/images/homepage/brand/yenLogo.avif",
      alt: "Yen Logo",
      desc: "Thương hiệu nhà hàng Yến",
    },
    {
      image: "/images/homepage/brand/kingclamLogo.avif",
      alt: "King Clam Logo",
      desc: "Thương hiệu nhà hàng King Clam",
    },
    {
      image: "/images/homepage/brand/chocuLogo.avif",
      alt: "Cho Cu Logo",
      desc: "Thương hiệu Chợ Cũ - Ẩm thực truyền thống Việt Nam",
    },
    {
      image: "/images/homepage/brand/exoCafeLogo.avif",
      alt: "Exo Cafe Logo",
      desc: "Thương hiệu Cà Phê & Bánh Ngọt phong cách hiện đại",
    },
    {
      image: "/images/homepage/brand/exoraLogo.avif",
      alt: "Exora Logo",
      desc: "Chuyên về set-up hệ thống F&B và resort. ",
    },
    {
      image: "/images/homepage/brand/exoLogo.avif",
      alt: "Exo Logo",
      desc: "Chuyên về giám sát hoạt động của hệ thống F&B ",
    },
    {
      image: "/images/homepage/brand/NomLogo.avif",
      alt: "Nom Logo",
      desc: "Cung cấp giải pháp về chén dĩa cho nhà hàng. Các sản phẩm gốm thủ công. ",
    },
  ];

  return (
    <div>
      <Heading
        title="THƯƠNG HIỆU & ĐỐI TÁC"
        subtitle="Nơi NSGroup cùng các thương hiệu F&B tạo dựng giá trị chung."
        description="Mỗi thương hiệu là một dấu ấn riêng, góp phần hoàn thiện hệ sinh thái F&B cùng Ngọc Sương Group và các đối tác."
      />

      <div className="mt-8 flex flex-wrap items-start justify-center gap-6 md:mt-12 md:gap-10 lg:mt-15 lg:gap-x-20 lg:gap-y-16">
        {BRAND.map((brand, index) => (
          <div
            key={index}
            className="flex w-[130px] flex-col items-center md:w-48 lg:w-56"
          >
            <div className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-50 lg:w-50">
              <img
                loading="lazy"
                src={brand.image}
                alt={brand.alt}
                className="h-full w-full cursor-pointer rounded-full bg-white object-cover opacity-80 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:shadow-[0_0_30px_rgba(180,130,80,0.2)]"
              />
            </div>

            <p className="font-montserrat text-primary mt-3 text-center text-[12px] leading-relaxed md:mt-4 md:text-sm lg:mt-6">
              {brand.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
