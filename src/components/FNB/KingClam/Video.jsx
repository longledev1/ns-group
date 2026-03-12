import React from "react";

const Video = () => {
  return (
    <div className="relative mt-[200px] overflow-hidden shadow-sm md:col-span-7">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      >
        <source src="/videos/grill.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Lớp phủ layer nếu muốn viết chữ lên video */}
      <div className="pointer-events-none absolute inset-0 bg-black/20"></div>

      <div className="absolute top-8 right-8 text-xl font-bold tracking-tighter text-white opacity-90 md:text-2xl">
        LIVE COOKING SHOW
      </div>
    </div>
  );
};

export default Video;
