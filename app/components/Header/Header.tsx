import { ChevronDownMiniIcon, LogoIcon } from "public/svg/svgs";
import React from "react";
import { Link, NavLink } from "react-router";
import DesktopNavbar from "./Desktop/Navbar/DesktopNavbar";

function Header() {
  return (
    <header className="bg-white dark:bg-darker">
      {/* desktop header */}
      <div className="hidden lg:flex items-center justify-between px-12 h-25 relative">
        <div className="flex items-center gap-x-8">
          <Link to="/">
            <LogoIcon className="w-[74px] h-[56px]" />
          </Link>
          <DesktopNavbar />
        </div>
        {/* header left hand */}
        <div className="flex items-center gap-x-5"></div>
      </div>
      {/* mobile header */}
      <div className="flex lg:hidden">mobile heade</div>
    </header>
  );
}

export default Header;
