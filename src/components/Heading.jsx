export const Heading = ({ title, subtitle, description }) => {
  return (
    <div className="mb-6 flex justify-between">
      <div>
        <div className="flex items-center gap-x-2">
          <div className="bg-primary h-2 w-45"></div>
          <p className="font-heading text-2xl font-semibold">{title}</p>
        </div>
        <p className="mt-2 text-[18px]">{subtitle}</p>
      </div>
      <div className="w-110 text-[14px] text-[#a09494]">{description}</div>
    </div>
  );
};
