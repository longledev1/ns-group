import { motion } from "framer-motion";

const ProjectHeroContent = ({ title, subtitle }) => {
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
          {/* <h1 className="font-heading text-CTA text-4xl font-semibold tracking-wide">
              {title}
            </h1> */}
          <div className="flex items-center gap-x-10">
            <img src="/images/SGM_Logo.png" className="w-70" alt="" />
            <p className="mt-15 -ml-5 font-thin text-white/90">
              YEAR OF ISSUED 2021
            </p>
          </div>

          <p className="text-small mt-4 leading-8 text-white">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectHeroContent;
