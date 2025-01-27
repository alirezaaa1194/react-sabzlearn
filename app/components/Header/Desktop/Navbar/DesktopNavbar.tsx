import { data, NavLink } from "react-router";
import SubMenu from "./SubMenu";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMenus } from "~/utils/utils";
import type { subMenuType } from "~/types/menus.type";

function DesktopNavbar() {
  const [isHoverMenu, setIsHoverMenu] = useState<boolean>(false);

  const handleShowOverlay = () => {
    setIsHoverMenu(true);
  };
  const handleHideOverlay = () => {
    setIsHoverMenu(false);
  };

  const { data: menus } = useQuery({ queryKey: ["menus"], queryFn: getMenus });

  return (
    <nav>
      {isHoverMenu && <div className="w-screen h-screen fixed top-0 right-0 bg-black/40 z-30"></div>}
      <ul className="hidden lg:flex items-center gap-x-6 font-DanaRegular relative">
        <li className="relative group/sub-menu z-40" onMouseEnter={handleShowOverlay} onMouseLeave={handleHideOverlay}>
          <span className="cursor-pointer group-hover/sub-menu:text-sky-500">دوره های آموزشی</span>
          <div className="absolute pt-[38px] right-0 invisible opacity-0 group-hover/sub-menu:visible group-hover/sub-menu:opacity-100">
            <ul className="bg-white dark:bg-darker w-44 text-sm transition-all relative">
              {menus?.data.map((subMenu: subMenuType) => {
                return <SubMenu subMenu={subMenu} />;
              })}
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="/courses" className="active:text-primary">
            همه دوره ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="active:text-primary">
            مقالات
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavbar;
