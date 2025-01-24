import { ChevronDownMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link, NavLink } from "react-router";
import SubMenu from "./SubMenu";

function DesktopNavbar() {
  return (
    <nav>
      <ul className="flex items-center gap-x-6 font-DanaRegular">
        <li className="relative group/sub-menu">
          <span className="cursor-pointer group-hover/sub-menu:text-sky-500">دوره های آموزشی</span>
          <div className="absolute pt-[38px] right-0 invisible opacity-0 group-hover/sub-menu:visible group-hover/sub-menu:opacity-100">
            <ul className="bg-white dark:bg-darker w-44 text-sm transition-all relative">
              <SubMenu />
            </ul>
          </div>
        </li>
        <li>
          <Link to="/courses">همه دوره ها</Link>
        </li>
        <li>
          <Link to="/blogs">مقالات</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNavbar;