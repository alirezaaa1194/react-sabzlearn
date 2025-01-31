import React, { use, useContext, useState } from "react";
import { Link } from "react-router";
import ThemeBtns from "./ThemeBtns/ThemeBtns";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import type { userType } from "~/types/user.type";
import { AuthContext } from "~/contexts/AuthContext";
import { ChevronDownMiniIcon, ChevronLeftMiniIcon } from "public/svg/svgs";

type MobileSidebarPropsType = {
  isOpenSideBar: boolean;
};

function MobileSidebar({ isOpenSideBar }: MobileSidebarPropsType) {
  const userInfoContext = use(AuthContext) as userType;

  return (
    <aside className={`h-screen w-64 overflow-y-auto flex flex-col lg:hidden fixed z-50 ${isOpenSideBar ? "right-0" : "-right-full"} top-0 transition-all bg-white dark:bg-darker`}>
      {/* sidebar header */}

      {userInfoContext?._id ? (
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-3.5 px-4 bg-gray-100 dark:bg-dark">
            <div className="flex items-center gap-x-2.5">
              <Link to="/my-account">
                <img src="public/images/user-profile.png" className="w-14 h-14 rounded-full" alt="" />
              </Link>
              <div className="flex flex-col gap-y-1">
                <span className="text-sm font-DanaMedium truncate">{userInfoContext.name}</span>
                <span className="text-xs opacity-80 font-DanaRegular">جمعه 12 بهمن 1403</span>
              </div>
            </div>
            <Link to="/my-account">
              <ChevronLeftMiniIcon className="size-5" />
            </Link>
          </div>
          <div className="px-6 pt-5">
            <div className="flex flex-col border-b border-b-neutral-200 dark:border-b-white/10">
              <p className="text-sm font-DanaMedium text-green-500 h-6 mb-2.5">دسترسی سریع</p>
              <ul className="flex flex-col gap-x-1 font-DanaRegular text-sm">
                <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5 h-8">
                  <Link to="/my-account/courses" className="w-full flex items-center justify-between">
                    <span>دوره های من</span>
                    <ChevronLeftMiniIcon className="size-5" />
                  </Link>
                </li>
                <li className="flex flex-col items-center justify-between gap-y-2.5 mb-2.5 h-8">
                  <Link to="/my-account/tickets" className="w-full flex items-center justify-between">
                    <span>تیکت های من</span>
                    <ChevronLeftMiniIcon className="size-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex">
          <Link to="/login" className="bg-sky-500/10 text-sky-500 font-DanaDemiBold text-center py-4 w-full">
            ورود یا ثبت نام
          </Link>
        </div>
      )}
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
