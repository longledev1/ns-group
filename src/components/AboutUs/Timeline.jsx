export const Timeline = ({ data, title }) => {
  return (
    <div className="">
      <div className="mb-10 ml-[-40px] text-3xl font-bold italic">{title}</div>
      <div className="border-CTA/40 relative ml-10 border-l">
        {data.map((item, index) => (
          <div key={index} className="relative mb-8 pl-10">
            {/* Dot */}
            <span className="bg-CTA absolute top-1 -left-[7px] h-3 w-3 rounded-full" />

            {/* Year */}
            <div className="text-CTA absolute top-0 -left-20 text-sm font-semibold">
              {item.year}
            </div>

            {/* Title */}
            {item.description && (
              <p className="text-primary mb-2 leading-[28px]">
                {item.description}
              </p>
            )}

            {/* Sections */}
            {item.sections?.map((section, i) => (
              <div key={i} className="mt-2">
                <p className="text-primary mb-1 leading-[28px]">
                  {section.heading}:
                </p>

                <ul className="text-primary ml-5 list-disc space-y-1">
                  {section.items.map((text, idx) => (
                    <li key={idx} className="leading-[26px]">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
