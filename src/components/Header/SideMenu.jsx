import { useState } from "react";
import { MENU_ITEMS } from "../../data/menuItemsData";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SideMenu = ({ open, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <div
      className={`bg-secondary text-primary fixed top-0 right-0 z-50 h-full w-[320px] shadow-xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} `}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <p className="text-lg font-semibold">Menu</p>
        <button onClick={onClose} className="text-xl hover:opacity-60">
          ✕
        </button>
      </div>

      <ul className="flex flex-col gap-4 p-6 text-[16px]">
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            {/* Menu item */}
            <div
              className="hover:text-primary flex cursor-pointer items-center justify-between"
              onClick={() => item.children && toggleSubmenu(item.id)}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="font-semibold hover:opacity-60"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold hover:opacity-60">
                  {item.label}
                </span>
              )}

              {item.children && (
                <span
                  className={`transition-transform duration-300 ${
                    openSubmenu === item.id ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>
              )}
            </div>

            {/* Submenu – animation mượt */}
            <AnimatePresence initial={false}>
              {item.children && openSubmenu === item.id && (
                <motion.ul
                  initial={{ height: 0, opacity: 0, y: -4 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="mt-2 ml-4 flex flex-col gap-2 overflow-hidden text-[15px] text-gray-600"
                >
                  {item.children.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={sub.path}
                        onClick={onClose}
                        className="hover:text-primary cursor-pointer"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
