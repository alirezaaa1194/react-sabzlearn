import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import type { subMenuType } from "~/types/menus.type";
import SidebarSubSubMenu from "./SidebarSubSubMenu";

type SidebarSubMenuPropsType = {
  subMenu: subMenuType;
  mainMenu: string;
  setMainMenu: (id: string) => void;
};

function SidebarSubMenu({ subMenu, mainMenu, setMainMenu }: SidebarSubMenuPropsType) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (mainMenu !== subMenu._id) {
      setIsOpen(false);
    }
  }, [mainMenu]);

  return (
    <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5">
      <div className="flex items-center justify-between h-8 w-full">
        <NavLink to={`/course-cat/${subMenu.href.split("/category-info/").join("")}`} className={mainMenu === subMenu._id && isOpen ? "text-primary" : ""}>
          {subMenu.title}
        </NavLink>
        <button
          onClick={() => {
            setMainMenu(subMenu._id);
            setIsOpen((prev) => !prev);
          }}
        >
          {subMenu.submenus.length ? <ChevronLeftMiniIcon className={`size-5 ${mainMenu === subMenu._id && isOpen ? "-rotate-90 text-primary" : ""}`} /> : null}
        </button>
      </div>

      {/* submenu */}

      {mainMenu === subMenu._id && isOpen && subMenu.submenus.length ? (
        <ul className="bg-[#f5f5f5] dark:bg-dark rounded-lg w-full p-3 text-xs font-DanaRegular flex flex-col gap-3">
          {subMenu.submenus.map((subSubMenu) => (
            <SidebarSubSubMenu subSubMenu={subSubMenu} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default SidebarSubMenu;
