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
            src="/images/fnb/kingclam/grill3.webp"
            className="h-full w-full object-cover"
            alt="Moment"
            loading="lazy"
          />
        </div>

        {/* CỘT 2: 2 ảnh nhỏ */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="flex-1">
            <img
              src="/images/fnb/kingclam/kingClam_moment1.webp"
              className="h-full w-full object-cover"
              alt="Moment"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <img
              src="/images/fnb/kingclam/kingClam_moment2.webp"
              className="h-full w-full object-cover"
              alt="Moment"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-12 items-stretch gap-4">
        {/* 3 cột */}

        <div className="col-span-4">
          <img
            src="/images/fnb/kingclam/kingClam_moment3.webp"
            className="h-full w-full object-cover"
            alt="Moment"
            loading="lazy"
          />
        </div>
        <div className="col-span-4">
          <img
            src="/images/fnb/kingclam/kingClam_moment4.webp"
            className="h-full w-full object-cover"
            alt="Moment"
            loading="lazy"
          />
        </div>
        <div className="col-span-4">
          <img
            src="/images/fnb/kingclam/kingClam_moment5.webp"
            className="h-full w-full object-cover"
            alt="Moment"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Moment;
