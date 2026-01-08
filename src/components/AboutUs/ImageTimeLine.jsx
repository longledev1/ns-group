import React from "react";

export const ImageTimeLine = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="h-[500px] w-[550px]">
        <img
          src="/images/restaurant1.avif"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>{" "}
      <div className="h-[500px] w-[550px]">
        <img
          src="/images/restaurant2.avif"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>{" "}
      <div className="h-[500px] w-[550px]">
        <img
          src="/images/resort.avif"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>{" "}
      <div className="h-[500px] w-[550px]">
        <img
          src="/images/restaurant4.avif"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};
