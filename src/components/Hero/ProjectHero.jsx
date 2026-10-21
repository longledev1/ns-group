import { motion } from "framer-motion";

const ProjectHeroContent = ({ imageLogo, subtitle, video }) => {
  return (
    <div className="relative z-10 flex h-[730px] items-end justify-start">
      <div className="container">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center gap-x-10">
            <img
              src={imageLogo}
              className={`${video ? "mb-[-60px] ml-[-50px] w-100" : "w-70"}`}
              alt=""
            />
          </div>

          <p className="text-small font-montserrat mt-4 leading-8 text-white">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHeroContent;
