import { VietNamMap } from "./VietNamMap";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../../Heading";

import provinceData from "../../../data/provinceData";
import Roadmap from "./Roadmap";
import { useState } from "react";

export const MapSection = () => {
  const [activeProvince, setActiveProvince] = useState("VN-34");
  const data = provinceData[activeProvince];

  return (
    <>
      <Heading
        title="DẤU ẤN NGỌC SƯƠNG"
        subtitle="Từ những vùng đất ven biển đến những điểm đến đặc biệt"
        description="Mỗi vùng đất là một câu chuyện, mỗi dấu mốc là một chặng đường phát triển.
Khám phá hành trình Ngọc Sương qua các tỉnh thành, nơi thiên nhiên và trải nghiệm nghỉ dưỡng giao thoa."
      />

      <div className="mt-[-100px] grid grid-cols-2 gap-x-12 text-white">
        {/* MAP */}
        <div className="sticky top-24 flex h-fit flex-col items-center">
          <VietNamMap
            activeProvince={activeProvince}
            setActiveProvince={setActiveProvince}
          />

          <p className="mt-6 max-w-md text-center text-[14px] text-white/60 italic">
            Chọn các tỉnh thành phát sáng trên bản đồ để khám phá hành trình và
            những dấu ấn của Ngọc Sương.
          </p>
        </div>

        {/* INFO PANEL */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProvince}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="pr-6"
            >
              <h1 className="text-primary mb-2 text-3xl font-bold">
                {data.name}
              </h1>

              <p className="text-primary mb-8">{data.description}</p>

              {data.project && <Roadmap projects={data.project} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
