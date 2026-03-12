function Roadmap({ projects }) {
  return (
    <div className="space-y-6 lg:space-y-8">
      {projects.map((item, index) => (
        <div key={index} className="relative">
          {/* Content */}
          <div className="bg-primary rounded-lg p-4 lg:p-5">
            <span className="text-sm font-semibold text-[#CFB26E]">
              {item.date}
            </span>

            <h3 className="mt-1 text-base font-semibold lg:text-lg">
              {item.name}
            </h3>

            <p className="font-montserrat mt-2 text-sm leading-relaxed font-light text-white/70">
              {item.desc}
            </p>

            {/* Images */}
            {/* Responsive chiều cao ảnh để không bị quá dài trên mobile */}
            <div className="mt-4 grid grid-cols-2 gap-2 lg:gap-3">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="h-28 w-full rounded-lg object-cover md:h-40 lg:h-50"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Roadmap;
