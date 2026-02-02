const AboutSGM = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[50%]">
        <h1 className="text-center text-3xl font-bold">Lorrem ipsums</h1>
        <p className="mt-4 text-center leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
          consectetur hic neque accusantium. Rem delectus blanditiis Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Ex nam consectetur hic
          neque accusantium. Rem delectus blanditiis Rem delectus blanditiis
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nam
          consectetur hic neque accusantium. Rem delectus blanditiis
        </p>
      </div>
      <div className="flex w-[50%] justify-end">
        <div className="relative w-[400px]">
          {/* Ảnh nền */}
          <img
            src="/images/sgm2.svg"
            alt="Background"
            className="h-[600px] w-full object-cover"
          />

          {/* Ảnh đè */}
          <div className="absolute top-1/2 -left-[120px] z-10 -translate-y-1/2">
            <img
              src="/images/sgm1.svg"
              alt="Overlay"
              className="h-[350px] w-[350px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSGM;
