export const Timeline = ({ data, title }) => {
  return (
    <div className="w-full">
      {/* Responsive Font chữ Title */}
      <div className="font-heading mb-8 text-2xl font-bold md:mb-10 md:text-3xl">
        {title}
      </div>

      {/* Thu hẹp margin trái trên Mobile (ml-14) để Cột Năm không bị tràn ra ngoài màn hình */}
      <div className="border-CTA/40 relative ml-14 border-l pl-6 md:ml-20 md:pl-10">
        {data.map((item, index) => (
          <div key={index} className="relative mb-8 md:mb-10">
            {/* Dot - Căn giữa chuẩn xác theo text */}
            <span className="bg-CTA absolute top-[6px] -left-[27px] h-3 w-3 rounded-full md:-left-[47px]" />

            {/* Year - Điều chỉnh khoảng cách -left để vừa vặn trên Mobile */}
            <div className="text-CTA font-montserrat absolute top-0 -left-[70px] text-sm font-normal md:-left-[120px] md:text-base">
              {item.year}
            </div>

            {/* Title / Description */}
            {item.description && (
              <p className="text-primary font-montserrat mb-2 text-[13px] leading-relaxed font-light md:text-[15px]">
                {item.description}
              </p>
            )}

            {/* Sections */}
            {item.sections?.map((section, i) => (
              <div key={i} className="mt-3">
                <p className="text-primary font-montserrat mb-1.5 text-[13px] font-light md:text-[15px]">
                  {section.heading}:
                </p>

                <ul className="text-primary font-montserrat ml-4 list-disc space-y-1 text-[13px] font-light md:ml-5 md:text-[15px]">
                  {section.items.map((text, idx) => (
                    <li key={idx} className="leading-[24px] md:leading-[26px]">
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
