export const Header = () => {
  return (
    <div className="text-[16px] font-medium">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <p className="cursor-pointer hover:underline">EN</p>
            <p>|</p>
            <p className="cursor-pointer hover:underline">VI</p>
          </div>
          <img src="/images/logo.png" alt="" className="w-30" />
          <div>
            <button className="h-12.5 w-25 cursor-pointer rounded-md border border-white bg-transparent p-2 text-white hover:opacity-75">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
