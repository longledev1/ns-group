const ContentSGM = ({ data }) => {
  return (
    <div>
      <img src="/images/sgm_text.svg" alt="" className="mx-auto" />
      <p className="mx-auto w-200 text-center leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        dolorem, error iste aperiam eum veritatis libero laboriosam dolorum sunt
        repellendus labore accusamus maiores recusandae molestias natus
        cupiditate sint possimus quisquam?
      </p>
      <div className="mt-10 grid grid-cols-4 gap-x-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex w-full flex-col justify-end text-white">
                <div className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-4 flex w-full items-center gap-4 bg-black/60 px-4 py-3">
                    <h3 className="text-sm leading-snug font-semibold tracking-wide uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 p-2 text-sm text-white">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentSGM;
