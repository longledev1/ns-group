export const Heading = ({ title, subtitle, description }) => {
  return (
    <div className="mb-6 flex justify-between">
      <div>
        <div className="flex items-center gap-x-2">
          <div className="bg-primary h-2 w-30 md:block md:w-45"></div>
          <p className="font-heading text-center text-[16px] font-semibold md:text-left md:text-2xl">
            {title}
          </p>
        </div>
        <p className="mt-2 text-[14px] md:text-[18px]">{subtitle || ""}</p>
      </div>
      <div className="hidden w-110 text-[14px] text-[#a09494] md:block">
        {description || ""}
      </div>
    </div>
  );
};
