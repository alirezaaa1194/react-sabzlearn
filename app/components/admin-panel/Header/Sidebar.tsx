import React from "react";
import { AcademicCapIcon, BellIcon, ChatBubbleBottomCenterTextIcon, CloseIcon, HomeIcon, LogoIcon, ShoppingBagIcon, VideoCameraIcon } from "public/svg/svgs";
import { Link, NavLink } from "react-router";

export default function Sidebar({ isOpenSidebar, setIsOpenSidebar }: { isOpenSidebar: boolean; setIsOpenSidebar: (param: boolean) => void }) {
  return (
    <aside className={`w-67 md:!w-1/5 fixed md:!sticky z-50 !top-0 !h-screen overflow-y-auto flex flex-col bg-darker font-lalezar transition-all -right-full md:!right-0 md:opacity-100 md:visible ${isOpenSidebar ? "right-0 opacity-100 visible" : "-right-full opacity-0 invisible"}`}>
      <div className="flex items-center justify-between md:justify-start md:gap-x-2 p-[15px] border-b border-b-white/10 h-[90px]">
        <Link to="/">
          <LogoIcon />
        </Link>
        <h2 className="text-white text-lg lg:text-2xl">پنل مدیریت</h2>
        <button className="text-white flex justify-end lg:hidden" onClick={() => setIsOpenSidebar(false)}>
          <CloseIcon className="size-6" />
        </button>
      </div>
      <ul>
        <li>
          <NavLink to="/admin-panel" end className="sidebar__link text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <HomeIcon className="size-7" />
            <span className="text-xl">صفحه اصلی</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/courses" className="sidebar__link text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <AcademicCapIcon className="size-7" />
            <span className="text-xl">دوره ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/lessons" className="sidebar__link text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <VideoCameraIcon className="size-7" />
            <span className="text-xl">جلسات</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/comments" className="sidebar__link text-white flex items-center gap-2 p-[15px] hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent active:border-l-4 active:border-l-secondary active:bg-gradient-to-r active:from-white/10 active:to-transparent">
            <ChatBubbleBottomCenterTextIcon className="size-7" />
            <span className="text-xl">کامنت ها</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
