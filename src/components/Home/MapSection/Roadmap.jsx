function Roadmap({ projects }) {
  return (
    <div className="space-y-8">
      {projects.map((item, index) => (
        <div key={index} className="relative">
          {/* Content */}
          <div className="bg-primary p-5">
            <span className="text-sm font-semibold text-[#CFB26E]">
              {item.date}
            </span>

            <h3 className="t mt-1 text-lg font-semibold">{item.name}</h3>

            <p className="mt-2 text-sm text-white/70">{item.desc}</p>

            {/* Images */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="h-50 w-full rounded-lg object-cover"
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
