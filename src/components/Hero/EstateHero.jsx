import { motion } from "framer-motion";
const EstateHeroContent = ({ subtitle, title }) => {
  if (title !== "Exotel") {
    return (
      <div className="relative z-10 flex h-[500px] items-end md:h-[725px]">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
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
        </motion.div>
      </div>
    );
  }

  return <EstateHero title={title} subtitle={subtitle} />;
};
const EstateHero = ({ title, subtitle }) => {
  return (
    <div className="relative bottom-[30px] z-10 flex h-[500px] items-end md:h-[725px]">
      <motion.div
        className="mb-10 w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="container mx-auto flex flex-col gap-6 md:gap-8">
          {/* Khối Title: Căn trái */}
          <div className="mb-[-80px] flex flex-col items-start">
            <h1 className="font-rische text-[45px] leading-none md:text-[70px]">
              {title}
            </h1>
            <p className="font-rische text-[45px] leading-none md:text-[70px]">
              Yen Bay
            </p>
            <p className="font-montserrat mt-3 text-[14px] leading-relaxed font-normal uppercase md:text-[18px]">
              CAM RANH | VIETNAM
            </p>
          </div>

          {/* Khối Subtitle: Căn phải trên Desktop, Căn trái trên Mobile */}
          <div className="flex justify-start md:justify-end">
            <p
              className="font-montserrat max-w-full text-left text-sm leading-relaxed md:max-w-[750px] md:text-right md:text-base"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EstateHeroContent;
