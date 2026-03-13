import React from "react";

const NatureSection = () => {
  return (
    <div className="text-primary">
      <div className="mb-8 flex flex-col text-6xl">
        <h2 className="font-heading">AN YÊN</h2>
        <h2 className="font-heading mt-[1px] font-bold">GIỮA THIÊN NHIÊN</h2>
      </div>
      <div className="mb-8 grid grid-cols-12 items-center gap-[28px]">
        <div className="col-span-7">
          <img
            src="/images/exotel_nature1.png"
            className="h-[507px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="col-span-5 mt-[-150px] text-right">
          <p className="font-montserrat mb-4 leading-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
            consectetur hic neque accusantium. Rem delectus blanditiis provident
            ipsam cumque, unde alias! Voluptatem laboriosam aliquam tempore
            rerum laudantium vel laborum?Lorem ipsum dolor sit, amet
          </p>{" "}
          <p className="font-montserrat leading-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
            consectetur hic neque accusantium. Rem delectus blanditiis provident
            ipsam cumque, unde alias! Voluptatem laboriosam aliquam tempore
            rerum laudantium vel laborum?Lorem ipsum dolor sit, amet
          </p>
        </div>
      </div>{" "}
      <div className="mb-8 grid grid-cols-12 items-center gap-[28px]">
        <div className="col-span-6">
          <img
            src="/images/exotel_nature2.png"
            className="h-[680px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="col-span-6 flex flex-col gap-y-8">
          <img
            src="/images/exotel_nature3.png"
            className="relative top-[-180px] h-[447px] w-full object-cover"
            alt=""
          />
          <img
            src="/images/exotel_nature4.png"
            className="mt-[-180px] h-[381px] w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );  
};

export default NatureSection;
