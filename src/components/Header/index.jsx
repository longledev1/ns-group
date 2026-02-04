import { useState } from "react";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";
export const Header = ({ variant = "default" }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const headerStyle =
    variant === "hero"
      ? "bg-transparent absolute top-0 left-0 w-full z-50"
      : "bg-primary/70 backdrop-blur-md  top-0 z-50";

  return (
    <>
      <header className={`${headerStyle} text-white`}>
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-x-2">
              <p className="cursor-pointer hover:underline">EN</p>
              <p>|</p>
              <p className="cursor-pointer hover:underline">VI</p>
            </div>

            <Link to="/">
              <img
                src="/images/NS_Logo2.svg"
                alt="Logo"
                className="mt-[-30px] w-40"
              />
            </Link>

            <div>
              <button
                onClick={() => setOpenMenu(true)}
                className="h-12.5 w-25 rounded-md border border-white bg-transparent p-2 hover:opacity-75"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      <SideMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};
