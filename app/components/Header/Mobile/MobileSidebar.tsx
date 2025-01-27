import React, { useState } from "react";
import { Link } from "react-router";
import ThemeBtns from "./ThemeBtns/ThemeBtns";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

type MobileSidebarPropsType = {
  isOpenSideBar: boolean;
};

function MobileSidebar({ isOpenSideBar }: MobileSidebarPropsType) {
  return (
    <aside className={`h-screen w-64 overflow-y-auto flex flex-col lg:hidden fixed z-50 ${isOpenSideBar ? "right-0" : "-right-full"} top-0 transition-all bg-white dark:bg-darker`}>
      {/* sidebar header */}
      <div className="w-full flex">
        <Link to="/login" className="bg-sky-500/10 text-sky-500 font-DanaDemiBold text-center py-4 w-full">
          ورود یا ثبت نام
        </Link>
      </div>
      {/* sidebar body */}
      <div className="flex flex-col px-6">
        <div className="pt-5 pb-3 flex flex-col gap-y-2.5">
          <p className="text-sm font-DanaMedium text-green-500">دسته بندی ها</p>
          <SidebarMenu />
        </div>
        <ThemeBtns />
      </div>
    </aside>
  );
}

export default MobileSidebar;
