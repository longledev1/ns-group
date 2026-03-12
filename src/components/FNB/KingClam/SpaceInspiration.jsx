import React from "react";

const SpaceInspiration = () => {
  return (
    <div className="">
      <div className="mx-auto">
        {/* HÀNG TRÊN (PHẦN 1) */}
        <div className="mb-10 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          {/* Tiêu đề */}
          <div className="md:col-span-3">
            <div className="text-4xl">
              <h2>CẢM HỨNG</h2> <br />
              <h2 className="mt-[-20px]">KHÔNG GIAN</h2>
            </div>
          </div>

          {/* Ảnh dọc 1 */}
          <div className="h-[400px] md:col-span-2">
            <img
              src="/images/kingClam_space1.svg"
              alt="Inspiration 1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Ảnh dọc 2 */}
          <div className="h-[400px] md:col-span-2">
            <img
              src="/images/kingClam_space2.svg"
              alt="Inspiration 2"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Ảnh ngang rộng bên phải */}
          <div className="h-[400px] md:col-span-5">
            <img
              src="/images/kingClam_space3.svg"
              alt="Inspiration 3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* HÀNG DƯỚI (PHẦN 2) */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          {/* Ảnh lớn bên trái */}
          <div className="h-[500px] md:col-span-7">
            <img
              src="/images/kingClam_space4.svg"
              alt="Main Inspiration"
              className="h-[400px] w-full object-cover shadow-sm"
            />
          </div>

          {/* Đoạn văn mô tả bên phải */}
          <div className="mt-[-140px] px-4 md:col-span-5">
            <p className="text-sm leading-relaxed font-light text-gray-700 md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
              consectetur hic neque accusantium. Rem delectus blanditiis Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
              consectetur hic neque accusantium. <br />
              <br />
              Rem delectus blanditiis Rem delectus blanditiis Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Ex nam consectetur hic
              neque accusantium. Rem delectus blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceInspiration;
