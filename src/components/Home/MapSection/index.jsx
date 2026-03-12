import { VietNamMap } from "./VietNamMap";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../../Heading";

import provinceData from "../../../data/provinceData";
import Roadmap from "./Roadmap";
import { useState } from "react";

export const MapSection = () => {
  const [activeProvince, setActiveProvince] = useState("mien-trung");
  const data = provinceData[activeProvince];

  return (
    <>
      <Heading
        title="DẤU ẤN NGỌC SƯƠNG"
        subtitle="Từ những vùng đất ven biển đến những điểm đến đặc biệt"
        description="Mỗi vùng đất là một câu chuyện, mỗi dấu mốc là một chặng đường phát triển.
Khám phá hành trình Ngọc Sương qua các tỉnh thành, nơi thiên nhiên và trải nghiệm nghỉ dưỡng giao thoa."
      />

      <div className="mt-10 grid grid-cols-1 gap-y-12 text-white lg:mt-25 lg:grid-cols-2 lg:gap-x-12">
        {/* MAP */}
        {/* Bỏ sticky trên mobile (dùng relative), chỉ bật sticky trên desktop (lg:sticky) */}
        <div className="relative top-0 flex h-fit flex-col items-center justify-center lg:sticky lg:top-24 lg:items-start">
          <VietNamMap
            activeProvince={activeProvince}
            setActiveProvince={setActiveProvince}
          />

          <p className="font-montserrat text-primary mt-6 block max-w-md p-1 text-center text-[14px] italic md:hidden lg:text-white/60">
            Click chọn một vùng miền trên bản đồ để khám phá hành trình phát
            triển của NS Group tại đó
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
              className=""
            >
              {/* Responsive size chữ title */}
              <h1 className="text-primary mb-2 text-2xl font-bold lg:text-3xl">
                {data.name}
              </h1>

              <p className="text-primary font-montserrat mb-8 text-[15px] font-light">
                {data.description}
              </p>

              {data.project && <Roadmap projects={data.project} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
