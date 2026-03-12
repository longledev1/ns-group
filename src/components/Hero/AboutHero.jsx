import { motion } from "framer-motion";

const AboutHeroContent = ({ title, subtitle }) => {
  return (
    <div className="relative z-10 flex h-[700px] items-end justify-start">
      <div className="container">
        <motion.div
          className="mb-[180px] max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h1 className="font-heading text-CTA text-4xl font-semibold tracking-wide">
            {title}
          </h1>

          <p className="text-small mt-4 leading-[32px] text-white/80">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeroContent;
