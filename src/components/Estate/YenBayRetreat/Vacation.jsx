import React from "react";
import VacationSlide from "./VacationSlide";
import VacationMemory from "./VacationMemory";
const Vacation = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-y-10 md:gap-y-[50px]">
          {/* Tiêu đề: Giảm size chữ trên mobile */}
          <p className="font-heading text-left text-3xl font-bold text-[#1E421E] md:text-5xl">
            NGHỈ DƯỠNG NỘI KHU
          </p>
          <VacationSlide />
          <VacationMemory />
        </div>
      </div>
      <img
        src="/images/memory6.svg"
        className="h-full w-full object-cover"
        alt=""
      />
    </div>
  );
};

export default Vacation;
