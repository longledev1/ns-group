import React from "react";

const Moment = () => {
  return (
    <div>
      <h2 className="mb-8 text-center text-4xl tracking-[0.2em] text-[#1a1a1a] uppercase md:text-3xl">
        KHOẢNH KHẮC KINGCLAM
      </h2>
      <div className="mb-4 grid grid-cols-12 items-stretch gap-4">
        {/* CỘT 1: Ảnh lớn */}
        <div className="col-span-6">
          <img
            src="/images/kingClam_moment1.svg"
            className="h-full w-full object-cover"
            alt="Moment"
          />
        </div>

        {/* CỘT 2: 2 ảnh nhỏ */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="flex-1">
            <img
              src="/images/kingClam_moment2.svg"
              className="h-full w-full object-cover"
              alt="Moment"
            />
          </div>
          <div className="flex-1">
            <img
              src="/images/kingClam_moment3.svg"
              className="h-full w-full object-cover"
              alt="Moment"
            />
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-12 items-stretch gap-4">
        {/* 3 cột */}

        <div className="col-span-4">
          <img
            src="/images/kingClam_moment4.svg"
            className="h-full w-full object-cover"
            alt="Moment"
          />
        </div>
        <div className="col-span-4">
          <img
            src="/images/kingClam_moment5.svg"
            className="h-full w-full object-cover"
            alt="Moment"
          />
        </div>
        <div className="col-span-4">
          <img
            src="/images/kingClam_moment6.svg"
            className="h-full w-full object-cover"
            alt="Moment"
          />
        </div>
      </div>
    </div>
  );
};

export default Moment;
