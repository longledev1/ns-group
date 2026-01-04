import { Header } from "../Header";

export const Hero = () => {
  return (
    <section className="relative h-[725px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/images/resort.jpg" // đổi đúng path ảnh của bạn
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* (Optional) overlay để chữ/menu nổi hơn */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Header overlay */}
      <div className="absolute top-0 left-0 z-20 w-full">
        <Header />
      </div>

      {/* (Optional) Hero content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="container pb-14 text-white">
          <div className="flex justify-end text-right">
            <div className="mb-25">
              <p className="font-art text-3xl text-[80px] italic">Welcome to</p>
              <h1 className="mt-[-35px] text-[70px] font-bold tracking-wide">
                NS GROUP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
